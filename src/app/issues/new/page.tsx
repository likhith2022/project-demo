"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Droplets, HardHat, Briefcase, Zap, ShieldAlert, ChevronRight, Camera, MapPin, UploadCloud, CheckCircle2, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function RapidIssueReportPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const categories = [
    { id: 'water', name: 'Water Issue', icon: Droplets, color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-200', hover: 'hover:border-blue-500' },
    { id: 'roads', name: 'Road Damage', icon: HardHat, color: 'text-orange-500', bg: 'bg-orange-50', border: 'border-orange-200', hover: 'hover:border-orange-500' },
    { id: 'jobs', name: 'Job Request', icon: Briefcase, color: 'text-emerald-500', bg: 'bg-emerald-50', border: 'border-emerald-200', hover: 'hover:border-emerald-500', isLink: true, path: '/jobs' },
    { id: 'power', name: 'Electricity', icon: Zap, color: 'text-yellow-500', bg: 'bg-yellow-50', border: 'border-yellow-200', hover: 'hover:border-yellow-500' },
    { id: 'corruption', name: 'Report Bribe', icon: ShieldAlert, color: 'text-red-500', bg: 'bg-red-50', border: 'border-red-200', hover: 'hover:border-red-500' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-gray-900 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">What needs fixing today?</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Directly report civic issues or request jobs. No complex forms. Just snap a photo, ping the location, and let the public observe the resolution.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        
        {!selectedCategory && !isSuccess && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((cat, i) => (
              cat.isLink ? (
                <Link href={cat.path} key={cat.id}>
                  <div className={`flex flex-col items-center justify-center p-8 rounded-2xl border-2 transition-all cursor-pointer bg-white ${cat.border} ${cat.hover} hover:shadow-lg h-full`}>
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 ${cat.bg}`}>
                      <cat.icon className={`w-10 h-10 ${cat.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 text-center">{cat.name}</h3>
                  </div>
                </Link>
              ) : (
                <div 
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex flex-col items-center justify-center p-8 rounded-2xl border-2 transition-all cursor-pointer bg-white ${cat.border} ${cat.hover} hover:shadow-lg`}
                >
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 ${cat.bg}`}>
                    <cat.icon className={`w-10 h-10 ${cat.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-center">{cat.name}</h3>
                </div>
              )
            ))}
          </motion.div>
        )}

        {selectedCategory && !isSuccess && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="max-w-2xl mx-auto">
            <button 
              onClick={() => setSelectedCategory(null)}
              className="text-gray-500 hover:text-gray-900 font-bold mb-6 flex items-center transition-colors"
            >
              ← Back to Categories
            </button>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-200">
              <div className="flex items-center mb-8 pb-6 border-b border-gray-100">
                {(() => {
                  const cat = categories.find(c => c.id === selectedCategory);
                  const Icon = cat?.icon || AlertCircle;
                  return (
                    <>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${cat?.bg}`}>
                        <Icon className={`w-6 h-6 ${cat?.color}`} />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">Report {cat?.name}</h2>
                    </>
                  );
                })()}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1-Click Location */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Location</label>
                  <div className="flex bg-gray-50 p-4 rounded-xl border border-gray-200 items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <MapPin className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Indiranagar, Ward 72</div>
                        <div className="text-xs text-gray-500 font-mono">12.9784° N, 77.6408° E</div>
                      </div>
                    </div>
                    <button type="button" className="text-blue-600 font-bold text-sm bg-blue-50 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors">
                      Change
                    </button>
                  </div>
                </div>

                {/* Instant Photo Upload */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Evidence Photo</label>
                  <div className="w-full h-48 rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center bg-gray-50 hover:bg-blue-50 hover:border-blue-300 transition-colors cursor-pointer group">
                    <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <Camera className="w-8 h-8 text-blue-500" />
                    </div>
                    <span className="font-bold text-gray-700">Tap to take a photo</span>
                    <span className="text-xs text-gray-500 mt-1">or select from gallery</span>
                  </div>
                </div>

                {/* Simple Description */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Short Description (Optional)</label>
                  <input type="text" placeholder="E.g., Pipe broken for 3 days" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-900 hover:bg-black text-white font-bold py-4 rounded-xl shadow-lg transition-all flex justify-center items-center text-lg mt-8"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Submitting securely...</span>
                  ) : (
                    <>Submit Public Report <ChevronRight className="w-5 h-5 ml-2" /></>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        )}

        {isSuccess && (
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="max-w-xl mx-auto text-center py-16 bg-white rounded-3xl shadow-xl shadow-green-100 border border-green-50 p-8">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Report Logged!</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Your issue has been transparently recorded on the public ledger.
            </p>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left border border-gray-200">
              <div className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Public Tracking ID</div>
              <div className="text-2xl font-mono font-black text-gray-900 mb-4">ISS-99402</div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Assigned Officer:</span>
                <span className="font-bold text-gray-900">Ramesh K. (BBMP East)</span>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Link href="/issues" className="px-6 py-3 bg-gray-900 hover:bg-black text-white font-bold rounded-xl transition-colors">
                View Public Feed
              </Link>
              <button 
                onClick={() => { setIsSuccess(false); setSelectedCategory(null); }}
                className="px-6 py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold rounded-xl transition-colors"
              >
                Report Another
              </button>
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}
