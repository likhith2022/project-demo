"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Map, Activity, AlertTriangle, ShieldCheck, 
  ArrowUpRight, ArrowDownRight, Clock, Building2, BarChart
} from 'lucide-react';
import Link from 'next/link';

// Mock Karnataka Regions Data
const REGIONS = [
  { id: 'bengaluru', name: 'Bengaluru Urban', score: 42, slaBreach: 1450, trend: 'down', status: 'critical' },
  { id: 'mysuru', name: 'Mysuru', score: 85, slaBreach: 120, trend: 'up', status: 'healthy' },
  { id: 'hubballi', name: 'Hubballi-Dharwad', score: 72, slaBreach: 340, trend: 'up', status: 'healthy' },
  { id: 'kalyana', name: 'Kalyana Karnataka', score: 35, slaBreach: 2100, trend: 'down', status: 'critical' },
  { id: 'coastal', name: 'Coastal Region', score: 88, slaBreach: 85, trend: 'up', status: 'healthy' },
  { id: 'malenadu', name: 'Malenadu', score: 65, slaBreach: 420, trend: 'stable', status: 'warning' },
];

const BOTTLENECKS = [
  { dept: 'BBMP Town Planning', delay: '45 Days', reason: 'System Migration' },
  { dept: 'BWSSB Approvals', delay: '28 Days', reason: 'Staffing Shortage' },
  { dept: 'Revenue (Kalyana)', delay: '60 Days', reason: 'High Application Volume' }
];

const HIGH_PERFORMERS = [
  { dept: 'Transport (RTO)', response: '2.4 Days', rating: '94%' },
  { dept: 'Mysuru City Corp', response: '3.1 Days', rating: '88%' },
  { dept: 'Bescom (Emergency)', response: '4 Hours', rating: '96%' }
];

export default function GovernanceHealthPage() {
  const [activeView, setActiveView] = useState<'map' | 'departments'>('map');

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-24 font-sans text-gray-900">
      
      {/* Header Bar */}
      <div className="bg-slate-900 text-white py-12 border-b-4 border-emerald-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center mb-2">
                <Activity className="w-8 h-8 text-emerald-400 mr-3" />
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Governance Health Index</h1>
              </div>
              <p className="text-slate-300 max-w-2xl text-sm md:text-base">
                Statewide operational intelligence map. Tracking bottlenecks, SLA breaches, and high-performing sectors across Karnataka in real-time.
              </p>
            </div>
            <div className="hidden md:block text-right">
              <div className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-1">Statewide Average Score</div>
              <div className="text-5xl font-black text-emerald-400">64<span className="text-2xl text-slate-500">/100</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Toggle & Filter */}
        <div className="flex justify-between items-center mb-8">
          <div className="bg-white p-1 rounded-lg border border-gray-200 inline-flex shadow-sm">
            <button 
              onClick={() => setActiveView('map')}
              className={`px-6 py-2 rounded-md text-sm font-bold transition-colors flex items-center ${activeView === 'map' ? 'bg-slate-900 text-white shadow-md' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              <Map className="w-4 h-4 mr-2" /> Regional Map
            </button>
            <button 
              onClick={() => setActiveView('departments')}
              className={`px-6 py-2 rounded-md text-sm font-bold transition-colors flex items-center ${activeView === 'departments' ? 'bg-slate-900 text-white shadow-md' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              <Building2 className="w-4 h-4 mr-2" /> Department Performance
            </button>
          </div>
          
          <div className="text-sm text-gray-500 flex items-center font-medium bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
            <Clock className="w-4 h-4 mr-2 text-blue-500" /> Last updated: 10 mins ago
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Content Area (Left 2 columns) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* CSS Grid Heatmap (Mocking a map) */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-xl font-bold text-gray-900 flex items-center mb-6">
                <BarChart className="w-5 h-5 text-indigo-500 mr-2" /> Regional Health Heatmap
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {REGIONS.map((region, i) => (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }}
                    key={region.id}
                    className={`relative overflow-hidden rounded-xl p-5 border-2 transition-transform hover:scale-105 cursor-pointer ${
                      region.status === 'critical' ? 'bg-red-50 border-red-200' :
                      region.status === 'warning' ? 'bg-orange-50 border-orange-200' :
                      'bg-emerald-50 border-emerald-200'
                    }`}
                  >
                    <div className="mb-4">
                      <div className="text-sm font-bold text-gray-900 mb-1 leading-tight">{region.name}</div>
                      <div className={`text-xs font-bold uppercase tracking-widest ${
                        region.status === 'critical' ? 'text-red-600' :
                        region.status === 'warning' ? 'text-orange-600' :
                        'text-emerald-600'
                      }`}>
                        {region.status}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-3xl font-black text-gray-900">{region.score}</div>
                        <div className="text-xs text-gray-500 font-medium">Health Score</div>
                      </div>
                      <div className="text-right">
                        <div className={`text-sm font-bold flex items-center justify-end ${region.trend === 'down' ? 'text-red-500' : 'text-emerald-500'}`}>
                          {region.trend === 'down' ? <ArrowDownRight className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                        </div>
                        <div className="text-xs text-gray-600 font-medium mt-1">
                          <span className="font-bold text-gray-900">{region.slaBreach}</span> breaches
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Governance Trend Graph Mock */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 h-64 flex flex-col justify-center items-center relative overflow-hidden">
              <h2 className="text-lg font-bold text-gray-900 absolute top-6 left-8 z-10">Statewide Resolution Velocity (30 Days)</h2>
              <div className="w-full h-32 flex items-end justify-between px-4 mt-8 opacity-60">
                {/* Mocking a bar chart with simple divs */}
                {[40, 55, 45, 60, 75, 65, 80, 85, 70, 90, 85, 95].map((height, i) => (
                  <div key={i} className="w-1/12 mx-1 bg-emerald-500 rounded-t-sm transition-all hover:bg-emerald-400" style={{ height: `${height}%` }}></div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Bottlenecks & High Performers */}
          <div className="space-y-6">
            
            {/* Top Bottlenecks */}
            <div className="bg-white rounded-2xl shadow-sm border border-red-200 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-6 flex items-center">
                  <AlertTriangle className="w-5 h-5 text-red-500 mr-2" /> Structural Bottlenecks
                </h3>
                <div className="space-y-4">
                  {BOTTLENECKS.map((item, i) => (
                    <div key={i} className="p-3 bg-red-50 rounded-lg border border-red-100">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-sm font-bold text-gray-900">{item.dept}</span>
                        <span className="text-xs font-black text-red-600 bg-white px-2 py-0.5 rounded shadow-sm">{item.delay} Avg Delay</span>
                      </div>
                      <div className="text-xs text-red-800 font-medium italic">Reason: {item.reason}</div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 py-2 text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors border border-red-200">
                  View Full Failure Report
                </button>
              </div>
            </div>

            {/* High Performers */}
            <div className="bg-white rounded-2xl shadow-sm border border-emerald-200 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-6 flex items-center">
                  <ShieldCheck className="w-5 h-5 text-emerald-500 mr-2" /> High-Performing Sectors
                </h3>
                <div className="space-y-4">
                  {HIGH_PERFORMERS.map((item, i) => (
                    <div key={i} className="p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-sm font-bold text-gray-900">{item.dept}</span>
                        <span className="text-xs font-black text-emerald-700 bg-white px-2 py-0.5 rounded shadow-sm">{item.rating} Sat.</span>
                      </div>
                      <div className="text-xs text-emerald-800 font-medium">Avg Response: {item.response}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Corruption Heatmap Teaser */}
            <div className="bg-slate-900 rounded-2xl shadow-lg p-6 border border-slate-800 text-white">
              <div className="flex items-center mb-2">
                <Map className="w-5 h-5 text-purple-400 mr-2" />
                <h3 className="font-bold">Grievance & Corruption Map</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Explore a high-density geographical view of all citizen-reported corruption hotspots and unresolved infrastructure complaints.
              </p>
              <button className="w-full py-2 text-xs font-bold text-slate-900 bg-purple-400 hover:bg-purple-300 rounded-lg transition-colors">
                Open Deep Map
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
