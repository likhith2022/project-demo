"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Clock, AlertTriangle, CheckCircle2, ChevronRight, User, Building, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const MOCK_SERVICES = [
  {
    id: 'APP-884210',
    type: 'Income & Caste Certificate',
    typeKn: 'ಆದಾಯ ಮತ್ತು ಜಾತಿ ಪ್ರಮಾಣಪತ್ರ',
    applicant: 'Ramesh H.',
    department: 'Revenue Department',
    appliedDate: '2026-04-28',
    status: 'Delayed',
    pendingAt: 'Nadakacheri - Indiranagar',
    officerResponsible: 'Tahsildar (Grade-II)',
    expectedSlaDays: 7,
    elapsedDays: 12,
    reason: 'Backlog due to election duties',
    progress: 60
  },
  {
    id: 'APP-884355',
    type: 'Gruha Lakshmi Scheme Registration',
    typeKn: 'ಗೃಹ ಲಕ್ಷ್ಮಿ ಯೋಜನೆ ನೋಂದಣಿ',
    applicant: 'Sowmya M.',
    department: 'Women & Child Dev.',
    appliedDate: '2026-05-08',
    status: 'Healthy',
    pendingAt: 'Document Verification Cell',
    officerResponsible: 'CDPO',
    expectedSlaDays: 15,
    elapsedDays: 2,
    reason: null,
    progress: 30
  },
  {
    id: 'APP-883902',
    type: 'Building Plan Approval',
    typeKn: 'ಕಟ್ಟಡ ಯೋಜನೆ ಅನುಮೋದನೆ',
    applicant: 'Srikanth Tech Park',
    department: 'BBMP Town Planning',
    appliedDate: '2026-03-15',
    status: 'Stalled',
    pendingAt: 'Joint Director (Town Planning)',
    officerResponsible: 'JD-TP',
    expectedSlaDays: 30,
    elapsedDays: 56,
    reason: 'Pending NoC from Fire Department',
    progress: 85
  }
];

export default function ServicesTrackerPage() {
  return (
    <div className="bg-[#f8fafc] min-h-screen pb-24">
      {/* Header */}
      <div className="bg-emerald-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-2">
            <FileText className="w-6 h-6 text-emerald-400 mr-2" />
            <h1 className="text-3xl font-extrabold tracking-tight">Public Service Delivery</h1>
          </div>
          <p className="text-emerald-100 max-w-2xl text-sm">
            Track individual government applications (Sakala). See exactly where your file is stuck and who is responsible.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* KPI Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
            <div className="text-xs font-bold text-gray-500 uppercase">My Applications</div>
            <div className="text-2xl font-black text-gray-900">3</div>
          </div>
          <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
            <div className="text-xs font-bold text-orange-600 uppercase">SLA Breached</div>
            <div className="text-2xl font-black text-orange-600">2</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 md:col-span-2 flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-emerald-600 uppercase">Sakala Guarantee</div>
              <div className="text-sm text-gray-600 font-medium mt-1">If SLA breaches by 30 days, file escalates to District Commissioner.</div>
            </div>
            <ShieldCheck className="w-8 h-8 text-emerald-500 opacity-20" />
          </div>
        </div>

        {/* Tracker List */}
        <div className="space-y-6">
          {MOCK_SERVICES.map((service, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
              key={service.id} 
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <div className={`px-6 py-3 flex justify-between items-center border-b ${
                service.status === 'Delayed' || service.status === 'Stalled' ? 'bg-red-50 border-red-100' : 'bg-gray-50 border-gray-100'
              }`}>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-gray-700">{service.id}</span>
                  {service.status === 'Delayed' && <span className="px-2 py-0.5 rounded text-xs font-bold bg-red-100 text-red-700 flex items-center"><AlertTriangle className="w-3 h-3 mr-1" /> SLA BREACHED</span>}
                  {service.status === 'Stalled' && <span className="px-2 py-0.5 rounded text-xs font-bold bg-gray-200 text-gray-700 flex items-center"><Clock className="w-3 h-3 mr-1" /> STALLED</span>}
                  {service.status === 'Healthy' && <span className="px-2 py-0.5 rounded text-xs font-bold bg-emerald-100 text-emerald-700 flex items-center"><CheckCircle2 className="w-3 h-3 mr-1" /> ON TRACK</span>}
                </div>
                <div className="text-xs font-bold text-gray-500 uppercase">{service.department}</div>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  
                  {/* Left Info */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{service.type}</h3>
                    <h4 className="text-sm text-gray-500 mb-6">{service.typeKn}</h4>
                    
                    <div className="space-y-4">
                      <div className="flex items-center text-sm">
                        <User className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-gray-600 w-24">Applicant:</span>
                        <span className="font-medium text-gray-900">{service.applicant}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-gray-600 w-24">Applied On:</span>
                        <span className="font-medium text-gray-900">{service.appliedDate}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Accountability */}
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 relative">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Current Location of File</div>
                    
                    <div className="flex gap-3 items-start mb-4">
                      <div className="p-2 bg-white rounded-lg shadow-sm border border-gray-200 shrink-0">
                        <Building className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{service.pendingAt}</div>
                        <div className="text-sm text-gray-600">Officer: <span className="font-bold">{service.officerResponsible}</span></div>
                      </div>
                    </div>

                    <div className="flex items-end justify-between mb-2">
                      <div className="text-xs text-gray-500">Processing Progress</div>
                      <div className="text-xs font-bold text-gray-900">{service.progress}%</div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-6">
                      <div className={`h-1.5 rounded-full ${service.status === 'Healthy' ? 'bg-emerald-500' : 'bg-red-500'}`} style={{ width: `${service.progress}%` }}></div>
                    </div>

                    {(service.status === 'Delayed' || service.status === 'Stalled') && (
                      <div className="bg-red-50 border border-red-100 rounded-lg p-3 text-sm">
                        <div className="font-bold text-red-800 flex items-center mb-1">
                          <AlertTriangle className="w-4 h-4 mr-1" /> SLA Breached by {service.elapsedDays - service.expectedSlaDays} days
                        </div>
                        <p className="text-red-700 font-medium text-xs">Reason provided: "{service.reason}"</p>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
