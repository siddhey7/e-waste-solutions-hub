import { Monitor, Smartphone, Laptop, Tv, Battery, Cpu, HardDrive, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ewasteTypes = [
  { icon: Monitor, label: "Monitors & Displays", desc: "CRT, LCD, LED screens" },
  { icon: Smartphone, label: "Mobile Devices", desc: "Phones, tablets, wearables" },
  { icon: Laptop, label: "Computers", desc: "Desktops, laptops, servers" },
  { icon: Tv, label: "Consumer Electronics", desc: "TVs, gaming consoles" },
  { icon: Battery, label: "Batteries", desc: "Li-ion, lead-acid batteries" },
  { icon: Cpu, label: "Circuit Boards", desc: "PCBs, processors, chips" },
  { icon: HardDrive, label: "Storage Devices", desc: "HDDs, SSDs, pen drives" },
  { icon: Headphones, label: "Peripherals", desc: "Printers, speakers, cables" },
];

const WhatIsEwasteSection = () => {
  return (
    <section id="what-is-ewaste" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            What is E-Waste?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Definition */}
          <Card className="mb-12 border-l-4 border-l-primary">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg text-foreground mb-3">Definition</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Electronic Waste (E-Waste)</strong> refers to discarded electrical or electronic 
                devices and equipment. It includes products that have reached the end of their useful life, 
                are broken, obsolete, or no longer wanted. E-waste contains both valuable materials 
                (gold, silver, copper) and hazardous substances (lead, mercury, cadmium) that require 
                special handling and disposal.
              </p>
            </CardContent>
          </Card>

          {/* Sources */}
          <div className="mb-12">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
              Sources of E-Waste
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Households</h4>
                  <p className="text-sm text-muted-foreground">
                    Old phones, TVs, computers, kitchen appliances, and personal gadgets
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Industries & Offices</h4>
                  <p className="text-sm text-muted-foreground">
                    IT equipment, servers, printers, networking devices, office electronics
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏥</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Institutions</h4>
                  <p className="text-sm text-muted-foreground">
                    Medical equipment, educational devices, laboratory instruments
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Types */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
              Types of E-Waste
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {ewasteTypes.map((type) => (
                <Card key={type.label} className="p-4 hover:shadow-md transition-shadow">
                  <CardContent className="p-0 text-center">
                    <type.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-foreground text-sm mb-1">{type.label}</h4>
                    <p className="text-xs text-muted-foreground">{type.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <Card className="mt-12 bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg text-foreground mb-4 text-center">
                📊 Key Statistics (India)
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-primary mb-1">3.2 MT</p>
                  <p className="text-sm text-muted-foreground">E-waste generated annually (2023)</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary mb-1">22%</p>
                  <p className="text-sm text-muted-foreground">Formal recycling rate</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary mb-1">5th</p>
                  <p className="text-sm text-muted-foreground">Largest e-waste producer globally</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhatIsEwasteSection;
