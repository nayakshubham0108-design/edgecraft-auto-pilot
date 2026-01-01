import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollReveal } from "@/components/ScrollReveal";

const faqs = [
  {
    question: "Is AI really reliable for customer-facing tasks?",
    answer: "Yes. Our AI agents are trained to sound natural, respectful, and consistent. They don't take breaks, forget, or miss calls—giving your customers a professional experience 24/7.",
  },
  {
    question: "What if the AI makes mistakes?",
    answer: "We design systems with human fallback. If AI can't resolve an issue, it hands off seamlessly to a real person — so customers are never left hanging.",
  },
  {
    question: "Do I need to change my whole business to use this?",
    answer: "Not at all. We plug into the tools you already use (CRM, phone, email, website) and automate workflows step by step.",
  },
  {
    question: "What if I'm not tech-savvy?",
    answer: "No problem. We handle setup, training, and support. You don't need technical skills — you just see the results.",
  },
  {
    question: "How do I know this will actually work for my industry?",
    answer: "Every industry has repetitive tasks. Whether it's leads, calls, support, or scheduling — AI takes care of the busywork. We tailor it to your business.",
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
