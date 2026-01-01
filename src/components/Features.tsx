import { Phone, MessageSquare, Link2, Mail, Globe, Cpu } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { TiltCard } from "@/components/ui/tilt-card";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Phone,
    title: "AI Phone Callers",
    description: "Human-like agents that answer, engage, and convert — day or night.",
    bullets: [
      "24/7 availability",
      "Handles unlimited calls",
      "Polite, professional tone",
      "No missed opportunities",
      "Updates CRM automatically",
    ],
  },
  {
    icon: MessageSquare,
    title: "Intelligent Chatbots",
    description: "RAG-powered bots on web, WhatsApp, and SMS that never sleep.",
    bullets: [
      "Website & WhatsApp ready",
      "Answers FAQs instantly",
      "Captures leads 24/7",
      "Generates proposals",
      "Seamless handoff to humans",
    ],
  },
  {
    icon: Link2,
    title: "AI That Never Misses a Lead",
    description: "Capture every lead and nurture automatically with smart follow-ups.",
    bullets: [
      "Smart capture (forms & calls)",
      "Instant qualification",
      "Automated reminders",
      "Never lose a lead",
      "Higher conversion rates",
    ],
  },
  {
    icon: Globe,
    title: "Website that converts",
    description: "Modern, conversion-focused websites built fast with AI assistance.",
    bullets: [
      "Custom responsive design",
      "Speed & SEO optimized",
      "Booking & payments",
      "Smart lead forms",
      "Easy updates",
    ],
  },
  {
    icon: Mail,
    title: "Emails That Reach Thousands Instantly",
    description: "Send thousands of personalized emails daily, hands-free.",
    bullets: [
      "Targeted lists",
      "Smart personalization",
      "Automated follow-ups",
      "Scalable campaigns",
      "Real-time analytics",
    ],
  },
  {
    icon: Cpu,
    title: "Custom AI-Powered Software",
    description: "AI tools built around your exact workflows and goals.",
    bullets: [
      "Tailored automation software",
      "Integrates with your stack",
      "Scales as you grow",
      "Efficiency gains fast",
      "Future-proof tech",
    ],
  },
];

export function Features() {
  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-aurora-green-top pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_0%_100%,hsla(158,65%,45%,0.18)_0%,transparent_55%)] pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm tracking-[0.2em] uppercase text-primary font-medium">
                Services
              </span>
            </div>
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
              The Automation Layer Behind<br />
              <span className="text-gradient">High-Performing Businesses</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Automating calls, customer conversations, and internal workflows so your business runs faster, closes more, and scales without adding headcount.
            </p>
          </div>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 100}>
              <TiltCard className="h-full">
                <SpotlightCard className="h-full" spotlightColor="hsla(158, 65%, 52%, 0.15)">
                  <div className="group glass-card rounded-2xl p-6 lg:p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_40px_hsla(158,65%,50%,0.2)] h-full flex flex-col">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl border border-primary/30 bg-background/50 flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_hsla(158,65%,50%,0.25)] transition-all duration-300">
                      <feature.icon className="w-6 h-6 text-primary/80 group-hover:text-primary transition-all" />
                    </div>

                    {/* Content */}
                    <h3 className="font-bold text-xl lg:text-2xl mb-3 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-3 mb-8 flex-grow">
                      {feature.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button
                      variant="outline"
                      className="w-full mt-auto border-primary/40 bg-transparent text-foreground hover:bg-primary/10 hover:border-primary/60 hover:shadow-[0_0_20px_hsla(158,65%,50%,0.3)] transition-all duration-300"
                    >
                      Learn more
                    </Button>
                  </div>
                </SpotlightCard>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
