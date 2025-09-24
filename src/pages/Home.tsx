import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  User,
  Calendar,
  MapPin,
  Trophy,
  Clock,
  ExternalLink,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import heroBackground from "@/assets/hero-bg.jpg";

const Home = () => {
  const navigate = useNavigate();

  // Countdown Timer state
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const targetDate = new Date("2025-09-25T10:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft("Event Started");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const eventFeatures = [
    {
      icon: User,
      title: "Problem-Solving Rounds",
      description: "Round1 && Round2 with increasing difficulty",
    },
    {
      icon: Trophy,
      title: "Prizes & Awards(Year Wise)",
      description:
        "Cash Prizes for top problem solvers and certificates for all round2 qualifiers",
    },
    {
      icon: Clock,
      title: "Timed Challenges",
      description: "Based on Faster Submission and accuracy",
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
        {/* Registration Ends In Box - Vertical with Vertical Title */}
        <div className="absolute top-1/2 right-0 z-20 flex items-center transform -translate-y-1/2">
          {/* Vertical title */}

          {/* Countdown Card */}
          <Card className="bg-card/90 backdrop-blur-md border border-primary/40 border-r-0 shadow-card hover:scale-105 transition-bounce w-24 rounded-l-xl overflow-hidden">
            <CardContent className="px-2 py-1 text-center">
              {/* Vertical Timer */}
              <div className="flex flex-col divide-y divide-primary/30 text-center">
                <div className="py-1 hover:bg-primary/10 transition-smooth rounded-l">
                  <span className="text-[10px] text-green-500">
                    Code Starts In
                  </span>
                </div>
                {/* Days */}
                <div className="py-1 hover:bg-primary/10 transition-smooth rounded-l">
                  <p className="text-base font-bold text-card-foreground drop-shadow-lg animate-bounce-char">
                    {timeLeft.split(" ")[0]}
                  </p>
                  <span className="text-[10px] text-muted-foreground">
                    Days
                  </span>
                </div>
                {/* Hours */}
                <div className="py-1 hover:bg-primary/10 transition-smooth rounded-l">
                  <p className="text-base font-bold text-card-foreground drop-shadow-lg animate-bounce-char">
                    {timeLeft.split(" ")[1]}
                  </p>
                  <span className="text-[10px] text-muted-foreground">
                    Hours
                  </span>
                </div>
                {/* Minutes */}
                <div className="py-1 hover:bg-primary/10 transition-smooth rounded-l">
                  <p className="text-base font-bold text-card-foreground drop-shadow-lg animate-bounce-char">
                    {timeLeft.split(" ")[2]}
                  </p>
                  <span className="text-[10px] text-muted-foreground">
                    Mins
                  </span>
                </div>
                {/* Seconds */}
                <div className="py-1 hover:bg-primary/10 transition-smooth rounded-l">
                  <p className="text-base font-bold text-card-foreground drop-shadow-lg animate-bounce-char">
                    {timeLeft.split(" ")[3]}
                  </p>
                  <span className="text-[10px] text-muted-foreground">
                    Secs
                  </span>
                </div>
              </div>
            </CardContent>
            {/* Glow border effect */}
            <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-primary via-primary-glow to-accent rounded-l"></div>
          </Card>
        </div>

        {/* Floating code tokens */}
        <div className="absolute inset-0 code-tokens">
          {[
            { t: "<", l: 4, d: 13, s: "xl", b: 6 },
            { t: "div", l: 8, d: 14, s: "md", b: 12 },
            { t: "/>", l: 12, d: 12, s: "lg", b: 18 },
            { t: "#", l: 10, d: 16, s: "md", b: 26 },
            { t: "()=>", l: 6, d: 18, s: "lg", b: 34 },
            { t: "def", l: 66, d: 14, s: "md", b: 16 },
            { t: "for", l: 14, d: 15, s: "md", b: 42 },
            { t: "const", l: 18, d: 17, s: "lg", b: 50 },
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
            <Badge className="mx-auto bg-primary/15 text-primary border-primary/20">
              CSE Department Coding Club
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
                    N-Block 3rd Floor,
                    <br />
                    CSE Department
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50 card-shadow">
                <CardContent className="p-6 text-center">
                  <User className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-card-foreground mb-2">
                    Participation
                  </h3>
                  <p className="text-muted-foreground">
                    II & III Year CSE Students
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
              A Competitive Contest event organized by the CSE Department to
              foster problem-solving skills and algorithmic thinking among
              students.
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

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-xl font-bold text-card-foreground mb-4">
                Code Storm 2025
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Organized by the CSE Department Coding Club.
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
