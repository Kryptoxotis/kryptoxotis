import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("publish_date", { ascending: false })

    if (error) throw error

    const blogPosts = (data || []).map((row) => ({
      id: row.id,
      title: row.title,
      excerpt: row.excerpt,
      content: row.content,
      category: row.category,
      tags: row.tags || [],
      publishDate: row.publish_date || new Date().toISOString().split("T")[0],
      estimatedReadTime: row.estimated_read_time || "5 min read",
      wordCount: row.word_count || 0,
      seoScore: row.seo_score || 0,
      status: row.status,
      featured: row.featured || false,
      author: row.author || "Kryptoxotis",
      url: row.url || null,
    }))

    return NextResponse.json(blogPosts)
  } catch (error) {
    return NextResponse.json(
      {
        error: "Unable to fetch blog posts at this time. Please try again later.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
