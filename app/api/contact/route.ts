import { NextResponse } from "next/server"
import { z } from "zod"
import { checkRateLimit, getClientIP, getRateLimitHeaders } from "@/lib/rate-limit"
import { VALIDATION_LIMITS } from "@/lib/constants"
import { supabase } from "@/lib/supabase"

export const runtime = "nodejs"

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(VALIDATION_LIMITS.NAME_MAX_LENGTH, "Name too long"),
  email: z.string().email("Invalid email address").max(VALIDATION_LIMITS.EMAIL_MAX_LENGTH, "Email too long"),
  subject: z.string().min(1, "Subject is required").max(VALIDATION_LIMITS.SUBJECT_MAX_LENGTH, "Subject too long"),
  message: z.string().min(1, "Message is required").max(VALIDATION_LIMITS.MESSAGE_MAX_LENGTH, "Message too long"),
})

export async function POST(request: Request) {
  // CSRF protection via origin check
  const origin = request.headers.get("origin")
  const host = request.headers.get("host")
  if (origin && host && !origin.includes(host)) {
    return NextResponse.json({
      success: false,
      message: "Invalid request origin",
    }, { status: 403 })
  }

  // Rate limiting check
  const clientIP = getClientIP(request.headers)
  const rateLimitResult = checkRateLimit(clientIP, "contact")

  if (!rateLimitResult.success) {
    return NextResponse.json({
      success: false,
      message: "Too many requests. Please try again later.",
    }, {
      status: 429,
      headers: getRateLimitHeaders(rateLimitResult)
    })
  }

  // Parse and validate the request body
  let data: z.infer<typeof contactSchema>
  try {
    const body = await request.json()
    data = contactSchema.parse(body)
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        success: false,
        message: "Validation failed",
        errors: error.errors.map(e => ({ field: e.path.join("."), message: e.message })),
      }, { status: 400 })
    }
    return NextResponse.json({
      success: false,
      message: "Invalid request body",
    }, { status: 400 })
  }

  try {
    const { error } = await supabase
      .from("contact_submissions")
      .insert({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      })

    if (error) throw error

    return NextResponse.json({
      success: true,
      message: "Thank you for your message. We will get back to you soon!",
    })
  } catch (error) {
    console.error("API: Error submitting contact form:", error)
    return NextResponse.json({
      success: false,
      message: "There was an error submitting your message. Please try again later.",
    }, { status: 500 })
  }
}
