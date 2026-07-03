"use client";

import { motion } from "framer-motion";
import { Music } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-sfm-dark pt-24 pb-12">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-sfm-mid rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sfm-blue rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <span className="inline-block px-3 sm:px-4 py-1 rounded-full bg-sfm-mid/20 text-sfm-mid text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-sfm-mid/30">
            Official SFM Seniors Hub
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-4 sm:mb-6 leading-tight">
            Making Memories <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sfm-mid to-sfm-accent">
              One Event at a Time.
            </span>
          </h1>
          <p className="text-base sm:text-xl text-sfm-light/70 mb-8 sm:mb-10 max-w-lg mx-auto lg:mx-0">
            Welcome to the home of SFM Seniors Tripoli. Stay updated with our latest announcements and upcoming events.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <a href="#events" className="bg-sfm-mid hover:bg-sfm-blue text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold transition-all transform hover:scale-105 text-center">
              Explore Events
            </a>
            <a href="#announcements" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold transition-all text-center">
              Announcements
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center items-center order-1 lg:order-2"
        >
          {/* Custom Animated Logo */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px]">
            {/* Record 1 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 rounded-full bg-neutral-900 border-[10px] sm:border-[16px] border-neutral-800 flex items-center justify-center shadow-2xl"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-sfm-mid rounded-full border-4 border-white/20 flex items-center justify-center">
                <Music className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
            </motion.div>
            
            {/* Record 2 */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 right-0 w-36 h-36 sm:w-48 sm:h-48 lg:w-72 lg:h-72 rounded-full bg-neutral-900 border-[8px] sm:border-[12px] border-neutral-800 flex items-center justify-center shadow-2xl"
            >
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-sfm-accent rounded-full border-4 border-white/20" />
            </motion.div>

            {/* Floating Text Overlay */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white drop-shadow-lg uppercase tracking-tighter">
                SFM
              </h2>
              <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-sfm-accent drop-shadow-lg italic -mt-2">
                Seniors
              </h3>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
