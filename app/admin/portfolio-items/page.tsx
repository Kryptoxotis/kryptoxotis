"use client"

import { useEffect, useState, useCallback } from "react"
import { DataTable } from "@/components/admin/data-table"
import { ItemFormDialog, FieldDef } from "@/components/admin/item-form-dialog"

const API = "/api/admin/portfolio-items"
const TITLE = "Portfolio Items"

const columns = [
  { key: "title", label: "Title" },
  { key: "category", label: "Category" },
  { key: "client_name", label: "Client" },
  { key: "featured", label: "Featured" },
  { key: "visible", label: "Visible" },
]

const fields: FieldDef[] = [
  { key: "title", label: "Title", type: "text" },
  { key: "slug", label: "Slug", type: "text" },
  { key: "description", label: "Description", type: "textarea" },
  { key: "category", label: "Category", type: "text" },
  { key: "image_url", label: "Thumbnail Image", type: "image" },
  { key: "images", label: "Additional Images", type: "images" },
  { key: "content", label: "Detail Page Content", type: "textarea" },
  { key: "tags", label: "Tags (comma-separated)", type: "text" },
  { key: "client_name", label: "Client Name", type: "text" },
  { key: "external_url", label: "External URL", type: "text" },
  { key: "featured", label: "Featured", type: "checkbox", defaultValue: false },
  { key: "visible", label: "Visible", type: "checkbox", defaultValue: true },
  { key: "sort_order", label: "Sort Order", type: "number", defaultValue: 0 },
]

export default function AdminPage() {
  const [rows, setRows] = useState<any[]>([])
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editing, setEditing] = useState<any>(null)

  const load = useCallback(async () => {
    const res = await fetch(API)
    if (!res.ok) { if (res.status === 401) window.location.href = "/admin"; return }
    setRows(await res.json())
  }, [])

  useEffect(() => { load() }, [load])

  const handleSubmit = async (data: Record<string, any>) => {
    const res = editing
      ? await fetch(`${API}/${editing.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
      : await fetch(API, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
    if (!res.ok) { const j = await res.json().catch(() => ({})); throw new Error(j.error || "Save failed") }
    load()
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this item?")) return
    const res = await fetch(`${API}/${id}`, { method: "DELETE" })
    if (!res.ok) { alert("Delete failed. Please try again."); return }
    load()
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-white">{TITLE}</h1>
        <button onClick={() => { setEditing(null); setDialogOpen(true) }} className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded">
          + Add New
        </button>
      </div>
      <DataTable columns={columns} rows={rows} onEdit={(row) => { setEditing(row); setDialogOpen(true) }} onDelete={handleDelete} />
      <ItemFormDialog open={dialogOpen} onClose={() => setDialogOpen(false)} onSubmit={handleSubmit} fields={fields} initialData={editing} title={editing ? "Edit Item" : "Add Item"} />
    </div>
  )
}
