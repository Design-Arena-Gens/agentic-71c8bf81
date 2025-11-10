'use client'

import { Menu, Search, Bell, Settings, User } from 'lucide-react'

interface HeaderProps {
  toggleSidebar: () => void
  activeModule: string
}

export default function Header({ toggleSidebar, activeModule }: HeaderProps) {
  const getModuleName = (id: string) => {
    const names: { [key: string]: string } = {
      dashboard: 'Dashboard',
      clients: 'Client Management',
      policies: 'Policy Management',
      quotes: 'Quote Management',
      claims: 'Claims Management',
      commissions: 'Commission Tracking',
      renewals: 'Renewal Management',
      documents: 'Document Management',
      reports: 'Reporting & Analytics',
      communication: 'Communication Center',
      tasks: 'Task & Workflow',
    }
    return names[id] || 'Dashboard'
  }

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {getModuleName(activeModule)}
            </h2>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-4 py-2 w-64">
            <Search className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>

          {/* Notifications */}
          <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Settings */}
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Settings className="w-6 h-6 text-gray-600" />
          </button>

          {/* User */}
          <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          </button>
        </div>
      </div>
    </header>
  )
}
