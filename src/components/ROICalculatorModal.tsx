import { useState, useMemo } from "react";
import { Calculator, Phone, Globe, DollarSign, TrendingUp, Zap, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ROICalculatorModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ROICalculatorModal = ({ open, onOpenChange }: ROICalculatorModalProps) => {
  const [calculatorType, setCalculatorType] = useState<"calls" | "visits">("calls");
  const [missedCalls, setMissedCalls] = useState<number>(50);
  const [monthlyVisits, setMonthlyVisits] = useState<number>(5000);
  
  // Conversion assumptions
  const CALL_TO_APPOINTMENT_RATE = 0.35;
  const VISIT_TO_LEAD_RATE = 0.03;
  const LEAD_TO_CUSTOMER_RATE = 0.25;
  const AVG_CUSTOMER_VALUE = 500;
  const AI_RECOVERY_RATE = 0.80;

  const calculations = useMemo(() => {
    if (calculatorType === "calls") {
      const recoveredCalls = missedCalls * AI_RECOVERY_RATE;
      const newAppointments = recoveredCalls * CALL_TO_APPOINTMENT_RATE;
      const newCustomers = newAppointments * LEAD_TO_CUSTOMER_RATE;
      const monthlyRevenue = newCustomers * AVG_CUSTOMER_VALUE;
      const yearlyRevenue = monthlyRevenue * 12;
      
      return {
        recovered: Math.round(recoveredCalls),
        conversions: Math.round(newAppointments),
        monthlyRevenue: Math.round(monthlyRevenue),
        yearlyRevenue: Math.round(yearlyRevenue),
        label: "Calls Recovered"
      };
    } else {
      const additionalLeads = monthlyVisits * VISIT_TO_LEAD_RATE * AI_RECOVERY_RATE;
      const newCustomers = additionalLeads * LEAD_TO_CUSTOMER_RATE;
      const monthlyRevenue = newCustomers * AVG_CUSTOMER_VALUE;
      const yearlyRevenue = monthlyRevenue * 12;
      
      return {
        recovered: Math.round(additionalLeads),
        conversions: Math.round(newCustomers),
        monthlyRevenue: Math.round(monthlyRevenue),
        yearlyRevenue: Math.round(yearlyRevenue),
        label: "Leads Captured"
      };
    }
  }, [calculatorType, missedCalls, monthlyVisits]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background border-border">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Calculator className="w-5 h-5 text-primary" />
            </div>
            Calculate Your Revenue Recovery
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4">
          <p className="text-muted-foreground mb-8">
            See how much revenue you're leaving on the table — and how much EdgeCraft AI can help you recover.
          </p>

          {/* Toggle */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 rounded-full bg-secondary/50 border border-border">
              <button
                onClick={() => setCalculatorType("calls")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  calculatorType === "calls" 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Phone className="w-4 h-4" />
                Missed Calls
              </button>
              <button
                onClick={() => setCalculatorType("visits")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  calculatorType === "visits" 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Globe className="w-4 h-4" />
                Site Visits
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Input Section */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-3">
                  {calculatorType === "calls" 
                    ? "Missed calls per month" 
                    : "Monthly website visitors"}
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                    {calculatorType === "calls" ? <Phone className="w-5 h-5" /> : <Globe className="w-5 h-5" />}
                  </div>
                  <Input
                    type="number"
                    value={calculatorType === "calls" ? missedCalls : monthlyVisits}
                    onChange={(e) => {
                      const value = parseInt(e.target.value) || 0;
                      if (calculatorType === "calls") {
                        setMissedCalls(value);
                      } else {
                        setMonthlyVisits(value);
                      }
                    }}
                    className="pl-12 h-12 text-lg bg-secondary/50 border-border focus:border-primary rounded-xl"
                    min={0}
                  />
                </div>
              </div>

              {/* Slider */}
              <div>
                <input
                  type="range"
                  min={calculatorType === "calls" ? 10 : 500}
                  max={calculatorType === "calls" ? 500 : 50000}
                  step={calculatorType === "calls" ? 10 : 500}
                  value={calculatorType === "calls" ? missedCalls : monthlyVisits}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    if (calculatorType === "calls") {
                      setMissedCalls(value);
                    } else {
                      setMonthlyVisits(value);
                    }
                  }}
                  className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>{calculatorType === "calls" ? "10" : "500"}</span>
                  <span>{calculatorType === "calls" ? "500 calls" : "50,000 visitors"}</span>
                </div>
              </div>

              {/* Assumptions */}
              <div className="p-4 rounded-xl bg-secondary/30 border border-border">
                <p className="text-xs text-muted-foreground">
                  <strong className="text-foreground">Assumptions:</strong> 35% call-to-appointment rate • 
                  25% lead-to-customer conversion • ${AVG_CUSTOMER_VALUE} avg. customer value • 
                  80% AI recovery rate
                </p>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-4">
              {/* Main result */}
              <div className="p-5 rounded-2xl bg-primary/10 border border-primary/20 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Projected Annual Recovery</span>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gradient">
                  {formatCurrency(calculations.yearlyRevenue)}
                </div>
                <p className="text-sm text-muted-foreground mt-2">per year</p>
              </div>

              {/* Breakdown */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl glass-card text-center">
                  <Zap className="w-5 h-5 text-primary mx-auto mb-2" />
                  <div className="text-xl font-bold text-foreground">{calculations.recovered}</div>
                  <p className="text-xs text-muted-foreground">{calculations.label}/mo</p>
                </div>
                <div className="p-4 rounded-xl glass-card text-center">
                  <DollarSign className="w-5 h-5 text-primary mx-auto mb-2" />
                  <div className="text-xl font-bold text-foreground">{formatCurrency(calculations.monthlyRevenue)}</div>
                  <p className="text-xs text-muted-foreground">Monthly Revenue</p>
                </div>
              </div>

              {/* CTA */}
              <Button variant="hero" size="lg" className="w-full mt-4">
                Start Your Pilot — Recover This Revenue
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
