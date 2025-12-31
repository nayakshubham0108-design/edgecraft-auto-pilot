import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const stats = [
  { value: 98.3, suffix: "%", label: "Growth Every Year", subLabel: "Consistent performance" },
  { value: 1, suffix: "M+", label: "Data Points Processed", subLabel: "Daily throughput" },
  { value: 10000, suffix: "+", label: "Automated Tasks Monthly", subLabel: "Hands-free operations" },
  { value: 55, suffix: "+", label: "Enterprises Using It Daily", subLabel: "Trusted partners" },
  { value: 99.9, suffix: "%", label: "AI Accuracy", subLabel: "Precision guaranteed" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1500;
          const steps = 60;
          const increment = value / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(current);
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return num.toLocaleString("en-US", { maximumFractionDigits: 0 });
    }
    if (Number.isInteger(value)) {
      return Math.floor(num).toString();
    }
    return num.toFixed(1);
  };

  return (
    <div ref={ref} className="font-bold text-4xl lg:text-5xl text-foreground">
      {formatNumber(count)}{suffix}
    </div>
  );
}

export function Stats() {
  return (
    <section id="results" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Green aurora background gradient */}
      <div className="absolute inset-0 bg-aurora-full" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[450px] bg-[radial-gradient(ellipse_at_100%_100%,hsla(142,70%,40%,0.28)_0%,transparent_55%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[350px] bg-[radial-gradient(ellipse_at_0%_100%,hsla(142,70%,35%,0.18)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
              Faster. Smarter. Scalable<br />
              <span className="text-gradient">Beyond Expectations.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              These metrics show exactly how our AI transforms real operations, real teams, and real outcomes at scale.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left - Large Stat Card */}
          <ScrollReveal delay={100}>
            <div className="glass-card rounded-2xl p-8 lg:p-10 glow-soft h-full">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <AnimatedNumber value={98.3} suffix="%" />
                  <p className="text-lg text-muted-foreground mt-2">Growth Every Year</p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Mini bar chart */}
              <div className="flex items-end gap-4 h-32">
                <div className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full bg-primary/80 rounded-t-lg" style={{ height: "100%" }} />
                  <span className="text-xs text-muted-foreground">2025</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full bg-primary/60 rounded-t-lg" style={{ height: "75%" }} />
                  <span className="text-xs text-muted-foreground">2024</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full bg-primary/40 rounded-t-lg" style={{ height: "55%" }} />
                  <span className="text-xs text-muted-foreground">2023</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.slice(1).map((stat, index) => (
              <ScrollReveal key={stat.label} delay={200 + index * 100}>
                <div className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300 h-full">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  <p className="text-sm font-medium text-foreground mt-2">{stat.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.subLabel}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <ScrollReveal delay={600}>
          <div className="text-center mt-12">
            <Button variant="hero" size="lg">
              Learn More
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
