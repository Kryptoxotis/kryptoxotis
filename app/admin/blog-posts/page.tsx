"use client"

import { useEffect, useState, useCallback } from "react"
import { DataTable } from "@/components/admin/data-table"
import { ItemFormDialog, FieldDef } from "@/components/admin/item-form-dialog"

const API = "/api/admin/blog-posts"
const TITLE = "Blog Posts"

const columns = [
  { key: "title", label: "Title" },
  { key: "category", label: "Category" },
  { key: "author", label: "Author" },
  { key: "status", label: "Status" },
]

const fields: FieldDef[] = [
  { key: "title", label: "Title", type: "text" },
  { key: "excerpt", label: "Excerpt", type: "textarea" },
  { key: "content", label: "Content", type: "textarea" },
  { key: "category", label: "Category", type: "text" },
  { key: "publish_date", label: "Publish Date", type: "text" },
  { key: "estimated_read_time", label: "Estimated Read Time", type: "text" },
  { key: "author", label: "Author", type: "text" },
  { key: "status", label: "Status", type: "text", defaultValue: "Draft" },
  { key: "featured", label: "Featured", type: "checkbox", defaultValue: false },
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
      <ItemFormDialog open={dialogOpen} onClose={() => setDialogOpen(false)} onSubmit={handleSubmit} fields={fields} initialData={editing} title={editing ? "Edit Item" : "Add Item"} />
    </div>
  )
}
