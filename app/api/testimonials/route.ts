import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import { NO_CACHE_HEADERS } from "@/lib/constants"

export const runtime = "nodejs"

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("testimonials")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) throw error

    const testimonials = (data || []).map((row) => ({
      id: row.id,
      quote: row.quote,
      author: row.author,
      role: row.role,
      avatar: row.avatar_url,
    }))

    return new NextResponse(JSON.stringify(testimonials), {
      headers: { "Content-Type": "application/json", ...NO_CACHE_HEADERS },
    })
  } catch (error) {
    console.error("API: Error fetching testimonials:", error)
    return new NextResponse(JSON.stringify([]), {
      headers: { "Content-Type": "application/json", ...NO_CACHE_HEADERS },
      status: 500,
    })
  }
}
