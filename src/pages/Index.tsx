import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { BookingForm } from "@/components/BookingForm";
import { CTA } from "@/components/CTA";
import { FreeTools } from "@/components/FreeTools";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <BookingForm />
        <CTA />
        <FreeTools />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
