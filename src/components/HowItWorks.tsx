import { ScrollReveal } from "@/components/ScrollReveal";
import { UniqueAccordion } from "@/components/ui/interactive-accordion";

const steps = [
  {
    id: "discovery",
    number: "01",
    title: "Book a Free Discovery Call",
    content: "Schedule a consultation to discuss your business needs and goals with our AI experts. We capture baseline metrics and access points to understand your current operations and identify the highest-impact opportunities.",
  },
  {
    id: "plan",
    number: "02",
    title: "Get Your Custom AI Plan",
    content: "Receive tailored recommendations for implementing AI solutions across your business.",
  },
  {
    id: "scale",
    number: "03",
    title: "Watch Your Business Scale",
    content: "Experience transformative results as our AI-powered teams optimize your operations.",
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
                Here's How <span className="text-gradient">EdgeCraft AI</span> Works:
              </h2>
              <p className="text-lg text-muted-foreground max-w-md">
                Transform your business in three simple steps. We prove value before you commit.
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
