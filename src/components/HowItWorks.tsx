import { Search, Rocket, TrendingUp } from "lucide-react";

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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
            Deploy in <span className="text-gradient">Three Phases</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Audit → Pilot → Scale. We prove value before you commit.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.title} className="relative group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent -translate-x-1/2 z-0" />
              )}

              <div className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 relative z-10 h-full">
                {/* Number + Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display font-extrabold text-5xl text-primary/20 group-hover:text-primary/40 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Duration badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-sm font-medium text-primary">
                  {step.duration}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
