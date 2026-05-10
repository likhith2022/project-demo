"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HardHat, Clock, CheckCircle2, AlertTriangle, MapPin, Search, Filter } from 'lucide-react';
import Link from 'next/link';

export default function WorksDashboard() {
  const [activeTab, setActiveTab] = useState<'Active' | 'Upcoming' | 'Completed'>('Active');

  const upcomingWorks = [
    {
      id: 'WRK-2941',
      title: 'Pipeline Repair',
      area: 'Whitefield',
      duration: '4 days',
      start: 'Tomorrow',
      reason: 'Underground water pipe leakage repair',
      impact: 'High Traffic Delay',
    }
  ];

  const activeWorks = [
    {
      id: 'WRK-2930',
      title: 'Smart Traffic Lights Installation',
      area: 'Indiranagar 100ft Road',
      contractor: 'TechSolutions Ltd',
      budget: '₹8,20,000',
      progress: 65,
      timeline: 'Ending in 3 days'
    },
    {
      id: 'WRK-2928',
      title: 'Pothole Filling & Relaying',
      area: 'Koramangala 4th Block',
      contractor: 'Ramesh Infra',
      budget: '₹12,50,000',
      progress: 30,
      timeline: 'Delayed by 2 days'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Public Works Tracker</h1>
          <p className="text-gray-600">Track all ongoing and upcoming government projects in your area.</p>
        </div>
        
        <div className="mt-4 md:mt-0 flex gap-2">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search ward or pin..." 
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center">
            <Filter className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* "Work Starting Tomorrow" Alert System */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg mb-8 shadow-sm"
      >
        <div className="flex items-start">
          <AlertTriangle className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-bold text-orange-900 mb-2">Work Starting Tomorrow</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {upcomingWorks.map(work => (
                <div key={work.id} className="bg-white p-4 rounded border border-orange-100 shadow-sm">
                  <div className="font-semibold text-gray-900 mb-1">{work.title}</div>
                  <div className="text-sm text-gray-600 flex items-center mb-2">
                    <MapPin className="w-4 h-4 mr-1" /> {work.area}
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm mt-3">
                    <div className="bg-gray-50 p-2 rounded">
                      <span className="text-gray-500 block text-xs uppercase tracking-wider">Duration</span>
                      <span className="font-medium">{work.duration}</span>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <span className="text-gray-500 block text-xs uppercase tracking-wider">Impact</span>
                      <span className="font-medium text-orange-600">{work.impact}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          {['Active', 'Upcoming', 'Completed'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab
                  ? 'border-emerald-500 text-emerald-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab} Projects
            </button>
          ))}
        </nav>
      </div>

      {/* Active Projects Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {activeWorks.map((work, i) => (
          <Link href={`/works/${work.id}`} key={work.id}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 mb-2">
                    <HardHat className="w-3 h-3 mr-1" /> In Progress
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">{work.title}</h3>
                  <div className="text-sm text-gray-500 flex items-center mt-1">
                    <MapPin className="w-4 h-4 mr-1" /> {work.area}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">{work.budget}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Sanctioned</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-gray-700">Completion</span>
                  <span className="font-bold text-emerald-600">{work.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${work.progress}%` }}></div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-sm">
                <div className="text-gray-600">
                  <span className="font-semibold text-gray-900">Contractor:</span> {work.contractor}
                </div>
                <div className={`flex items-center font-medium ${work.timeline.includes('Delayed') ? 'text-red-600' : 'text-gray-600'}`}>
                  {work.timeline.includes('Delayed') ? <AlertTriangle className="w-4 h-4 mr-1" /> : <Clock className="w-4 h-4 mr-1" />}
                  {work.timeline}
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
