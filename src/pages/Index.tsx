import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import WhatIsEwasteSection from "@/components/sections/WhatIsEwasteSection";
import ImpactsSection from "@/components/sections/ImpactsSection";
import ManagementSection from "@/components/sections/ManagementSection";
import IndianLawsSection from "@/components/sections/IndianLawsSection";
import RoleSection from "@/components/sections/RoleSection";
import ConclusionSection from "@/components/sections/ConclusionSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <WhatIsEwasteSection />
        <ImpactsSection />
        <ManagementSection />
        <IndianLawsSection />
        <RoleSection />
        <ConclusionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
