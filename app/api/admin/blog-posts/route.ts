import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { requireAdmin } from "@/lib/admin-helpers";

export async function GET(request: Request) {
  const denied = await requireAdmin(request);
  if (denied) return denied;
  const { data, error } = await supabaseAdmin.from("blog_posts").select("*").order("created_at", { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const denied = await requireAdmin(request);
  if (denied) return denied;
  const ALLOWED = ["title", "slug", "content", "excerpt", "author", "published", "published_at"];
  const body = await request.json();
  const safe = Object.fromEntries(Object.entries(body).filter(([k]) => ALLOWED.includes(k)));
  const { data, error } = await supabaseAdmin.from("blog_posts").insert(safe).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
