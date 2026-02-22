"use client"

interface Column {
  key: string
  label: string
}

interface DataTableProps {
  columns: Column[]
  rows: Record<string, any>[]
  onEdit?: (row: Record<string, any>) => void
  onDelete?: (id: string) => void
}

export function DataTable({ columns, rows, onEdit, onDelete }: DataTableProps) {
  return (
    <div className="rounded border border-emerald-500/30 overflow-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-emerald-500/20">
            {columns.map((col) => (
              <th key={col.key} className="text-left px-4 py-3 text-emerald-400 font-semibold text-sm">{col.label}</th>
            ))}
            {(onEdit || onDelete) && <th className="text-left px-4 py-3 text-emerald-400 font-semibold text-sm w-24">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 && (
            <tr>
              <td colSpan={columns.length + 1} className="text-center text-zinc-500 py-8">
                No items yet
              </td>
            </tr>
          )}
          {rows.map((row) => (
            <tr key={row.id} className="border-b border-zinc-800 hover:bg-zinc-900/50">
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-3 text-zinc-300 text-sm max-w-xs truncate">
                  {typeof row[col.key] === "boolean" ? (row[col.key] ? "Yes" : "No") : Array.isArray(row[col.key]) ? row[col.key].join(", ") : String(row[col.key] ?? "")}
                </td>
              ))}
              {(onEdit || onDelete) && (
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    {onEdit && (
                      <button onClick={() => onEdit(row)} className="text-emerald-400 hover:text-white text-sm">Edit</button>
                    )}
                    {onDelete && (
                      <button onClick={() => onDelete(row.id)} className="text-red-400 hover:text-red-300 text-sm">Del</button>
                    )}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
