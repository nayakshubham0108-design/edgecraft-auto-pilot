import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    rating: 5,
    title: "Completely transformed our workflow",
    text: "What used to take our team hours now takes seconds. The automation features didn't just speed us up — they completely changed how we work.",
    author: "Sarah Mitchell",
    role: "Operations Director",
    company: "Dental Care Plus",
  },
  {
    rating: 5,
    title: "Finally, AI that delivers",
    text: "For the first time, someone without a data background can understand our reports. Clean summaries, accurate insights, and no manual formatting needed.",
    author: "Michael Chen",
    role: "Practice Manager",
    company: "Bright Smile Clinic",
  },
  {
    rating: 5,
    title: "ROI in the first month",
    text: "We replaced multiple disconnected processes with one streamlined system. Errors dropped automatically, and we can finally focus on growing the business.",
    author: "Jennifer Torres",
    role: "Clinic Owner",
    company: "Torres Medical Group",
  },
  {
    rating: 5,
    title: "Game changer for after-hours",
    text: "EdgeCraft fixed our nights — booked 7 appointments the first weekend. Our competitors are still sending calls to voicemail.",
    author: "David Park",
    role: "Office Manager",
    company: "Park Family Dental",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
            Teams Rely on Us to Move<br />
            <span className="text-gradient">Faster and Deliver More</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real results from real businesses using AI to eliminate grunt work and unlock serious efficiency.
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Rating Summary */}
          <div className="lg:w-1/4 flex lg:flex-col items-center lg:items-start gap-4">
            <div className="flex items-baseline gap-2">
              <span className="font-display font-extrabold text-5xl lg:text-6xl text-primary">4.9</span>
              <span className="text-2xl text-muted-foreground">/5</span>
            </div>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">Based on 240+ reviews</p>

            {/* Navigation */}
            <div className="flex items-center gap-2 mt-4">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-primary/50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:border-primary/50 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="lg:w-3/4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.author}-${index}`}
                className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  <span className="text-sm font-medium text-foreground mr-2">{testimonial.rating}.0</span>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Title */}
                <h4 className="font-display font-semibold text-lg text-foreground mb-3">
                  {testimonial.title}
                </h4>

                {/* Quote */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">
                      {testimonial.author.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
