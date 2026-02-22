import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import { NO_CACHE_HEADERS } from "@/lib/constants"

export const runtime = "nodejs"

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("faq")
      .select("*")
      .order("sort_order")

    if (error) throw error

    const faqs = (data || []).map((row) => ({
      id: row.id,
      question: row.question,
      answer: row.answer,
      category: row.category,
      order: row.sort_order,
    }))

    return new NextResponse(JSON.stringify(faqs), {
      headers: { "Content-Type": "application/json", ...NO_CACHE_HEADERS },
    })
  } catch (error) {
    console.error("API: Error fetching FAQs:", error)
    return new NextResponse(JSON.stringify([]), {
      headers: { "Content-Type": "application/json", ...NO_CACHE_HEADERS },
      status: 500,
    })
  }
}
