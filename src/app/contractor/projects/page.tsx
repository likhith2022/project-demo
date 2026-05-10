"use client";

import React from 'react';
import { Activity, MapPin, Calendar, CheckCircle2, Clock, AlertTriangle } from 'lucide-react';

export default function ContractorProjectsPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <div className="bg-blue-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-extrabold flex items-center">
            <Activity className="w-8 h-8 mr-3 text-blue-400" /> My Assigned Tenders
          </h1>
          <p className="text-blue-200 mt-2">Manage your ongoing public works and submit progress reports.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        {/* Project 1 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Whitefield Pipeline Relaying (Phase 2)</h2>
              <div className="text-sm text-gray-500 mt-1 flex items-center">
                <MapPin className="w-4 h-4 mr-1" /> Ward 84, East Zone
              </div>
            </div>
            <span className="bg-red-100 text-red-700 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest flex items-center">
              <AlertTriangle className="w-3 h-3 mr-1" /> Disputed
            </span>
          </div>
          <div className="p-6 bg-gray-50 flex gap-4">
            <div className="flex-1">
              <div className="text-xs text-gray-500 uppercase font-bold mb-1">Contract Value</div>
              <div className="text-lg font-black text-gray-900">₹45,00,000</div>
            </div>
            <div className="flex-1">
              <div className="text-xs text-gray-500 uppercase font-bold mb-1">Next Milestone</div>
              <div className="text-lg font-bold text-gray-900">Excavation Completion</div>
            </div>
            <div className="flex-1 text-right">
              <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-bold shadow-sm hover:bg-blue-700">
                Submit Progress Report
              </button>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Indiranagar Pothole Filling</h2>
              <div className="text-sm text-gray-500 mt-1 flex items-center">
                <MapPin className="w-4 h-4 mr-1" /> Ward 72, East Zone
              </div>
            </div>
            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest flex items-center">
              <CheckCircle2 className="w-3 h-3 mr-1" /> On Track
            </span>
          </div>
          <div className="p-6 bg-gray-50 flex gap-4">
            <div className="flex-1">
              <div className="text-xs text-gray-500 uppercase font-bold mb-1">Contract Value</div>
              <div className="text-lg font-black text-gray-900">₹12,50,000</div>
            </div>
            <div className="flex-1">
              <div className="text-xs text-gray-500 uppercase font-bold mb-1">Next Milestone</div>
              <div className="text-lg font-bold text-gray-900">Final Asphalt Layer</div>
            </div>
            <div className="flex-1 text-right">
              <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-bold shadow-sm hover:bg-blue-700">
                Submit Progress Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
