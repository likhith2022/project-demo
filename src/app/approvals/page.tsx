"use client";

import React from 'react';
import { FileText, Check, X, Clock, User, AlertTriangle } from 'lucide-react';

export default function ApprovalsPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <div className="bg-slate-900 text-white py-12 border-b-4 border-indigo-500">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-extrabold flex items-center">
            <FileText className="w-8 h-8 mr-3 text-indigo-400" /> Pending Approvals
          </h1>
          <p className="text-slate-300 mt-2">Officer Action Inbox. Review files, budgets, and contractor reports.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-slate-800">Files Requiring Your Signature</h2>
          <span className="text-sm font-bold text-slate-500 uppercase">142 Pending</span>
        </div>

        <div className="space-y-4">
          {/* Approval Item 1 */}
          <div className="bg-white p-5 rounded-xl border border-red-200 shadow-sm relative overflow-hidden">
            <div className="absolute left-0 top-0 w-1 h-full bg-red-500"></div>
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold bg-red-100 text-red-700 px-2 py-0.5 rounded uppercase flex items-center">
                    <AlertTriangle className="w-3 h-3 mr-1" /> SLA Breached by 17 Days
                  </span>
                  <span className="text-xs font-mono text-slate-500">File: ISS-99201</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Issue Work Order: Whitefield Pipeline</h3>
                <p className="text-sm text-slate-600 mt-1">Contractor: Ramesh Infra Ltd. Budget: ₹12.5L</p>
                <div className="mt-3 text-xs text-orange-600 bg-orange-50 inline-block px-2 py-1 border border-orange-100 rounded">
                  Note: Treasury has frozen previous payments. Contractor refuses to accept until cleared.
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center justify-center p-2 rounded border border-slate-200 hover:bg-slate-50 text-slate-600 tooltip" title="Reject / Send Back">
                  <X className="w-5 h-5" />
                </button>
                <button className="flex items-center justify-center px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-sm">
                  <Check className="w-4 h-4 mr-2" /> Sign & Approve
                </button>
              </div>
            </div>
          </div>

          {/* Approval Item 2 */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute left-0 top-0 w-1 h-full bg-slate-300"></div>
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-slate-500">File: IND-INSP-0415</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">Verify Inspection Report: Indiranagar Potholes</h3>
                <p className="text-sm text-slate-600 mt-1">Submitted by: Ward Inspector. Citizen Verification: Pending.</p>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center justify-center p-2 rounded border border-slate-200 hover:bg-slate-50 text-slate-600 tooltip" title="Reject / Send Back">
                  <X className="w-5 h-5" />
                </button>
                <button className="flex items-center justify-center px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-sm">
                  <Check className="w-4 h-4 mr-2" /> Sign & Approve
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
