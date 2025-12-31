import { ScrollReveal } from "@/components/ScrollReveal";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns";

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
    text: "We replaced multiple disconnected processes with one streamlined system. Errors dropped automatically, and we can finally focus on growing the business.",
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
    text: "The AI voice agent handles calls better than our old answering service. Patients love it, and we never miss a lead.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Amanda Brooks",
    role: "Practice Owner",
  },
  {
    text: "Implementation was seamless. Within a week, we had full automation running and saw immediate ROI.",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    name: "Robert Kim",
    role: "IT Director",
  },
  {
    text: "Their chatbot captured leads we were losing. Our conversion rate jumped 40% in the first month.",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    name: "Lisa Rodriguez",
    role: "Marketing Manager",
  },
  {
    text: "The email automation re-engaged our dormant patient list. We booked 50+ appointments from contacts we'd forgotten about.",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    name: "James Wilson",
    role: "Growth Lead",
  },
  {
    text: "Finally, a team that understands healthcare workflows. The custom dashboard they built saves us hours every week.",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    name: "Emily Santos",
    role: "Operations Manager",
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
              What Our <span className="text-gradient">Users Say</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Real results from real businesses using AI to eliminate grunt work and unlock serious efficiency.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonials Columns */}
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[600px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} className="hidden md:block" />
          <TestimonialsColumn testimonials={secondColumn} duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} duration={17} className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
