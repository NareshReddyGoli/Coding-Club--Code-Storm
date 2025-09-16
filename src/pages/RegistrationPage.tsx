import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroBackground from "@/assets/hero-bg.jpg";

const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [year, setYear] = useState("");
  const [section, setSection] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState(""); // Added state for email

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
    formData.append("entry.1234567890", phoneNumber); // Add phone number field
    formData.append("entry.9876543210", email); // Add email field
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

    // Updated alert message
    alert("Happy Coding<>Registration submitted successfully!");

    // Reset form fields
    setName("");
    setRegNumber("");
    setYear("");
    setSection("");
    setPhoneNumber("");
    setEmail(""); // Reset email field
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
              Register to participate in the competition. Algo krack, code fast,
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
                    placeholder="Enter Your Full Name"
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
                <div className="space-y-2">
                  <label className="block text-base font-medium text-foreground">
                    Phone Number:
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter Your Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                    className="w-full p-3 rounded-lg border border-border/70 bg-background/60 text-foreground placeholder:text-muted-foreground shadow-sm hover:bg-background/70 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 focus:bg-background/80 transition text-base leading-6"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-base font-medium text-foreground">
                    Email:
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-3 rounded-lg border border-border/70 bg-background/60 text-foreground placeholder:text-muted-foreground shadow-sm hover:bg-background/70 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 focus:bg-background/80 transition text-base leading-6"
                  />
                </div>
                <div className="flex justify-center mt-6">
                  <Button
                    type="submit"
                    className="bg-blue-500 text-white px-20 py-6 text-xl rounded hover:bg-blue-600 transition"
                  >
                    Submit
                  </Button>
                </div>

                {/* <span className="text-sm text-muted-foreground">
                    <span className="text-red-500">*</span>
                    Multiple registrations from the same Register Number not
                    allowed.
                  </span> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegistrationPage;
