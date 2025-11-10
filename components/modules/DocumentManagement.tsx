'use client'

import { Folder, Upload, FileText, Download } from 'lucide-react'

const documents = [
  { id: 1, name: 'Policy_Document_001.pdf', client: 'John Smith', type: 'Policy', size: '2.4 MB', uploadDate: '2024-01-15' },
  { id: 2, name: 'Claim_Form_002.pdf', client: 'Sarah Johnson', type: 'Claim', size: '1.8 MB', uploadDate: '2024-01-20' },
  { id: 3, name: 'Quote_003.pdf', client: 'Acme Corp', type: 'Quote', size: '850 KB', uploadDate: '2024-01-18' },
]

export default function DocumentManagement() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Document Management</h2>
        <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
          <Upload className="w-4 h-4" />
          <span>Upload Document</span>
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <p className="text-sm text-gray-600">Total Documents</p>
          <p className="text-2xl font-bold mt-1">{documents.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <p className="text-sm text-gray-600">Policies</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">1</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <p className="text-sm text-gray-600">Claims</p>
          <p className="text-2xl font-bold text-yellow-600 mt-1">1</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <p className="text-sm text-gray-600">Storage Used</p>
          <p className="text-2xl font-bold text-purple-600 mt-1">5.0 MB</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6">
          <div className="space-y-4">
            {documents.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center space-x-4">
                  <FileText className="w-8 h-8 text-blue-600" />
                  <div>
                    <p className="font-medium">{doc.name}</p>
                    <p className="text-sm text-gray-500">{doc.client} • {doc.size} • {doc.uploadDate}</p>
                  </div>
                </div>
                <button className="p-2 hover:bg-gray-100 rounded">
                  <Download className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
