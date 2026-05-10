"use client";

import React from 'react';
import { HardHat, MapPin, Calendar, IndianRupee, FileText, CheckCircle2, User, Building, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function WorkDetailPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-emerald-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/works" className="text-emerald-400 hover:text-white text-sm font-bold flex items-center mb-6 transition-colors">
            ← Back to Public Works
          </Link>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-4">
            <div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-800 text-emerald-200 border border-emerald-700 mb-4 uppercase tracking-widest">
                <HardHat className="w-3 h-3 mr-1" /> Active Project
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">Smart Traffic Lights Installation</h1>
              <div className="flex items-center text-emerald-100 text-sm font-medium">
                <MapPin className="w-4 h-4 mr-1" /> Indiranagar 100ft Road, Ward 72
              </div>
            </div>
            <div className="text-left md:text-right">
              <div className="text-xs text-emerald-300 font-bold uppercase tracking-widest mb-1">Sanctioned Budget</div>
              <div className="text-3xl font-black text-white">₹8,20,000</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Progress Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <div className="flex justify-between items-end mb-4">
                <h2 className="text-xl font-bold text-gray-900">Project Progress</h2>
                <span className="text-3xl font-black text-emerald-600">65%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-3 mb-6 overflow-hidden">
                <div className="bg-emerald-500 h-3 rounded-full relative">
                  <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <div className="text-gray-500 font-medium mb-1">Start Date</div>
                  <div className="font-bold text-gray-900">April 02, 2026</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <div className="text-gray-500 font-medium mb-1">Expected End</div>
                  <div className="font-bold text-gray-900">May 15, 2026</div>
                </div>
                <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-100 col-span-2">
                  <div className="text-emerald-700 font-medium mb-1">Current Milestone</div>
                  <div className="font-bold text-emerald-900">Wiring and Sensor Setup</div>
                </div>
              </div>
            </div>

            {/* Contractor & Tenders */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-900 flex items-center">
                  <Building className="w-5 h-5 mr-2 text-gray-500" /> Contractor Details
                </h2>
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">L1 Bidder</span>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                    <User className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">TechSolutions Ltd</h3>
                    <div className="text-sm text-gray-500 font-medium">License: KRT-CON-2021-042</div>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Tender ID</span>
                    <span className="font-bold text-gray-900">TND-2026-BBMP-04</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Initial Bid Amount</span>
                    <span className="font-bold text-gray-900">₹8,15,000</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span className="text-gray-500">Contractor Trust Score</span>
                    <span className="font-bold text-emerald-600 flex items-center"><ShieldCheck className="w-4 h-4 mr-1"/> 92/100 (Excellent)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            
            {/* Payment Ledger Snippet */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                <IndianRupee className="w-5 h-5 mr-2 text-emerald-500" /> Payment Schedule
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center text-emerald-700 font-bold">
                    <CheckCircle2 className="w-4 h-4 mr-2" /> Advance (20%)
                  </div>
                  <div className="font-mono text-gray-900">₹1,64,000</div>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center text-gray-500 font-medium">
                    <div className="w-4 h-4 rounded-full border-2 border-gray-300 mr-2"></div> Milestone 1 (40%)
                  </div>
                  <div className="font-mono text-gray-900">₹3,28,000</div>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center text-gray-500 font-medium">
                    <div className="w-4 h-4 rounded-full border-2 border-gray-300 mr-2"></div> Final (40%)
                  </div>
                  <div className="font-mono text-gray-900">₹3,28,000</div>
                </div>
              </div>
              <button className="w-full mt-6 py-2 text-sm font-bold text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors">
                View Full Treasury Ledger
              </button>
            </div>

            {/* Official Documents */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-blue-500" /> Public Documents
              </h2>
              <div className="space-y-3">
                <button className="w-full text-left p-3 rounded-lg border border-gray-100 hover:bg-blue-50 hover:border-blue-200 transition-colors flex justify-between items-center group">
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700">Detailed Project Report (DPR)</span>
                  <span className="text-xs text-gray-400 font-mono">.PDF</span>
                </button>
                <button className="w-full text-left p-3 rounded-lg border border-gray-100 hover:bg-blue-50 hover:border-blue-200 transition-colors flex justify-between items-center group">
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700">Work Order Copy</span>
                  <span className="text-xs text-gray-400 font-mono">.PDF</span>
                </button>
                <button className="w-full text-left p-3 rounded-lg border border-gray-100 hover:bg-blue-50 hover:border-blue-200 transition-colors flex justify-between items-center group">
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700">Environmental Clearance</span>
                  <span className="text-xs text-gray-400 font-mono">.PDF</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
