import { supabaseAdmin } from "@/lib/supabase"

export async function getSection(page: string, sectionKey: string) {
  const { data } = await supabaseAdmin
    .from("site_sections")
    .select("*")
    .eq("page", page)
    .eq("section_key", sectionKey)
    .single()
  return data
}

export async function getSections(page: string) {
  const { data } = await supabaseAdmin
    .from("site_sections")
    .select("*")
    .eq("page", page)
    .order("sort_order")
  return data ?? []
}

export async function getServices() {
  const { data } = await supabaseAdmin
    .from("services")
    .select("*")
    .eq("visible", true)
    .order("sort_order")
  return data ?? []
}

export async function getServiceBySlug(slug: string) {
  const { data } = await supabaseAdmin
    .from("services")
    .select("*")
    .eq("slug", slug)
    .single()
  return data
}

export async function getValues() {
  const { data } = await supabaseAdmin
    .from("values")
    .select("*")
    .order("sort_order")
  return data ?? []
}

export async function getNavItems() {
  const { data } = await supabaseAdmin
    .from("navigation")
    .select("*")
    .eq("visible", true)
    .order("sort_order")
  return data ?? []
}

export async function getSetting(key: string) {
  const { data } = await supabaseAdmin
    .from("site_settings")
    .select("setting_value")
    .eq("setting_key", key)
    .single()
  return data?.setting_value ?? null
}

export async function getAllSettings() {
  const { data } = await supabaseAdmin
    .from("site_settings")
    .select("*")
    .order("setting_key")
  return data ?? []
}

export async function getPortfolioItems(category?: string) {
  let query = supabaseAdmin
    .from("portfolio_items")
    .select("*")
    .eq("visible", true)
    .order("sort_order")
  if (category) {
    query = query.eq("category", category)
  }
  const { data } = await query
  return data ?? []
}
