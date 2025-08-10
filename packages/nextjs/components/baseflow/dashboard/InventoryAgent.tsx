import React from 'react';
import { Package2, AlertCircle, Plus, Minus } from 'lucide-react';

export function InventoryAgent() {
  const inventoryItems = [
    { id: '1', name: 'Office Chair', quantity: 3, price: '200 USDC', status: 'low' },
    { id: '2', name: 'Desk Lamp', quantity: 15, price: '75 USDC', status: 'good' },
    { id: '3', name: 'Standing Desk', quantity: 0, price: '500 USDC', status: 'out' },
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Inventory Agent</h1>
        <p className="text-gray-600">Manage your stock levels, track inventory, and automate reordering</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Inventory Status */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Package2 size={18} className="mr-2 text-green-600" />
            Inventory Overview
          </h2>
          <div className="space-y-3">
            {inventoryItems.map(item => (
              <div key={item.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 text-xs rounded ${
                    item.status === 'out' ? 'bg-red-100 text-red-700' :
                    item.status === 'low' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {item.quantity} in stock
                  </span>
                  {item.status !== 'good' && <AlertCircle size={16} className="text-yellow-500" />}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full flex items-center p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100">
              <Plus size={16} className="mr-2" />
              Add New Item
            </button>
            <button className="w-full flex items-center p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100">
              <Package2 size={16} className="mr-2" />
              Update Stock Levels
            </button>
            <button className="w-full flex items-center p-3 bg-yellow-50 text-yellow-700 rounded-lg hover:bg-yellow-100">
              <AlertCircle size={16} className="mr-2" />
              Set Reorder Alerts
            </button>
          </div>
        </div>
      </div>
      
      {/* Chat Interface */}
      <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Chat with Inventory Agent</h2>
        <div className="bg-gray-50 rounded-lg p-4 h-64 overflow-y-auto">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <Package2 size={16} className="text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">Inventory Agent</p>
                <p className="text-sm text-gray-600">Hello! I can help you manage inventory, track stock levels, and set up automatic reordering. What do you need help with?</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <Package2 size={16} className="text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">Inventory Agent</p>
                <p className="text-sm text-gray-600">⚠️ Alert: Office chairs are running low (only 3 left). Would you like me to prepare a reorder?</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Ask me about inventory levels or to update stock..." 
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