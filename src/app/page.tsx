import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnnouncementsList from "@/components/AnnouncementsList";
import EventsList from "@/components/EventsList";

export default function Home() {
  return (
    <main className="min-h-screen bg-sfm-white flex flex-col">
      <Navbar />
      <Hero />
      <AnnouncementsList />
      <EventsList />
      <Footer />
    </main>
  );
}
