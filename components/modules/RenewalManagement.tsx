'use client'

import { RefreshCw, Send } from 'lucide-react'
import DataTable from '@/components/shared/DataTable'

const renewals = [
  { id: 1, policy: 'POL-2024-001', client: 'John Smith', type: 'Auto', expiryDate: '2024-12-31', premium: '$1,240', status: 'Due Soon', daysLeft: 45 },
  { id: 2, policy: 'POL-2023-156', client: 'Mike Williams', type: 'Life', expiryDate: '2024-06-01', premium: '$1,200', status: 'Overdue', daysLeft: -30 },
  { id: 3, policy: 'POL-2024-002', client: 'Sarah Johnson', type: 'Home', expiryDate: '2025-01-15', premium: '$2,890', status: 'Upcoming', daysLeft: 120 },
]

export default function RenewalManagement() {
  const columns = [
    { key: 'policy', label: 'Policy #', sortable: true },
    { key: 'client', label: 'Client', sortable: true },
    { key: 'type', label: 'Type', sortable: true },
    { key: 'expiryDate', label: 'Expiry Date', sortable: true },
    { key: 'daysLeft', label: 'Days Left', sortable: true },
    { key: 'premium', label: 'Premium', sortable: true },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (value: string) => (
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
          value === 'Overdue' ? 'bg-red-100 text-red-800' :
          value === 'Due Soon' ? 'bg-yellow-100 text-yellow-800' :
          'bg-blue-100 text-blue-800'
        }`}>
          {value}
        </span>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Renewal Management</h2>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <p className="text-sm text-gray-600">Total Renewals</p>
          <p className="text-2xl font-bold mt-1">{renewals.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <p className="text-sm text-gray-600">Due Soon</p>
          <p className="text-2xl font-bold text-yellow-600 mt-1">
            {renewals.filter(r => r.status === 'Due Soon').length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <p className="text-sm text-gray-600">Overdue</p>
          <p className="text-2xl font-bold text-red-600 mt-1">
            {renewals.filter(r => r.status === 'Overdue').length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <p className="text-sm text-gray-600">Renewal Value</p>
          <p className="text-2xl font-bold text-green-600 mt-1">$5.3K</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border">
        <DataTable columns={columns} data={renewals} emptyMessage="No renewals found" />
      </div>
    </div>
  )
}
