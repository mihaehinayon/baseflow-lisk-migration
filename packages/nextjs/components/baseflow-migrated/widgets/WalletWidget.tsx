import React from "react";
import { ArrowDownLeft, ArrowUpRight, Clock, Wallet } from "lucide-react";
import { useAccount, useBalance } from "wagmi";
import { useTargetNetwork } from "~~/hooks/scaffold-eth";

export function WalletWidget() {
  const { address, isConnected } = useAccount();
  const { targetNetwork } = useTargetNetwork();
  const { data: balance } = useBalance({
    address: address,
  });
  const transactions = [
    {
      id: "1",
      type: "received",
      amount: "0.05 ETH",
      from: "@customer1",
      time: "2h ago",
    },
    {
      id: "2",
      type: "sent",
      amount: "0.02 ETH",
      to: "Supplier",
      time: "1d ago",
    },
    {
      id: "3",
      type: "pending",
      amount: "0.01 ETH",
      from: "@customer2",
      time: "Pending",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center">
          <Wallet size={18} className="mr-2 text-blue-600" />
          {isConnected ? "Connected Wallet" : "Base Smart Wallet"}
        </h2>
        <button className="text-sm text-blue-600 hover:underline">View Details</button>
      </div>
      {isConnected && address && (
        <div className="mb-3">
          <p className="text-xs text-gray-500">Address</p>
          <p className="font-mono text-sm text-gray-800">
            {address.slice(0, 6)}...{address.slice(-4)}
          </p>
        </div>
      )}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-1">
          <p className="text-sm text-gray-600">Available Balance</p>
          <button className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded hover:bg-blue-200">Withdraw</button>
        </div>
        {isConnected && balance ? (
          <>
            <p className="text-2xl font-bold text-gray-800">
              {parseFloat(balance.formatted).toFixed(4)} {balance.symbol}
            </p>
            <p className="text-sm text-gray-600">Network: {targetNetwork.name}</p>
          </>
        ) : (
          <>
            <p className="text-2xl font-bold text-gray-800">--</p>
            <p className="text-sm text-gray-600">Connect wallet to view balance</p>
          </>
        )}
      </div>
      <div>
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-medium text-gray-800">Recent Transactions</p>
          <button className="text-xs text-gray-500 hover:underline">View all</button>
        </div>
        <div className="divide-y divide-gray-200">
          {transactions.map(tx => (
            <div key={tx.id} className="py-2 flex items-center justify-between">
              <div className="flex items-center">
                {tx.type === "received" && <ArrowDownLeft size={16} className="mr-2 text-green-600" />}
                {tx.type === "sent" && <ArrowUpRight size={16} className="mr-2 text-red-600" />}
                {tx.type === "pending" && <Clock size={16} className="mr-2 text-yellow-600" />}
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {tx.type === "received"
                      ? `From ${tx.from}`
                      : tx.type === "sent"
                      ? `To ${tx.to}`
                      : `Pending from ${tx.from}`}
                  </p>
                  <p className="text-xs text-gray-500">{tx.time}</p>
                </div>
              </div>
              <p
                className={`font-medium ${
                  tx.type === "received" ? "text-green-600" : tx.type === "sent" ? "text-red-600" : "text-yellow-600"
                }`}
              >
                {tx.amount}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
