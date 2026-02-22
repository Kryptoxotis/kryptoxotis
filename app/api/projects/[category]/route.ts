import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export const runtime = "nodejs"

const tableMap: Record<string, string> = {
  database: "projects_database",
  web: "projects_web",
  "3d": "projects_3d",
}

export async function GET(request: Request, { params }: { params: Promise<{ category: string }> }) {
  const { category } = await params

  if (!category || !tableMap[category]) {
    return NextResponse.json([])
  }

  try {
    const table = tableMap[category]
    const { data, error } = await supabase
      .from(table)
      .select("*")
      .order("sort_order")

    if (error) throw error

    const projects = (data || []).map((row) => {
      const project: Record<string, unknown> = {
        id: row.id,
        title: row.title,
        description: row.description,
        client: row.client || "",
        image: row.image || "/placeholder.svg?height=400&width=600",
        featured: row.featured || false,
        order: row.sort_order,
      }

      if (category === "database" || category === "web") {
        project.technologies = row.technologies || []
        if (category === "web") project.url = row.url || null
      } else if (category === "3d") {
        project.materials = row.materials || null
        project.application = row.application || null
        project.stlFile = row.stl_file || null
        project.printTime = row.print_time || null
        project.status = row.status || null
      }

      return project
    })

    return NextResponse.json(projects)
  } catch (error) {
    console.error(`API: Error fetching ${category} projects:`, error)
    return NextResponse.json([], { status: 500 })
  }
}
