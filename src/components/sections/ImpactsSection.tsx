import { AlertTriangle, Heart, Droplets, Wind, Leaf, Users, Brain, Baby } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const healthImpacts = [
  { icon: Brain, title: "Neurological Damage", desc: "Lead and mercury exposure causes brain damage, memory loss, and cognitive impairment" },
  { icon: Heart, title: "Cardiovascular Issues", desc: "Heavy metals lead to heart diseases, high blood pressure, and organ damage" },
  { icon: Baby, title: "Developmental Problems", desc: "Children are most vulnerable - affects growth, IQ, and immune system" },
  { icon: Users, title: "Respiratory Illness", desc: "Burning e-waste releases toxic fumes causing asthma and lung diseases" },
];

const envImpacts = [
  { icon: Droplets, title: "Water Contamination", desc: "Heavy metals leach into groundwater, contaminating drinking water sources" },
  { icon: Leaf, title: "Soil Pollution", desc: "Toxic substances degrade soil quality, affecting agriculture and food chain" },
  { icon: Wind, title: "Air Pollution", desc: "Improper burning releases dioxins, furans, and particulate matter" },
];

const hazardousMaterials = [
  { material: "Lead", found: "CRT monitors, batteries, solder", effect: "Nervous system damage, kidney failure" },
  { material: "Mercury", found: "LCD screens, switches, lamps", effect: "Brain damage, respiratory issues" },
  { material: "Cadmium", found: "Batteries, semiconductors", effect: "Kidney damage, bone disease" },
  { material: "Brominated Flame Retardants", found: "Plastic casings, circuit boards", effect: "Hormone disruption, cancer risk" },
  { material: "Arsenic", found: "LEDs, semiconductors", effect: "Skin lesions, cancer" },
];

const ImpactsSection = () => {
  return (
    <section id="impacts" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="flex justify-center mb-4">
            <AlertTriangle className="h-12 w-12 text-destructive" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Impacts of E-Waste
          </h2>
          <div className="w-24 h-1 bg-destructive mx-auto mb-6" />
          <p className="text-muted-foreground">
            Improper disposal of e-waste poses severe threats to human health and the environment
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Health Impacts */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
              🏥 Human Health Impacts
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {healthImpacts.map((impact) => (
                <Card key={impact.title} className="border-l-4 border-l-destructive">
                  <CardContent className="p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center">
                        <impact.icon className="h-6 w-6 text-destructive" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{impact.title}</h4>
                      <p className="text-sm text-muted-foreground">{impact.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Environmental Impacts */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
              🌍 Environmental Impacts
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {envImpacts.map((impact) => (
                <Card key={impact.title} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                      <impact.icon className="h-8 w-8 text-accent-foreground" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{impact.title}</h4>
                    <p className="text-sm text-muted-foreground">{impact.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Hazardous Materials Table */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center font-serif">
                ⚠️ Hazardous Materials in E-Waste
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-3 font-semibold text-foreground">Material</th>
                      <th className="text-left p-3 font-semibold text-foreground">Found In</th>
                      <th className="text-left p-3 font-semibold text-foreground">Health Effects</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hazardousMaterials.map((item, index) => (
                      <tr key={item.material} className={index % 2 === 0 ? "bg-muted/30" : ""}>
                        <td className="p-3 font-medium text-foreground">{item.material}</td>
                        <td className="p-3 text-muted-foreground">{item.found}</td>
                        <td className="p-3 text-destructive">{item.effect}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImpactsSection;
