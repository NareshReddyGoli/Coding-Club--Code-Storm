import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import CodeOfConduct from "./pages/CodeOfConduct";
import NotFound from "./pages/NotFound";
import RegistrationPage from "./pages/RegistrationPage";
import { Card, CardContent } from "./components/ui/card";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/code-of-conduct" element={<Home />} />
            <Route
              path="/register"
              element={
                <div className="relative flex flex-col items-center justify-center h-screen px-4 hero-gradient code-pattern text-foreground">
                  {/* Glow Background Accent */}
                  <div className="absolute inset-0 code-grid opacity-10 pointer-events-none"></div>

                  {/* Main Message */}
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-8 text-primary drop-shadow-lg">
                    Registrations are Closed
                  </h2>
                  <p className="text-center text-muted-foreground mb-10 max-w-xl">
                    Please contact event coordinators for new registrations or
                    any queries.
                  </p>

                  {/* Event Details Card */}
                  <Card className="bg-card/90 backdrop-blur-md border border-primary/40 shadow-card rounded-xl max-w-lg w-full transition-bounce hover:scale-105">
                    <CardContent className="p-6 text-center space-y-6">
                      {/* Venue */}
                      <div>
                        <h3 className="text-lg font-semibold text-accent mb-1">
                          📍 Venue
                        </h3>
                        <p className="text-card-foreground">
                          N-Block, 3rd Floor
                        </p>
                      </div>

                      {/* Schedule */}
                      <div>
                        <h3 className="text-lg font-semibold text-accent mb-1">
                          Important Dates
                        </h3>
                        <ul className="space-y-1 text-card-foreground">
                          <li>
                            II Years – <strong>25 Sep 2025</strong>
                          </li>
                          <li>
                            III Years – <strong>26 Sep 2025</strong>
                          </li>
                          <li className="text-muted-foreground">
                            Room numbers will be share soon
                          </li>
                        </ul>
                      </div>

                      {/* Contact */}
                      <div>
                        <h3 className="text-lg font-semibold text-accent mb-1">
                          For More Details
                        </h3>
                        <p className="text-card-foreground">
                          Contact event coordinators
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              }
            />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
