import { Phone, MessageSquare, Mail, Globe, Cpu, Workflow, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const features = [
  {
    icon: Phone,
    title: "AI Voice Agents",
    description: "24/7 call handling that answers, qualifies, and books appointments while you sleep.",
    cta: "Start After-Hours Pilot",
  },
  {
    icon: MessageSquare,
    title: "Intelligent Chatbots",
    description: "RAG-powered bots on web, WhatsApp, and SMS that capture leads and generate proposals.",
    cta: "Deploy LeadMate Widget",
  },
  {
    icon: Mail,
    title: "Email Automation",
    description: "Behavior-driven sequences with LLM personalization that re-activate lists and speed demos.",
    cta: "Launch Email Flow",
  },
  {
    icon: Globe,
    title: "Conversion Websites",
    description: "Product-led pages with calculators, chat entry points, and analytics that feed your bots.",
    cta: "Build My Funnel",
  },
  {
    icon: Cpu,
    title: "Custom AI SaaS",
    description: "Turn repetitive work into a product — internal dashboards or customer-facing tools.",
    cta: "Schedule Discovery",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Chain telephony, chat, CRM, calendar, and billing into orchestrated flows.",
    cta: "Automate My Flow",
  },
];

export function Features() {
  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
              The AI Engine That Makes<br />
              <span className="text-gradient">Your Data Work For You</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Upgraded with intelligent automation built to save time, reduce errors, and accelerate outcomes.
            </p>
          </div>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 100}>
              <div className="group glass-card rounded-2xl p-6 lg:p-8 hover:border-primary/30 transition-all duration-300 hover:glow-soft h-full">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* CTA Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                >
                  {feature.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
