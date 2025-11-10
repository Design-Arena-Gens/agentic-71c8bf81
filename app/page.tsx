'use client'

import { useState } from 'react'
import Sidebar from '@/components/layout/Sidebar'
import Header from '@/components/layout/Header'
import Dashboard from '@/components/modules/Dashboard'
import ClientManagement from '@/components/modules/ClientManagement'
import PolicyManagement from '@/components/modules/PolicyManagement'
import QuoteManagement from '@/components/modules/QuoteManagement'
import ClaimsManagement from '@/components/modules/ClaimsManagement'
import CommissionTracking from '@/components/modules/CommissionTracking'
import RenewalManagement from '@/components/modules/RenewalManagement'
import DocumentManagement from '@/components/modules/DocumentManagement'
import ReportingAnalytics from '@/components/modules/ReportingAnalytics'
import CommunicationCenter from '@/components/modules/CommunicationCenter'
import TaskWorkflow from '@/components/modules/TaskWorkflow'

export default function Home() {
  const [activeModule, setActiveModule] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const renderModule = () => {
    switch (activeModule) {
      case 'dashboard':
        return <Dashboard />
      case 'clients':
        return <ClientManagement />
      case 'policies':
        return <PolicyManagement />
      case 'quotes':
        return <QuoteManagement />
      case 'claims':
        return <ClaimsManagement />
      case 'commissions':
        return <CommissionTracking />
      case 'renewals':
        return <RenewalManagement />
      case 'documents':
        return <DocumentManagement />
      case 'reports':
        return <ReportingAnalytics />
      case 'communication':
        return <CommunicationCenter />
      case 'tasks':
        return <TaskWorkflow />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        activeModule={activeModule}
        setActiveModule={setActiveModule}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          activeModule={activeModule}
        />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          {renderModule()}
        </main>
      </div>
    </div>
  )
}
