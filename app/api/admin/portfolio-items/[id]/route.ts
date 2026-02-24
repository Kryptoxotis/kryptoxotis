import { NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"
import { requireAdmin } from "@/lib/admin-helpers"

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const denied = await requireAdmin(request)
  if (denied) return denied
  const { id } = await params
  const ALLOWED = ['title','slug','description','category','image_url','images','content','tags','client_name','external_url','featured','visible','sort_order']
  const body = await request.json()
  const safe = Object.fromEntries(Object.entries(body).filter(([k]) => ALLOWED.includes(k)))
  const { data, error } = await supabaseAdmin.from("portfolio_items").update(safe).eq("id", id).select().single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const denied = await requireAdmin(request)
  if (denied) return denied
  const { id } = await params
  const { error } = await supabaseAdmin.from("portfolio_items").delete().eq("id", id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ success: true })
}
