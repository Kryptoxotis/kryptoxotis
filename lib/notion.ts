// Types and client-side fetch functions
// These functions call our API routes (which use Supabase under the hood)

export interface FAQ {
  id: string
  question: string
  answer: string
  category?: string
  order?: number
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  avatar?: string
}

export interface Project {
  id: string
  title: string
  description: string
  client?: string
  image: string
  technologies?: string[]
  completionDate?: string
  url?: string
  materials?: string[]
  application?: string
  featured?: boolean
  order?: number
  stlFile?: string
  printTime?: number
  status?: string
}

export interface Material {
  id: string
  name: string
  materialType: string
  bestUses: string[]
  properties: string[]
  price: number | null
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  publishDate: string
  estimatedReadTime: number
  wordCount: number
  seoScore: number
  status: string
  featured: boolean
  author: string
  url?: string
}

export interface ContactSubmission {
  name: string
  email: string
  subject: string
  message: string
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await fetch("/api/testimonials", {
      cache: "no-store",
    })
    if (!response.ok) return []
    return await response.json()
  } catch {
    return []
  }
}

export async function getFAQs(): Promise<FAQ[]> {
  try {
    const response = await fetch("/api/faqs", {
      cache: "no-store",
    })
    if (!response.ok) return []
    return await response.json()
  } catch {
    return []
  }
}

export async function getProjects(category?: string): Promise<Project[]> {
  try {
    const url = category ? `/api/projects/${category}` : "/api/projects/database"
    const response = await fetch(url, {
      cache: "no-store",
    })
    if (!response.ok) return []
    return await response.json()
  } catch {
    return []
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch("/api/blog", {
      cache: "no-store",
    })
    if (!response.ok) return []
    return await response.json()
  } catch {
    return []
  }
}

export async function getMaterials(): Promise<Material[]> {
  try {
    const response = await fetch("/api/materials", {
      cache: "no-store",
    })
    if (!response.ok) return []
    return await response.json()
  } catch {
    return []
  }
}

export async function submitContactForm(data: ContactSubmission): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    return await response.json()
  } catch {
    return { success: false, message: "Network error. Please try again." }
  }
}
