# Kryptoxotis

A modern Next.js application with Notion and ElevenLabs integrations.

## Features

- Next.js 14+ with TypeScript
- Tailwind CSS for styling
- Notion API integration for content management
- ElevenLabs API integration for AI voice features
- Multiple database connections for different content types

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# Notion API
NOTION_API_KEY=your_notion_api_key
NOTION_CONTACT_DATABASE_ID=your_contact_db_id
NOTION_3D_PROJECTS_DATABASE_ID=your_3d_projects_db_id
NOTION_WEB_PROJECTS_DATABASE_ID=your_web_projects_db_id
NOTION_DATABASE_PROJECTS_DATABASE_ID=your_database_projects_db_id
NOTION_TESTIMONIALS_DATABASE_ID=your_testimonials_db_id
NOTION_FAQ_DATABASE_ID=your_faq_db_id
NOTION_3D_PRINTING_MATERIALS_DATABASE_ID=your_3d_printing_materials_db_id
NOTION_BLOG_DATABASE_ID=your_blog_db_id

# ElevenLabs API
ELEVENLABS_API_KEY=your_elevenlabs_api_key
AGENT_ID=your_agent_id

# Other Configuration
VERCEL_ENV=production
ALLOWED_IPS=your_allowed_ips
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment

This project is deployed on Vercel at [kryptoxotis.io](https://kryptoxotis.io)
