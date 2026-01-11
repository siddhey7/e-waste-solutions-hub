import { Recycle, BookOpen, GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Project Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Recycle className="h-6 w-6" />
              <span className="font-serif font-bold text-lg">E-Waste Management</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              An academic project exploring e-waste management issues, impacts, and solutions in India.
            </p>
          </div>

          {/* Academic Details */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-5 w-5" />
              <span className="font-semibold">Academic Details</span>
            </div>
            <ul className="text-primary-foreground/80 text-sm space-y-1">
              <li>Subject: Environmental Studies (EVS)</li>
              <li>University: SPPU (Savitribai Phule Pune University)</li>
              <li>Academic Year: 2024-25</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-5 w-5" />
              <span className="font-semibold">References</span>
            </div>
            <ul className="text-primary-foreground/80 text-sm space-y-1">
              <li>Central Pollution Control Board (CPCB)</li>
              <li>Ministry of Environment, Forest & Climate Change</li>
              <li>E-Waste Management Rules, 2016</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/70 text-sm">
          <p>© 2024 E-Waste Management in India - EVS Project | For Academic Purpose Only</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
