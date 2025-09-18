import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Users,
  Trophy,
  Clock,
  ExternalLink,
} from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const eventFeatures = [
    {
      icon: User,
      title: "Problem-Solving Rounds",
      description: "Multiple timed rounds with increasing difficulty",
    },
    {
      icon: Trophy,
      title: "Prizes & Awards",
      description: "Exciting rewards for top problem solvers",
    },
    {
      icon: Clock,
      title: "Timed Challenges",
      description: "Solve algorithmic problems against the clock",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen pt-24 flex items-center justify-center hero-gradient code-pattern overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(34, 34, 44, 0.8), rgba(34, 34, 44, 0.6)), url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Floating code tokens */}
        <div className="absolute inset-0 code-tokens">
          {[
            // Left cluster
            { t: "<", l: 4, d: 13, s: "xl", b: 6 },
            { t: "div", l: 8, d: 14, s: "md", b: 12 },
            { t: "/>", l: 12, d: 12, s: "lg", b: 18 },
            { t: "#", l: 10, d: 16, s: "md", b: 26 },
            { t: "()=>", l: 6, d: 18, s: "lg", b: 34 },
            { t: "def", l: 66, d: 14, s: "md", b: 16 },
            { t: "for", l: 14, d: 15, s: "md", b: 42 },
            { t: "const", l: 18, d: 17, s: "lg", b: 50 },
            // Center/right scatter (lowered levels)
            { t: "{", l: 30, d: 14, s: "md", b: 2 },
            { t: "}", l: 36, d: 15, s: "md", b: 6 },
            { t: "#", l: 48, d: 12, s: "md", b: 9 },
            { t: "=>", l: 58, d: 16, s: "lg", b: 12 },
            { t: "for", l: 66, d: 14, s: "md", b: 16 },
            { t: "while", l: 66, d: 14, s: "md", b: 16 },
            { t: "const", l: 74, d: 18, s: "lg", b: 20 },
            { t: "</>", l: 82, d: 12, s: "small", b: 22 },
            { t: "()", l: 88, d: 15, s: "small", b: 24 },
          ].map((k, i) => (
            <span
              key={i}
              className={`code-token ${k.s} rotate`}
              style={{
                left: `${k.l}%`,
                bottom: `${k.b}%`,
                ["--dur" as any]: `${k.d}s`,
              }}
            >
              {k.t}
            </span>
          ))}
        </div>
        {/* Animated Waves */}
        <div className="absolute inset-x-0 bottom-0 hero-waves pointer-events-none">
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
        </div>
        {/* Rising Bubbles */}
        <div className="absolute inset-0 bubbles pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <span
              key={i}
              className="bubble"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${6 + (i % 5)}s`,
              }}
            />
          ))}
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            {/* Context badge (neutral) */}
            <Badge className="mx-auto bg-primary/15 text-primary border-primary/20">
              CSE Coding Club
            </Badge>

            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold relative mt-2 md:mt-4 leading-[0.9]">
              <div className="animated-text flex justify-center items-center space-x-2 md:space-x-4">
                {"Code Storm".split("").map((char, index) => (
                  <span
                    key={index}
                    className="inline-block animate-bounce-char bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent hover:scale-110 transition-bounce"
                    style={{
                      animationDelay: `${index * 0.15}s`,
                      animationDuration: "1.5s",
                      textShadow: "0 0 20px hsl(var(--primary) / 0.35)",
                    }}
                  >
                    {char}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <span className="text-foreground/90 text-3xl md:text-4xl lg:text-5xl tracking-wide">
                  2025
                </span>
              </div>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Competitive problem-solving contest with algorithmic challenges.
              Think fast, code smart, and climb the leaderboard.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button
                size="lg"
                onClick={handleRegisterClick}
                className="bg-gradient-to-r from-accent to-accent-glow hover:from-accent-glow hover:to-accent text-accent-foreground font-semibold px-8 py-6 text-lg glow-effect transition-bounce hover:scale-105"
              >
                Register
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-6 text-lg transition-smooth"
              >
                Details
              </Button>
            </div>

            {/* Event Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 max-w-4xl mx-auto">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 card-shadow">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-card-foreground mb-2">
                    Date
                  </h3>
                  <p className="text-muted-foreground">September 25-26, 2025</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50 card-shadow">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-card-foreground mb-2">
                    Venue
                  </h3>
                  <p className="text-muted-foreground">
                    NTR Library
                    <br />
                    Library 2nd Floor
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 card-shadow">
                <CardContent className="p-6 text-center">
                  <User className="h-8 w-8 text-primary mx-auto mb-3" />{" "}
                  {/* Updated icon */}
                  <h3 className="font-semibold text-card-foreground mb-2">
                    Participation
                  </h3>
                  <p className="text-muted-foreground">
                    Individual Participation
                    <br />
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Code Storm
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A problem-solving focused event featuring DS&A and logical
              reasoning. Tackle puzzles, optimize solutions, and compete fairly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventFeatures.map((feature, index) => (
              <Card
                key={index}
                className="group hover:scale-105 transition-bounce card-shadow hover:glow-effect"
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-primary to-primary-glow mb-6 group-hover:scale-110 transition-bounce">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow relative overflow-hidden">
        <div className="absolute inset-0 code-pattern opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Participate and showcase your coding skills
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Solve challenging problems, compete with the best, and climb the
            leaderboard. Push your limits and prove your expertise in algorithms
            and data structures.
          </p>
          <Button
            size="lg"
            onClick={handleRegisterClick}
            className="bg-accent hover:bg-accent-glow text-accent-foreground font-bold px-10 py-6 text-lg transition-bounce hover:scale-105 accent-glow"
          >
            Register here
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <footer className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Event Info */}
            <div className="col-span-2">
              <h3 className="text-xl font-bold text-card-foreground mb-4">
                Code Storm 2025
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Organized by the CSE Coding Club. A weekend of building and
                collaboration.
              </p>
              <div className="flex space-x-4">
                <Badge variant="outline" className="text-xs">
                  <Calendar className="h-3 w-3 mr-1" />
                  September 25-26, 2025
                </Badge>
                <Badge variant="outline" className="text-xs">
                  <MapPin className="h-3 w-3 mr-1" />
                  CSE Department
                </Badge>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-card-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    Event Schedule
                  </a>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    Registration
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    Rules & Guidelines
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-card-foreground mb-4">
                Contact
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>CSE Coding Club</li>
                <li>Computer Science Department</li>
                <li>--------------</li>
                <li>--------------</li>
              </ul>
            </div>
          </div>

          {/* Hit Counter
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Site Hits:
              <span className="inline-block ml-2 px-4 py-2 border border-primary rounded-lg bg-primary/10 text-primary font-semibold">
                <div id="sfc88j88xepcwqjjwrcxm8b9qu6xsfu6yur"></div>
                <script
                  type="text/javascript"
                  src="https://counter5.optistats.ovh/private/counter.js?c=88j88xepcwqjjwrcxm8b9qu6xsfu6yur&down=async"
                  async
                ></script>
                <noscript>
                  <a
                    href="https://www.freecounterstat.com"
                    title="visitor counter"
                  >
                    <img
                      src="https://counter5.optistats.ovh/private/freecounterstat.php?c=88j88xepcwqjjwrcxm8b9qu6xsfu6yur"
                      border="0"
                      title="visitor counter"
                      alt="visitor counter"
                    />
                  </a>
                </noscript>
              </span>
            </p>
          </div> */}

          {/* Bottom Bar */}
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Code Storm. All rights reserved. Organized by CSE Coding
              Club.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
