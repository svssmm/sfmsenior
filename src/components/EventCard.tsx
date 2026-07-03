"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";

export default function EventCard({ event }: { event: any }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col group h-full"
    >
      <div className="relative h-48 bg-sfm-mid/10 overflow-hidden">
        {event.imageUrl ? (
          <img 
            src={event.imageUrl} 
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-sfm-mid to-sfm-blue text-white/20">
            <Calendar className="w-20 h-20" />
          </div>
        )}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-sfm-dark shadow-sm">
          {new Date(event.eventDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-3 text-sfm-dark group-hover:text-sfm-mid transition-colors">{event.title}</h3>
        <p className="text-gray-600 text-sm mb-6 flex-1">{event.description}</p>
        
        <div className="space-y-2 pt-4 border-t border-gray-50">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Clock className="w-4 h-4 text-sfm-mid" />
            {new Date(event.eventDate).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <MapPin className="w-4 h-4 text-sfm-mid" />
            {event.location}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
