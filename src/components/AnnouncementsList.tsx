import { db } from "@/db";
import { announcements } from "@/db/schema";
import { desc } from "drizzle-orm";
import { Bell } from "lucide-react";
import AnnouncementCard from "./AnnouncementCard";

export default async function AnnouncementsList() {
  const data = await db.query.announcements.findMany({
    orderBy: [desc(announcements.createdAt)],
    limit: 5,
  });

  if (data.length === 0) {
    return (
      <section id="announcements" className="py-16 sm:py-20 px-4 sm:px-6 bg-white text-center">
        <div className="flex items-center gap-3 mb-6 justify-center">
          <div className="bg-sfm-mid p-2 rounded-lg">
            <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-sfm-dark">Latest Announcements</h2>
        </div>
        <p className="text-gray-400">No announcements yet. Check back soon!</p>
      </section>
    );
  }

  return (
    <section id="announcements" className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8 sm:mb-10">
          <div className="bg-sfm-mid p-2 rounded-lg">
            <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-sfm-dark">Latest Announcements</h2>
        </div>

        <div className="grid gap-4 sm:gap-6">
          {data.map((item) => (
            <AnnouncementCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
