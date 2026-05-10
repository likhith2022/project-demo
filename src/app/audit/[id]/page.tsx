"use client";

import React, { useState } from 'react';
import { 
  ArrowLeft, FileSignature, Cpu, CheckCircle2, 
  XCircle, Clock, User, Building,
  AlertTriangle, FolderOpen, AlertOctagon,
  IndianRupee, Fingerprint, RefreshCcw, HandHeart
} from 'lucide-react';
import Link from 'next/link';

export default function CitizenAuditPage() {
  const [activeTab, setActiveTab] = useState<'chain' | 'financial' | 'officers'>('chain');

  return (
    <div className="bg-gray-950 min-h-screen pb-24 text-gray-300 font-mono">
      {/* Header Bar */}
      <div className="bg-gray-900 border-b border-gray-800 sticky top-16 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/issues/ISS-99201" className="p-2 text-gray-400 hover:text-emerald-400 hover:bg-gray-800 rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="text-sm font-bold text-gray-400 flex items-center">
              <FileSignature className="w-4 h-4 mr-2" /> CITIZEN AUDIT MODE <span className="mx-2">•</span> ISS-99201
            </div>
          </div>
          <div className="flex gap-2">
            <span className="px-2 py-1 rounded border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-bold flex items-center uppercase tracking-widest">
              <AlertTriangle className="w-3 h-3 mr-1" /> Disputed
            </span>
            <span className="px-2 py-1 rounded border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-bold flex items-center uppercase tracking-widest">
              <Clock className="w-3 h-3 mr-1" /> Under Audit
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* AI Executive Summary */}
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 mb-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
          <div className="flex items-start gap-4">
            <Cpu className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
            <div>
              <h3 className="text-sm font-bold text-blue-400 mb-2 uppercase tracking-widest">Karnataka Priority Engine AI Analysis</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4 font-sans">
                This file has been stalled for 17 days due to a dispute between the BBMP Projects Division and the assigned contractor (Ramesh Infra) over unpaid invoices from a previous 2025 project. The structural failure is financial, not technical. The AEE holds the file, but Treasury has not released funds.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-bold bg-gray-800 text-gray-400 px-2 py-1 rounded">Keywords:</span>
                <span className="text-xs border border-gray-700 text-gray-300 px-2 py-1 rounded">Tender Dispute</span>
                <span className="text-xs border border-gray-700 text-gray-300 px-2 py-1 rounded">Treasury Delay</span>
                <span className="text-xs border border-gray-700 text-gray-300 px-2 py-1 rounded">High Public Pressure</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contradiction & Red Flag Engine */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-red-950/20 border border-red-900/50 rounded-lg p-5">
            <h3 className="text-sm font-bold text-red-500 uppercase tracking-widest mb-4 flex items-center">
              <RefreshCcw className="w-4 h-4 mr-2" /> Contradiction Detected
            </h3>
            <div className="bg-gray-900 border border-gray-800 p-4 rounded text-sm text-gray-300 font-sans">
              <span className="font-bold text-red-400">Conflict:</span> Contractor marked preliminary excavation as 'Completed' on May 1st, BUT 47 citizens reported heavy machinery hasn't arrived as of May 8th. Evidence photos contradict contractor log.
            </div>
          </div>

          <div className="bg-orange-950/20 border border-orange-900/50 rounded-lg p-5">
            <h3 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-4 flex items-center">
              <AlertOctagon className="w-4 h-4 mr-2" /> System Red Flags
            </h3>
            <ul className="space-y-2 text-sm font-sans text-gray-300">
              <li className="flex items-center"><AlertTriangle className="w-4 h-4 text-orange-500 mr-2" /> Repeated SLA breaches by Assistant Engineer</li>
              <li className="flex items-center"><AlertTriangle className="w-4 h-4 text-orange-500 mr-2" /> Contractor history poor (3 previous abandoned projects)</li>
              <li className="flex items-center"><AlertTriangle className="w-4 h-4 text-orange-500 mr-2" /> 12,000+ Citizen Escalations indicating severe local distress</li>
            </ul>
          </div>
        </div>

        {/* Audit Tabs */}
        <div className="flex border-b border-gray-800 mb-8 overflow-x-auto no-scrollbar">
          {['chain', 'financial', 'officers'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-6 py-3 font-bold text-sm uppercase tracking-widest whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab ? 'border-emerald-500 text-emerald-400 bg-gray-900' : 'border-transparent text-gray-500 hover:text-gray-300'
              }`}
            >
              {tab === 'chain' ? 'File Movement Chain' : tab === 'financial' ? 'Public Money Path' : 'Officer Workload'}
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        {activeTab === 'chain' && (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-lg font-bold text-gray-100 flex items-center mb-6">
                <FolderOpen className="w-5 h-5 mr-2 text-gray-400" /> Bureaucratic Flow
              </h2>

              {/* File Chain Visualization */}
              <div className="relative">
                <div className="absolute top-4 left-6 h-full w-0.5 bg-gray-800"></div>
                <div className="space-y-0 relative">
                  
                  {/* Step 1 */}
                  <div className="flex items-start gap-4 pb-6">
                    <div className="w-12 h-12 rounded bg-gray-800 border border-gray-700 flex items-center justify-center relative z-10">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div className="pt-2 flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-bold text-gray-100">Citizen Submission</span>
                        <span className="text-xs text-gray-500">April 10, 2026</span>
                      </div>
                      <div className="text-xs text-gray-500 mb-2">Verified via OTP (9988xxxxxx)</div>
                      <div className="bg-gray-900 border border-gray-800 p-3 rounded text-xs text-gray-400">
                        Evidence payload verified. Hash: 0x8f2a...
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-4 pb-6">
                    <div className="w-12 h-12 rounded bg-gray-800 border border-gray-700 flex items-center justify-center relative z-10">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div className="pt-2 flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-bold text-gray-100">Ward Officer Inspection</span>
                        <span className="text-xs text-gray-500">April 15, 2026</span>
                      </div>
                      <div className="text-xs text-emerald-400 mb-2">SLA Met (5/7 days)</div>
                      <div className="bg-gray-900 border border-gray-800 p-3 rounded text-xs text-gray-400 flex items-center justify-between">
                        <span>Report: IND-INSP-0415.pdf</span>
                        <button className="text-blue-400 hover:underline">View File</button>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-4 pb-6">
                    <div className="w-12 h-12 rounded bg-gray-800 border border-gray-700 flex items-center justify-center relative z-10">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div className="pt-2 flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-bold text-gray-100">Zonal Budget Sanction</span>
                        <span className="text-xs text-gray-500">April 28, 2026</span>
                      </div>
                      <div className="text-xs text-orange-400 mb-2">SLA Breached by 3 days</div>
                      <div className="bg-gray-900 border border-gray-800 p-3 rounded text-xs text-gray-400 flex items-center justify-between">
                        <span>Sanction Order: ₹12.5L</span>
                        <button className="text-blue-400 hover:underline">Verify Signature</button>
                      </div>
                    </div>
                  </div>

                  {/* Step 4 - BOTTLENECK */}
                  <div className="flex items-start gap-4 pb-6">
                    <div className="w-12 h-12 rounded bg-red-900/20 border border-red-500/50 flex items-center justify-center relative z-10 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                      <XCircle className="w-6 h-6 text-red-500" />
                    </div>
                    <div className="pt-2 flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-bold text-red-400">File Stuck: AEE Office</span>
                        <span className="text-xs text-red-500 font-bold">17 Days Pending</span>
                      </div>
                      <div className="text-xs text-gray-500 mb-2">Awaiting Work Order issuance to contractor.</div>
                      
                      {/* Why Government Failed Panel */}
                      <div className="bg-red-950/30 border border-red-900/50 p-4 rounded mt-3 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-red-600"></div>
                        <div className="text-xs font-bold text-red-500 uppercase tracking-widest mb-2 flex items-center">
                          <AlertTriangle className="w-4 h-4 mr-1" /> Root Cause Analysis
                        </div>
                        <ul className="list-disc pl-5 text-sm text-gray-300 font-sans space-y-2">
                          <li>Contractor 'Ramesh Infra' refuses to accept work order until payment from 2025 is cleared.</li>
                          <li>Treasury Department has frozen payments to Ramesh Infra pending a separate audit.</li>
                          <li>AEE has not reassigned the tender to the L2 bidder due to bureaucratic friction.</li>
                        </ul>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Sidebar Accountability */}
            <div className="space-y-6">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-sm font-bold text-gray-100 uppercase tracking-widest mb-4 flex items-center">
                  <User className="w-4 h-4 mr-2" /> Accountability Trace
                </h3>
                
                <div className="space-y-4">
                  <div className="border-b border-gray-800 pb-4">
                    <div className="text-xs text-gray-500 mb-1">Currently Holding File</div>
                    <div className="font-bold text-gray-200">Ramesh K.</div>
                    <div className="text-xs text-gray-400">Assistant Exec. Engineer (East)</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Contractor Assigned</div>
                    <div className="font-bold text-gray-200">Ramesh Infra Ltd.</div>
                    <div className="text-xs text-gray-400">License: BBMP/CON/2022-41</div>
                  </div>
                </div>
              </div>

              {/* Who benefits from delay? */}
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-sm font-bold text-gray-100 uppercase tracking-widest mb-4 flex items-center">
                  <Building className="w-4 h-4 mr-2" /> Cost of Failure
                </h3>
                <div className="space-y-2 font-sans text-sm text-gray-300">
                  <p>Estimated public impact of this delay:</p>
                  <ul className="list-disc pl-5 text-red-400">
                    <li>143 daily commuters severely affected</li>
                    <li>2 local businesses suffering revenue drops</li>
                    <li>Ambulance routing disrupted in Ward 80</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'financial' && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Public Money Path */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h2 className="text-lg font-bold text-gray-100 flex items-center mb-6 uppercase tracking-widest text-sm">
                <IndianRupee className="w-5 h-5 mr-2 text-emerald-500" /> Public Money Path
              </h2>

              <div className="relative">
                <div className="absolute top-4 left-4 h-full w-0.5 bg-gray-800"></div>
                <div className="space-y-6 relative">
                  
                  {/* Step 1: Budget Sanctioned */}
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-900/30 border border-emerald-500/50 flex items-center justify-center relative z-10">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-emerald-400">Budget Sanctioned</div>
                      <div className="text-xs text-gray-500">₹12,50,000 allocated from Ward Fund</div>
                    </div>
                  </div>

                  {/* Step 2: Treasury Release (Delayed) */}
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-orange-900/30 border border-orange-500/50 flex items-center justify-center relative z-10 animate-pulse">
                      <Clock className="w-4 h-4 text-orange-500" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-orange-400">Treasury Release Pending</div>
                      <div className="text-xs text-gray-500">Funds frozen due to contractor audit</div>
                    </div>
                  </div>

                  {/* Step 3: Dept Allocation */}
                  <div className="flex items-center gap-4 opacity-30">
                    <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center relative z-10">
                      <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-400">Department Allocation</div>
                      <div className="text-xs text-gray-600">Pending Treasury</div>
                    </div>
                  </div>

                  {/* Step 4: Contractor Escrow */}
                  <div className="flex items-center gap-4 opacity-30">
                    <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center relative z-10">
                      <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-400">Contractor Escrow</div>
                      <div className="text-xs text-gray-600">Awaiting work order acceptance</div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Approval Signature Chain */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h2 className="text-lg font-bold text-gray-100 flex items-center mb-6 uppercase tracking-widest text-sm">
                <Fingerprint className="w-5 h-5 mr-2 text-blue-500" /> Approval Signature Chain
              </h2>

              <div className="space-y-4">
                <div className="border border-gray-800 rounded p-4 bg-gray-950">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-gray-300">Initial Estimate Approval</span>
                    <span className="text-xs text-emerald-500 flex items-center"><CheckCircle2 className="w-3 h-3 mr-1"/> APPROVED</span>
                  </div>
                  <div className="text-xs text-gray-500 mb-2">By: Assistant Engineer (AE), Ward 80</div>
                  <div className="bg-gray-900 p-2 text-xs font-mono text-gray-600 rounded">
                    SigHash: 0x9f1b4c... 
                    <br/>Timestamp: 2026-04-16T10:22:15Z
                  </div>
                </div>

                <div className="border border-gray-800 rounded p-4 bg-gray-950">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-gray-300">Zonal Commissioner Sanction</span>
                    <span className="text-xs text-emerald-500 flex items-center"><CheckCircle2 className="w-3 h-3 mr-1"/> APPROVED</span>
                  </div>
                  <div className="text-xs text-gray-500 mb-2">By: Zonal Commissioner (East)</div>
                  <div className="text-xs text-blue-400 mb-2 italic">"Sanctioned under emergency ward funds due to public pressure."</div>
                  <div className="bg-gray-900 p-2 text-xs font-mono text-gray-600 rounded">
                    SigHash: 0x4a2e88... 
                    <br/>Timestamp: 2026-04-28T16:30:00Z
                  </div>
                </div>

                <div className="border border-gray-800 rounded p-4 bg-gray-950 opacity-50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-gray-300">Treasury Release</span>
                    <span className="text-xs text-orange-500 flex items-center"><Clock className="w-3 h-3 mr-1"/> PENDING</span>
                  </div>
                  <div className="text-xs text-gray-500 mb-2">By: Finance Dept, State Treasury</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'officers' && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-100">Ramesh K.</h3>
                  <div className="text-sm text-gray-500">Assistant Executive Engineer</div>
                </div>
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-gray-500" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800 p-3 rounded border border-gray-700">
                  <div className="text-xs text-gray-500 uppercase">Pending Files</div>
                  <div className="text-2xl font-bold text-gray-100">142</div>
                </div>
                <div className="bg-red-900/20 p-3 rounded border border-red-900/50">
                  <div className="text-xs text-red-500 uppercase">SLA Breaches</div>
                  <div className="text-2xl font-bold text-red-400">38</div>
                </div>
                <div className="bg-gray-800 p-3 rounded border border-gray-700 col-span-2">
                  <div className="text-xs text-gray-500 uppercase">Avg Response Time</div>
                  <div className="text-xl font-bold text-gray-100">14.2 Days <span className="text-xs text-red-500 ml-2">(Poor)</span></div>
                </div>
              </div>
              
              <button className="w-full py-2 text-xs font-bold text-gray-400 border border-gray-700 hover:bg-gray-800 rounded uppercase tracking-widest transition-colors">
                View Full Officer Log
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
