'use client'

import { MessageSquare, Mail, Send, Phone } from 'lucide-react'

const messages = [
  { id: 1, from: 'John Smith', subject: 'Policy Renewal Question', preview: 'Hi, I wanted to ask about...', time: '2 hours ago', unread: true },
  { id: 2, from: 'Sarah Johnson', subject: 'Claim Update Request', preview: 'Can you provide an update on...', time: '5 hours ago', unread: true },
  { id: 3, from: 'Mike Williams', subject: 'Thank you', preview: 'Thanks for your help with...', time: '1 day ago', unread: false },
]

export default function CommunicationCenter() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Communication Center</h2>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <p className="text-sm text-gray-600">Unread Messages</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">2</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <p className="text-sm text-gray-600">Emails Sent</p>
          <p className="text-2xl font-bold text-green-600 mt-1">245</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <p className="text-sm text-gray-600">Scheduled</p>
          <p className="text-2xl font-bold text-purple-600 mt-1">8</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border p-4">
          <p className="text-sm text-gray-600">Templates</p>
          <p className="text-2xl font-bold text-orange-600 mt-1">12</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6">
          <div className="space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`p-4 border rounded-lg hover:bg-gray-50 cursor-pointer ${msg.unread ? 'bg-blue-50' : ''}`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <MessageSquare className="w-4 h-4 text-gray-400" />
                      <p className="font-semibold">{msg.from}</p>
                      {msg.unread && <span className="w-2 h-2 bg-blue-600 rounded-full"></span>}
                    </div>
                    <p className="text-sm font-medium mt-1">{msg.subject}</p>
                    <p className="text-sm text-gray-500 mt-1">{msg.preview}</p>
                  </div>
                  <span className="text-xs text-gray-400">{msg.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button className="w-full py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 flex items-center justify-center space-x-2">
        <Send className="w-5 h-5" />
        <span>Compose New Message</span>
      </button>
    </div>
  )
}
