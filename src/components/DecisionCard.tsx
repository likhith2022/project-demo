"use client";

import React from 'react';
import { Decision } from '@/types/governance';
import { motion } from 'framer-motion';
import { Users, TrendingUp, AlertCircle, ShieldCheck, MapPin, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export function DecisionCard({ decision }: { decision: Decision }) {
  const isGovernmentInitiated = decision.type === 'Government Initiated';
  
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
            isGovernmentInitiated ? 'bg-indigo-100 text-indigo-800' : 'bg-emerald-100 text-emerald-800'
          }`}>
            {decision.category}
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-gray-100 text-gray-800">
            <MapPin className="w-3 h-3 mr-1" /> {decision.scope}: {decision.locationName}
          </span>
        </div>
        
        {decision.escalation.level !== 'None' && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-800">
            <AlertCircle className="w-3 h-3 mr-1" /> {decision.escalation.level}
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{decision.title}</h3>
      <p className="text-gray-600 text-sm mb-6 line-clamp-2">{decision.description}</p>

      {/* Consensus Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-end mb-1">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Public Support Index</span>
          <span className="text-lg font-black text-gray-900">{decision.publicSupportIndex}/100</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full ${decision.publicSupportIndex >= 70 ? 'bg-emerald-500' : decision.publicSupportIndex >= 40 ? 'bg-orange-500' : 'bg-red-500'}`} 
            style={{ width: `${decision.publicSupportIndex}%` }}
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
        <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
          <div className="text-gray-500 mb-1 flex items-center">
            <Users className="w-4 h-4 mr-1" /> Participants
          </div>
          <div className="font-bold text-gray-900">
            {decision.metrics.totalParticipants.toLocaleString('en-IN')}
          </div>
          <div className="text-xs text-emerald-600 font-medium flex items-center mt-1">
            <ShieldCheck className="w-3 h-3 mr-1" /> {decision.metrics.verifiedVotes.toLocaleString('en-IN')} verified
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
          <div className="text-gray-500 mb-1 flex items-center">
            <TrendingUp className="w-4 h-4 mr-1" /> Velocity
          </div>
          <div className="font-bold text-emerald-600">
            {decision.metrics.trendVelocity}
          </div>
          <div className="text-xs text-gray-500 font-medium mt-1">
            Stage: <span className="text-gray-900 font-bold">{decision.stage}</span>
          </div>
        </div>
      </div>

      {decision.governmentResponse && (
        <div className="mb-6 bg-blue-50 border border-blue-100 rounded-lg p-3 text-sm">
          <div className="font-bold text-blue-900 flex items-center mb-1">
            <ShieldCheck className="w-4 h-4 mr-1" /> Gov Response: {decision.governmentResponse.responderTitle}
          </div>
          <p className="text-blue-800 line-clamp-1">{decision.governmentResponse.actionTimeline}</p>
        </div>
      )}

      <div className="pt-4 border-t border-gray-100">
        <Link 
          href={`/decisions/${decision.id}`}
          className="w-full flex items-center justify-center py-2 px-4 bg-gray-50 hover:bg-emerald-50 hover:text-emerald-700 text-gray-700 font-bold rounded-lg transition-colors border border-gray-200 hover:border-emerald-200"
        >
          View Details & Vote <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </motion.div>
  );
}
