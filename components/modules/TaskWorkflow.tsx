'use client'

import { CheckSquare, Clock, Plus } from 'lucide-react'

const tasks = [
  { id: 1, title: 'Follow up with John Smith', priority: 'High', dueDate: '2024-01-25', status: 'In Progress', assignee: 'You' },
  { id: 2, title: 'Process renewal for Policy #001', priority: 'Medium', dueDate: '2024-01-28', status: 'Pending', assignee: 'You' },
  { id: 3, title: 'Review claim documentation', priority: 'High', dueDate: '2024-01-24', status: 'Completed', assignee: 'You' },
  { id: 4, title: 'Send quote to Emily Brown', priority: 'Low', dueDate: '2024-01-30', status: 'Pending', assignee: 'You' },
]

export default function TaskWorkflow() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Task & Workflow</h2>
        <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
          <Plus className="w-4 h-4" />
          <span>Add Task</span>
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <p className="text-sm text-gray-600">Total Tasks</p>
          <p className="text-2xl font-bold mt-1">{tasks.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <p className="text-sm text-gray-600">In Progress</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">
            {tasks.filter(t => t.status === 'In Progress').length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <p className="text-sm text-gray-600">Completed</p>
          <p className="text-2xl font-bold text-green-600 mt-1">
            {tasks.filter(t => t.status === 'Completed').length}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <p className="text-sm text-gray-600">Overdue</p>
          <p className="text-2xl font-bold text-red-600 mt-1">0</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6">
          <div className="space-y-4">
            {tasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center space-x-4">
                  <input type="checkbox" className="w-5 h-5" checked={task.status === 'Completed'} readOnly />
                  <div>
                    <p className="font-medium">{task.title}</p>
                    <div className="flex items-center space-x-3 mt-1">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        task.priority === 'High' ? 'bg-red-100 text-red-800' :
                        task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {task.priority}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {task.dueDate}
                      </span>
                    </div>
                  </div>
                </div>
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  task.status === 'Completed' ? 'bg-green-100 text-green-800' :
                  task.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {task.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
