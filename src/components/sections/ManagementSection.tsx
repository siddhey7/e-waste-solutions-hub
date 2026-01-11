import { Recycle, Truck, Factory, Package, Trash2, ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const managementSteps = [
  { 
    icon: Package, 
    title: "1. Collection", 
    desc: "Gathering e-waste from households, offices, and industries through designated collection centers, take-back programs, and authorized collectors",
    color: "bg-chart-1"
  },
  { 
    icon: Truck, 
    title: "2. Transportation", 
    desc: "Safe transport of e-waste to dismantling/recycling facilities using licensed transporters following safety protocols",
    color: "bg-chart-2"
  },
  { 
    icon: Factory, 
    title: "3. Dismantling & Segregation", 
    desc: "Manual disassembly of devices to separate components like batteries, circuit boards, plastics, and metals",
    color: "bg-chart-3"
  },
  { 
    icon: Recycle, 
    title: "4. Recovery & Recycling", 
    desc: "Extraction of valuable materials (gold, silver, copper) and recycling of reusable components",
    color: "bg-chart-4"
  },
  { 
    icon: Trash2, 
    title: "5. Safe Disposal", 
    desc: "Proper treatment and disposal of non-recyclable and hazardous components in authorized facilities",
    color: "bg-chart-5"
  },
];

const hierarchy = [
  { title: "Reduce", desc: "Minimize e-waste generation by making wise purchasing decisions", priority: 1 },
  { title: "Reuse", desc: "Extend product life through repair, refurbishment, or donation", priority: 2 },
  { title: "Recycle", desc: "Recover valuable materials through proper recycling processes", priority: 3 },
  { title: "Recover", desc: "Extract energy or materials from non-recyclable waste", priority: 4 },
  { title: "Dispose", desc: "Last resort - safe disposal in authorized landfills", priority: 5 },
];

const bestPractices = [
  "Store e-waste safely away from children and in dry areas",
  "Never burn or throw e-waste in regular dustbins",
  "Use authorized collection centers and recyclers",
  "Remove personal data from devices before disposal",
  "Prefer products from manufacturers with take-back policies",
  "Donate working devices to schools or charities",
];

const ManagementSection = () => {
  return (
    <section id="management" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="flex justify-center mb-4">
            <Recycle className="h-12 w-12 text-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            E-Waste Management Process
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground">
            Systematic approach to handle electronic waste from collection to final disposal
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Management Steps */}
          <div className="mb-16">
            <div className="grid gap-6">
              {managementSteps.map((step, index) => (
                <div key={step.title} className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-full ${step.color} flex items-center justify-center`}>
                    <step.icon className="h-7 w-7 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <Card className="border-l-4 border-l-primary">
                      <CardContent className="p-4">
                        <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                        <p className="text-sm text-muted-foreground">{step.desc}</p>
                      </CardContent>
                    </Card>
                  </div>
                  {index < managementSteps.length - 1 && (
                    <div className="hidden md:flex items-center">
                      <ArrowRight className="h-5 w-5 text-muted" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Waste Hierarchy */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
              ♻️ E-Waste Management Hierarchy (5R Approach)
            </h3>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              {hierarchy.map((item) => (
                <Card 
                  key={item.title} 
                  className={`flex-1 text-center ${item.priority === 1 ? 'ring-2 ring-primary' : ''}`}
                >
                  <CardContent className="p-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center mx-auto mb-2">
                      {item.priority}
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              ↑ Most Preferred to Least Preferred ↓
            </p>
          </div>

          {/* Best Practices */}
          <Card className="bg-accent/30 border-accent-foreground/20">
            <CardHeader>
              <CardTitle className="font-serif text-center">
                ✅ Best Practices for E-Waste Disposal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {bestPractices.map((practice, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{practice}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ManagementSection;
