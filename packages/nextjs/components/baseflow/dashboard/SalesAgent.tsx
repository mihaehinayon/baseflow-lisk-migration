import React from 'react';
import { ShoppingCart, Plus, DollarSign } from 'lucide-react';

export function SalesAgent() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Sales Agent</h1>
        <p className="text-gray-600">Manage your sales, create invoices, and track payments</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <ShoppingCart size={18} className="mr-2 text-blue-600" />
            Quick Actions
          </h2>
          <div className="space-y-3">
            <button className="w-full flex items-center p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100">
              <Plus size={16} className="mr-2" />
              Create New Invoice
            </button>
            <button className="w-full flex items-center p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100">
              <DollarSign size={16} className="mr-2" />
              Record Payment
            </button>
          </div>
        </div>
        
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
          <div className="space-y-3">
            <div className="p-3 border-l-4 border-green-400 bg-green-50">
              <p className="text-sm font-medium text-green-800">Invoice Paid</p>
              <p className="text-xs text-green-600">Customer paid $200 for chair delivery</p>
            </div>
            <div className="p-3 border-l-4 border-blue-400 bg-blue-50">
              <p className="text-sm font-medium text-blue-800">Invoice Created</p>
              <p className="text-xs text-blue-600">New invoice for $150 sent to customer</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Chat Interface */}
      <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Chat with Sales Agent</h2>
        <div className="bg-gray-50 rounded-lg p-4 h-64 overflow-y-auto">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <ShoppingCart size={16} className="text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">Sales Agent</p>
                <p className="text-sm text-gray-600">Hi! I can help you create invoices, track payments, and manage your sales. What would you like to do?</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Ask me to create an invoice or track a payment..." 
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}