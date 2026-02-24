import { NextRequest, NextResponse } from "next/server"
import { supabaseAdmin } from "@/lib/supabase"
import { requireAdmin } from "@/lib/admin-helpers"

const MAX_SIZE = 5 * 1024 * 1024 // 5MB
const ALLOWED_TYPES: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
}

export async function POST(req: NextRequest) {
  const denied = await requireAdmin(req)
  if (denied) return denied

  const formData = await req.formData()
  const file = formData.get("file") as File | null

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 })
  }

  if (file.size > MAX_SIZE) {
    return NextResponse.json({ error: "File too large (max 5MB)" }, { status: 400 })
  }

  const ext = ALLOWED_TYPES[file.type]
  if (!ext) {
    return NextResponse.json({ error: "Invalid file type. Allowed: JPEG, PNG, WebP, GIF" }, { status: 400 })
  }

  const fileName = `${crypto.randomUUID()}.${ext}`

  const { error } = await supabaseAdmin.storage
    .from("images")
    .upload(fileName, file, { contentType: file.type, upsert: false })

  if (error) {
    console.error("Upload error:", error)
    return NextResponse.json({ error: "Upload failed. Please try again." }, { status: 500 })
  }

  const { data: urlData } = supabaseAdmin.storage
    .from("images")
    .getPublicUrl(fileName)

  return NextResponse.json({ url: urlData.publicUrl })
}
