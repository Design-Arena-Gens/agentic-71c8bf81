'use client'

import {
  Users,
  FileText,
  DollarSign,
  AlertCircle,
  TrendingUp,
  TrendingDown,
  Calendar,
  Clock
} from 'lucide-react'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const stats = [
  {
    name: 'Total Clients',
    value: '1,284',
    change: '+12.5%',
    trend: 'up',
    icon: Users,
    color: 'bg-blue-500',
  },
  {
    name: 'Active Policies',
    value: '3,847',
    change: '+8.2%',
    trend: 'up',
    icon: FileText,
    color: 'bg-green-500',
  },
  {
    name: 'Total Premium',
    value: '$2.4M',
    change: '+15.3%',
    trend: 'up',
    icon: DollarSign,
    color: 'bg-purple-500',
  },
  {
    name: 'Pending Claims',
    value: '47',
    change: '-5.1%',
    trend: 'down',
    icon: AlertCircle,
    color: 'bg-orange-500',
  },
]

const revenueData = [
  { month: 'Jan', revenue: 45000, commission: 12000 },
  { month: 'Feb', revenue: 52000, commission: 14500 },
  { month: 'Mar', revenue: 48000, commission: 13200 },
  { month: 'Apr', revenue: 61000, commission: 16800 },
  { month: 'May', revenue: 55000, commission: 15100 },
  { month: 'Jun', revenue: 67000, commission: 18500 },
]

const policyDistribution = [
  { name: 'Auto', value: 35, color: '#0ea5e9' },
  { name: 'Home', value: 25, color: '#8b5cf6' },
  { name: 'Life', value: 20, color: '#10b981' },
  { name: 'Health', value: 15, color: '#f59e0b' },
  { name: 'Business', value: 5, color: '#ef4444' },
]

const recentActivities = [
  { type: 'New Policy', client: 'John Smith', detail: 'Auto Insurance', time: '2 hours ago' },
  { type: 'Claim Filed', client: 'Sarah Johnson', detail: 'Home Insurance', time: '4 hours ago' },
  { type: 'Renewal Due', client: 'Mike Williams', detail: 'Life Insurance', time: '6 hours ago' },
  { type: 'Quote Sent', client: 'Emily Brown', detail: 'Business Insurance', time: '8 hours ago' },
  { type: 'Payment Received', client: 'David Lee', detail: '$2,450', time: '10 hours ago' },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown

          return (
            <div
              key={stat.name}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div
                  className={`flex items-center space-x-1 text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  <TrendIcon className="w-4 h-4" />
                  <span>{stat.change}</span>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-gray-600 text-sm font-medium">{stat.name}</h3>
                <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue & Commission</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#0ea5e9" name="Revenue" />
              <Bar dataKey="commission" fill="#f59e0b" name="Commission" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Policy Distribution */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Policy Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={policyDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {policyDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h3>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{activity.type}</p>
                  <p className="text-xs text-gray-500">
                    {activity.client} • {activity.detail}
                  </p>
                </div>
              </div>
              <span className="text-xs text-gray-400">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button className="bg-primary-600 text-white rounded-lg p-4 hover:bg-primary-700 transition-colors text-center">
          <Calendar className="w-6 h-6 mx-auto mb-2" />
          <span className="text-sm font-medium">New Appointment</span>
        </button>
        <button className="bg-green-600 text-white rounded-lg p-4 hover:bg-green-700 transition-colors text-center">
          <FileText className="w-6 h-6 mx-auto mb-2" />
          <span className="text-sm font-medium">Create Quote</span>
        </button>
        <button className="bg-purple-600 text-white rounded-lg p-4 hover:bg-purple-700 transition-colors text-center">
          <Users className="w-6 h-6 mx-auto mb-2" />
          <span className="text-sm font-medium">Add Client</span>
        </button>
        <button className="bg-orange-600 text-white rounded-lg p-4 hover:bg-orange-700 transition-colors text-center">
          <AlertCircle className="w-6 h-6 mx-auto mb-2" />
          <span className="text-sm font-medium">File Claim</span>
        </button>
      </div>
    </div>
  )
}
