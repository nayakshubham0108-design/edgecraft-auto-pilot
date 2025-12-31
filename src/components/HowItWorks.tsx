import { Search, Rocket, TrendingUp } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import TiltedCard from "@/components/ui/tilted-card";
import AnimatedCardStack from "@/components/ui/animated-card-stack";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Audit",
    description: "We capture baseline metrics and access points to understand your current operations and identify the highest-impact opportunities.",
    duration: "3–5 days",
  },
  {
    icon: Rocket,
    number: "02",
    title: "Pilot",
    description: "We run a focused pilot on one channel and measure KPIs in real-time. You'll see results before committing to scale.",
    duration: "7–21 days",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Scale",
    description: "We broaden coverage, add automations, harden SLA, and optimize continuously based on performance data.",
    duration: "Ongoing",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
              Deploy in <span className="text-gradient">Three Phases</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Audit → Pilot → Scale. We prove value before you commit.
            </p>
          </div>
        </ScrollReveal>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Steps */}
          <div className="grid gap-8">
            {steps.map((step, index) => (
              <ScrollReveal key={step.title} delay={index * 150} direction="up">
                <div className="relative group">
                  <TiltedCard>
                    <div className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 relative z-10 h-full">
                      {/* Number + Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-extrabold text-4xl text-primary/20 group-hover:text-primary/40 transition-colors">
                          {step.number}
                        </span>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <step.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="font-bold text-xl text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm mb-3">
                        {step.description}
                      </p>

                      {/* Duration badge */}
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary">
                        {step.duration}
                      </div>
                    </div>
                  </TiltedCard>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Right: Animated Card Stack */}
          <ScrollReveal delay={300}>
            <div className="flex justify-center lg:justify-end">
              <AnimatedCardStack />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
