# Fix Services Page + Improve About Page Layout

## Tasks

- [x] 1. Update `iconMap` in `app/services/page.tsx` — add `LayoutDashboard` and `Workflow` imports
- [x] 2. Simplify services page layout — remove duplicated even/odd rendering, use one clean alternating layout
- [x] 3. Update `iconMap` in `app/page.tsx` — add `LayoutDashboard` and `Workflow` imports
- [x] 4. Restyle About page value breakdowns — convert plain text into styled cards with accent bars and large letters
- [x] 5. Improve About page Telos section — centered callout block
- [x] 6. Build and verify everything compiles

## Review

### Files Modified (3)

**`app/services/page.tsx`**
- Added `LayoutDashboard` and `Workflow` to lucide-react imports and `iconMap`
- Updated default service icons to `LayoutDashboard` (dashboards) and `Workflow` (automation) to match CMS data
- Collapsed duplicated even/odd rendering blocks into a single alternating layout using CSS order classes
- Changed icon visual area from `aspect-square` to `aspect-[4/3]` with subtle gradient background

**`app/page.tsx`**
- Added `LayoutDashboard` and `Workflow` to lucide-react imports and `iconMap` (2-line change)

**`app/about/page.tsx`**
- Value breakdowns (Honor, Discipline, Innovation) converted from plain `<h3>` + `<p>` into styled cards with:
  - Emerald gradient left accent bar containing the large T/E/K letter + Greek script
  - `cyber-border` card styling with dark background
- Telos section converted into a centered callout block with `cyber-border`, gradient overlay, and Greek "τέλος" label

### Build
- `npm run build` passes cleanly — 0 errors, 0 warnings
