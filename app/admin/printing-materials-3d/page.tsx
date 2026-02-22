"use client"

import { useEffect, useState, useCallback } from "react"
import { DataTable } from "@/components/admin/data-table"
import { ItemFormDialog, FieldDef } from "@/components/admin/item-form-dialog"

const API = "/api/admin/printing-materials-3d"
const TITLE = "3D Printing Materials"

const columns = [
  { key: "name", label: "Name" },
  { key: "material_type", label: "Material Type" },
  { key: "price", label: "Price" },
  { key: "visible", label: "Visible" },
]

const fields: FieldDef[] = [
  { key: "name", label: "Name", type: "text" },
  { key: "material_type", label: "Material Type", type: "text" },
  { key: "price", label: "Price", type: "number" },
  { key: "sort_order", label: "Sort Order", type: "number" },
  { key: "visible", label: "Visible", type: "checkbox", defaultValue: true },
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
