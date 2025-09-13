import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroBackground from "@/assets/hero-bg.jpg";

const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [year, setYear] = useState("");
  const [section, setSection] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const googleFormURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSfg6EWoRGm0hZA3ak6a0gzd8NxOa0FqaRUXUp7-8OM5cZ-BEQ/formResponse";

    // Use FormData and include Google Form meta fields for reliability
    const formData = new FormData();
    formData.append("entry.1109872489", name);
    formData.append("entry.22694101", regNumber);
    formData.append("entry.2126890917", year);
    formData.append("entry.1141254805", section);
    // These help newer Google Forms accept programmatic submissions
    formData.append("fvv", "1");
    formData.append("draftResponse", "[]");
    formData.append("pageHistory", "0");
    formData.append("fbzx", String(Date.now()));

    fetch(googleFormURL, {
      method: "POST",
      mode: "no-cors",
      // Do not set Content-Type; the browser will set multipart boundaries
      body: formData,
    });

    alert("Registration submitted successfully!");
    setName("");
    setRegNumber("");
    setYear("");
    setSection("");
  };

  return (
    <div className="min-h-screen">
      {/* Full-screen background same as Home */}
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
            { t: "<", l: 4, d: 13, s: "xl", b: 6 },
            { t: "div", l: 8, d: 14, s: "md", b: 12 },
            { t: "/>", l: 12, d: 12, s: "lg", b: 18 },
            { t: "#", l: 10, d: 16, s: "md", b: 26 },
            { t: "()=>", l: 6, d: 18, s: "lg", b: 34 },
            { t: "for", l: 14, d: 15, s: "md", b: 42 },
            { t: "const", l: 18, d: 17, s: "lg", b: 50 },
            { t: "{", l: 30, d: 14, s: "md", b: 2 },
            { t: "}", l: 36, d: 15, s: "md", b: 6 },
            { t: "#", l: 48, d: 12, s: "md", b: 9 },
            { t: "=>", l: 58, d: 16, s: "lg", b: 12 },
            { t: "for", l: 66, d: 14, s: "md", b: 16 },
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

        {/* Center content */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mx-auto bg-primary/15 text-primary border-primary/20">
              CSE Coding Club
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 pb-1 md:pb-2 leading-[1.15] bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
              Code Storm Registration
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-3">
              Register to participate in the competition.Algo krack, code fast,
              and have fun.
            </p>

            {/* Form wrapper at comfortable width */}
            <div className="mt-10 max-w-xl mx-auto bg-card/70 backdrop-blur-sm border border-border/60 rounded-lg shadow-lg p-6">
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <div className="space-y-2">
                  <label className="block text-base font-medium text-foreground">
                    Name:
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Full Name "
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full p-3 rounded-lg border border-border/70 bg-background/60 text-foreground placeholder:text-muted-foreground shadow-sm hover:bg-background/70 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 focus:bg-background/80 transition text-base leading-6"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-base font-medium text-foreground">
                    Register Number:
                  </label>
                  <input
                    type="text"
                    placeholder="eg.,231FA04165"
                    value={regNumber}
                    onChange={(e) => setRegNumber(e.target.value)}
                    required
                    className="w-full p-3 rounded-lg border border-border/70 bg-background/60 text-foreground placeholder:text-muted-foreground shadow-sm hover:bg-background/70 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 focus:bg-background/80 transition text-base leading-6"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-base font-medium text-foreground">
                    Year:
                  </label>
                  <input
                    type="text"
                    placeholder="eg.,3"
                    value={year}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (value === "" || value === "2" || value === "3") {
                        setYear(value);
                      }
                    }}
                    required
                    className="w-full p-3 rounded-lg border border-border/70 bg-background/60 text-foreground placeholder:text-muted-foreground shadow-sm hover:bg-background/70 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 focus:bg-background/80 transition text-base leading-6"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-base font-medium text-foreground">
                    Section:
                  </label>
                  <input
                    type="text"
                    placeholder="eg.,A"
                    value={section}
                    onChange={(e) => {
                      const value = e.target.value.toUpperCase();
                      if (value === "" || /^[A-Z]$/.test(value)) {
                        setSection(value);
                      }
                    }}
                    required
                    className="w-full p-3 rounded-lg border border-border/70 bg-background/60 text-foreground placeholder:text-muted-foreground shadow-sm hover:bg-background/70 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 focus:bg-background/80 transition text-base leading-6"
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <Button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                  >
                    Submit
                  </Button>

                  <span className="text-sm text-muted-foreground">
                    <span className="text-red-500">*</span>
                    Multiple registrations from the same Register Number not
                    allowed.
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegistrationPage;
