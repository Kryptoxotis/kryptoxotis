"use client"

import { useState, useEffect, useRef, useCallback } from "react"

export interface FieldDef {
  key: string
  label: string
  type: "text" | "textarea" | "number" | "checkbox" | "image" | "images"
  defaultValue?: any
}

interface ItemFormDialogProps {
  open: boolean
  onClose: () => void
  onSubmit: (data: Record<string, any>) => Promise<void>
  fields: FieldDef[]
  initialData?: Record<string, any> | null
  title: string
}

function ImageUploadField({
  value,
  onChange,
  label,
}: {
  value: string
  onChange: (url: string) => void
  label: string
}) {
  const [uploading, setUploading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const upload = useCallback(async (file: File) => {
    setUploading(true)
    try {
      const fd = new FormData()
      fd.append("file", file)
      const res = await fetch("/api/admin/upload", { method: "POST", body: fd })
      const json = await res.json()
      if (!res.ok || json.error) {
        alert(json.error || "Upload failed")
        return
      }
      if (json.url) onChange(json.url)
    } finally {
      setUploading(false)
    }
  }, [onChange])

  return (
    <div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          aria-label={`Upload image for ${label}`}
          className="px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm rounded disabled:opacity-50"
        >
          {uploading ? "Uploading..." : "Choose Image"}
        </button>
        {uploading && <span className="text-emerald-400 text-sm">Uploading...</span>}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => { const f = e.target.files?.[0]; if (f) { upload(f); e.target.value = "" } }}
      />
      {value && (
        <div className="mt-2 relative inline-block">
          <img src={value} alt="Preview" width={80} height={80} className="h-20 rounded border border-emerald-500/30 object-cover" />
          <button
            type="button"
            onClick={() => onChange("")}
            aria-label="Remove image"
            className="absolute -top-2 -right-2 w-5 h-5 bg-red-600 text-white rounded-full text-xs flex items-center justify-center hover:bg-red-700"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
    </div>
  )
}

function MultiImageUploadField({
  value,
  onChange,
  label,
}: {
  value: string
  onChange: (urls: string) => void
  label: string
}) {
  const [uploading, setUploading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const urls = value ? value.split(",").map((u) => u.trim()).filter(Boolean) : []

  const upload = useCallback(async (files: FileList) => {
    setUploading(true)
    try {
      const newUrls = (await Promise.all(
        Array.from(files).map(async (file) => {
          const fd = new FormData()
          fd.append("file", file)
          const res = await fetch("/api/admin/upload", { method: "POST", body: fd })
          const json = await res.json()
          if (!res.ok || json.error) {
            alert(json.error || `Upload failed for ${file.name}`)
            return null
          }
          return json.url ?? null
        })
      )).filter(Boolean) as string[]
      const all = [...urls, ...newUrls]
      onChange(all.join(","))
    } finally {
      setUploading(false)
    }
  }, [urls, onChange])

  const remove = (index: number) => {
    const updated = urls.filter((_, i) => i !== index)
    onChange(updated.join(","))
  }

  return (
    <div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          aria-label={`Upload images for ${label}`}
          className="px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm rounded disabled:opacity-50"
        >
          {uploading ? "Uploading..." : "Add Images"}
        </button>
        {uploading && <span className="text-emerald-400 text-sm">Uploading...</span>}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={(e) => { if (e.target.files?.length) { upload(e.target.files); e.target.value = "" } }}
      />
      {urls.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {urls.map((url, i) => (
            <div key={url} className="relative inline-block">
              <img src={url} alt={`Image ${i + 1}`} width={80} height={80} className="h-20 rounded border border-emerald-500/30 object-cover" />
              <button
                type="button"
                onClick={() => remove(i)}
                aria-label={`Remove image ${i + 1}`}
                className="absolute -top-2 -right-2 w-5 h-5 bg-red-600 text-white rounded-full text-xs flex items-center justify-center hover:bg-red-700"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function ItemFormDialog({ open, onClose, onSubmit, fields, initialData, title }: ItemFormDialogProps) {
  const [formData, setFormData] = useState<Record<string, any>>({})
  const [loading, setLoading] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) {
      const defaults: Record<string, any> = {}
      fields.forEach((f) => {
        defaults[f.key] = initialData?.[f.key] ?? f.defaultValue ?? (f.type === "checkbox" ? false : f.type === "number" ? 0 : "")
      })
      setFormData(defaults)
      setTimeout(() => dialogRef.current?.focus(), 0)
    }
  }, [open, initialData, fields])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await onSubmit(formData)
      onClose()
    } finally {
      setLoading(false)
    }
  }

  if (!open) return null

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={onClose}
      onKeyDown={(e) => { if (e.key === "Escape") onClose() }}
    >
      <div className="bg-zinc-900 border border-emerald-500/30 rounded-lg p-6 w-full max-w-lg max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map((field) => (
            <div key={field.key}>
              <label className="block text-sm text-zinc-400 mb-1">{field.label}</label>
              {field.type === "image" ? (
                <ImageUploadField
                  value={formData[field.key] ?? ""}
                  onChange={(url) => setFormData({ ...formData, [field.key]: url })}
                  label={field.label}
                />
              ) : field.type === "images" ? (
                <MultiImageUploadField
                  value={formData[field.key] ?? ""}
                  onChange={(urls) => setFormData({ ...formData, [field.key]: urls })}
                  label={field.label}
                />
              ) : field.type === "textarea" ? (
                <textarea
                  value={formData[field.key] ?? ""}
                  onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                  className="w-full px-3 py-2 bg-black border border-emerald-500/30 rounded text-white min-h-[100px] focus:outline-none focus:border-emerald-500"
                />
              ) : field.type === "checkbox" ? (
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={!!formData[field.key]}
                    onChange={(e) => setFormData({ ...formData, [field.key]: e.target.checked })}
                    className="accent-emerald-500"
                  />
                  <span className="text-sm text-zinc-300">{field.label}</span>
                </label>
              ) : (
                <input
                  type={field.type}
                  value={formData[field.key] ?? ""}
                  onChange={(e) => setFormData({ ...formData, [field.key]: field.type === "number" ? Number(e.target.value) : e.target.value })}
                  className="w-full px-3 py-2 bg-black border border-emerald-500/30 rounded text-white focus:outline-none focus:border-emerald-500"
                />
              )}
            </div>
          ))}
          <div className="flex gap-2 justify-end">
            <button type="button" onClick={onClose} className="px-4 py-2 text-zinc-400 hover:text-white">Cancel</button>
            <button type="submit" disabled={loading} className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded disabled:opacity-50">
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
