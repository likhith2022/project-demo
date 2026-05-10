"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRole, UserRole } from './RoleContext';
import { Menu, X, ChevronDown, Activity, User, Users, Briefcase, FileText, BarChart3, AlertTriangle, Vote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const { role, setRole } = useRole();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);

  const roles: UserRole[] = ['Citizen', 'Volunteer', 'Officer', 'Contractor', 'MLA', 'Admin'];

  const getRoleLinks = () => {
    switch (role) {
      case 'Citizen':
        return [
          { name: 'Public Decisions', path: '/decisions', icon: Vote },
          { name: 'Party Tickets', path: '/party-candidates', icon: Users },
          { name: 'Gram Sabha', path: '/gram-sabha', icon: Users },
          { name: 'Public Works', path: '/works', icon: Activity },
          { name: 'Gov Services', path: '/services', icon: FileText },
          { name: 'State Health', path: '/governance-health', icon: Activity },
          { name: 'Budget Vote', path: '/budget', icon: Vote },
          { name: 'Report Issue', path: '/issues/new', icon: AlertTriangle },
          { name: 'Gov Jobs', path: '/jobs', icon: Briefcase },
          { name: 'Officers', path: '/officers', icon: User },
        ];
      case 'Officer':
      case 'Admin':
      case 'MLA':
        return [
          { name: 'Dashboard', path: '/dashboard', icon: BarChart3 },
          { name: 'Approvals', path: '/approvals', icon: FileText },
          { name: 'Manage Works', path: '/works/manage', icon: Activity },
        ];
      case 'Contractor':
        return [
          { name: 'My Projects', path: '/contractor/projects', icon: Activity },
          { name: 'Invoices', path: '/contractor/invoices', icon: FileText },
        ];
      default:
        return [
          { name: 'Public Works', path: '/works', icon: Activity },
          { name: 'Budget Vote', path: '/budget', icon: Vote },
        ];
    }
  };

  const links = getRoleLinks();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="font-bold text-2xl tracking-tight text-emerald-800">
                PRAJAKEEYA<span className="text-orange-500">.OS</span>
              </span>
            </Link>
            <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-700 hover:text-emerald-700 hover:border-emerald-500 transition-colors"
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            {/* Role Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
                className="inline-flex items-center gap-x-2 px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <User className="w-4 h-4 text-emerald-600" />
                View as: <span className="font-bold">{role}</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>

              <AnimatePresence>
                {isRoleDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.15 }}
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
                  >
                    <div className="py-1">
                      {roles.map((r) => (
                        <button
                          key={r}
                          onClick={() => {
                            setRole(r);
                            setIsRoleDropdownOpen(false);
                          }}
                          className={`group flex items-center px-4 py-2 text-sm w-full text-left ${
                            role === r ? 'bg-emerald-50 text-emerald-900 font-semibold' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden overflow-hidden"
          >
            <div className="pt-2 pb-3 space-y-1">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-emerald-800 hover:bg-emerald-50 hover:border-emerald-500"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex items-center">
                      <Icon className="w-5 h-5 mr-3" />
                      {link.name}
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="px-4 py-2">
                <p className="text-sm font-medium text-gray-500 mb-2">Switch Role Profile</p>
                <div className="flex flex-wrap gap-2">
                  {roles.map((r) => (
                    <button
                      key={r}
                      onClick={() => {
                        setRole(r);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`px-3 py-1 text-sm rounded-full border ${
                        role === r
                          ? 'bg-emerald-100 border-emerald-500 text-emerald-800 font-medium'
                          : 'bg-white border-gray-300 text-gray-700'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
