"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IndianRupee, ArrowDownLeft, ArrowUpRight, Filter, Download, Building, FileText } from 'lucide-react';

export default function LedgerDashboard() {
  const [filter, setFilter] = useState('All');

  const transactions = [
    {
      id: 'TXN-8492',
      date: 'Today, 10:45 AM',
      contractor: 'L&T Construction',
      project: 'Whitefield Pipeline Repair',
      amount: 4500000,
      type: 'payment', // payment released
      status: 'Success',
      officer: 'Siddaramaiah K.',
    },
    {
      id: 'INV-2041',
      date: 'Yesterday, 04:30 PM',
      contractor: 'Ramesh Infra',
      project: 'Indiranagar Pothole Filling',
      amount: 1250000,
      type: 'invoice', // invoice raised
      status: 'Pending Verification',
      officer: 'Pending',
    },
    {
      id: 'TXN-8490',
      date: 'May 08, 11:15 AM',
      contractor: 'TechSolutions Ltd',
      project: 'Smart Traffic Lights - Phase 1',
      amount: 820000,
      type: 'payment',
      status: 'Success',
      officer: 'Shivakumar D.',
    },
    {
      id: 'SNC-1022',
      date: 'May 05, 09:00 AM',
      contractor: 'Government of Karnataka',
      project: 'Bengaluru Peripheral Ring Road',
      amount: 50000000,
      type: 'sanction', // budget sanctioned
      status: 'Approved',
      officer: 'Finance Dept',
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b border-gray-200 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
            <IndianRupee className="w-8 h-8 mr-2 text-emerald-600" /> Live Public Ledger
          </h1>
          <p className="text-gray-600">A UPI-style statement for government spending. Full transparency.</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-3">
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Filter className="w-4 h-4 mr-2" /> Filter
          </button>
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Download className="w-4 h-4 mr-2" /> Export
          </button>
        </div>
      </div>

      <div className="bg-white shadow-xl shadow-gray-200/40 rounded-2xl border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
          <div className="text-sm text-gray-500">Auto-updating live...</div>
        </div>
        
        <ul className="divide-y divide-gray-100">
          {transactions.map((txn, index) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              key={txn.id}
            >
              <li className="p-6 hover:bg-emerald-50/50 transition-colors cursor-pointer group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      txn.type === 'payment' ? 'bg-red-100 text-red-600' : 
                      txn.type === 'sanction' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                    }`}>
                      {txn.type === 'payment' ? <ArrowUpRight className="w-6 h-6" /> : 
                       txn.type === 'sanction' ? <ArrowDownLeft className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 mb-1 group-hover:text-emerald-700 transition-colors">
                        {txn.type === 'payment' ? 'Payment Released To' : 
                         txn.type === 'sanction' ? 'Budget Sanctioned For' : 'Invoice Raised By'} 
                        {' '}<span className="text-gray-900">{txn.contractor}</span>
                      </p>
                      <p className="text-sm text-gray-500 flex items-center">
                        <Building className="w-3 h-3 mr-1" /> {txn.project}
                      </p>
                      <div className="flex items-center mt-2 space-x-4 text-xs text-gray-500">
                        <span>{txn.date}</span>
                        <span>•</span>
                        <span>Ref: {txn.id}</span>
                        <span>•</span>
                        <span>Officer: <span className="font-medium text-gray-700">{txn.officer}</span></span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className={`text-xl font-bold ${
                      txn.type === 'payment' ? 'text-gray-900' : 
                      txn.type === 'sanction' ? 'text-emerald-600' : 'text-gray-600'
                    }`}>
                      {txn.type === 'payment' ? '-' : txn.type === 'sanction' ? '+' : ''}
                      ₹{txn.amount.toLocaleString('en-IN')}
                    </p>
                    <p className={`text-sm mt-1 font-semibold ${
                      txn.status === 'Success' || txn.status === 'Approved' ? 'text-green-500' : 'text-orange-500'
                    }`}>
                      {txn.status}
                    </p>
                  </div>
                </div>
              </li>
            </motion.div>
          ))}
        </ul>
        
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 text-center">
          <button className="text-sm font-medium text-emerald-600 hover:text-emerald-500">
            View Older Transactions
          </button>
        </div>
      </div>
    </div>
  );
}
