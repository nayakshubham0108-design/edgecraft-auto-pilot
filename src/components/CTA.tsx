import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export function CTA() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Emerald aurora background gradient */}
      <div className="absolute inset-0 bg-aurora-full" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_100%_100%,hsla(158,65%,45%,0.22)_0%,transparent_55%)]" />
      <div className="absolute top-0 left-0 w-[400px] h-[300px] bg-[radial-gradient(ellipse_at_0%_0%,hsla(168,60%,40%,0.12)_0%,transparent_45%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[radial-gradient(ellipse_at_50%_50%,hsla(158,65%,50%,0.06)_0%,transparent_50%)]" />

      <div className="container mx-auto relative z-10">
        <ScrollReveal>
          <div className="glass-card rounded-3xl p-8 lg:p-16 text-center glow-soft">
            {/* Headline */}
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
              Stop Wasting Time on Tasks<br />
              <span className="text-gradient">AI Can Finish in Seconds</span>
            </h2>

            {/* Subheadline */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Your team's time is too valuable to burn on repetitive work. Automate the busywork, unlock instant insights, and shift your focus to strategy, growth.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Button 
                variant="hero" 
                size="xl" 
                className="w-full sm:w-auto group"
                onClick={() => document.querySelector('#book-pilot')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book a Discovery Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-primary text-primary" />
                <span className="text-sm text-foreground font-medium">4.9/5.0</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
