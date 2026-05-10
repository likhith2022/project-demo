"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, AlertTriangle, Users, MessageSquare, ArrowLeft, Building, ChevronRight, Activity } from 'lucide-react';
import Link from 'next/link';

// Mocking the specific decision details (in real app, fetched by ID)
const decision = {
  id: 'DEC-001',
  title: 'Should Whitefield flyover construction begin immediately?',
  description: 'The proposed flyover will cost ₹350 Cr and take 18 months. Traffic diversion will affect 2 lakh commuters daily during construction. Local businesses are concerned about temporary revenue drops, but urban planners project a 40% decrease in peak hour congestion upon completion.',
  type: 'Yes/No',
  stage: 'Public Voting',
  category: 'Infrastructure',
  scope: 'District',
  locationName: 'Bengaluru Urban',
  metrics: {
    totalParticipants: 142884,
    participationRate: 37,
    verifiedVotes: 120500,
    unverifiedVotes: 22384,
    trendVelocity: '↑ 18% this hour'
  },
  impact: {
    estimatedCitizensAffected: '8.2 lakh',
    costEstimate: '₹350 Cr',
    whyItMatters: 'Alleviates a major choke point, saving 45 mins average commute time, but requires temporary pain. This directly impacts the daily lives and businesses along the Whitefield corridor.'
  },
  publicSupportIndex: 82,
  escalation: { level: 'Minister Dashboard', thresholdReachedAt: '2026-05-09T10:00:00Z' },
  governmentResponse: {
    responderName: 'MB Patil',
    responderTitle: 'Minister for Infrastructure',
    responseBody: 'We are closely monitoring the public voting. If support remains above 75%, we will expedite the tender process and ensure strict 18-month deadlines with contractor penalties for delays.',
    timestamp: '2026-05-10T11:00:00Z',
    actionTimeline: 'Final decision will be announced at the end of the voting period (in 2 days).'
  }
};

const STAGES = [
  'Proposed', 'Trending', 'Under Review', 'Public Voting', 
  'Approved', 'In Progress', 'Completed', 'Auditing', 'Closed'
];

export default function DecisionDetailsPage() {
  const [vote, setVote] = useState<string | null>(null);

  const currentStageIndex = STAGES.indexOf(decision.stage);

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link href="/decisions" className="p-2 text-gray-500 hover:text-emerald-600 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="text-sm font-bold text-gray-500 truncate">
            {decision.id} <span className="mx-2">•</span> {decision.scope} Governance
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Main Info */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8 relative overflow-hidden">
          {/* Escalation Banner */}
          {decision.escalation.level !== 'None' && (
            <div className="absolute top-0 left-0 w-full bg-red-500 text-white py-1.5 px-8 text-xs font-bold tracking-wider flex items-center justify-center">
              <AlertTriangle className="w-4 h-4 mr-2" /> ESCALATED TO: {decision.escalation.level.toUpperCase()}
            </div>
          )}

          <div className="pt-6">
            <div className="flex gap-2 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-emerald-100 text-emerald-800">
                {decision.category}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-blue-100 text-blue-800">
                {decision.type}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              {decision.title}
            </h1>

            <div className="prose prose-emerald max-w-none mb-8">
              <p className="text-lg text-gray-600 leading-relaxed">
                {decision.description}
              </p>
            </div>

            {/* Why It Matters */}
            <div className="bg-orange-50 rounded-xl p-6 border border-orange-100 mb-8">
              <h3 className="text-lg font-bold text-orange-900 mb-2">Why This Matters</h3>
              <p className="text-orange-800 mb-4">{decision.impact.whyItMatters}</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/60 p-3 rounded-lg">
                  <div className="text-xs font-bold text-orange-600 uppercase">Est. Cost</div>
                  <div className="font-black text-gray-900">{decision.impact.costEstimate}</div>
                </div>
                <div className="bg-white/60 p-3 rounded-lg">
                  <div className="text-xs font-bold text-orange-600 uppercase">Citizens Affected</div>
                  <div className="font-black text-gray-900">{decision.impact.estimatedCitizensAffected}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Voting Engine */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 flex flex-col justify-center">
            <div className="text-center mb-8">
              <div className="text-5xl font-black text-gray-900 mb-2">{decision.publicSupportIndex}<span className="text-2xl text-gray-400">/100</span></div>
              <div className="text-sm font-bold text-gray-500 uppercase tracking-wider">Public Support Index</div>
            </div>

            {decision.stage === 'Public Voting' ? (
              <div className="space-y-4">
                {vote ? (
                  <div className="bg-emerald-50 text-emerald-800 p-4 rounded-xl text-center border border-emerald-200">
                    <ShieldCheck className="w-8 h-8 mx-auto mb-2 text-emerald-600" />
                    <div className="font-bold">Your vote has been verified and recorded.</div>
                  </div>
                ) : (
                  <>
                    <button 
                      onClick={() => setVote('yes')}
                      className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-lg shadow-lg hover:shadow-emerald-600/20 transition-all"
                    >
                      Vote YES
                    </button>
                    <button 
                      onClick={() => setVote('no')}
                      className="w-full py-4 bg-white border-2 border-red-500 hover:bg-red-50 text-red-600 font-bold rounded-xl text-lg transition-all"
                    >
                      Vote NO
                    </button>
                  </>
                )}
                <div className="text-xs text-center text-gray-500 flex items-center justify-center mt-4">
                  <ShieldCheck className="w-4 h-4 mr-1" /> OTP Verification Required
                </div>
              </div>
            ) : (
              <div className="bg-gray-100 p-4 rounded-xl text-center text-gray-600 font-medium">
                Voting is closed for this stage.
              </div>
            )}
          </div>

          {/* Metrics & Government Response */}
          <div className="space-y-8">
            {decision.governmentResponse && (
              <div className="bg-blue-50 rounded-2xl shadow-sm border border-blue-200 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Building className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-blue-900">Official Government Response</h3>
                </div>
                <div className="mb-4">
                  <div className="font-bold text-gray-900">{decision.governmentResponse.responderName}</div>
                  <div className="text-sm text-blue-700">{decision.governmentResponse.responderTitle}</div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic border-l-4 border-blue-300 pl-4">
                  "{decision.governmentResponse.responseBody}"
                </p>
                <div className="bg-white rounded-lg p-3 text-sm flex items-start gap-2 border border-blue-100">
                  <Activity className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900">Action Plan:</span> {decision.governmentResponse.actionTimeline}
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2 text-emerald-600" /> Participation Metrics
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-600 text-sm">Total Participants</span>
                  <span className="font-bold text-gray-900">{decision.metrics.totalParticipants.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-600 text-sm">Verified Citizens</span>
                  <span className="font-bold text-emerald-600">{decision.metrics.verifiedVotes.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-600 text-sm">Constituency Turnout</span>
                  <span className="font-bold text-gray-900">{decision.metrics.participationRate}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Trend</span>
                  <span className="font-bold text-orange-500">{decision.metrics.trendVelocity}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Governance Timeline */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-8">Governance Lifecycle</h3>
          
          <div className="relative">
            <div className="absolute top-4 left-4 h-full w-0.5 bg-gray-200"></div>
            <div className="space-y-8 relative">
              {STAGES.map((stage, index) => {
                const isCompleted = index < currentStageIndex;
                const isCurrent = index === currentStageIndex;
                const isFuture = index > currentStageIndex;
                
                return (
                  <div key={stage} className={`flex items-start ${isFuture ? 'opacity-40' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center relative z-10 shrink-0 mr-4 ${
                      isCompleted ? 'bg-emerald-500 text-white' : 
                      isCurrent ? 'bg-orange-500 text-white ring-4 ring-orange-100' : 'bg-gray-200 text-gray-500'
                    }`}>
                      {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <div className="w-2 h-2 rounded-full bg-white"></div>}
                    </div>
                    <div className="pt-1">
                      <div className={`font-bold ${isCurrent ? 'text-gray-900 text-lg' : 'text-gray-700'}`}>{stage}</div>
                      {isCurrent && (
                        <p className="text-sm text-gray-500 mt-1">
                          Citizens are currently voting on this proposal. High engagement detected.
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
