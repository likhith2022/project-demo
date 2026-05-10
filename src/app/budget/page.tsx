"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PieChart, Save, Info, AlertTriangle, CheckCircle2 } from 'lucide-react';

const CATEGORIES = [
  { id: 'edu', name: 'Education & Schools', color: 'bg-blue-500' },
  { id: 'health', name: 'Healthcare & Hospitals', color: 'bg-red-500' },
  { id: 'infra', name: 'Roads & Infrastructure', color: 'bg-amber-500' },
  { id: 'water', name: 'Water & Sanitation', color: 'bg-cyan-500' },
  { id: 'agri', name: 'Agriculture Support', color: 'bg-green-500' },
  { id: 'tech', name: 'Digital Infrastructure', color: 'bg-indigo-500' },
];

export default function BudgetVotingPage() {
  const [points, setPoints] = useState<Record<string, number>>(
    CATEGORIES.reduce((acc, cat) => ({ ...acc, [cat.id]: 0 }), {})
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalPoints = Object.values(points).reduce((a, b) => a + b, 0);
  const remainingPoints = 100 - totalPoints;

  const handleSliderChange = (id: string, value: number) => {
    const newVal = Math.max(0, Math.min(100, value));
    const currentPointsWithoutThis = totalPoints - points[id];
    
    // Ensure we don't exceed 100
    if (currentPointsWithoutThis + newVal <= 100) {
      setPoints(prev => ({ ...prev, [id]: newVal }));
    } else {
      // Max out to whatever is left
      setPoints(prev => ({ ...prev, [id]: 100 - currentPointsWithoutThis }));
    }
  };

  const handleSubmit = () => {
    if (remainingPoints !== 0) return;
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Budget Vote Submitted!</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your priorities have been recorded for the ₹1 Lakh Crore Participatory Budget. 
            Results will be published live once the voting period ends.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-lg"
          >
            Modify Allocation
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center">
            <PieChart className="w-8 h-8 mr-3 text-orange-500" /> 
            Participatory Budgeting 2026-27
          </h1>
          <p className="text-gray-600 max-w-2xl">
            You have 100 points to allocate across different sectors. 
            The government will align the ₹1 Lakh Crore budget proportionally to the public consensus.
          </p>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center min-w-[200px]">
          <div className="text-center">
            <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Points Remaining</div>
            <div className={`text-4xl font-black ${remainingPoints === 0 ? 'text-green-500' : 'text-orange-500'}`}>
              {remainingPoints}
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="space-y-8">
              {CATEGORIES.map(cat => (
                <div key={cat.id}>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-gray-700">{cat.name}</label>
                    <span className="text-lg font-bold text-gray-900 w-12 text-right">{points[cat.id]}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      value={points[cat.id]}
                      onChange={(e) => handleSliderChange(cat.id, parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4">Allocation Preview</h3>
            
            {/* Simple CSS Pie Chart representation using a stacked bar for simplicity */}
            <div className="w-full h-12 bg-gray-200 rounded-full overflow-hidden flex mb-6">
              {CATEGORIES.map(cat => points[cat.id] > 0 && (
                <motion.div 
                  key={cat.id}
                  className={`h-full ${cat.color}`}
                  style={{ width: `${points[cat.id]}%` }}
                  layout
                />
              ))}
            </div>

            <div className="space-y-3 mb-8">
              {CATEGORIES.filter(c => points[c.id] > 0).sort((a,b) => points[b.id] - points[a.id]).map(cat => (
                <div key={cat.id} className="flex justify-between items-center text-sm">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-2 ${cat.color}`}></div>
                    <span className="text-gray-700">{cat.name}</span>
                  </div>
                  <span className="font-bold text-gray-900">{points[cat.id]}%</span>
                </div>
              ))}
              {totalPoints === 0 && (
                <div className="text-center text-gray-500 py-4 text-sm italic">
                  Move sliders to allocate points
                </div>
              )}
            </div>

            <button 
              onClick={handleSubmit}
              disabled={remainingPoints !== 0}
              className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center transition-all ${
                remainingPoints === 0 
                ? 'bg-emerald-600 hover:bg-emerald-700 shadow-lg hover:shadow-emerald-600/30 cursor-pointer' 
                : 'bg-gray-300 cursor-not-allowed'
              }`}
            >
              <Save className="w-5 h-5 mr-2" />
              {remainingPoints === 0 ? 'Submit Allocation' : `Allocate ${remainingPoints} more points`}
            </button>
            
            {remainingPoints > 0 && (
              <p className="text-xs text-orange-600 mt-3 text-center flex items-center justify-center">
                <AlertTriangle className="w-3 h-3 mr-1" />
                You must allocate exactly 100 points
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
