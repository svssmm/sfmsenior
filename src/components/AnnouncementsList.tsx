import { db } from "@/db";
import { announcements } from "@/db/schema";
import { desc } from "drizzle-orm";
import { Bell, Clock } from "lucide-react";
import AnnouncementCard from "./AnnouncementCard";

export default async function AnnouncementsList() {
  const data = await db.query.announcements.findMany({
    orderBy: [desc(announcements.createdAt)],
    limit: 5,
  });

  if (data.length === 0) {
    return (
      <section className="py-20 px-6 bg-white text-center">
        <p className="text-gray-400">No announcements yet. Check back soon!</p>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <div className="bg-sfm-mid p-2 rounded-lg">
            <Bell className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-sfm-dark">Latest Announcements</h2>
        </div>

        <div className="grid gap-6">
          {data.map((item) => (
            <AnnouncementCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
