"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, MapPin, IndianRupee, AlertTriangle, Building, Truck } from 'lucide-react';

const FEED_EVENTS = [
  { id: 1, type: 'work', text: 'Road relaying started in Mysuru South', icon: Truck, color: 'text-blue-500', bg: 'bg-blue-50', time: 'Just now' },
  { id: 2, type: 'alert', text: 'Water issue escalated to Minister in Kolar', icon: AlertTriangle, color: 'text-red-500', bg: 'bg-red-50', time: '2m ago' },
  { id: 3, type: 'budget', text: '₹14.5 Cr sanctioned for Hubballi Hospital', icon: IndianRupee, color: 'text-emerald-500', bg: 'bg-emerald-50', time: '15m ago' },
  { id: 4, type: 'delay', text: 'SLA Breached: Whitefield Pipeline Repair', icon: Activity, color: 'text-orange-500', bg: 'bg-orange-50', time: '1h ago' },
  { id: 5, type: 'gov', text: 'District Commissioner transferred (Raichur)', icon: Building, color: 'text-indigo-500', bg: 'bg-indigo-50', time: '2h ago' },
];

export function KarnatakaLiveFeed() {
  const [events, setEvents] = useState(FEED_EVENTS.slice(0, 3));
  const [index, setIndex] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setEvents(prev => {
        const nextEvent = FEED_EVENTS[index % FEED_EVENTS.length];
        setIndex(i => i + 1);
        return [nextEvent, ...prev.slice(0, 3)];
      });
    }, 4500);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="bg-gray-900 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="flex h-3 w-3 relative mr-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
          <h3 className="text-white font-bold tracking-widest uppercase text-sm">Karnataka Live</h3>
        </div>
        <div className="text-gray-400 text-xs">Real-time governance activity</div>
      </div>
      
      <div className="p-2">
        <AnimatePresence initial={false}>
          {events.map((event) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={event.id + event.time + Math.random()} // Force unique key for animation demo
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="p-4 flex items-start gap-4 hover:bg-gray-50 rounded-xl transition-colors border-b border-transparent hover:border-gray-100 cursor-pointer">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${event.bg}`}>
                    <Icon className={`w-5 h-5 ${event.color}`} />
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-sm font-bold text-gray-900 leading-tight mb-1">{event.text}</p>
                    <p className="text-xs text-gray-500 font-medium">{event.time}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
