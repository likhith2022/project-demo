"use client";

import React, { useState } from 'react';
import { Users, FileText, Vote, Video, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function GramSabhaPage() {
  const [activeTab, setActiveTab] = useState<'meetings' | 'resolutions'>('meetings');

  return (
    <div className="bg-orange-50/30 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-orange-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-2">
            <Users className="w-8 h-8 text-orange-400 mr-3" />
            <h1 className="text-3xl font-extrabold tracking-tight">Digital Gram Sabha</h1>
          </div>
          <p className="text-orange-100 max-w-2xl text-sm md:text-base">
            Participate in your local village town halls, track panchayat resolutions, and vote on local budget allocations digitally.
          </p>
          <div className="mt-4 flex items-center text-sm font-bold bg-white/10 w-max px-3 py-1 rounded">
            <MapPin className="w-4 h-4 mr-2" /> Hoskote Panchayat, Ward 12
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Tabs */}
        <div className="flex space-x-4 mb-8 border-b border-gray-200">
          <button 
            onClick={() => setActiveTab('meetings')}
            className={`pb-4 px-2 font-bold text-sm tracking-wider uppercase transition-colors border-b-2 ${activeTab === 'meetings' ? 'border-orange-500 text-orange-700' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
          >
            Live & Upcoming Town Halls
          </button>
          <button 
            onClick={() => setActiveTab('resolutions')}
            className={`pb-4 px-2 font-bold text-sm tracking-wider uppercase transition-colors border-b-2 ${activeTab === 'resolutions' ? 'border-orange-500 text-orange-700' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
          >
            Panchayat Resolutions
          </button>
        </div>

        {activeTab === 'meetings' && (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Live Meeting Card */}
            <div className="bg-white rounded-xl shadow-sm border border-red-200 p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg animate-pulse flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-2"></div> LIVE NOW
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2">Monsoon Preparedness & Budget Allocation</h3>
              <p className="text-sm text-gray-600 mb-4">Discussing the ₹12L allocation for storm water drain clearing in Ward 12.</p>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center"><Users className="w-4 h-4 mr-1"/> 142 Attending</div>
                <div className="flex items-center"><Calendar className="w-4 h-4 mr-1"/> Today, 10:00 AM</div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg flex items-center justify-center transition-colors">
                  <Video className="w-4 h-4 mr-2" /> Join Video Stream
                </button>
                <button className="flex-1 bg-orange-100 hover:bg-orange-200 text-orange-800 font-bold py-2 rounded-lg transition-colors border border-orange-200">
                  Cast Vote
                </button>
              </div>
            </div>

            {/* Upcoming Meeting Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">School Infrastructure Review</h3>
              <p className="text-sm text-gray-600 mb-4">Reviewing contractor bids for the local primary school roof repair.</p>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center"><Users className="w-4 h-4 mr-1"/> 89 RSVP</div>
                <div className="flex items-center"><Calendar className="w-4 h-4 mr-1"/> May 15, 2:00 PM</div>
              </div>

              <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 rounded-lg transition-colors">
                RSVP & Get Reminder
              </button>
            </div>
          </div>
        )}

        {activeTab === 'resolutions' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
              <h2 className="font-bold text-gray-900">Passed Resolutions (Last 6 Months)</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {[
                { title: 'Allocation of ₹5L for Solar Streetlights', date: 'April 02, 2026', votes: '420 For / 12 Against' },
                { title: 'Tender Cancellation: Ramesh Infra (Delayed Paving)', date: 'March 15, 2026', votes: '380 For / 85 Against' },
                { title: 'Approval of Village Water Pipeline Extension', date: 'February 28, 2026', votes: '510 For / 0 Against' },
              ].map((res, i) => (
                <div key={i} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-900 text-lg">{res.title}</h3>
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded flex items-center">
                      <CheckCircle2 className="w-3 h-3 mr-1" /> Passed
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 gap-6">
                    <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {res.date}</span>
                    <span className="flex items-center"><Vote className="w-4 h-4 mr-1" /> {res.votes}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
