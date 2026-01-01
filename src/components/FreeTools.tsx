import { Calculator, ExternalLink } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useState } from "react";
import { ROICalculatorModal } from "@/components/ROICalculatorModal";

export const FreeTools = () => {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  return (
    <>
      <section id="free-tools" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-aurora-green-top pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-[radial-gradient(ellipse_at_100%_100%,hsla(158,65%,45%,0.12)_0%,transparent_50%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
                Free Tools
              </h2>
              <p className="text-muted-foreground">
                Interactive tools to help you evaluate and plan your AI journey
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <button
              onClick={() => setIsCalculatorOpen(true)}
              className="w-full group"
            >
              <div className="glass-card rounded-xl p-5 border border-border/50 hover:border-primary/40 transition-all duration-300 flex items-center gap-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Calculator className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1 text-left">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    ROI Calculator
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Calculate potential savings with AI automation
                  </p>
                </div>

                {/* Badge & Arrow */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary">
                    Interactive Tool
                  </span>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
            </button>
          </ScrollReveal>
        </div>
      </section>

      <ROICalculatorModal 
        open={isCalculatorOpen} 
        onOpenChange={setIsCalculatorOpen} 
      />
    </>
  );
};
