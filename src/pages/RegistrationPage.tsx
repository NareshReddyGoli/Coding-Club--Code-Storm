import { useState } from "react";
import { Button } from "@/components/ui/button";

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
    <div className="min-h-screen pt-24 bg-background">
      <section className="py-12">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-foreground">Student Registration</h1>
            <p className="text-muted-foreground mt-2">
              Register for Code Storm 2025
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg shadow-sm p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-2 rounded border bg-background text-foreground border-border focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Register Number</label>
                <input
                  type="text"
                  placeholder="e.g., 241FA.."
                  value={regNumber}
                  onChange={(e) => setRegNumber(e.target.value)}
                  required
                  className="w-full p-2 rounded border bg-background text-foreground border-border focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Year</label>
                  <input
                    type="text"
                    placeholder="e.g., 2"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    required
                    className="w-full p-2 rounded border bg-background text-foreground border-border focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Section</label>
                  <input
                    type="text"
                    placeholder="e.g., A"
                    value={section}
                    onChange={(e) => setSection(e.target.value)}
                    required
                    className="w-full p-2 rounded border bg-background text-foreground border-border focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-accent to-accent-glow text-accent-foreground font-semibold px-6"
                >
                  Submit Registration
                </Button>
              </div>
            </form>

          </div>
        </div>
      </section>
    </div>
  );
};

export default RegistrationPage;


