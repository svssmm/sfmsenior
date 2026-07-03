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
      <section id="events" className="py-20 px-6 bg-sfm-white text-center">
        <p className="text-gray-400">No upcoming events scheduled. Stay tuned!</p>
      </section>
    );
  }

  return (
    <section id="events" className="py-20 px-6 bg-sfm-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <div className="bg-sfm-dark p-2 rounded-lg">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-sfm-dark">Upcoming Events</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
