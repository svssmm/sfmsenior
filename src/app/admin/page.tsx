import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { createAnnouncement, createEvent, deleteAnnouncement, deleteEvent } from "./actions";
import { Bell, Calendar, Plus, LogOut, Trash2 } from "lucide-react";
import { db } from "@/db";
import { announcements, events } from "@/db/schema";
import { desc } from "drizzle-orm";

export default async function AdminPage() {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }

  const allAnnouncements = await db.select().from(announcements).orderBy(desc(announcements.createdAt));
  const allEvents = await db.select().from(events).orderBy(desc(events.createdAt));

  return (
    <div className="min-h-screen bg-slate-50 pt-20 sm:pt-24 pb-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 sm:mb-12">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-sfm-dark">Admin Dashboard</h1>
            <p className="text-gray-500 text-sm sm:text-base">Welcome back, {session.username}</p>
          </div>
          <a href="/api/logout" className="flex items-center gap-2 text-red-600 hover:text-red-700 font-medium text-sm sm:text-base">
            <LogOut className="w-4 h-4 sm:w-5 sm:h-5" /> Logout
          </a>
        </div>

        <div className="bg-blue-50 border border-blue-100 p-4 sm:p-6 rounded-2xl mb-8 sm:mb-12 flex gap-3 sm:gap-4">
          <div className="bg-blue-500 text-white p-2 rounded-lg h-fit shrink-0">
            <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <h3 className="font-bold text-blue-900 text-sm sm:text-base">How to use your dashboard</h3>
            <p className="text-blue-800/70 text-xs sm:text-sm mt-1">
              Any announcement or event you post here will be immediately visible to all visitors on the homepage. 
              To delete a post, simply find it in the list below and click the trash icon.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Announcement Form */}
          <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="bg-sfm-mid/10 p-2 rounded-lg">
                <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-sfm-mid" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold">Post Announcement</h2>
            </div>
            <form action={createAnnouncement} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input name="title" required className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-sfm-mid outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Content</label>
                <textarea name="content" required rows={4} className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-sfm-mid outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Importance</label>
                <select name="importance" className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-sfm-mid outline-none">
                  <option value="normal">Normal</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>
              <button className="w-full bg-sfm-mid text-white py-3 rounded-lg font-bold hover:bg-sfm-blue transition-all flex items-center justify-center gap-2">
                <Plus className="w-5 h-5" /> Publish Announcement
              </button>
            </form>
          </div>

          {/* Event Form */}
          <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="bg-sfm-mid/10 p-2 rounded-lg">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-sfm-mid" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold">Host New Event</h2>
            </div>
            <form action={createEvent} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Event Title</label>
                <input name="title" required className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-sfm-mid outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea name="description" required rows={2} className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-sfm-mid outline-none" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Date & Time</label>
                  <input type="datetime-local" name="eventDate" required className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-sfm-mid outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Location</label>
                  <input name="location" required className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-sfm-mid outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Image URL (Optional)</label>
                <input name="imageUrl" className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-sfm-mid outline-none" placeholder="https://..." />
              </div>
              <button className="w-full bg-sfm-dark text-white py-3 rounded-lg font-bold hover:bg-neutral-800 transition-all flex items-center justify-center gap-2">
                <Plus className="w-5 h-5" /> Create Event
              </button>
            </form>
          </div>
        </div>

        {/* Management Section */}
        <div className="space-y-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-sfm-dark mb-4">Manage Posts</h2>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {/* List Announcements */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Bell className="w-4 h-4 text-sfm-mid" /> Active Announcements
                </h3>
                <div className="space-y-3">
                  {allAnnouncements.map((item) => (
                    <div key={item.id} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg group gap-2">
                      <span className="text-sm font-medium truncate flex-1">{item.title}</span>
                      <form action={deleteAnnouncement.bind(null, item.id)}>
                        <button className="text-red-400 hover:text-red-600 transition-colors p-1 shrink-0">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </form>
                    </div>
                  ))}
                  {allAnnouncements.length === 0 && <p className="text-xs text-gray-400">No announcements yet.</p>}
                </div>
              </div>

              {/* List Events */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-sfm-mid" /> Active Events
                </h3>
                <div className="space-y-3">
                  {allEvents.map((event) => (
                    <div key={event.id} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg group gap-2">
                      <span className="text-sm font-medium truncate flex-1">{event.title}</span>
                      <form action={deleteEvent.bind(null, event.id)}>
                        <button className="text-red-400 hover:text-red-600 transition-colors p-1 shrink-0">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </form>
                    </div>
                  ))}
                  {allEvents.length === 0 && <p className="text-xs text-gray-400">No events scheduled.</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
