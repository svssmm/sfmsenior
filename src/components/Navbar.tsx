"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Music, Calendar, Bell, Shield, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-sfm-dark/90 backdrop-blur-md text-white py-4 px-4 sm:px-6 border-b border-sfm-mid/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="bg-sfm-mid p-2 rounded-full">
            <Music className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <span className="text-lg sm:text-xl font-bold tracking-tighter">SFM <span className="text-sfm-mid">SENIORS</span></span>
        </motion.div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="hover:text-sfm-mid transition-colors flex items-center gap-1">
            <Bell className="w-4 h-4" /> Announcements
          </Link>
          <Link href="/events" className="hover:text-sfm-mid transition-colors flex items-center gap-1">
            <Calendar className="w-4 h-4" /> Events
          </Link>
          <Link href="/login" className="bg-sfm-mid hover:bg-sfm-blue text-white px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1">
            <Shield className="w-4 h-4" /> Admin
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden bg-sfm-mid/20 p-2 rounded-lg"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 pb-4 flex flex-col gap-3 border-t border-sfm-mid/20 pt-4"
        >
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-sfm-mid transition-colors flex items-center gap-2 py-2">
            <Bell className="w-4 h-4" /> Announcements
          </Link>
          <Link href="/events" onClick={() => setIsOpen(false)} className="hover:text-sfm-mid transition-colors flex items-center gap-2 py-2">
            <Calendar className="w-4 h-4" /> Events
          </Link>
          <Link href="/login" onClick={() => setIsOpen(false)} className="bg-sfm-mid hover:bg-sfm-blue text-white px-4 py-3 rounded-lg text-sm font-medium transition-all flex items-center gap-2 justify-center">
            <Shield className="w-4 h-4" /> Admin Login
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
