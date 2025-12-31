import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { EtherealBeamsBackground } from "@/components/ui/ethereal-beams-hero";

const cyclingTexts = [
  "Redesign your website with AI-driven conversion focus",
  "Custom AI software tailored to your business workflows",
  "AI that sells your products and services while you sleep",
  "Automated campaigns that send thousands of personalized emails daily",
  "Human-like AI callers that engage, answer, and close — 24/7",
  "Never miss a lead — capture and follow up automatically",
  "24/7 AI support that resolves 90% of customer issues instantly",
  "Increase your revenue with AI automation",
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % cyclingTexts.length);
        setIsAnimating(false);
      }, 500);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Ethereal beams 3D background */}
      <EtherealBeamsBackground lightColor="#22c55e" speed={2} rotation={0} />
      
      {/* Green aurora gradient overlay */}
      <div className="absolute inset-0 bg-aurora-green pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_100%_100%,hsla(142,70%,40%,0.3)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[300px] bg-[radial-gradient(ellipse_at_50%_0%,hsla(142,70%,45%,0.1)_0%,transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Announcement banner */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-x-4 rounded-full px-4 py-1.5 text-sm ring-1 ring-primary/20 bg-primary/5 backdrop-blur-sm">
              <span className="text-primary font-semibold">EdgeCrafts</span>
              <span className="h-4 w-px bg-primary/20" />
              <span
                className={`text-muted-foreground transition-all duration-500 ${
                  isAnimating ? "opacity-0" : "opacity-100"
                }`}
              >
                {cyclingTexts[currentIndex]}
              </span>
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8 text-foreground">
            Scale Your Business
            <br />
            <span className="text-primary">with AI Automation</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            Transform your workflow with AI-powered solutions. Custom software, automated campaigns, and 24/7 support that drives results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="hero"
              size="lg"
              className="min-w-[180px] group text-base py-6"
            >
              Book discovery call
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a
              href="#features"
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
