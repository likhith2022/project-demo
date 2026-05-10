"use client";

import React from 'react';
import { AlertTriangle, Clock, MapPin, Search, Filter, MessageSquare, ThumbsUp } from 'lucide-react';
import Link from 'next/link';

export default function IssuesFeedPage() {
  const issues = [
    {
      id: 'ISS-99201',
      title: 'Whitefield Main Road Pipeline Repair Abandoned',
      ward: 'Ward 84, East Zone',
      status: 'Delayed',
      votes: 1432,
      comments: 84,
      days: 17
    },
    {
      id: 'ISS-99245',
      title: 'Streetlights not working on 100ft Road',
      ward: 'Ward 72, East Zone',
      status: 'Pending',
      votes: 842,
      comments: 12,
      days: 3
    },
    {
      id: 'ISS-99102',
      title: 'Storm Water Drain Clogging',
      ward: 'Ward 12, South Zone',
      status: 'Resolved',
      votes: 2100,
      comments: 145,
      days: 0
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <div className="max-w-4xl mx-auto px-4 py-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">Public Issues Feed</h1>
            <p className="text-gray-600 mt-1">Track and upvote civic issues reported by citizens in your area.</p>
          </div>
          <Link href="/issues/new" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-bold shadow-sm transition-colors flex items-center">
            <AlertTriangle className="w-4 h-4 mr-2" /> Report Issue
          </Link>
        </div>

        <div className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm flex gap-2 mb-8">
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search issues by keyword or ward..." 
              className="w-full pl-10 pr-4 py-2 border-none outline-none bg-transparent"
            />
          </div>
          <button className="px-4 py-2 border-l border-gray-200 text-gray-600 font-medium flex items-center hover:bg-gray-50">
            <Filter className="w-4 h-4 mr-2" /> Filter
          </button>
        </div>

        <div className="space-y-4">
          {issues.map((issue) => (
            <Link key={issue.id} href={`/issues/${issue.id}`} className="block">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-red-300 hover:shadow-md transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold text-gray-900">{issue.title}</h2>
                  <span className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-widest flex items-center ${
                    issue.status === 'Delayed' ? 'bg-red-100 text-red-700' :
                    issue.status === 'Resolved' ? 'bg-emerald-100 text-emerald-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {issue.status === 'Delayed' && <AlertTriangle className="w-3 h-3 mr-1" />}
                    {issue.status === 'Pending' && <Clock className="w-3 h-3 mr-1" />}
                    {issue.status}
                  </span>
                </div>
                <div className="text-sm text-gray-500 mb-6 flex items-center gap-4">
                  <span className="flex items-center"><MapPin className="w-4 h-4 mr-1"/> {issue.ward}</span>
                  <span className="font-mono text-xs bg-gray-100 px-2 py-0.5 rounded text-gray-600">{issue.id}</span>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="flex gap-4">
                    <div className="flex items-center text-sm font-bold text-gray-700 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                      <ThumbsUp className="w-4 h-4 mr-2 text-blue-500" /> {issue.votes}
                    </div>
                    <div className="flex items-center text-sm font-medium text-gray-500">
                      <MessageSquare className="w-4 h-4 mr-1.5" /> {issue.comments} updates
                    </div>
                  </div>
                  {issue.days > 0 && (
                    <div className="text-sm font-bold text-red-600">
                      Pending for {issue.days} Days
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
