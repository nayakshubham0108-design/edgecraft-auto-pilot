import { ScrollReveal } from "@/components/ScrollReveal";
import { UniqueAccordion } from "@/components/ui/interactive-accordion";

const steps = [
  {
    id: "audit",
    number: "01",
    title: "Audit",
    content: "We capture baseline metrics and access points to understand your current operations and identify the highest-impact opportunities. Timeline: 3–5 days.",
  },
  {
    id: "pilot",
    number: "02",
    title: "Pilot",
    content: "We run a focused pilot on one channel and measure KPIs in real-time. You'll see results before committing to scale. Timeline: 7–21 days.",
  },
  {
    id: "scale",
    number: "03",
    title: "Scale",
    content: "We broaden coverage, add automations, harden SLA, and optimize continuously based on performance data. This phase is ongoing.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left side - Header */}
          <ScrollReveal>
            <div className="lg:sticky lg:top-32">
              <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
                Deploy in <span className="text-gradient">Three Phases</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-md">
                Audit → Pilot → Scale. We prove value before you commit.
              </p>
            </div>
          </ScrollReveal>

          {/* Right side - Accordion */}
          <ScrollReveal delay={150}>
            <UniqueAccordion items={steps} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
