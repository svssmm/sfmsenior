"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export default function AnnouncementCard({ item }: { item: any }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group p-4 sm:p-6 rounded-2xl border border-gray-100 hover:border-sfm-mid/30 hover:shadow-xl hover:shadow-sfm-mid/5 transition-all bg-slate-50/50 cursor-default"
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3 sm:mb-4">
        <h3 className="text-lg sm:text-xl font-bold text-sfm-dark">{item.title}</h3>
        <span className={`self-start px-2 sm:px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
          item.importance === 'urgent' ? 'bg-red-100 text-red-600' : 
          item.importance === 'high' ? 'bg-amber-100 text-amber-600' : 'bg-sfm-mid/10 text-sfm-mid'
        }`}>
          {item.importance}
        </span>
      </div>
      <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 whitespace-pre-wrap">{item.content}</p>
      <div className="flex items-center gap-2 text-xs text-gray-400">
        <Clock className="w-3 h-3" />
        {new Date(item.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
      </div>
    </motion.div>
  );
}
