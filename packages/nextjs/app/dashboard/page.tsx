"use client";

import React, { useState } from 'react';
import { Sidebar } from "~~/components/baseflow-migrated/Sidebar";
import { SalesAgent } from "~~/components/baseflow-migrated/agents/SalesAgent";
import { InventoryAgent } from "~~/components/baseflow-migrated/agents/InventoryAgent";
import { MarketingAgent } from "~~/components/baseflow-migrated/agents/MarketingAgent";
import { MetricsWidget } from "~~/components/baseflow-migrated/widgets/MetricsWidget";
import { MiniAppWidget } from "~~/components/baseflow-migrated/widgets/MiniAppWidget";
import { WalletWidget } from "~~/components/baseflow-migrated/widgets/WalletWidget";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  const renderContent = () => {
    switch (activeTab) {
      case 'sales':
        return <SalesAgent />;
      case 'inventory':
        return <InventoryAgent />;
      case 'marketing':
        return <MarketingAgent />;
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            <MetricsWidget />
            <MiniAppWidget />
            <WalletWidget />
          </div>
        );
    }
  };

  return (
    <div className="flex h-full bg-gray-50 baseflow-dashboard" data-theme="baseflow">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 overflow-y-auto bg-gray-50">
        {renderContent()}
      </main>
    </div>
  );
}