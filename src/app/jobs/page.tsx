"use client";

import React from 'react';
import { Briefcase, MapPin, Search, Building, CheckCircle2 } from 'lucide-react';

export default function GovJobsPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <div className="bg-emerald-900 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Briefcase className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold mb-4">Transparent Gov Recruitment</h1>
          <p className="text-emerald-100 text-lg mb-8">
            Apply for public works jobs, view real-time recruitment statuses, and track stipends without middlemen.
          </p>
          
          <div className="bg-white rounded-lg p-2 flex max-w-2xl mx-auto shadow-lg">
            <input 
              type="text" 
              placeholder="Search roles (e.g., Ward Supervisor, Engineer)..." 
              className="flex-1 px-4 py-2 text-gray-900 outline-none rounded-l-lg"
            />
            <button className="bg-emerald-600 text-white px-6 py-2 rounded font-bold flex items-center hover:bg-emerald-700">
              <Search className="w-5 h-5 mr-2" /> Search
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Recent Openings</h2>
          <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Direct DBT Stipend Enabled
          </span>
        </div>

        <div className="grid gap-6">
          {/* Job 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center border border-emerald-100 shrink-0">
                  <Building className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Ward Development Supervisor</h3>
                  <div className="text-gray-500 text-sm mt-1 flex items-center gap-4">
                    <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> BBMP East Zone</span>
                    <span className="font-medium text-gray-700 bg-gray-100 px-2 py-0.5 rounded">₹25,000/mo</span>
                  </div>
                </div>
              </div>
              <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-bold shadow-sm hover:bg-emerald-700">
                Apply Now
              </button>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 flex gap-4 text-sm">
              <span className="text-emerald-700 bg-emerald-50 px-2 py-1 rounded flex items-center font-medium">
                <CheckCircle2 className="w-4 h-4 mr-1" /> Transparent Merit Selection
              </span>
              <span className="text-gray-500">Closes in 5 days</span>
            </div>
          </div>

          {/* Job 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center border border-blue-100 shrink-0">
                  <Building className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Data Entry Operator (Revenue)</h3>
                  <div className="text-gray-500 text-sm mt-1 flex items-center gap-4">
                    <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> Mysuru District HQ</span>
                    <span className="font-medium text-gray-700 bg-gray-100 px-2 py-0.5 rounded">₹18,000/mo</span>
                  </div>
                </div>
              </div>
              <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-bold shadow-sm hover:bg-emerald-700">
                Apply Now
              </button>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 flex gap-4 text-sm">
              <span className="text-emerald-700 bg-emerald-50 px-2 py-1 rounded flex items-center font-medium">
                <CheckCircle2 className="w-4 h-4 mr-1" /> Direct DBT Stipend
              </span>
              <span className="text-gray-500">Closes in 12 days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
