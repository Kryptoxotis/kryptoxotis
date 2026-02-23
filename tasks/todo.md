# Universal Image Upload for Admin Panel

## TODO

- [x] 1. Create Supabase Storage bucket (`images`, public)
- [x] 2. Create upload API route (`app/api/admin/upload/route.ts`)
- [x] 3. Add `"image"` and `"images"` field types to `ItemFormDialog`
- [x] 4. Update admin pages to use new field types
- [x] 5. Add Supabase storage hostname to `next.config.mjs`
- [x] 6. Build & verify

## Review

### Supabase Storage
Created a public `images` bucket with read and upload policies.

### Files Created (1)
**`app/api/admin/upload/route.ts`** — POST endpoint that accepts FormData with a `file` field, uploads to the `images` bucket using the service role client, and returns the public CDN URL.

### Files Modified (5)

**`components/admin/item-form-dialog.tsx`** — Added `"image"` and `"images"` to the `FieldDef.type` union. Added two new components:
- `ImageUploadField` — drag-and-drop zone + file picker for a single image, shows thumbnail preview with remove button
- `MultiImageUploadField` — same but accepts multiple files, stores comma-separated URLs, shows all thumbnails with individual remove buttons

**`app/admin/portfolio-items/page.tsx`** — Changed `image_url` from `type: "text"` to `type: "image"`, and `images` from `type: "textarea"` to `type: "images"`.

**`app/admin/site-sections/page.tsx`** — Changed `image_url` from `type: "text"` to `type: "image"`.

**`app/admin/testimonials/page.tsx`** — Changed `avatar_url` from `type: "text"` to `type: "image"`.

**`next.config.mjs`** — Added `oclfheqitoiuphsvorce.supabase.co` to `images.remotePatterns`.

### Build
- `npm run build` passes cleanly — 0 errors
- Upload route registered at `/api/admin/upload`
