import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Shield, Zap, Clock } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float animation-delay-400" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-6 animate-fade-in">
              <Zap className="w-4 h-4" />
              <span>AI-Powered Automation</span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight mb-6 animate-fade-in animation-delay-200">
              Stop Losing Leads<br />
              <span className="text-gradient">Overnight.</span> Start<br />
              Booking Them <span className="text-gradient">24/7.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in animation-delay-400">
              EdgeCraft AI builds voice agents, chatbots and automations that rescue missed revenue, reduce operational load, and deliver predictable growth — pilot in 7–21 days.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10 animate-fade-in animation-delay-600">
              <Button variant="hero" size="lg" className="w-full sm:w-auto group">
                Book 7-Day Pilot
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="lg" className="w-full sm:w-auto">
                <Play className="w-5 h-5" />
                See Live Demo
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start animate-fade-in animation-delay-600">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-foreground">Avg payback: <strong>30 days</strong></span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-sm">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">98.9% accuracy</span>
              </div>
            </div>
          </div>

          {/* Right Column - Demo Card */}
          <div className="relative animate-fade-in animation-delay-400">
            <div className="glass-card rounded-2xl p-6 lg:p-8 glow-soft">
              {/* Demo Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-medium text-foreground">Live Demo</span>
                </div>
                <span className="text-xs text-muted-foreground">Voice Agent Active</span>
              </div>

              {/* Demo Content */}
              <div className="space-y-4">
                {/* Waveform placeholder */}
                <div className="h-24 rounded-xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 flex items-center justify-center relative overflow-hidden">
                  <div className="flex items-end gap-1 h-12">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-primary rounded-full animate-pulse"
                        style={{
                          height: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Transcript */}
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-secondary/50">
                    <p className="text-xs text-muted-foreground mb-1">Agent</p>
                    <p className="text-sm text-foreground">"Hi, thanks for calling! How can I help you today?"</p>
                  </div>
                  <div className="p-3 rounded-lg bg-primary/10">
                    <p className="text-xs text-primary mb-1">Caller</p>
                    <p className="text-sm text-foreground">"I'd like to schedule an appointment for next week."</p>
                  </div>
                  <div className="p-3 rounded-lg bg-secondary/50">
                    <p className="text-xs text-muted-foreground mb-1">Agent</p>
                    <p className="text-sm text-foreground">"I have Tuesday at 2 PM or Thursday at 10 AM..."</p>
                  </div>
                </div>

                {/* CRM Push Badge */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm font-medium text-foreground">CRM Updated</span>
                  </div>
                  <span className="text-xs text-primary">lead-7890 → Booked</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
