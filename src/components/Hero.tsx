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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background isolate">
      {/* Top gradient background */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary/40 to-primary/20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      {/* Bottom gradient background */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary/30 to-primary/50 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          {/* Announcement banner */}
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-muted-foreground ring-1 ring-primary/20 hover:ring-primary/40 transition-colors">
              <span className="text-primary font-medium">EdgeCrafts</span>
              {' '}— AI-powered business growth{' '}
              <a href="#features" className="font-semibold text-primary">
                <span aria-hidden="true" className="absolute inset-0" />
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Scale your business or save time with{' '}
            <span className="text-primary">AI</span>
          </h1>

          {/* Cycling text as description */}
          <div className="mt-8 h-16 md:h-20 flex items-center justify-center">
            <p
              className={`text-lg text-pretty text-muted-foreground sm:text-xl/8 transition-all duration-500 ${
                isAnimating
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
            >
              {cyclingTexts[currentIndex]}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              variant="default"
              size="lg"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary group"
            >
              Book discovery call
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a
              href="#how-it-works"
              className="text-sm/6 font-semibold text-foreground hover:text-primary transition-colors"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
