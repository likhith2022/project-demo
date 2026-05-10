"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, Clock, Users, ArrowLeft, CheckCircle2, 
  XCircle, FileText, HardHat, ShieldCheck, Flame, Info, MessageSquare
} from 'lucide-react';
import Link from 'next/link';
import { PublicIssue } from '@/types/issues';

// Realistic Mock Data for a "Stalled" Issue
const mockIssue: PublicIssue = {
  id: 'ISS-99201',
  titleEn: 'Massive Pothole Network on Indiranagar 100ft Road',
  titleKn: 'ಇಂದಿರಾನಗರ 100ft ರಸ್ತೆಯಲ್ಲಿ ಬೃಹತ್ ಗುಂಡಿಗಳ ಜಾಲ',
  category: 'Roads & Potholes',
  location: 'Ward 80, Indiranagar',
  healthStatus: 'Delayed',
  affectedCitizensCount: 143,
  pressure: {
    level: 'HIGH',
    voteCount: 12422,
    mlaMentions: 4,
    escalationRequests: 3
  },
  delayInfo: {
    isDelayed: true,
    pendingAtOffice: 'Assistant Executive Engineer (AEE) Office, East Zone',
    pendingForDays: 17,
    expectedSlaDays: 7,
    severity: 'High',
    reason: 'Contractor payment dispute from previous project'
  },
  timelineEvents: [
    {
      id: 'EV-01',
      type: 'CitizenAction',
      titleEn: 'Issue Raised',
      titleKn: 'ದೂರು ದಾಖಲಿಸಲಾಗಿದೆ',
      timestamp: '2026-04-10T08:30:00Z',
      description: 'Citizen uploaded 3 photos of severe potholes causing accidents.',
      actor: 'Verified Citizen (Anonymized)'
    },
    {
      id: 'EV-02',
      type: 'GovernmentAction',
      titleEn: 'Ward Officer Assigned',
      titleKn: 'ವಾರ್ಡ್ ಅಧಿಕಾರಿಯನ್ನು ನಿಯೋಜಿಸಲಾಗಿದೆ',
      timestamp: '2026-04-12T10:15:00Z',
      description: 'Ramesh K. assigned to inspect the site.',
      actor: 'BBMP System'
    },
    {
      id: 'EV-03',
      type: 'GovernmentAction',
      titleEn: 'Engineer Inspection Completed',
      titleKn: 'ಎಂಜಿನಿಯರ್ ತಪಾಸಣೆ ಪೂರ್ಣಗೊಂಡಿದೆ',
      timestamp: '2026-04-15T14:20:00Z',
      description: 'Damage assessed. Estimate of ₹12.5 Lakhs proposed for immediate relaying.',
      actor: 'Assistant Engineer (AE)'
    },
    {
      id: 'EV-04',
      type: 'AdministrativeDelay',
      titleEn: 'File Pending Approval',
      titleKn: 'ಕಡತ ಅನುಮೋದನೆಗೆ ಬಾಕಿ ಇದೆ',
      timestamp: '2026-04-20T09:00:00Z',
      description: 'Estimate file sent to Zonal Office. Awaiting budget sanction.',
      actor: 'System Auto-Flag'
    },
    {
      id: 'EV-05',
      type: 'PublicOversight',
      titleEn: 'Escalation Triggered',
      titleKn: 'ಎಸ್ಕಲೇಶನ್ ಪ್ರಚೋದಿಸಲಾಗಿದೆ',
      timestamp: '2026-04-25T11:45:00Z',
      description: 'Issue crossed 10,000 votes. Auto-escalated to Zonal Commissioner.',
      actor: 'Citizen Pressure Engine'
    },
    {
      id: 'EV-06',
      type: 'GovernmentAction',
      titleEn: 'Budget Sanctioned',
      titleKn: 'ಬಜೆಟ್ ಮಂಜೂರಾಗಿದೆ',
      timestamp: '2026-04-28T16:30:00Z',
      description: '₹12.5 Lakhs sanctioned from Ward Emergency Fund.',
      actor: 'Zonal Commissioner'
    },
    {
      id: 'EV-07',
      type: 'AdministrativeDelay',
      titleEn: 'Contractor Delay',
      titleKn: 'ಗುತ್ತಿಗೆದಾರರ ವಿಳಂಬ',
      timestamp: '2026-05-02T10:00:00Z',
      description: 'Work order issued but contractor requested extension due to payment dispute on a previous project.',
      actor: 'BBMP Projects Division'
    }
  ],
  createdAt: '2026-04-10T08:30:00Z',
  updatedAt: '2026-05-02T10:00:00Z'
};

export default function IssueTimelinePage() {
  const issue = mockIssue;
  const [showVerification, setShowVerification] = useState(false);

  // Helper to style health status
  const getHealthStyles = (status: string) => {
    switch(status) {
      case 'Healthy': return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Delayed': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'Stalled': return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'Under Audit': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Helper for timeline icons
  const getEventIcon = (type: string) => {
    switch(type) {
      case 'CitizenAction': return <Users className="w-5 h-5 text-blue-600" />;
      case 'GovernmentAction': return <FileText className="w-5 h-5 text-emerald-600" />;
      case 'AdministrativeDelay': return <Clock className="w-5 h-5 text-orange-600" />;
      case 'PublicOversight': return <Flame className="w-5 h-5 text-red-600" />;
      case 'Finalization': return <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
      default: return <Info className="w-5 h-5 text-gray-600" />;
    }
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-24 font-sans text-gray-900">
      {/* Header Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 text-gray-500 hover:text-emerald-600 hover:bg-gray-100 rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="text-sm font-bold text-gray-500 truncate">
              {issue.id} <span className="mx-2">•</span> {issue.location}
            </div>
          </div>
          <div className={`px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wide flex items-center ${getHealthStyles(issue.healthStatus)}`}>
            {issue.healthStatus === 'Delayed' && <Clock className="w-3 h-3 mr-1.5" />}
            Status: {issue.healthStatus}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid lg:grid-cols-3 gap-8">
        
        {/* Left Column: Timeline (The Soul) */}
        <div className="lg:col-span-2">
          
          <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-1">
                {issue.titleEn}
              </h1>
              <h2 className="text-xl text-gray-500 font-medium mb-4">
                {issue.titleKn}
              </h2>
              <div className="flex items-center text-sm text-gray-600 bg-white border border-gray-200 inline-flex px-3 py-1.5 rounded-lg shadow-sm">
                <Users className="w-4 h-4 mr-2 text-blue-500" />
                <span className="font-bold text-gray-900 mr-1">{issue.affectedCitizensCount}</span> citizens directly affected
              </div>
            </div>
            
            <Link 
              href={`/audit/${issue.id}`}
              className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white font-mono text-xs font-bold uppercase tracking-widest rounded-lg transition-colors flex items-center shrink-0 shadow-md"
            >
              <FileText className="w-4 h-4 mr-2" /> Enter Audit Mode
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-10 relative overflow-hidden">
            {/* The Vertical Line */}
            <div className="absolute top-10 bottom-10 left-[39px] md:left-[55px] w-0.5 bg-gray-200"></div>

            <div className="space-y-8 relative">
              {issue.timelineEvents.map((event, index) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={event.id} 
                  className="flex gap-4 md:gap-6"
                >
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0 z-10 border-4 border-white shadow-sm ${
                    event.type === 'AdministrativeDelay' ? 'bg-orange-50' :
                    event.type === 'PublicOversight' ? 'bg-red-50' : 'bg-gray-50'
                  }`}>
                    {getEventIcon(event.type)}
                  </div>
                  
                  <div className={`flex-1 rounded-xl p-5 border ${
                    event.type === 'AdministrativeDelay' ? 'bg-orange-50/30 border-orange-100' :
                    event.type === 'PublicOversight' ? 'bg-red-50/30 border-red-100' : 'bg-white border-gray-100 shadow-sm hover:border-gray-200 transition-colors'
                  }`}>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-2">
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{event.titleEn}</h3>
                        <div className="text-sm text-gray-500 font-medium mb-2">{event.titleKn}</div>
                      </div>
                      <span className="text-xs font-semibold text-gray-500 whitespace-nowrap bg-white px-2 py-1 rounded border border-gray-100">
                        {new Date(event.timestamp).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      {event.description}
                    </p>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center">
                      <ShieldCheck className="w-3 h-3 mr-1" /> By: {event.actor}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Active Pending State Visualizer */}
              {issue.delayInfo?.isDelayed && (
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
                  className="flex gap-4 md:gap-6 mt-4"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0 z-10 border-4 border-white bg-white">
                    <span className="flex h-3 w-3 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                    </span>
                  </div>
                  <div className="flex-1 py-3 text-orange-600 font-bold italic flex items-center">
                    Awaiting next administrative action...
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Realism Widgets */}
        <div className="space-y-6">
          
          {/* Government Delay Visibility */}
          {issue.delayInfo?.isDelayed && (
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <h3 className="font-bold text-red-900">SLA Breached</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/60 p-3 rounded-lg border border-red-100">
                  <div className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">Pending At</div>
                  <div className="font-bold text-gray-900 text-sm leading-tight">{issue.delayInfo.pendingAtOffice}</div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/60 p-3 rounded-lg border border-red-100 text-center">
                    <div className="text-2xl font-black text-red-600">{issue.delayInfo.pendingForDays}</div>
                    <div className="text-xs font-bold text-gray-500 uppercase">Days Elapsed</div>
                  </div>
                  <div className="bg-white/60 p-3 rounded-lg border border-red-100 text-center opacity-70">
                    <div className="text-2xl font-black text-gray-800">{issue.delayInfo.expectedSlaDays}</div>
                    <div className="text-xs font-bold text-gray-500 uppercase">Expected SLA</div>
                  </div>
                </div>

                <div className="pt-3 border-t border-red-200/50">
                  <div className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">Why is this delayed?</div>
                  <div className="text-sm font-medium text-gray-900">{issue.delayInfo.reason}</div>
                </div>
              </div>
            </div>
          )}

          {/* Citizen Pressure Level */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center">
              <Flame className="w-5 h-5 text-orange-500 mr-2" /> Citizen Pressure
            </h3>
            
            <div className="flex items-end justify-between mb-6">
              <div className="text-sm text-gray-500 font-medium">Current Level</div>
              <div className="text-xl font-black text-red-600 tracking-widest">{issue.pressure.level}</div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600 flex items-center"><Users className="w-4 h-4 mr-2" /> Public Votes</span>
                <span className="font-bold text-gray-900">{issue.pressure.voteCount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600 flex items-center"><MessageSquare className="w-4 h-4 mr-2" /> MLA Mentions</span>
                <span className="font-bold text-gray-900">{issue.pressure.mlaMentions}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600 flex items-center"><AlertTriangle className="w-4 h-4 mr-2" /> Escalations</span>
                <span className="font-bold text-red-600">{issue.pressure.escalationRequests}</span>
              </div>
            </div>

            <button className="w-full mt-6 py-3 bg-white border-2 border-red-100 hover:bg-red-50 text-red-600 font-bold rounded-xl transition-colors shadow-sm flex justify-center items-center">
              <Flame className="w-4 h-4 mr-2" /> Escalate Further
            </button>
          </div>

          {/* Public Verification Loop Demo CTA */}
          <div className="bg-gradient-to-br from-emerald-800 to-emerald-950 rounded-2xl shadow-lg p-6 text-white border border-emerald-700">
            <h3 className="text-lg font-bold mb-2">Public Audit Layer</h3>
            <p className="text-sm text-emerald-100 mb-6 leading-relaxed">
              Once this issue is marked 'Completed' by the contractor, it requires 5 verified citizens from Ward 80 to digitally sign off before funds are permanently settled.
            </p>
            <button 
              onClick={() => setShowVerification(true)}
              className="w-full py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-xl transition-colors backdrop-blur-sm"
            >
              Preview Audit Mode
            </button>
          </div>

        </div>
      </div>

      {/* Verification Mock Modal */}
      {showVerification && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative"
          >
            <button onClick={() => setShowVerification(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <XCircle className="w-6 h-6" />
            </button>
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <ShieldCheck className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Citizen Sign-off</h3>
            <p className="text-gray-600 mb-6 text-sm">
              The contractor claims this pothole has been fixed. As a resident of Ward 80, please verify the ground reality. Submitting false audits carries penalties.
            </p>
            
            <div className="space-y-3">
              <button className="w-full py-3 px-4 border-2 border-emerald-500 text-emerald-700 font-bold rounded-xl hover:bg-emerald-50 transition-colors flex justify-center items-center">
                <CheckCircle2 className="w-5 h-5 mr-2" /> Yes, work is completed
              </button>
              <button className="w-full py-3 px-4 border-2 border-red-500 text-red-700 font-bold rounded-xl hover:bg-red-50 transition-colors flex justify-center items-center">
                <XCircle className="w-5 h-5 mr-2" /> No, still broken (Reject)
              </button>
            </div>
          </motion.div>
        </div>
      )}

    </div>
  );
}
