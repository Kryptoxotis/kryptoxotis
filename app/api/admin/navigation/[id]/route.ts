import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"
import { requireAdmin } from "@/lib/admin-helpers"

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const denied = await requireAdmin(request)
  if (denied) return denied
  const { id } = await params
  const ALLOWED = ["label", "href", "sort_order", "visible"]
  const body = await request.json()
  const safe = Object.fromEntries(Object.entries(body).filter(([k]) => ALLOWED.includes(k)))
  const { data, error } = await supabaseAdmin.from("navigation").update(safe).eq("id", id).select().single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const denied = await requireAdmin(request)
  if (denied) return denied
  const { id } = await params
  const { error } = await supabaseAdmin.from("navigation").delete().eq("id", id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ success: true })
}
