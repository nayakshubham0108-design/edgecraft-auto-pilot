import { TestimonialsColumn } from "@/components/ui/testimonials-columns";
import { ScrollReveal } from "@/components/ScrollReveal";

const testimonials = [
  {
    text: "What used to take our team hours now takes seconds. The automation features didn't just speed us up — they completely changed how we work.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Sarah Mitchell",
    role: "Operations Director",
  },
  {
    text: "For the first time, someone without a data background can understand our reports. Clean summaries, accurate insights, and no manual formatting needed.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Michael Chen",
    role: "Practice Manager",
  },
  {
    text: "We replaced multiple disconnected processes with one streamlined system. Errors dropped automatically, and we can finally focus on growth.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Jennifer Torres",
    role: "Clinic Owner",
  },
  {
    text: "EdgeCraft fixed our nights — booked 7 appointments the first weekend. Our competitors are still sending calls to voicemail.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "David Park",
    role: "Office Manager",
  },
  {
    text: "The AI-powered insights have transformed our decision-making process. We're now ahead of trends instead of reacting to them.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Emily Rodriguez",
    role: "Strategy Director",
  },
  {
    text: "Integration was seamless. Within a week, our entire team was up and running with zero downtime.",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    name: "James Wilson",
    role: "IT Manager",
  },
  {
    text: "Our customer response time dropped by 80%. The automation handles routine queries while we focus on complex cases.",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    name: "Lisa Thompson",
    role: "Customer Success Lead",
  },
  {
    text: "The ROI was visible within the first month. Best investment we've made in operational efficiency.",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    name: "Robert Kim",
    role: "CFO",
  },
  {
    text: "Finally, a solution that actually understands healthcare workflows. It's like it was built specifically for us.",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    name: "Amanda Foster",
    role: "Healthcare Administrator",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Green aurora background */}
      <div className="absolute inset-0 bg-aurora-green pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[350px] bg-[radial-gradient(ellipse_at_100%_100%,hsla(142,70%,40%,0.2)_0%,transparent_55%)] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Testimonials
              </span>
            </div>
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
              Teams Rely on Us to Move
              <br />
              <span className="text-gradient">Faster and Deliver More</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Real results from real businesses using AI to eliminate grunt work
              and unlock serious efficiency.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonials Columns */}
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[600px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
