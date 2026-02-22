"use client"

import { useEffect, useState, useCallback } from "react"
import { DataTable } from "@/components/admin/data-table"

const API = "/api/admin/contact-submissions"
const TITLE = "Contact Submissions"

const columns = [
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "subject", label: "Subject" },
  { key: "created_at", label: "Created At" },
]

export default function AdminPage() {
  const [rows, setRows] = useState<any[]>([])

  const load = useCallback(async () => {
    const res = await fetch(API)
    if (res.ok) setRows(await res.json())
  }, [])

  useEffect(() => { load() }, [load])

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this item?")) return
    await fetch(`${API}/${id}`, { method: "DELETE" })
    load()
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-white">{TITLE}</h1>
      </div>
      <DataTable columns={columns} rows={rows} onDelete={handleDelete} />
    </div>
  )
}
