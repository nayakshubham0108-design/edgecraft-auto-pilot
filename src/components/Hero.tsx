import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { HeroShapesBackground } from "@/components/ui/shape-landing-hero";

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
      {/* Emerald aurora gradient background */}
      <div className="absolute inset-0 bg-aurora-green" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_100%_100%,hsla(158,65%,45%,0.25)_0%,transparent_60%)]" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[300px] bg-[radial-gradient(ellipse_at_50%_0%,hsla(168,60%,40%,0.08)_0%,transparent_50%)]" />
      
      {/* Animated geometric shapes */}
      <HeroShapesBackground />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Brand label pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm tracking-[0.2em] uppercase text-primary font-medium">
              EdgeCrafts
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-[-0.02em] mb-12 text-foreground animate-text-glow">
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
            className="min-w-[220px] group text-base py-6 animate-glow-breathe"
            onClick={() => (window as any).Calendly?.initPopupWidget({url: 'https://calendly.com/nayakshubham0108?background_color=0c0c0c&text_color=24e32c&primary_color=00ff6c'})}
          >
            Book discovery call
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
