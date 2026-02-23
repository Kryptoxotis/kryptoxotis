# Portfolio Detail Pages + Image Support

## Tasks

- [x] 1. Add `getPortfolioItemBySlug()` to `lib/cms.ts`
- [x] 2. Add `content` and `images` fields to admin panel (`app/admin/portfolio-items/page.tsx`)
- [x] 3. Run Supabase migration to add `content` and `images` columns to `portfolio_items` table
- [x] 4. Create `/portfolio/[slug]/page.tsx` — detail page
- [x] 5. Make portfolio cards clickable (update `portfolio-card.tsx` and `portfolio-grid.tsx`)
- [x] 6. Create `public/portfolio/` directory for screenshot storage
- [x] 7. Verify `npm run build` passes

## Review

### Files Modified (4)

**`lib/cms.ts`** — Added `getPortfolioItemBySlug(slug)` function, follows the existing `getServiceBySlug` pattern.

**`app/admin/portfolio-items/page.tsx`** — Added two new fields to the admin form: `images` (textarea, comma-separated URLs) and `content` (textarea, detail page long-form text). Relabeled `image_url` to "Image URL (thumbnail)".

**`components/portfolio-card.tsx`** — Added `slug` to the interface. Wrapped the card in a `<Link>` to `/portfolio/[slug]` when a slug exists. Cards without a slug remain non-clickable.

**`components/portfolio-grid.tsx`** — Added `slug` and `image_url` to the PortfolioItem interface so they pass through to the card component.

### Files Created (1)

**`app/portfolio/[slug]/page.tsx`** — Server component detail page with: back link, hero (title, category badge, featured badge, client name, tags), main image, content (falls back to description), additional images gallery in a 2-column grid, and a CTA section linking to `/contact`.

### Database Migration

Added `content` (text) and `images` (text) columns to `portfolio_items` table via Supabase migration.

### Build

- `npm run build` passes cleanly — 0 errors
- `/portfolio/[slug]` route registered at 197 B / 99.3 kB
