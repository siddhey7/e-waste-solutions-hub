import { GraduationCap, Wrench, Lightbulb, Users, Megaphone, Code, Leaf, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const engineerRoles = [
  { 
    icon: Wrench, 
    title: "Design for Environment", 
    desc: "Create products that are easy to disassemble, repair, and recycle. Use modular designs and avoid hazardous materials" 
  },
  { 
    icon: Code, 
    title: "Develop Recycling Technologies", 
    desc: "Innovate efficient methods for material recovery, automated sorting, and safe processing of e-waste" 
  },
  { 
    icon: Lightbulb, 
    title: "Sustainable Innovation", 
    desc: "Research biodegradable electronics, extend product lifespan through better engineering" 
  },
  { 
    icon: Leaf, 
    title: "Green Manufacturing", 
    desc: "Implement cleaner production methods, reduce waste generation in manufacturing processes" 
  },
];

const studentActions = [
  { icon: Megaphone, title: "Spread Awareness", desc: "Educate family, friends, and community about proper e-waste disposal" },
  { icon: BookOpen, title: "Learn & Research", desc: "Study e-waste issues, conduct surveys, and propose innovative solutions" },
  { icon: Users, title: "Organize Campaigns", desc: "Lead collection drives, workshops, and awareness programs in colleges" },
  { icon: Leaf, title: "Practice Responsible Consumption", desc: "Extend device life, donate working electronics, avoid unnecessary upgrades" },
];

const solutionAreas = [
  "Develop mobile apps to locate nearest e-waste collection centers",
  "Create AI-based systems for e-waste sorting and classification",
  "Design modular smartphones and laptops for easy component replacement",
  "Research urban mining techniques for precious metal recovery",
  "Implement blockchain for e-waste tracking and EPR compliance",
  "Build IoT sensors for monitoring e-waste processing facilities",
];

const RoleSection = () => {
  return (
    <section id="role" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="flex justify-center mb-4">
            <GraduationCap className="h-12 w-12 text-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Role of Engineers & Students
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground">
            How future engineers and students can contribute to solving the e-waste crisis
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Engineers Role */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
              🔧 Role of Engineers
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {engineerRoles.map((role) => (
                <Card key={role.title} className="border-l-4 border-l-primary">
                  <CardContent className="p-5 flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <role.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{role.title}</h4>
                      <p className="text-sm text-muted-foreground">{role.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Students Role */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
              🎓 What Students Can Do
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {studentActions.map((action) => (
                <Card key={action.title} className="text-center">
                  <CardContent className="p-5">
                    <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                      <action.icon className="h-7 w-7 text-accent-foreground" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{action.title}</h4>
                    <p className="text-sm text-muted-foreground">{action.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Innovation Ideas */}
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="font-serif text-center">
                💡 Innovative Solution Areas for Engineering Students
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {solutionAreas.map((solution, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-card rounded-lg">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">
                      {index + 1}
                    </span>
                    <p className="text-sm text-muted-foreground">{solution}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <Card className="inline-block bg-accent border-accent-foreground/20">
              <CardContent className="p-6">
                <p className="text-lg font-serif font-semibold text-accent-foreground mb-2">
                  "The future of our planet depends on how we handle our electronic waste today."
                </p>
                <p className="text-sm text-muted-foreground">
                  Every small action counts – from proper disposal to innovative engineering solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoleSection;
