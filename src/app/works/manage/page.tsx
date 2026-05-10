"use client";

import React from 'react';
import { Activity, Plus, AlertTriangle, FileText } from 'lucide-react';

export default function ManageWorksPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <div className="bg-slate-900 text-white py-12 border-b-4 border-indigo-500">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-extrabold flex items-center">
              <Activity className="w-8 h-8 mr-3 text-indigo-400" /> Manage Public Works
            </h1>
            <p className="text-slate-300 mt-2">Officer portal to update work progress and manage tenders.</p>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded font-bold shadow flex items-center">
            <Plus className="w-5 h-5 mr-1" /> New Work Order
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
            <h2 className="text-lg font-bold text-slate-800">Active Works in your Jurisdiction (East Zone)</h2>
            <input type="text" placeholder="Search by ID or Contractor..." className="border border-slate-300 rounded px-3 py-1.5 text-sm" />
          </div>
          
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-white">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase">Work ID / Name</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase">Contractor</th>
                <th className="px-6 py-3 text-left text-xs font-bold text-slate-500 uppercase">Status</th>
                <th className="px-6 py-3 text-right text-xs font-bold text-slate-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              <tr>
                <td className="px-6 py-4">
                  <div className="text-sm font-bold text-slate-900">PRJ-2026-88</div>
                  <div className="text-xs text-slate-500">Whitefield Pipeline Relaying</div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">Ramesh Infra Ltd.</td>
                <td className="px-6 py-4">
                  <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold border border-red-200 flex items-center w-max">
                    <AlertTriangle className="w-3 h-3 mr-1" /> Stalled (Dispute)
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-indigo-600 hover:text-indigo-900 text-sm font-bold border border-indigo-200 px-3 py-1 rounded">Manage</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4">
                  <div className="text-sm font-bold text-slate-900">PRJ-2026-92</div>
                  <div className="text-xs text-slate-500">Indiranagar Pothole Filling</div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">L&T Construction</td>
                <td className="px-6 py-4">
                  <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs font-bold border border-emerald-200">In Progress</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-indigo-600 hover:text-indigo-900 text-sm font-bold border border-indigo-200 px-3 py-1 rounded">Manage</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
