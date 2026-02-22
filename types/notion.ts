// Legacy type exports - kept for component compatibility

export interface WebProject {
  id: string
  title: string
  description: string
  client: string
  image: string
  featured: boolean
  order?: number
  technologies?: string[]
  url?: string
}
