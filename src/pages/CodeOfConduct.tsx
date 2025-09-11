import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Users, Heart, AlertTriangle, Scale } from "lucide-react";

const CodeOfConduct = () => {
  const principles = [
    {
      icon: Scale,
      title: "Integrity & Honesty",
      description: "Solve problems without cheating; cite resources when permitted and be truthful in submissions."
    },
    {
      icon: Heart,
      title: "Respect & Inclusivity",
      description: "Value diverse approaches and be supportive of all participants regardless of experience level."
    },
    {
      icon: Users,
      title: "Constructive Collaboration",
      description: "Collaborate only within your team when team rounds apply; encourage learning and growth."
    },
    {
      icon: Shield,
      title: "Fair Play & Safety",
      description: "Follow event rules, maintain professionalism, and help keep the contest environment safe."
    }
  ];

  const rules = [
    {
      category: "Eligibility & Teams",
      items: [
        "Participants must be registered for the Code Strom Problem Solving event",
        "Individual or team participation per round as specified by organizers",
        "Each person may join only one team",
        "Teams must adhere to the specified team size limits for team rounds",
        "Bring valid ID and arrive before the check-in cutoff"
      ]
    },
    {
      category: "Problem Solving Rules",
      items: [
        "Solutions must be developed during the contest window only",
        "Do not discuss problems with other teams or outside participants while the round is active",
        "Use of templates/boilerplate is allowed if permitted by round rules and properly cited",
        "Follow input/output formats exactly and handle edge cases",
        "You must be able to explain your approach and code when asked"
      ]
    },
    {
      category: "Submission & Judging",
      items: [
        "Submit through the official platform before the deadline",
        "Scoring is based on correctness first, then efficiency and code quality as specified",
        "Ties may be broken by total time and number of incorrect attempts",
        "Do not attempt to manipulate scoring systems or test infrastructure",
        "Judges’ decisions are final"
      ]
    },
    {
      category: "Tools & Resources",
      items: [
        "Only approved languages, compilers, and tools may be used",
        "Public documentation and standard libraries are allowed unless a round states otherwise",
        "Using AI/code generators or external help is only allowed if explicitly permitted and must be disclosed",
        "Do not access private repositories or paid problem solutions",
        "Respect venue equipment and network usage policies"
      ]
    }
  ];

  const violations = [
    {
      severity: "Minor Violations",
      color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      examples: [
        "Late submission within grace period",
        "Improper citation of allowed resources",
        "First-time minor communication outside team"
      ],
      consequences: ["Warning", "Time or score penalty", "Required rule review"]
    },
    {
      severity: "Major Violations",
      color: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      examples: [
        "Using unapproved tools or undisclosed AI/code generators",
        "Collaboration between different teams during an active round",
        "Copying code or solutions without attribution"
      ],
      consequences: ["Solution invalidation", "Round disqualification", "Eligibility suspension"]
    },
    {
      severity: "Severe Violations",
      color: "bg-red-500/20 text-red-400 border-red-500/30",
      examples: [
        "Harassment or discrimination",
        "Tampering with systems, tests, or other teams' work",
        "Leaking or distributing contest problems or test data"
      ],
      consequences: ["Immediate removal", "Event disqualification", "Report to institution/authorities"]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient code-pattern relative overflow-hidden">
        <div className="absolute inset-0 code-grid opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mx-auto mb-6 bg-primary/20 text-primary border-primary/30">
            Code Strom 
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Code of <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Conduct</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Guidelines for a fair, inclusive, and focused coding contest experience for all Code Strom participants.
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Principles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These fundamental values guide every aspect of our event
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <Card key={index} className="group hover:scale-105 transition-bounce card-shadow hover:glow-effect">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-primary to-primary-glow mb-4 group-hover:scale-110 transition-bounce">
                    <principle.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-3">{principle.title}</h3>
                  <p className="text-sm text-muted-foreground">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rules and Guidelines */}
      <section className="py-20 bg-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Rules & Guidelines
            </h2>
            <p className="text-lg text-muted-foreground">
              Detailed guidelines to ensure a smooth and fair experience for everyone
            </p>
          </div>

          <div className="space-y-8">
            {rules.map((section, index) => (
              <Card key={index} className="card-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-card-foreground flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    {section.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Violation Consequences */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Violation Consequences
            </h2>
            <p className="text-lg text-muted-foreground">
              We maintain clear and fair consequences for violations to ensure event integrity
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {violations.map((violation, index) => (
              <Card key={index} className="card-shadow">
                <CardHeader>
                  <Badge className={`w-fit ${violation.color}`}>
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    {violation.severity}
                  </Badge>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="mb-6">
                    <h4 className="font-semibold text-card-foreground mb-3">Examples:</h4>
                    <ul className="space-y-2">
                      {violation.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-3">Consequences:</h4>
                    <ul className="space-y-2">
                      {violation.consequences.map((consequence, consequenceIndex) => (
                        <li key={consequenceIndex} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {consequence}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Questions or Concerns?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            If you have questions about our Code of Conduct or need to report a violation, 
            please don't hesitate to contact our organizing team. We're here to help ensure 
            everyone has a positive experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Card className="p-4 bg-card/50 backdrop-blur-sm border-border/50">
              <p className="text-sm text-muted-foreground mb-1">Event Email</p>
              <p className="font-semibold text-card-foreground">codestorm@university.edu</p>
            </Card>
            <Card className="p-4 bg-card/50 backdrop-blur-sm border-border/50">
              <p className="text-sm text-muted-foreground mb-1">Emergency Contact</p>
              <p className="font-semibold text-card-foreground">+1 (555) 123-4567</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CodeOfConduct;