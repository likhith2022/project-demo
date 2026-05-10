"use client";

import React from 'react';
import { FileText, IndianRupee, Clock, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function ContractorInvoicesPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <div className="bg-blue-900 text-white py-12 border-b-4 border-blue-500">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-extrabold flex items-center">
            <IndianRupee className="w-8 h-8 mr-3 text-emerald-400" /> Invoice & Payments
          </h1>
          <p className="text-blue-200 mt-2">Track treasury releases, pending invoices, and escrow statuses.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* KPI Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Total Outstanding</div>
            <div className="text-3xl font-black text-gray-900">₹8,45,000</div>
          </div>
          <div className="bg-orange-50 p-6 rounded-xl border border-orange-200 shadow-sm relative overflow-hidden">
            <div className="absolute left-0 top-0 w-1 h-full bg-orange-500"></div>
            <div className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-1 flex items-center">
              <Clock className="w-4 h-4 mr-1" /> Blocked at Treasury
            </div>
            <div className="text-3xl font-black text-orange-600">₹4,20,000</div>
          </div>
          <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200 shadow-sm relative overflow-hidden">
            <div className="absolute left-0 top-0 w-1 h-full bg-emerald-500"></div>
            <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1 flex items-center">
              <CheckCircle2 className="w-4 h-4 mr-1" /> Paid This Month
            </div>
            <div className="text-3xl font-black text-emerald-600">₹12,50,000</div>
          </div>
        </div>

        {/* Invoice List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Invoice / Project</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Amount</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Submitted</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-bold text-gray-900">INV-2025-084</div>
                  <div className="text-xs text-gray-500">Whitefield Pipeline Relaying (Phase 1)</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">₹4,20,000</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Nov 15, 2025</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 inline-flex text-xs leading-5 font-bold rounded bg-red-100 text-red-800 border border-red-200">
                    Treasury Frozen (Audit)
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-bold text-gray-900">INV-2026-012</div>
                  <div className="text-xs text-gray-500">Indiranagar Pothole Filling</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">₹4,25,000</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">April 28, 2026</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 inline-flex text-xs leading-5 font-bold rounded bg-orange-100 text-orange-800 border border-orange-200">
                    Awaiting Engineer Sign-off
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-bold text-gray-900">INV-2026-003</div>
                  <div className="text-xs text-gray-500">Koramangala Storm Water Drain</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">₹12,50,000</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mar 10, 2026</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 inline-flex text-xs leading-5 font-bold rounded bg-emerald-100 text-emerald-800 border border-emerald-200">
                    Paid
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
