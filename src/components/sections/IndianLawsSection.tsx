import { Scale, FileText, Building2, Users, Factory, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const rulesTimeline = [
  { year: "2011", event: "E-Waste (Management & Handling) Rules introduced" },
  { year: "2016", event: "E-Waste Management Rules, 2016 - comprehensive framework" },
  { year: "2018", event: "Amendment: Inclusion of compact fluorescent lamps" },
  { year: "2022", event: "E-Waste Management Rules, 2022 - strengthened EPR" },
];

const stakeholders = [
  { 
    icon: Building2, 
    title: "Producers", 
    duties: [
      "Register with CPCB/SPCB",
      "Set up collection centers",
      "Meet EPR targets",
      "Submit annual returns",
      "Finance e-waste management"
    ]
  },
  { 
    icon: Users, 
    title: "Consumers", 
    duties: [
      "Dispose e-waste through authorized channels",
      "Not to mix e-waste with municipal waste",
      "Return end-of-life products to collection centers"
    ]
  },
  { 
    icon: Factory, 
    title: "Recyclers", 
    duties: [
      "Obtain authorization from SPCB",
      "Follow environmentally sound practices",
      "Maintain records of e-waste processed",
      "Ensure worker health and safety"
    ]
  },
];

const eprDetails = [
  { title: "What is EPR?", desc: "Extended Producer Responsibility makes manufacturers responsible for the entire lifecycle of their products, including take-back and recycling" },
  { title: "EPR Targets", desc: "Producers must collect and recycle a specified percentage of e-waste they generate (targets increase yearly)" },
  { title: "EPR Certificates", desc: "Traded certificates that prove compliance with recycling obligations" },
  { title: "Non-Compliance", desc: "Penalties, environmental compensation, and legal action against violators" },
];

const IndianLawsSection = () => {
  return (
    <section id="indian-laws" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="flex justify-center mb-4">
            <Scale className="h-12 w-12 text-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Indian E-Waste Laws & Regulations
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground">
            Legal framework governing e-waste management in India
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Timeline */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
              📜 Evolution of E-Waste Rules in India
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {rulesTimeline.map((item, index) => (
                <Card key={item.year} className="flex-1 min-w-[200px] max-w-[280px]">
                  <CardContent className="p-4 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center mx-auto mb-3">
                      {item.year}
                    </div>
                    <p className="text-sm text-muted-foreground">{item.event}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <Card className="mb-16 border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                E-Waste Management Rules, 2022 - Key Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Covers 21 categories of electrical and electronic equipment
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Mandatory Extended Producer Responsibility (EPR) for all producers
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Digital EPR portal for registration and compliance tracking
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Phase-wise targets for e-waste collection and recycling
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  Environmental compensation for non-compliance
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  PRO (Producer Responsibility Organization) framework
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* EPR Section */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
              🔄 Extended Producer Responsibility (EPR)
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {eprDetails.map((item) => (
                <Card key={item.title}>
                  <CardContent className="p-5">
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stakeholder Responsibilities */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
              👥 Stakeholder Responsibilities
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {stakeholders.map((stakeholder) => (
                <Card key={stakeholder.title}>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <stakeholder.icon className="h-5 w-5 text-primary" />
                      {stakeholder.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {stakeholder.duties.map((duty, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary font-bold">›</span>
                          {duty}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Important Note */}
          <Card className="mt-12 bg-accent/30 border-accent-foreground/20">
            <CardContent className="p-6 flex gap-4">
              <AlertCircle className="h-6 w-6 text-accent-foreground flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Regulatory Bodies</h4>
                <p className="text-sm text-muted-foreground">
                  <strong>CPCB</strong> (Central Pollution Control Board) and <strong>SPCB</strong> (State 
                  Pollution Control Boards) are the key regulatory authorities responsible for implementing 
                  and monitoring e-waste management rules in India.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IndianLawsSection;
