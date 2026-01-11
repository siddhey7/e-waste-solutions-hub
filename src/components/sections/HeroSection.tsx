import { ChevronDown, AlertTriangle, Recycle } from "lucide-react";
import heroImage from "@/assets/hero-ewaste.jpg";

const HeroSection = () => {
  const scrollToNext = () => {
    const element = document.querySelector("#what-is-ewaste");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center gap-4 mb-6">
            <AlertTriangle className="h-12 w-12 text-accent-foreground" />
            <Recycle className="h-12 w-12 text-accent-foreground" />
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-6">
            E-Waste Management in India
          </h1>

          <p className="text-xl md:text-2xl text-card/90 mb-4 font-medium">
            Issues, Impacts & Solutions
          </p>

          <p className="text-lg text-card/80 mb-8 max-w-2xl mx-auto">
            An Environmental Studies Project exploring the growing challenge of electronic waste 
            and sustainable approaches to manage it effectively.
          </p>

          <div className="inline-block bg-card/10 backdrop-blur-sm border border-card/20 rounded-lg px-6 py-3 mb-12">
            <p className="text-card/90 text-sm">
              <span className="font-semibold">SPPU</span> | Environmental Studies | Academic Year 2024-25
            </p>
          </div>

          <button
            onClick={scrollToNext}
            className="flex flex-col items-center mx-auto text-card/80 hover:text-card transition-colors"
            aria-label="Scroll to content"
          >
            <span className="text-sm mb-2">Explore More</span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
