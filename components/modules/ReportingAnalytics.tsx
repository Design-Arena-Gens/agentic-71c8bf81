'use client'

import { BarChart3, Download, TrendingUp } from 'lucide-react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const monthlyData = [
  { month: 'Jan', policies: 45, revenue: 45000, claims: 12 },
  { month: 'Feb', policies: 52, revenue: 52000, claims: 15 },
  { month: 'Mar', policies: 48, revenue: 48000, claims: 10 },
  { month: 'Apr', policies: 61, revenue: 61000, claims: 18 },
  { month: 'May', policies: 55, revenue: 55000, claims: 14 },
  { month: 'Jun', policies: 67, revenue: 67000, claims: 20 },
]

export default function ReportingAnalytics() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Reporting & Analytics</h2>
        <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
          <Download className="w-4 h-4" />
          <span>Export Report</span>
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <p className="text-sm text-gray-600">Avg Policy Value</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">$3,845</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <p className="text-sm text-gray-600">Retention Rate</p>
          <p className="text-2xl font-bold text-green-600 mt-1">94.5%</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <p className="text-sm text-gray-600">Claims Ratio</p>
          <p className="text-2xl font-bold text-yellow-600 mt-1">23.4%</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <p className="text-sm text-gray-600">Growth Rate</p>
          <p className="text-2xl font-bold text-purple-600 mt-1">+15.3%</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold mb-4">Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#0ea5e9" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold mb-4">Policy Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="policies" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
