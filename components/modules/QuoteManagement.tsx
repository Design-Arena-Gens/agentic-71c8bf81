'use client'

import { useState } from 'react'
import { Plus, Search, Calculator, Send, Copy } from 'lucide-react'
import DataTable from '@/components/shared/DataTable'

const initialQuotes = [
  { id: 1, quoteNumber: 'QT-2024-001', client: 'Emily Brown', type: 'Auto', amount: '$1,450', status: 'Sent', createdDate: '2024-01-20' },
  { id: 2, quoteNumber: 'QT-2024-002', client: 'David Lee', type: 'Home', amount: '$2,890', status: 'Draft', createdDate: '2024-01-21' },
  { id: 3, quoteNumber: 'QT-2024-003', client: 'Tech Startup Inc', type: 'Business', amount: '$12,500', status: 'Accepted', createdDate: '2024-01-19' },
  { id: 4, quoteNumber: 'QT-2024-004', client: 'Jane Doe', type: 'Life', amount: '$890', status: 'Rejected', createdDate: '2024-01-18' },
]

export default function QuoteManagement() {
  const [quotes, setQuotes] = useState(initialQuotes)
  const [searchTerm, setSearchTerm] = useState('')

  const columns = [
    { key: 'quoteNumber', label: 'Quote #', sortable: true },
    { key: 'client', label: 'Client', sortable: true },
    { key: 'type', label: 'Type', sortable: true },
    { key: 'amount', label: 'Amount', sortable: true },
    { key: 'createdDate', label: 'Created', sortable: true },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (value: string) => (
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
          value === 'Sent' ? 'bg-blue-100 text-blue-800' :
          value === 'Draft' ? 'bg-gray-100 text-gray-800' :
          value === 'Accepted' ? 'bg-green-100 text-green-800' :
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
        <h2 className="text-2xl font-bold">Quote Management</h2>
        <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
          <Plus className="w-4 h-4" />
          <span>Create Quote</span>
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <p className="text-sm text-gray-600">Total Quotes</p>
          <p className="text-2xl font-bold mt-1">{quotes.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <p className="text-sm text-gray-600">Accepted</p>
          <p className="text-2xl font-bold text-green-600 mt-1">
            {quotes.filter(q => q.status === 'Accepted').length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <p className="text-sm text-gray-600">Pending</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">
            {quotes.filter(q => q.status === 'Sent').length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <p className="text-sm text-gray-600">Total Value</p>
          <p className="text-2xl font-bold text-purple-600 mt-1">$17.7K</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border">
        <DataTable columns={columns} data={quotes} emptyMessage="No quotes found" />
      </div>
    </div>
  )
}
