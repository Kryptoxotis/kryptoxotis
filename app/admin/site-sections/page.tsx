"use client"

import { useEffect, useState, useCallback } from "react"
import { DataTable } from "@/components/admin/data-table"
import { ItemFormDialog, FieldDef } from "@/components/admin/item-form-dialog"

const API = "/api/admin/site-sections"
const TITLE = "Site Sections"

const columns = [
  { key: "page", label: "Page" },
  { key: "section_key", label: "Section Key" },
  { key: "heading", label: "Heading" },
]

const fields: FieldDef[] = [
  { key: "page", label: "Page", type: "text" },
  { key: "section_key", label: "Section Key", type: "text" },
  { key: "heading", label: "Heading", type: "text" },
  { key: "subheading", label: "Subheading", type: "text" },
  { key: "body", label: "Body", type: "textarea" },
  { key: "button_text", label: "Button Text", type: "text" },
  { key: "button_link", label: "Button Link", type: "text" },
  { key: "image_url", label: "Image URL", type: "text" },
  { key: "sort_order", label: "Sort Order", type: "number", defaultValue: 0 },
]

export default function AdminPage() {
  const [rows, setRows] = useState<any[]>([])
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editing, setEditing] = useState<any>(null)

  const load = useCallback(async () => {
    const res = await fetch(API)
    if (res.ok) setRows(await res.json())
  }, [])

  useEffect(() => { load() }, [load])

  const handleSubmit = async (data: Record<string, any>) => {
    if (editing) {
      await fetch(`${API}/${editing.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
    } else {
      await fetch(API, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
    }
    load()
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this item?")) return
    await fetch(`${API}/${id}`, { method: "DELETE" })
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
      <ItemFormDialog open={dialogOpen} onClose={() => setDialogOpen(false)} onSubmit={handleSubmit} fields={fields} initialData={editing} title={editing ? "Edit Section" : "Add Section"} />
    </div>
  )
}
