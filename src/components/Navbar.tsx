"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Music, Calendar, Bell, Shield } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-sfm-dark/90 backdrop-blur-md text-white py-4 px-6 border-b border-sfm-mid/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="bg-sfm-mid p-2 rounded-full">
            <Music className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tighter">SFM <span className="text-sfm-accent text-sfm-mid">SENIORS</span></span>
        </motion.div>
        
        <div className="flex gap-8 items-center">
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
      </div>
    </nav>
  );
}
