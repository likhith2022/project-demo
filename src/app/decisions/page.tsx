"use client";

import React, { useState } from 'react';
import { Decision } from '@/types/governance';
import { DecisionCard } from '@/components/DecisionCard';
import { Vote, Filter, Flame, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock Data
const MOCK_DECISIONS: Decision[] = [
  {
    id: 'DEC-001',
    title: 'Should Whitefield flyover construction begin immediately?',
    description: 'The proposed flyover will cost ₹350 Cr and take 18 months. Traffic diversion will affect 2 lakh commuters daily during construction.',
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
      whyItMatters: 'Alleviates a major choke point, saving 45 mins average commute time, but requires temporary pain.'
    },
    publicSupportIndex: 82,
    escalation: { level: 'Minister Dashboard', thresholdReachedAt: '2026-05-09T10:00:00Z' },
    createdAt: '2026-05-01T00:00:00Z',
    updatedAt: '2026-05-10T00:00:00Z'
  },
  {
    id: 'DEC-002',
    title: 'Water shortage in Kolar - Emergency Feedback',
    description: 'Severe water shortage reported in 12 wards. Should the government prioritize emergency tankers or immediate borewell drilling?',
    type: 'Multiple Choice',
    stage: 'Trending',
    category: 'Water',
    scope: 'District',
    locationName: 'Kolar',
    metrics: {
      totalParticipants: 45200,
      participationRate: 65,
      verifiedVotes: 45000,
      unverifiedVotes: 200,
      trendVelocity: '↑ 45% this hour (Viral)'
    },
    impact: {
      estimatedCitizensAffected: '2.5 lakh',
      costEstimate: '₹5 Cr (Emergency Funds)',
      whyItMatters: 'Immediate risk to public health and daily life due to dried lakes.'
    },
    publicSupportIndex: 95,
    escalation: { level: 'CM Review', thresholdReachedAt: '2026-05-10T08:00:00Z' },
    governmentResponse: {
      responderName: 'Dr. Ramesh K',
      responderTitle: 'District Commissioner',
      responseBody: 'We hear you. 500 tankers are being mobilized immediately while drilling permissions are fast-tracked.',
      timestamp: '2026-05-10T09:30:00Z',
      actionTimeline: 'Tankers arriving within 12 hours.'
    },
    createdAt: '2026-05-09T00:00:00Z',
    updatedAt: '2026-05-10T00:00:00Z'
  },
  {
    id: 'DEC-003',
    title: 'Should Bengaluru implement congestion pricing in CBD?',
    description: 'Proposal to charge ₹100 for private vehicles entering the Central Business District during peak hours to fund public transport.',
    type: 'Government Initiated',
    stage: 'Proposed',
    category: 'Transport',
    scope: 'State',
    locationName: 'Karnataka',
    metrics: {
      totalParticipants: 8500,
      participationRate: 2,
      verifiedVotes: 8100,
      unverifiedVotes: 400,
      trendVelocity: 'Stable'
    },
    impact: {
      estimatedCitizensAffected: '15 lakh',
      costEstimate: 'Revenue Generation Model',
      whyItMatters: 'Aims to reduce peak traffic by 25% and generate ₹500 Cr annually for BMTC.'
    },
    publicSupportIndex: 45,
    escalation: { level: 'None', thresholdReachedAt: '' },
    createdAt: '2026-05-10T00:00:00Z',
    updatedAt: '2026-05-10T00:00:00Z'
  }
];

export default function DecisionsHub() {
  const [filter, setFilter] = useState('All');

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-emerald-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Vote className="w-8 h-8 text-orange-400 mr-3" />
            <h1 className="text-4xl font-extrabold tracking-tight">Praja Decision Engine</h1>
          </div>
          <p className="text-xl text-emerald-100 max-w-3xl">
            The democratic core of Karnataka. Influence government policy, approve local projects, and hold officials accountable through real-time public consensus.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 flex flex-col lg:flex-row gap-8">
        
        {/* Main Feed */}
        <div className="flex-1">
          <div className="bg-white rounded-xl shadow-sm p-2 mb-6 flex justify-between items-center border border-gray-200">
            <div className="flex space-x-1 overflow-x-auto no-scrollbar">
              {['All', 'Statewide', 'My District', 'My Ward', 'Government Initiated'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-colors ${
                    filter === f ? 'bg-emerald-100 text-emerald-800' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <button className="p-2 text-gray-500 hover:text-emerald-600 border-l border-gray-200 ml-2">
              <Filter className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6">
            {MOCK_DECISIONS.map((decision, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={decision.id}
              >
                <DecisionCard decision={decision} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-80 space-y-6">
          
          {/* Trending Issues */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Flame className="w-5 h-5 text-orange-500 mr-2" /> Trending Priority Index
            </h3>
            <div className="space-y-4">
              {[
                { title: 'Water shortage in Kolar', tag: 'Statewide Emergency' },
                { title: 'Bengaluru Traffic Management', tag: 'Infrastructure' },
                { title: 'Rural Hospital Staffing', tag: 'Healthcare' }
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start group cursor-pointer">
                  <div className="text-xl font-black text-gray-300 group-hover:text-emerald-500 transition-colors">#{i+1}</div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">{item.title}</div>
                    <div className="text-xs text-gray-500">{item.tag}</div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2 text-sm font-bold text-emerald-600 border border-emerald-200 rounded-lg hover:bg-emerald-50 transition-colors">
              View Full Index
            </button>
          </div>

          {/* Citizen Petition CTA */}
          <div className="bg-gradient-to-br from-emerald-800 to-emerald-950 rounded-2xl shadow-lg border border-emerald-700 p-6 text-white">
            <h3 className="text-lg font-bold mb-2">Have a proposal?</h3>
            <p className="text-sm text-emerald-100 mb-6">
              Start a citizen petition. If you reach 10,000 verified signatures, it escalates automatically to the District Officer.
            </p>
            <button className="w-full py-3 bg-white text-emerald-900 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-md flex items-center justify-center">
              Start a Petition <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
