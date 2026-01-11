import { CheckSquare, BookOpen, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const keyPoints = [
  "E-waste is the fastest-growing waste stream globally, with India being the 5th largest producer",
  "Improper disposal leads to severe environmental pollution and health hazards",
  "The 5R hierarchy (Reduce, Reuse, Recycle, Recover, Dispose) is the recommended approach",
  "E-Waste Management Rules, 2022 provide comprehensive legal framework with EPR obligations",
  "All stakeholders - producers, consumers, recyclers - have defined responsibilities",
  "Engineers and students play crucial roles in developing sustainable solutions",
];

const references = [
  { title: "Central Pollution Control Board (CPCB)", url: "https://cpcb.nic.in" },
  { title: "Ministry of Environment, Forest & Climate Change", url: "https://moef.gov.in" },
  { title: "E-Waste Management Rules, 2022 - Gazette of India", url: "#" },
  { title: "Global E-Waste Monitor 2024", url: "#" },
  { title: "UNEP Guidelines on E-Waste Management", url: "#" },
];

const ConclusionSection = () => {
  return (
    <section id="conclusion" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="flex justify-center mb-4">
            <CheckSquare className="h-12 w-12 text-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Conclusion
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Summary */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <p className="text-muted-foreground leading-relaxed mb-6">
                E-waste management is a critical environmental challenge that requires immediate attention 
                and coordinated efforts from all sections of society. With India generating over 3.2 million 
                tonnes of e-waste annually and only 22% being formally recycled, there is an urgent need to 
                strengthen our e-waste management infrastructure and awareness.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The E-Waste Management Rules, 2022 provide a robust legal framework, but its success 
                depends on effective implementation, consumer awareness, and technological innovation. 
                As future engineers and responsible citizens, we must commit to sustainable practices 
                and contribute to building a circular economy for electronics.
              </p>
            </CardContent>
          </Card>

          {/* Key Takeaways */}
          <div className="mb-12">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
              📌 Key Takeaways
            </h3>
            <div className="grid gap-4">
              {keyPoints.map((point, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="p-4 flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground font-semibold flex items-center justify-center">
                      {index + 1}
                    </span>
                    <p className="text-muted-foreground">{point}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* References */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-serif">
                <BookOpen className="h-5 w-5 text-primary" />
                References & Further Reading
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {references.map((ref, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-primary">•</span>
                    <span className="text-muted-foreground">{ref.title}</span>
                    {ref.url !== "#" && (
                      <a 
                        href={ref.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center gap-1"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Acknowledgment */}
          <div className="mt-12 text-center">
            <Card className="inline-block">
              <CardContent className="p-8">
                <h4 className="font-serif text-xl font-semibold text-foreground mb-4">
                  Acknowledgment
                </h4>
                <p className="text-muted-foreground mb-4">
                  This project was prepared as part of the Environmental Studies curriculum 
                  under Savitribai Phule Pune University (SPPU).
                </p>
                <p className="text-sm text-muted-foreground">
                  Academic Year: 2024-25
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSection;
