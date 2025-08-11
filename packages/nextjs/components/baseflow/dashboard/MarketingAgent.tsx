import React from "react";
import { BarChart3, MessageCircle, Target, TrendingUp } from "lucide-react";

export function MarketingAgent() {
  const campaigns = [
    { id: "1", name: "Summer Sale", status: "active", reach: "2.5K", conversions: "45" },
    { id: "2", name: "New Product Launch", status: "draft", reach: "0", conversions: "0" },
    { id: "3", name: "Customer Retention", status: "completed", reach: "1.2K", conversions: "28" },
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Marketing Agent</h1>
        <p className="text-gray-600">Create campaigns, analyze performance, and grow your customer base</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Campaign Performance */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <BarChart3 size={18} className="mr-2 text-purple-600" />
            Campaign Performance
          </h2>
          <div className="space-y-3">
            {campaigns.map(campaign => (
              <div
                key={campaign.id}
                className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
              >
                <div>
                  <p className="font-medium text-gray-800">{campaign.name}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>Reach: {campaign.reach}</span>
                    <span>Conversions: {campaign.conversions}</span>
                  </div>
                </div>
                <div>
                  <span
                    className={`px-2 py-1 text-xs rounded ${
                      campaign.status === "active"
                        ? "bg-green-100 text-green-700"
                        : campaign.status === "draft"
                        ? "bg-gray-100 text-gray-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {campaign.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full flex items-center p-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100">
              <Target size={16} className="mr-2" />
              Create New Campaign
            </button>
            <button className="w-full flex items-center p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100">
              <MessageCircle size={16} className="mr-2" />
              Send Newsletter
            </button>
            <button className="w-full flex items-center p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100">
              <TrendingUp size={16} className="mr-2" />
              Analyze Performance
            </button>
          </div>
        </div>
      </div>

      {/* Marketing Insights */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Total Reach</span>
            <TrendingUp size={16} className="text-green-600" />
          </div>
          <p className="text-2xl font-bold text-gray-800">3.7K</p>
          <p className="text-xs text-green-600">+15% from last month</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Conversions</span>
            <Target size={16} className="text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-gray-800">73</p>
          <p className="text-xs text-blue-600">+8% from last month</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">ROI</span>
            <BarChart3 size={16} className="text-purple-600" />
          </div>
          <p className="text-2xl font-bold text-gray-800">284%</p>
          <p className="text-xs text-purple-600">+22% from last month</p>
        </div>
      </div>

      {/* Chat Interface */}
      <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Chat with Marketing Agent</h2>
        <div className="bg-gray-50 rounded-lg p-4 h-64 overflow-y-auto">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                <TrendingUp size={16} className="text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">Marketing Agent</p>
                <p className="text-sm text-gray-600">
                  Hi! I can help you create marketing campaigns, analyze performance, and grow your customer base. What
                  marketing goal would you like to work on?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Ask me to create a campaign or analyze performance..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
