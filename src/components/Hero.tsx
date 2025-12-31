import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

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
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-muted/40 rounded-full blur-[120px] opacity-40" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Brand label */}
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-semibold mb-8">
            EdgeCrafts
          </p>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-[-0.02em] mb-12 text-foreground">
            scale your business or
            <br />
            save time with:
          </h1>

          {/* Cycling text */}
          <div className="h-24 md:h-28 flex items-center justify-center mb-12">
            <p
              className={`text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-500 ${
                isAnimating
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
            >
              {cyclingTexts[currentIndex]}
            </p>
          </div>

          {/* CTA Button */}
          <Button
            variant="hero"
            size="lg"
            className="min-w-[220px] group text-base py-6"
          >
            Book discovery call
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
