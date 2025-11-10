'use client'

import {
  LayoutDashboard,
  Users,
  FileText,
  Calculator,
  AlertCircle,
  DollarSign,
  RefreshCw,
  Folder,
  BarChart3,
  MessageSquare,
  CheckSquare,
  Shield,
  X
} from 'lucide-react'

interface SidebarProps {
  activeModule: string
  setActiveModule: (module: string) => void
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const modules = [
  { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
  { id: 'clients', name: 'Client Management', icon: Users },
  { id: 'policies', name: 'Policy Management', icon: FileText },
  { id: 'quotes', name: 'Quote Management', icon: Calculator },
  { id: 'claims', name: 'Claims Management', icon: AlertCircle },
  { id: 'commissions', name: 'Commission Tracking', icon: DollarSign },
  { id: 'renewals', name: 'Renewal Management', icon: RefreshCw },
  { id: 'documents', name: 'Document Management', icon: Folder },
  { id: 'reports', name: 'Reporting & Analytics', icon: BarChart3 },
  { id: 'communication', name: 'Communication Center', icon: MessageSquare },
  { id: 'tasks', name: 'Task & Workflow', icon: CheckSquare },
]

export default function Sidebar({ activeModule, setActiveModule, isOpen, setIsOpen }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-30
          w-72 bg-gradient-to-b from-primary-800 to-primary-900 text-white
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          flex flex-col
        `}
      >
        {/* Logo */}
        <div className="flex items-center justify-between p-6 border-b border-primary-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">BrokerPro</h1>
              <p className="text-xs text-primary-200">Insurance Platform</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-white hover:bg-primary-700 p-1 rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <div className="space-y-1 px-3">
            {modules.map((module) => {
              const Icon = module.icon
              const isActive = activeModule === module.id

              return (
                <button
                  key={module.id}
                  onClick={() => {
                    setActiveModule(module.id)
                    setIsOpen(false)
                  }}
                  className={`
                    w-full flex items-center space-x-3 px-4 py-3 rounded-lg
                    transition-all duration-200
                    ${isActive
                      ? 'bg-accent-500 text-white shadow-lg'
                      : 'text-primary-100 hover:bg-primary-700 hover:text-white'
                    }
                  `}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium text-sm">{module.name}</span>
                </button>
              )
            })}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-primary-700">
          <div className="text-xs text-primary-300 text-center">
            Version 1.0.0
          </div>
        </div>
      </aside>
    </>
  )
}
