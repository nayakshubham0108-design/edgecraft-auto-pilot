import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-background to-background" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="glass-card rounded-3xl p-8 lg:p-16 text-center glow-soft">
          {/* Headline */}
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
            Stop Wasting Time on Tasks<br />
            <span className="text-gradient">AI Can Finish in Seconds</span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Your team's time is too valuable to burn on repetitive work. Automate the busywork, unlock instant insights, and shift your focus to strategy, growth.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button variant="hero" size="xl" className="w-full sm:w-auto group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="xl" className="w-full sm:w-auto">
              Book a Demo
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-primary text-primary" />
              <span className="text-sm text-foreground font-medium">4.9/5.0</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border" />
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center"
                  >
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">30M+ Users</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
