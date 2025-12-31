import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { ROICalculator } from "@/components/ROICalculator";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { BookingForm } from "@/components/BookingForm";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Stats />
        <ROICalculator />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <BookingForm />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
