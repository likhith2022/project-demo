"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Vote, AlertTriangle, ArrowRight, Smartphone } from 'lucide-react';
import Link from 'next/link';
import { KarnatakaLiveFeed } from '@/components/KarnatakaLiveFeed';

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-emerald-900 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587613865763-4b8b0d19e8ab?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/80 to-emerald-950/90"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 font-semibold mb-8 border border-orange-500/30">
              <ShieldCheck className="w-5 h-5 mr-2" />
              Transparent Governance Infrastructure
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              A New Era of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">Digital Democracy</span> for Karnataka.
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-12 leading-relaxed">
              Real-time public works transparency, participatory budgeting, and citizen-first governance powered by Prajakeeya.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => setShowLogin(true)}
                className="px-8 py-4 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-lg text-lg transition-all shadow-lg hover:shadow-orange-500/25 flex items-center justify-center"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                Citizen Login (OTP)
              </button>
              <Link href="/works" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-lg text-lg transition-all flex items-center justify-center backdrop-blur-sm">
                View Public Works <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Karnataka Live Feed Section */}
      <section className="bg-gray-100 py-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <KarnatakaLiveFeed />
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Operating System for Citizens</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Not just a website. A complete infrastructure to hold your government accountable and participate in fund allocation.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Activity className="w-8 h-8 text-emerald-600" />}
              title="Work Transparency Engine"
              desc="Track every road digging, pipeline repair, and construction in your area. See contractors, budgets, and live progress photos."
              link="/works"
            />
            <FeatureCard 
              icon={<Vote className="w-8 h-8 text-orange-500" />}
              title="People's Budget Engine"
              desc="₹1 Lakh Crore participatory budget. You decide where the money goes. Allocate 100 points to your priorities."
              link="/budget"
            />
            <FeatureCard 
              icon={<AlertTriangle className="w-8 h-8 text-red-500" />}
              title="Public Issue Resolution"
              desc="Geo-tag issues, upload photos, and track resolution. Backed by public voting to prioritize officer responses."
              link="/issues/new"
            />
          </div>
        </div>
      </section>

      {/* Live Ledger Teaser */}
      <section className="py-24 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="text-emerald-600 font-bold tracking-wider uppercase mb-2">Live Transaction Ledger</div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">A UPI Statement for Government Spending.</h2>
            <p className="text-lg text-gray-600 mb-8">
              Every rupee sanctioned, every invoice generated, and every payment released to contractors is visible to you in real-time. 
              No more RTI applications. Just transparent data.
            </p>
            <Link href="/ledger" className="inline-flex items-center font-bold text-emerald-600 hover:text-emerald-700">
              View Live Ledger <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 overflow-hidden">
              <div className="space-y-4">
                {[
                  { id: 'TXN-8492', to: 'L&T Construction', for: 'Whitefield Pipeline', amt: '₹45,00,000', status: 'Released', link: '/audit/ISS-99201' },
                  { id: 'TXN-8491', to: 'Ramesh Infra', for: 'Indiranagar Potholes', amt: '₹12,50,000', status: 'Pending', link: '/audit/ISS-99201' },
                  { id: 'TXN-8490', to: 'TechSolutions Ltd', for: 'Smart Traffic Lights', amt: '₹8,20,000', status: 'Released', link: '/audit/ISS-99201' },
                ].map((txn, i) => (
                  <Link href={txn.link} key={txn.id} className="block">
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.2 }}
                      className="flex justify-between items-center p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-emerald-200 hover:shadow-sm transition-all"
                    >
                      <div>
                        <div className="font-bold text-gray-900">{txn.to}</div>
                        <div className="text-sm text-gray-500">{txn.for} • {txn.id}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-emerald-600">{txn.amt}</div>
                        <div className={`text-xs font-semibold ${txn.status === 'Released' ? 'text-green-500' : 'text-orange-500'}`}>
                          {txn.status}
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Login Modal Mock */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative"
          >
            <button onClick={() => setShowLogin(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              ✕
            </button>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Citizen Login</h3>
            <p className="text-gray-500 mb-6">Enter your mobile number to receive an OTP.</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                    +91
                  </span>
                  <input type="tel" placeholder="99999 99999" className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm" />
                </div>
              </div>
              <button 
                onClick={() => {
                  alert("OTP Sent! (Mock)");
                  setShowLogin(false);
                }}
                className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
              >
                Send OTP
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

function FeatureCard({ icon, title, desc, link }: { icon: React.ReactNode, title: string, desc: string, link: string }) {
  return (
    <Link href={link}>
      <motion.div 
        whileHover={{ y: -5 }}
        className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 h-full cursor-pointer transition-shadow hover:shadow-xl"
      >
        <div className="w-16 h-16 rounded-xl bg-emerald-50 flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{desc}</p>
      </motion.div>
    </Link>
  );
}
