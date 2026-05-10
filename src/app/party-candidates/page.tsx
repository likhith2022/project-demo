"use client";

import React, { useState } from 'react';
import { UserPlus, ThumbsUp, MapPin, FileText, CheckCircle2, ChevronRight, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PartyCandidatesPage() {
  const [activeConstituency, setActiveConstituency] = useState('Mahadevapura');

  const candidates = [
    {
      id: 'CAN-041',
      name: 'Priya Reddy',
      profession: 'Urban Planner',
      age: 38,
      votes: 14520,
      status: 'Leading',
      sopDocs: 3
    },
    {
      id: 'CAN-022',
      name: 'Karthik S.',
      profession: 'Software Architect',
      age: 42,
      votes: 12100,
      status: 'Runner Up',
      sopDocs: 2
    },
    {
      id: 'CAN-089',
      name: 'Lakshmi Narayan',
      profession: 'Social Worker',
      age: 51,
      votes: 8400,
      status: 'Active',
      sopDocs: 4
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-emerald-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-800 text-emerald-200 text-xs font-bold uppercase tracking-widest mb-4 border border-emerald-700">
                Prajakeeya Core Philosophy
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">No High Command. You Choose.</h1>
              <p className="text-emerald-100 max-w-2xl text-lg mb-6">
                Apply to be a party candidate or vote for the best citizen to represent your constituency. Tickets are awarded based on pure public consensus, not party bosses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold shadow-lg transition-colors flex items-center justify-center">
                  <UserPlus className="w-5 h-5 mr-2" /> Register as Candidate
                </button>
              </div>
            </div>
            
            {/* Live Stats Box */}
            <div className="bg-emerald-800/50 border border-emerald-700 p-6 rounded-2xl backdrop-blur-sm min-w-[300px]">
              <h3 className="text-emerald-200 font-bold mb-4 flex items-center text-sm uppercase tracking-wider">
                <BarChart3 className="w-4 h-4 mr-2" /> Live Voting Pulse
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-black text-white">42,091</div>
                  <div className="text-xs text-emerald-300">Total Public Votes Cast</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white">124</div>
                  <div className="text-xs text-emerald-300">Citizens Applied for Ticket</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Live Ticket Selection</h2>
            <div className="flex items-center text-gray-500 mt-2">
              <MapPin className="w-4 h-4 mr-1" /> Constituency: 
              <select className="ml-2 font-bold text-gray-900 bg-transparent border-b border-gray-300 outline-none focus:border-emerald-500">
                <option>Mahadevapura</option>
                <option>Jayanagar</option>
                <option>Malleshwaram</option>
                <option>Shivajinagar</option>
              </select>
            </div>
          </div>
        </div>

        {/* Candidate List */}
        <div className="space-y-6">
          {candidates.map((candidate, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={candidate.id} 
              className={`bg-white rounded-2xl shadow-sm border ${candidate.status === 'Leading' ? 'border-orange-300 shadow-orange-100' : 'border-gray-200'} p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center`}
            >
              {/* Profile Pic & Rank */}
              <div className="flex flex-col items-center">
                <div className={`w-24 h-24 rounded-full flex items-center justify-center text-2xl font-black mb-3 ${
                  candidate.status === 'Leading' ? 'bg-orange-100 text-orange-600 border-2 border-orange-300' : 'bg-gray-100 text-gray-400 border border-gray-200'
                }`}>
                  {candidate.name.charAt(0)}
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  candidate.status === 'Leading' ? 'bg-orange-500 text-white shadow-sm' : 'bg-gray-100 text-gray-500'
                }`}>
                  {candidate.status}
                </div>
              </div>

              {/* Details */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{candidate.name}</h3>
                <p className="text-gray-500 font-medium mb-4">{candidate.profession} • {candidate.age} Years Old</p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <button className="flex items-center text-sm font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-lg hover:bg-emerald-100 transition-colors">
                    <FileText className="w-4 h-4 mr-2" /> View Operating SOP
                  </button>
                  <button className="flex items-center text-sm font-bold text-gray-700 bg-gray-50 border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                    <CheckCircle2 className="w-4 h-4 mr-2" /> Verified Background
                  </button>
                </div>
              </div>

              {/* Voting Action */}
              <div className="text-center md:text-right border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-8 w-full md:w-auto">
                <div className="text-3xl font-black text-gray-900 mb-1">{candidate.votes.toLocaleString()}</div>
                <div className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-4">Public Votes</div>
                <button className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3 rounded-xl shadow-sm transition-transform active:scale-95 flex items-center justify-center">
                  <ThumbsUp className="w-5 h-5 mr-2" /> Cast Vote
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
