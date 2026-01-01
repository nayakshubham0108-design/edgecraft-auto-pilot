import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ScrollReveal";

const faqs = [
  {
    question: "What can this AI actually automate?",
    answer: "Our AI handles the grunt work you shouldn't waste time on — data extraction, document analysis, summaries, reporting, workflow triggers, approvals, alerts, and repetitive admin tasks. If it's predictable and manual, the AI can automate it.",
  },
  {
    question: "How accurate is the data extraction and analysis?",
    answer: "We achieve 98.9% transcription accuracy on calls and 99%+ on structured data extraction. Our models are fine-tuned for business contexts and continuously improve based on your specific use cases.",
  },
  {
    question: "Will it work with the tools my team already uses?",
    answer: "Yes — we integrate with HubSpot, Zoho, Salesforce, Google Workspace, Slack, and 2,000+ other apps via native integrations and webhooks. If you have a custom system, we can build API connections.",
  },
  {
    question: "Is it suitable for small teams or startups?",
    answer: "Absolutely. Our pilot programs are designed to prove ROI fast with minimal commitment. Many of our best results come from lean teams who needed to scale operations without hiring.",
  },
  {
    question: "How secure is my data?",
    answer: "We use enterprise-grade encryption, SOC 2 compliance practices, and support HIPAA-ready hosting with BAAs for healthcare clients. Your data never trains our models without explicit consent.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-aurora-green-center pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[300px] bg-[radial-gradient(ellipse_at_0%_0%,hsla(168,60%,40%,0.1)_0%,transparent_50%)] pointer-events-none" />
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Clear, honest answers so you can make the right decision.
            </p>
          </div>
        </ScrollReveal>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <AccordionItem
                  value={`item-${index}`}
                  className="glass-card rounded-xl px-6 border-0 data-[state=open]:border-primary/30 data-[state=open]:glow-soft transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6 text-foreground hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
