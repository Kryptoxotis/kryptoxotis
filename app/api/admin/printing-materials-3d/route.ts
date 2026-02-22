import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { requireAdmin } from "@/lib/admin-helpers";

export async function GET(request: Request) {
  const denied = await requireAdmin(request);
  if (denied) return denied;
  const { data, error } = await supabaseAdmin.from("printing_materials_3d").select("*").order("sort_order");
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const denied = await requireAdmin(request);
  if (denied) return denied;
  const body = await request.json();
  const { data, error } = await supabaseAdmin.from("printing_materials_3d").insert(body).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
