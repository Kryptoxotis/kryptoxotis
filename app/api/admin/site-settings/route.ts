import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"
import { requireAdmin } from "@/lib/admin-helpers"

export async function GET(request: Request) {
  const denied = await requireAdmin(request)
  if (denied) return denied
  const { data, error } = await supabaseAdmin.from("site_settings").select("*").order("setting_key")
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

export async function POST(request: Request) {
  const denied = await requireAdmin(request)
  if (denied) return denied
  const ALLOWED = ["setting_key", "setting_value"]
  const body = await request.json()
  const safe = Object.fromEntries(Object.entries(body).filter(([k]) => ALLOWED.includes(k)))
  const { data, error } = await supabaseAdmin.from("site_settings").insert(safe).select().single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}
