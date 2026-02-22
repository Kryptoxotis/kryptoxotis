import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"
import { NO_CACHE_HEADERS } from "@/lib/constants"

export const runtime = "nodejs"

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("printing_materials_3d")
      .select("*")
      .order("sort_order")

    if (error) throw error

    const materials = (data || []).map((row) => ({
      id: row.id,
      name: row.name,
      materialType: row.material_type,
      bestUses: row.best_uses || [],
      properties: row.properties || [],
      price: row.price,
    }))

    return new NextResponse(JSON.stringify(materials), {
      headers: { "Content-Type": "application/json", ...NO_CACHE_HEADERS },
    })
  } catch (error) {
    console.error("API: Error fetching materials:", error)
    return NextResponse.json([], {
      status: 500,
      headers: { "Content-Type": "application/json", ...NO_CACHE_HEADERS },
    })
  }
}
