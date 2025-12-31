import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

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
          <p className="text-sm tracking-[0.2em] uppercase text-primary mb-8 animate-fade-in">
            AI Automation Agency
          </p>

          {/* Main headline - elegant serif */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.05] tracking-[-0.02em] mb-8 animate-fade-in animation-delay-200">
            Stop losing leads.
            <br />
            <span className="italic text-primary">Start booking</span> them.
          </h1>

          {/* Subheadline - refined */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in animation-delay-400">
            Voice agents, chatbots, and automations that capture missed revenue around the clock. Launch your pilot in 7 days.
          </p>

          {/* CTAs - clean, spaced */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in animation-delay-600">
            <Button variant="hero" size="lg" className="min-w-[200px] group">
              Book a Pilot
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="ghost" size="lg" className="min-w-[200px] text-muted-foreground hover:text-foreground">
              <Play className="w-4 h-4 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Minimal stats row */}
          <div className="flex items-center justify-center gap-12 md:gap-16 text-sm animate-fade-in animation-delay-600">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-normal text-foreground mb-1">30</p>
              <p className="text-muted-foreground">day payback</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-normal text-foreground mb-1">98.9%</p>
              <p className="text-muted-foreground">accuracy</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-normal text-foreground mb-1">7</p>
              <p className="text-muted-foreground">day launch</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
