# Deployment Guide

## Connecting GitHub to Vercel

To sync your GitHub repository with your existing Vercel project, follow these steps:

### 1. Connect GitHub Repository to Vercel Project

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Find your "kryptoxotis" project
3. Go to **Settings** → **Git**
4. Click **Connect Git Repository**
5. Select your `Kryptoxotis/kryptoxotis` GitHub repository
6. Choose the `main` branch as your production branch

### 2. Configure Environment Variables

Your Vercel project already has these environment variables configured:

- `NOTION_API_KEY`
- `NOTION_CONTACT_DATABASE_ID` 
- `NOTION_3D_PROJECTS_DATABASE_ID`
- `NOTION_WEB_PROJECTS_DATABASE_ID`
- `NOTION_DATABASE_PROJECTS_DATABASE_ID`
- `NOTION_TESTIMONIALS_DATABASE_ID`
- `NOTION_FAQ_DATABASE_ID`
- `NOTION_3D_PRINTING_MATERIALS_DATABASE_ID`
- `NOTION_BLOG_DATABASE_ID`
- `ELEVENLABS_API_KEY`
- `AGENT_ID`
- `VERCEL_ENV`
- `ALLOWED_IPS`

These will automatically be used when deploying from GitHub.

### 3. Automatic Deployments

Once connected:
- **Production deployments**: Triggered on pushes to `main` branch
- **Preview deployments**: Triggered on pull requests
- **Custom domain**: Already configured at `kryptoxotis.io`

### 4. Manual Deployment Trigger

To trigger a deployment immediately after connecting:
1. Make a small change to any file (like this README)
2. Commit and push to the `main` branch
3. Vercel will automatically deploy the new version

### 5. Build Configuration

Your project is already configured with:
- **Framework**: Next.js
- **Node.js Version**: 22.x
- **Build Command**: `next build` (default)
- **Install Command**: `npm install` (default)
- **Output Directory**: `.next` (default)

## Current Status

✅ **GitHub Repository**: Ready with complete Next.js structure  
✅ **Environment Variables**: Template provided (.env.example)  
🔄 **Git Connection**: Needs to be connected in Vercel dashboard  
✅ **Domain**: Already configured (kryptoxotis.io)  
✅ **Dependencies**: Notion and ElevenLabs clients ready  

## Next Steps

1. Connect the GitHub repository in your Vercel dashboard
2. Copy environment variables from `.env.example` to `.env.local` for local development
3. Test the connection by making a commit to trigger a deployment
4. Verify everything works at https://kryptoxotis.io

Once connected, all future changes to your GitHub repository will automatically deploy to Vercel!
