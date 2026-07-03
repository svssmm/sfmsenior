import { MapPin, Info } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-sfm-dark text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 border-b border-sfm-mid/20 pb-12">
        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            SFM SENIORS
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            The official platform for Saint Famille Maroun Tripoli Seniors. 
            Connecting our community through events and announcements.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-4 flex items-center gap-2 uppercase text-xs tracking-widest text-sfm-mid">
            Location
          </h4>
          <div className="flex gap-3 text-gray-400 text-sm">
            <MapPin className="w-5 h-5 text-sfm-mid shrink-0" />
            <p>
              CRPM+Q93, Tripoli,<br />
              Infront of Al Hallab
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4 flex items-center gap-2 uppercase text-xs tracking-widest text-sfm-mid">
            Terms & Conditions
          </h4>
          <div className="flex gap-3 text-gray-400 text-sm">
            <Info className="w-5 h-5 text-sfm-mid shrink-0" />
            <ul className="space-y-1">
              <li>• Respect all community members</li>
              <li>• Event data is subject to change</li>
              <li>• Only authorized seniors may post</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-8 flex justify-between items-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} SFM Seniors Tripoli. All rights reserved.</p>
        <p>Made with ❤️ for the Seniors</p>
      </div>
    </footer>
  );
}
