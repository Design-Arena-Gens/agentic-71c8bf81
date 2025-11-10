'use client'

import { useState } from 'react'
import { DollarSign } from 'lucide-react'
import DataTable from '@/components/shared/DataTable'

const commissions = [
  { id: 1, policy: 'POL-2024-001', client: 'John Smith', carrier: 'State Farm', premium: '$1,240', rate: '10%', amount: '$124', status: 'Paid', date: '2024-01-15' },
  { id: 2, policy: 'POL-2024-002', client: 'Sarah Johnson', carrier: 'Allstate', premium: '$2,890', rate: '12%', amount: '$347', status: 'Pending', date: '2024-01-20' },
  { id: 3, policy: 'POL-2024-003', client: 'Acme Corp', carrier: 'Hartford', premium: '$15,200', rate: '8%', amount: '$1,216', status: 'Paid', date: '2024-01-18' },
]

export default function CommissionTracking() {
  const columns = [
    { key: 'policy', label: 'Policy #', sortable: true },
    { key: 'client', label: 'Client', sortable: true },
    { key: 'carrier', label: 'Carrier', sortable: true },
    { key: 'premium', label: 'Premium', sortable: true },
    { key: 'rate', label: 'Rate', sortable: true },
    { key: 'amount', label: 'Commission', sortable: true },
    { key: 'date', label: 'Date', sortable: true },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (value: string) => (
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
          value === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
        }`}>
          {value}
        </span>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Commission Tracking</h2>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <p className="text-sm text-gray-600">Total Earned</p>
          <p className="text-2xl font-bold text-green-600 mt-1">$1,687</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <p className="text-sm text-gray-600">Paid</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">$1,340</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <p className="text-sm text-gray-600">Pending</p>
          <p className="text-2xl font-bold text-yellow-600 mt-1">$347</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <p className="text-sm text-gray-600">This Month</p>
          <p className="text-2xl font-bold text-purple-600 mt-1">$1,687</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border">
        <DataTable columns={columns} data={commissions} emptyMessage="No commissions found" />
      </div>
    </div>
  )
}
