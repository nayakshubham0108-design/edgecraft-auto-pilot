import { useState } from "react";
import { User, Mail, Phone, Building2, MessageSquare, Send, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ScrollReveal } from "@/components/ScrollReveal";

export const BookingForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      toast({
        title: "Required fields missing",
        description: "Please fill in your name and email.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Open Calendly with pre-filled info
    const calendlyUrl = `https://calendly.com/nayakshubham0108?background_color=0c0c0c&text_color=24e32c&primary_color=00ff6c&name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}`;
    
    (window as any).Calendly?.initPopupWidget({ url: calendlyUrl });
    
    setIsSubmitting(false);
  };

  return (
    <section id="book-pilot" className="py-24 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-aurora-green" />
      <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[radial-gradient(ellipse_at_100%_0%,hsla(168,60%,40%,0.12)_0%,transparent_50%)]" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-primary/4 rounded-full blur-3xl" />
      
      <div className="max-w-3xl mx-auto relative">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Step 1 Starts Here</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ready to <span className="text-gradient">Get Started?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Book your free discovery call now. We'll discuss your goals, audit your current setup, and create your custom AI plan.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="glass-card rounded-3xl p-8 md:p-12 glow-soft">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Your Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Smith"
                        className="pl-11 h-12 bg-secondary/50 border-border focus:border-primary rounded-xl"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                        className="pl-11 h-12 bg-secondary/50 border-border focus:border-primary rounded-xl"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                        className="pl-11 h-12 bg-secondary/50 border-border focus:border-primary rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Company Name
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Acme Inc."
                        className="pl-11 h-12 bg-secondary/50 border-border focus:border-primary rounded-xl"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    What's your biggest challenge?
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-muted-foreground" />
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="e.g., Missing after-hours calls, slow lead response..."
                      className="pl-11 min-h-[100px] bg-secondary/50 border-border focus:border-primary rounded-xl resize-none"
                    />
                  </div>
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Opening Calendar...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Book a Free Discovery Call
                    </span>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  No commitment required. We'll show you the ROI before you decide.
                </p>
              </div>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
