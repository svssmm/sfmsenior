import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventsList from "@/components/EventsList";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-sfm-white flex flex-col pt-20">
      <Navbar />
      <div className="py-12 bg-sfm-dark text-white px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Events Calendar</h1>
          <p className="text-sfm-light/60">Join us in our upcoming activities and gatherings.</p>
        </div>
      </div>
      <EventsList />
      <Footer />
    </main>
  );
}
