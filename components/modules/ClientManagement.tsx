'use client'

import { useState } from 'react'
import {
  Plus,
  Search,
  Filter,
  Download,
  Upload,
  Edit,
  Trash2,
  Eye,
  Mail,
  Phone,
  MapPin,
  MoreVertical
} from 'lucide-react'
import DataTable from '@/components/shared/DataTable'
import Modal from '@/components/shared/Modal'
import ClientForm from '@/components/forms/ClientForm'

const initialClients = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@email.com',
    phone: '(555) 123-4567',
    type: 'Individual',
    policies: 3,
    totalPremium: '$5,240',
    status: 'Active',
    lastContact: '2024-01-15',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    phone: '(555) 234-5678',
    type: 'Individual',
    policies: 2,
    totalPremium: '$3,890',
    status: 'Active',
    lastContact: '2024-01-10',
  },
  {
    id: 3,
    name: 'Acme Corporation',
    email: 'contact@acme.com',
    phone: '(555) 345-6789',
    type: 'Business',
    policies: 8,
    totalPremium: '$45,200',
    status: 'Active',
    lastContact: '2024-01-12',
  },
  {
    id: 4,
    name: 'Mike Williams',
    email: 'mike.w@email.com',
    phone: '(555) 456-7890',
    type: 'Individual',
    policies: 1,
    totalPremium: '$1,200',
    status: 'Inactive',
    lastContact: '2023-12-20',
  },
]

export default function ClientManagement() {
  const [clients, setClients] = useState(initialClients)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('all')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedClient, setSelectedClient] = useState<any>(null)
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table')

  const filteredClients = clients.filter((client) => {
    const matchesSearch =
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.phone.includes(searchTerm)

    const matchesFilter =
      filterType === 'all' ||
      (filterType === 'individual' && client.type === 'Individual') ||
      (filterType === 'business' && client.type === 'Business') ||
      (filterType === 'active' && client.status === 'Active') ||
      (filterType === 'inactive' && client.status === 'Inactive')

    return matchesSearch && matchesFilter
  })

  const handleAddClient = (clientData: any) => {
    if (selectedClient) {
      setClients(clients.map(c => c.id === selectedClient.id ? { ...clientData, id: c.id } : c))
    } else {
      setClients([...clients, { ...clientData, id: clients.length + 1 }])
    }
    setIsModalOpen(false)
    setSelectedClient(null)
  }

  const handleEdit = (client: any) => {
    setSelectedClient(client)
    setIsModalOpen(true)
  }

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this client?')) {
      setClients(clients.filter(c => c.id !== id))
    }
  }

  const columns = [
    { key: 'name', label: 'Client Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'phone', label: 'Phone', sortable: false },
    { key: 'type', label: 'Type', sortable: true },
    { key: 'policies', label: 'Policies', sortable: true },
    { key: 'totalPremium', label: 'Total Premium', sortable: true },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      render: (value: string) => (
        <span
          className={`px-2 py-1 text-xs font-medium rounded-full ${
            value === 'Active'
              ? 'bg-green-100 text-green-800'
              : 'bg-gray-100 text-gray-800'
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
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Client Management</h2>
          <p className="text-gray-600 mt-1">Manage your client database</p>
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
              setSelectedClient(null)
              setIsModalOpen(true)
            }}
            className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium">Add Client</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Total Clients</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{clients.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Active Clients</p>
          <p className="text-2xl font-bold text-green-600 mt-1">
            {clients.filter(c => c.status === 'Active').length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Individual</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">
            {clients.filter(c => c.type === 'Individual').length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Business</p>
          <p className="text-2xl font-bold text-purple-600 mt-1">
            {clients.filter(c => c.type === 'Business').length}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search clients by name, email, or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="all">All Clients</option>
            <option value="individual">Individual</option>
            <option value="business">Business</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <DataTable
          columns={columns}
          data={filteredClients}
          emptyMessage="No clients found"
        />
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedClient(null)
        }}
        title={selectedClient ? 'Edit Client' : 'Add New Client'}
      >
        <ClientForm
          initialData={selectedClient}
          onSubmit={handleAddClient}
          onCancel={() => {
            setIsModalOpen(false)
            setSelectedClient(null)
          }}
        />
      </Modal>
    </div>
  )
}
