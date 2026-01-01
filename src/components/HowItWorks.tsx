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
    <section id="how-it-works" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-aurora-green-center pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-[radial-gradient(ellipse_at_100%_0%,hsla(168,60%,40%,0.12)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left side - Header */}
          <ScrollReveal>
            <div className="lg:sticky lg:top-32">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm tracking-[0.2em] uppercase text-primary font-medium">
                  How It Works
                </span>
              </div>
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
