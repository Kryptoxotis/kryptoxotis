import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"
import { requireAdmin } from "@/lib/admin-helpers"

export async function GET(request: Request) {
  const denied = await requireAdmin(request)
  if (denied) return denied
  const { data, error } = await supabaseAdmin.from("site_sections").select("*").order("page").order("sort_order")
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

export async function POST(request: Request) {
  const denied = await requireAdmin(request)
  if (denied) return denied
  const ALLOWED = ['page','section_key','heading','subheading','body','button_text','button_link','image_url','sort_order']
  const body = await request.json()
  const safe = Object.fromEntries(Object.entries(body).filter(([k]) => ALLOWED.includes(k)))
  const { data, error } = await supabaseAdmin.from("site_sections").insert(safe).select().single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}
