import { db } from "@/db";
import { events } from "@/db/schema";
import { asc } from "drizzle-orm";
import { Calendar } from "lucide-react";
import EventCard from "./EventCard";

export default async function EventsList() {
  const data = await db.query.events.findMany({
    orderBy: [asc(events.eventDate)],
  });

  if (data.length === 0) {
    return (
      <section id="events" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-50 text-center">
        <div className="flex items-center gap-3 mb-6 justify-center">
          <div className="bg-sfm-dark p-2 rounded-lg">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-sfm-dark">Upcoming Events</h2>
        </div>
        <p className="text-gray-400">No upcoming events scheduled. Stay tuned!</p>
      </section>
    );
  }

  return (
    <section id="events" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8 sm:mb-10">
          <div className="bg-sfm-dark p-2 rounded-lg">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-sfm-dark">Upcoming Events</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {data.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
