"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BarChart3, Users, IndianRupee, AlertCircle, MapPin, CheckCircle, Clock } from 'lucide-react';
import { useRole } from '@/components/RoleContext';

export default function TransparencyDashboard() {
  const { role } = useRole();

  if (role === 'Citizen') {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Access Restricted</h1>
        <p className="text-gray-600">Please switch to an Officer or MLA role using the top navigation to view the internal dashboard.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Constituency Dashboard</h1>
        <p className="text-gray-600">Real-time governance analytics for your jurisdiction.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <KPICard 
          title="Total Budget Allocated" 
          value="₹45.2 Cr" 
          trend="+12% from last year" 
          icon={<IndianRupee className="w-6 h-6 text-emerald-600" />} 
          trendPositive={true}
        />
        <KPICard 
          title="Active Projects" 
          value="24" 
          trend="3 near deadline" 
          icon={<BarChart3 className="w-6 h-6 text-blue-600" />} 
          trendPositive={false}
        />
        <KPICard 
          title="Public Issues Open" 
          value="142" 
          trend="-15 this week" 
          icon={<AlertCircle className="w-6 h-6 text-orange-600" />} 
          trendPositive={true}
        />
        <KPICard 
          title="Citizen Satisfaction" 
          value="78%" 
          trend="+5% this month" 
          icon={<Users className="w-6 h-6 text-purple-600" />} 
          trendPositive={true}
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Chart Area Mock */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-gray-900">Fund Utilization Heatmap</h3>
            <select className="text-sm border border-gray-300 rounded-md px-2 py-1">
              <option>Last 6 Months</option>
              <option>Last Year</option>
            </select>
          </div>
          
          <div className="w-full h-64 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center relative overflow-hidden group">
            {/* Heatmap Mock Background */}
            <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Bangalore,India&zoom=11&size=800x400&style=feature:all|element:labels|visibility:off&sensor=false')] bg-cover bg-center opacity-30"></div>
            
            {/* Heatmap Dots Mock */}
            <div className="absolute w-full h-full">
              <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-60"></div>
              <div className="absolute top-1/3 left-1/2 w-24 h-24 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-60"></div>
              <div className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-60"></div>
            </div>

            <div className="relative z-10 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm font-medium text-gray-700">
              Interactive Map Analytics
            </div>
          </div>
        </div>

        {/* Action Items List */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Priority Action Items</h3>
          
          <div className="space-y-4">
            {[
              { title: 'Approve Invoice #INV-2041', time: 'Overdue by 2 days', type: 'urgent', link: '/approvals' },
              { title: 'Review Road Tender (Whitefield)', time: 'Due today', type: 'pending', link: '/works/manage' },
              { title: 'Public Issue Escalation: Water', time: '142 upvotes', type: 'urgent', link: '/issues/ISS-99201' },
              { title: 'Sign off completion: WRK-2801', time: 'Due tomorrow', type: 'pending', link: '/works/manage' },
            ].map((item, i) => (
              <Link href={item.link} key={i}>
                <div className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100 cursor-pointer">
                  <div className="mt-1 mr-3">
                    {item.type === 'urgent' ? 
                      <AlertCircle className="w-5 h-5 text-red-500" /> : 
                      <Clock className="w-5 h-5 text-amber-500" />
                    }
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{item.title}</p>
                    <p className={`text-xs ${item.type === 'urgent' ? 'text-red-600' : 'text-gray-500'}`}>{item.time}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <button className="w-full mt-6 py-2 text-sm font-bold text-emerald-600 border border-emerald-200 rounded-lg hover:bg-emerald-50 transition-colors">
            View All Tasks
          </button>
        </div>
      </div>
    </div>
  );
}

function KPICard({ title, value, trend, icon, trendPositive }: any) {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100">
          {icon}
        </div>
      </div>
      <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
      <div className="text-3xl font-black text-gray-900 mb-2">{value}</div>
      <div className={`text-sm font-medium ${trendPositive ? 'text-green-600' : 'text-orange-600'}`}>
        {trend}
      </div>
    </motion.div>
  );
}
