'use client'

import { useState } from 'react'
import { Plus, AlertCircle } from 'lucide-react'
import DataTable from '@/components/shared/DataTable'

const initialClaims = [
  { id: 1, claimNumber: 'CLM-2024-001', client: 'John Smith', policy: 'Auto Insurance', amount: '$5,200', status: 'Pending', filedDate: '2024-01-22' },
  { id: 2, claimNumber: 'CLM-2024-002', client: 'Sarah Johnson', policy: 'Home Insurance', amount: '$15,000', status: 'Approved', filedDate: '2024-01-20' },
  { id: 3, claimNumber: 'CLM-2024-003', client: 'Mike Williams', policy: 'Life Insurance', amount: '$50,000', status: 'Under Review', filedDate: '2024-01-21' },
]

export default function ClaimsManagement() {
  const [claims] = useState(initialClaims)

  const columns = [
    { key: 'claimNumber', label: 'Claim #', sortable: true },
    { key: 'client', label: 'Client', sortable: true },
    { key: 'policy', label: 'Policy', sortable: true },
    { key: 'amount', label: 'Amount', sortable: true },
    { key: 'filedDate', label: 'Filed Date', sortable: true },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (value: string) => (
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
          value === 'Approved' ? 'bg-green-100 text-green-800' :
          value === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
          value === 'Under Review' ? 'bg-blue-100 text-blue-800' :
          'bg-red-100 text-red-800'
        }`}>
          {value}
        </span>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Claims Management</h2>
        <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
          <Plus className="w-4 h-4" />
          <span>File Claim</span>
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <p className="text-sm text-gray-600">Total Claims</p>
          <p className="text-2xl font-bold mt-1">{claims.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <p className="text-sm text-gray-600">Pending</p>
          <p className="text-2xl font-bold text-yellow-600 mt-1">
            {claims.filter(c => c.status === 'Pending').length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <p className="text-sm text-gray-600">Approved</p>
          <p className="text-2xl font-bold text-green-600 mt-1">
            {claims.filter(c => c.status === 'Approved').length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <p className="text-sm text-gray-600">Total Value</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">$70.2K</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border">
        <DataTable columns={columns} data={claims} emptyMessage="No claims found" />
      </div>
    </div>
  )
}
