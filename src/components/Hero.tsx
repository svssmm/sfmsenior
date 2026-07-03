"use client";

import { motion } from "framer-motion";
import { Music, Disc } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-sfm-dark">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-sfm-mid rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sfm-blue rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-sfm-mid/20 text-sfm-mid text-sm font-semibold mb-6 border border-sfm-mid/30">
            Official SFM Seniors Hub
          </span>
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Making Memories <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sfm-mid to-sfm-accent">
              One Event at a Time.
            </span>
          </h1>
          <p className="text-xl text-sfm-light/70 mb-10 max-w-lg">
            Welcome to the home of SFM Seniors Tripoli. Stay updated with our latest announcements and upcoming events.
          </p>
          <div className="flex gap-4">
            <button className="bg-sfm-mid hover:bg-sfm-blue text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105">
              Explore Events
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold transition-all">
              Announcements
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          {/* Custom Animated Logo Placeholder */}
          <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px]">
            {/* Record 1 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-64 h-64 lg:w-96 lg:h-96 rounded-full bg-neutral-900 border-[16px] border-neutral-800 flex items-center justify-center shadow-2xl"
            >
              <div className="w-20 h-20 bg-sfm-mid rounded-full border-4 border-white/20 flex items-center justify-center">
                <Music className="w-8 h-8 text-white" />
              </div>
            </motion.div>
            
            {/* Record 2 */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 right-0 w-48 h-48 lg:w-72 lg:h-72 rounded-full bg-neutral-900 border-[12px] border-neutral-800 flex items-center justify-center shadow-2xl"
            >
              <div className="w-14 h-14 bg-sfm-accent rounded-full border-4 border-white/20" />
            </motion.div>

            {/* Floating Text Overlay */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none"
            >
              <h2 className="text-4xl lg:text-6xl font-black text-white drop-shadow-lg uppercase tracking-tighter">
                SFM
              </h2>
              <h3 className="text-2xl lg:text-4xl font-bold text-sfm-accent drop-shadow-lg italic -mt-2">
                Seniors
              </h3>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-sfm-white to-transparent" />
    </section>
  );
}
