"use client";

import React from 'react';
import { User, Search, MapPin, Building, AlertTriangle, ShieldCheck, FileText } from 'lucide-react';
import Link from 'next/link';

export default function OfficerDirectoryPage() {
  const officers = [
    {
      id: 'OFF-142',
      name: 'Ramesh K.',
      role: 'Assistant Executive Engineer',
      dept: 'BBMP Projects (East)',
      pending: 142,
      breaches: 38,
      avgResponse: '14.2 Days',
      status: 'Warning',
      rating: '42%'
    },
    {
      id: 'OFF-088',
      name: 'Sowmya M.',
      role: 'Tahsildar (Grade-II)',
      dept: 'Revenue Department',
      pending: 45,
      breaches: 2,
      avgResponse: '2.4 Days',
      status: 'Excellent',
      rating: '94%'
    },
    {
      id: 'OFF-219',
      name: 'Prakash R.',
      role: 'Zonal Commissioner',
      dept: 'BBMP East Zone',
      pending: 210,
      breaches: 85,
      avgResponse: '21.5 Days',
      status: 'Critical',
      rating: '28%'
    }
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-24">
      {/* Header */}
      <div className="bg-slate-900 text-white py-12 border-b-4 border-blue-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <User className="w-8 h-8 text-blue-400 mr-3" />
            <h1 className="text-3xl font-extrabold tracking-tight">Public Officer Directory</h1>
          </div>
          <p className="text-slate-300 max-w-2xl text-sm md:text-base mb-8">
            Search for any government officer, view their live workload, SLA breach history, and public accountability rating.
          </p>

          <div className="bg-white rounded-lg p-2 flex max-w-3xl shadow-lg">
            <input 
              type="text" 
              placeholder="Search by officer name, department, or ward..." 
              className="flex-1 px-4 py-2 text-gray-900 outline-none rounded-l-lg font-medium"
            />
            <button className="bg-blue-600 text-white px-8 py-2 rounded font-bold flex items-center hover:bg-blue-700">
              <Search className="w-5 h-5 mr-2" /> Search
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {officers.map(officer => (
            <div key={officer.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200">
                    <User className="w-6 h-6 text-slate-500" />
                  </div>
                  <div className={`px-2 py-1 rounded text-xs font-bold flex items-center ${
                    officer.status === 'Excellent' ? 'bg-emerald-100 text-emerald-700' :
                    officer.status === 'Warning' ? 'bg-orange-100 text-orange-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {officer.status === 'Excellent' ? <ShieldCheck className="w-3 h-3 mr-1" /> : <AlertTriangle className="w-3 h-3 mr-1" />}
                    {officer.status}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{officer.name}</h3>
                <div className="text-sm font-medium text-gray-600 mb-1">{officer.role}</div>
                <div className="text-xs text-gray-500 flex items-center">
                  <Building className="w-3 h-3 mr-1" /> {officer.dept}
                </div>
              </div>

              <div className="p-6 grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Pending Files</div>
                  <div className="text-xl font-black text-slate-900">{officer.pending}</div>
                </div>
                <div className={`p-3 rounded-lg border ${officer.breaches > 10 ? 'bg-red-50 border-red-100' : 'bg-slate-50 border-slate-100'}`}>
                  <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">SLA Breaches</div>
                  <div className={`text-xl font-black ${officer.breaches > 10 ? 'text-red-600' : 'text-slate-900'}`}>{officer.breaches}</div>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 col-span-2 flex justify-between items-center">
                  <div>
                    <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Avg Response</div>
                    <div className="text-lg font-black text-slate-900">{officer.avgResponse}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Approval Rating</div>
                    <div className={`text-lg font-black ${
                      parseInt(officer.rating) > 80 ? 'text-emerald-600' : 
                      parseInt(officer.rating) > 40 ? 'text-orange-500' : 'text-red-600'
                    }`}>{officer.rating}</div>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6">
                <Link href={`/audit/ISS-99201`} className="w-full flex justify-center items-center py-2 text-sm font-bold text-slate-600 border border-slate-200 hover:bg-slate-50 rounded transition-colors">
                  <FileText className="w-4 h-4 mr-2" /> View Audit Logs
                </Link>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
