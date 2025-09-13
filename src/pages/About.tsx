import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "############",
      role: "Faculty Coordinator",
      department: "#######, Computer Science Engineering",
      image: "#",
      social: {
        linkedin: "#",
        github: "#",
        email: "",
      },
    },
    {
      name: "############",
      role: "Student Lead Organizer",
      department: "######, Computer Science Engineering",
      image: "",
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
    {
      name: "############",
      role: "Technical Coordinator",
      department: "####, Computer Science Engineering",
      image: "",
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
    {
      name: "##############",
      role: "Events Manager",
      department: "######, Computer Science Engineering",
      image: "",
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
    {
      name: "#########",
      role: "Marketing Lead",
      department: "Second Year, Computer Science Engineering",
      image: "",
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
    {
      name: "##########################",
      role: "Logistics Coordinator",
      department: "#######, Computer Science Engineering",
      image: "",
      social: {
        linkedin: "#",
        github: "#",
        instagram: "#",
      },
    },
  ];

  const SocialButton = ({
    icon: Icon,
    href,
    label,
  }: {
    icon: any;
    href: string;
    label: string;
  }) => (
    <Button
      variant="ghost"
      size="sm"
      className="p-2 hover:bg-primary/10 hover:text-primary transition-smooth"
      onClick={() => window.open(href, "_blank")}
      aria-label={label}
    >
      <Icon className="h-4 w-4" />
    </Button>
  );

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 hero-gradient code-pattern relative overflow-hidden">
        <div className="absolute inset-0 code-grid opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Team
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate team of organizers and coordinators dedicated to
            creating a challenging and engaging problem-solving event for all
            participants.
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group hover:scale-105 transition-bounce card-shadow hover:glow-effect overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-card-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {member.department}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {member.bio}
                    </p>

                    <div className="flex space-x-2">
                      {member.social.linkedin && (
                        <SocialButton
                          icon={Linkedin}
                          href={member.social.linkedin}
                          label="LinkedIn"
                        />
                      )}
                      {member.social.github && (
                        <SocialButton
                          icon={Github}
                          href={member.social.github}
                          label="GitHub"
                        />
                      )}
                      {member.social.instagram && (
                        <SocialButton
                          icon={Instagram}
                          href={member.social.instagram}
                          label="Instagram"
                        />
                      )}
                      {member.social.email && (
                        <SocialButton
                          icon={Mail}
                          href={`mailto:${member.social.email}`}
                          label="Email"
                        />
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Department Section */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Computer Science Engineering Department
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our department is committed to fostering excellence in
              problem-solving and algorithmic thinking. We aim to provide
              students with opportunities to challenge themselves and grow their
              technical expertise.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              CodeStorm is a testament to our dedication to creating a platform
              where students can solve complex problems, compete with peers, and
              showcase their skills in a collaborative and competitive
              environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">800+</div>
              <div className="text-muted-foreground">
                Expecting Participants
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground">Co-Ordinators</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Problems Designed</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
