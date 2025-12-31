import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      {/* Minimal accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Small label */}
          <ScrollReveal delay={0}>
            <p className="text-sm tracking-[0.2em] uppercase text-primary mb-8">
              AI Automation Agency
            </p>
          </ScrollReveal>

          {/* Main headline - Poppins bold */}
          <ScrollReveal delay={100}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-[-0.02em] mb-8">
              Stop losing leads.
              <br />
              <span className="text-primary">Start booking</span> them.
            </h1>
          </ScrollReveal>

          {/* Subheadline - refined */}
          <ScrollReveal delay={200}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Voice agents, chatbots, and automations that capture missed revenue around the clock. Launch your pilot in 7 days.
            </p>
          </ScrollReveal>

          {/* CTAs - clean, spaced */}
          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button variant="hero" size="lg" className="min-w-[200px] group">
                Book a Pilot
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="ghost" size="lg" className="min-w-[200px] text-muted-foreground hover:text-foreground">
                <Play className="w-4 h-4 mr-2" />
                Watch Demo
              </Button>
            </div>
          </ScrollReveal>

          {/* Minimal stats row */}
          <ScrollReveal delay={400}>
            <div className="flex items-center justify-center gap-12 md:gap-16 text-sm">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">30</p>
                <p className="text-muted-foreground">day payback</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">98.9%</p>
                <p className="text-muted-foreground">accuracy</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">7</p>
                <p className="text-muted-foreground">day launch</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
