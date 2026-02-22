"use client"

import { useState, useEffect } from "react"

export interface FieldDef {
  key: string
  label: string
  type: "text" | "textarea" | "number" | "checkbox"
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

export function ItemFormDialog({ open, onClose, onSubmit, fields, initialData, title }: ItemFormDialogProps) {
  const [formData, setFormData] = useState<Record<string, any>>({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (open) {
      const defaults: Record<string, any> = {}
      fields.forEach((f) => {
        defaults[f.key] = initialData?.[f.key] ?? f.defaultValue ?? (f.type === "checkbox" ? false : f.type === "number" ? 0 : "")
      })
      setFormData(defaults)
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-zinc-900 border border-emerald-500/30 rounded-lg p-6 w-full max-w-lg max-h-[80vh] overflow-y-auto">
        <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map((field) => (
            <div key={field.key}>
              <label className="block text-sm text-zinc-400 mb-1">{field.label}</label>
              {field.type === "textarea" ? (
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
