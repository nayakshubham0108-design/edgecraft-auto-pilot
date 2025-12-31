import { useState } from "react";
import { format, addDays, isBefore, startOfToday } from "date-fns";
import { Calendar, Clock, User, Mail, Phone, Building2, MessageSquare, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const TIME_SLOTS = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

export const BookingForm = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string>("");
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
    
    if (!selectedDate || !selectedTime) {
      toast({
        title: "Please select a date and time",
        description: "Choose your preferred pilot call time.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.name || !formData.email) {
      toast({
        title: "Required fields missing",
        description: "Please fill in your name and email.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Pilot call booked!",
      description: `We'll see you on ${format(selectedDate, "MMMM d, yyyy")} at ${selectedTime}.`,
    });
  };

  if (isSubmitted) {
    return (
      <section id="book-pilot" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="max-w-2xl mx-auto relative text-center">
          <div className="glass-card rounded-3xl p-12 glow-soft">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">You're All Set!</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Your 7-day pilot call is booked for{" "}
              <span className="text-foreground font-medium">
                {selectedDate && format(selectedDate, "MMMM d, yyyy")} at {selectedTime}
              </span>
            </p>
            <p className="text-muted-foreground">
              Check your email for confirmation and prep details. We're excited to show you what EdgeCraft AI can do for your business.
            </p>
            <Button
              variant="outline"
              className="mt-8"
              onClick={() => {
                setIsSubmitted(false);
                setSelectedDate(undefined);
                setSelectedTime("");
                setFormData({ name: "", email: "", phone: "", company: "", message: "" });
              }}
            >
              Book Another Call
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="book-pilot" className="py-24 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Book Your Pilot</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Schedule Your <span className="text-gradient">7-Day Pilot</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pick a time that works for you. We'll audit your current setup and show you exactly how much revenue you're leaving on the table.
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 md:p-12 glow-soft">
          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Left: Contact Info */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Your Information
                </h3>
                
                <div className="space-y-4">
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
                </div>
              </div>

              {/* Right: Calendar & Time */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Pick a Date & Time
                </h3>

                {/* Calendar */}
                <div className="p-4 rounded-2xl bg-secondary/30 border border-border">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full h-12 justify-start text-left font-normal rounded-xl",
                          !selectedDate && "text-muted-foreground"
                        )}
                      >
                        <Calendar className="mr-3 h-4 w-4 text-primary" />
                        {selectedDate ? format(selectedDate, "EEEE, MMMM d, yyyy") : "Select a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-card border-border" align="start">
                      <CalendarComponent
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => isBefore(date, startOfToday()) || isBefore(addDays(new Date(), 60), date)}
                        initialFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Time slots */}
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-3">
                    Available Times (EST)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {TIME_SLOTS.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={cn(
                          "px-4 py-3 rounded-xl text-sm font-medium transition-all border",
                          selectedTime === time
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-secondary/50 text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                        )}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Summary */}
                {selectedDate && selectedTime && (
                  <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                    <p className="text-sm text-muted-foreground">Your pilot call:</p>
                    <p className="text-lg font-semibold text-foreground">
                      {format(selectedDate, "EEEE, MMMM d")} at {selectedTime}
                    </p>
                  </div>
                )}

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
                      Booking...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Book My 7-Day Pilot
                    </span>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  No commitment required. We'll show you the ROI before you decide.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
