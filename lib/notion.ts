// Types and client-side fetch functions

export interface FAQ {
  id: string
  question: string
  answer: string
  category?: string
  order?: number
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
