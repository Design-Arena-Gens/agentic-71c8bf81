'use client'

import { useState } from 'react'
import { Plus, Search, Filter, Download, Upload, Edit, Trash2, FileText } from 'lucide-react'
import DataTable from '@/components/shared/DataTable'
import Modal from '@/components/shared/Modal'
import PolicyForm from '@/components/forms/PolicyForm'

const initialPolicies = [
  {
    id: 1,
    policyNumber: 'POL-2024-001',
    client: 'John Smith',
    type: 'Auto Insurance',
    carrier: 'State Farm',
    premium: '$1,240',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    status: 'Active',
  },
  {
    id: 2,
    policyNumber: 'POL-2024-002',
    client: 'Sarah Johnson',
    type: 'Home Insurance',
    carrier: 'Allstate',
    premium: '$2,890',
    startDate: '2024-01-15',
    endDate: '2025-01-15',
    status: 'Active',
  },
  {
    id: 3,
    policyNumber: 'POL-2024-003',
    client: 'Acme Corporation',
    type: 'Business Insurance',
    carrier: 'Hartford',
    premium: '$15,200',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    status: 'Active',
  },
  {
    id: 4,
    policyNumber: 'POL-2023-156',
    client: 'Mike Williams',
    type: 'Life Insurance',
    carrier: 'MetLife',
    premium: '$1,200',
    startDate: '2023-06-01',
    endDate: '2024-06-01',
    status: 'Expired',
  },
]

export default function PolicyManagement() {
  const [policies, setPolicies] = useState(initialPolicies)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPolicy, setSelectedPolicy] = useState<any>(null)

  const filteredPolicies = policies.filter((policy) => {
    const matchesSearch =
      policy.policyNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      policy.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      policy.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      policy.carrier.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter =
      filterStatus === 'all' || policy.status.toLowerCase() === filterStatus.toLowerCase()

    return matchesSearch && matchesFilter
  })

  const handleAddPolicy = (policyData: any) => {
    if (selectedPolicy) {
      setPolicies(policies.map(p => p.id === selectedPolicy.id ? { ...policyData, id: p.id } : p))
    } else {
      setPolicies([...policies, { ...policyData, id: policies.length + 1 }])
    }
    setIsModalOpen(false)
    setSelectedPolicy(null)
  }

  const handleEdit = (policy: any) => {
    setSelectedPolicy(policy)
    setIsModalOpen(true)
  }

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this policy?')) {
      setPolicies(policies.filter(p => p.id !== id))
    }
  }

  const columns = [
    { key: 'policyNumber', label: 'Policy Number', sortable: true },
    { key: 'client', label: 'Client', sortable: true },
    { key: 'type', label: 'Type', sortable: true },
    { key: 'carrier', label: 'Carrier', sortable: true },
    { key: 'premium', label: 'Premium', sortable: true },
    { key: 'startDate', label: 'Start Date', sortable: true },
    { key: 'endDate', label: 'End Date', sortable: true },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (value: string) => (
        <span
          className={`px-2 py-1 text-xs font-medium rounded-full ${
            value === 'Active'
              ? 'bg-green-100 text-green-800'
              : value === 'Expired'
              ? 'bg-red-100 text-red-800'
              : 'bg-yellow-100 text-yellow-800'
          }`}
        >
          {value}
        </span>
      ),
    },
    {
      key: 'actions',
      label: 'Actions',
      sortable: false,
      render: (_: any, row: any) => (
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleEdit(row)}
            className="p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors"
            title="Edit"
          >
            <Edit className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleDelete(row.id)}
            className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors"
            title="Delete"
          >
            <Trash2 className="w-4 h-4" />
          </button>
          <button
            className="p-1 text-green-600 hover:bg-green-50 rounded transition-colors"
            title="View Details"
          >
            <FileText className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Policy Management</h2>
          <p className="text-gray-600 mt-1">Manage all insurance policies</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Upload className="w-4 h-4" />
            <span className="text-sm font-medium">Import</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" />
            <span className="text-sm font-medium">Export</span>
          </button>
          <button
            onClick={() => {
              setSelectedPolicy(null)
              setIsModalOpen(true)
            }}
            className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium">Add Policy</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Total Policies</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{policies.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Active</p>
          <p className="text-2xl font-bold text-green-600 mt-1">
            {policies.filter(p => p.status === 'Active').length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Expired</p>
          <p className="text-2xl font-bold text-red-600 mt-1">
            {policies.filter(p => p.status === 'Expired').length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Total Premium</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">$20.5K</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search policies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="expired">Expired</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <DataTable
          columns={columns}
          data={filteredPolicies}
          emptyMessage="No policies found"
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedPolicy(null)
        }}
        title={selectedPolicy ? 'Edit Policy' : 'Add New Policy'}
      >
        <PolicyForm
          initialData={selectedPolicy}
          onSubmit={handleAddPolicy}
          onCancel={() => {
            setIsModalOpen(false)
            setSelectedPolicy(null)
          }}
        />
      </Modal>
    </div>
  )
}
