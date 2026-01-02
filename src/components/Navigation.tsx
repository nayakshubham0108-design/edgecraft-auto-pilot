import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
      {/* Main nav bar */}
      <motion.div 
        className="rounded-full border border-border/30 shadow-lg shadow-primary/15 px-4 transition-all duration-300"
        animate={{
          backgroundColor: scrolled ? "hsla(160, 20%, 8%, 0.95)" : "hsla(160, 20%, 8%, 0.6)",
          backdropFilter: scrolled ? "blur(20px)" : "blur(12px)",
        }}
        style={{ backdropFilter: "blur(12px)" }}
      >
        <div className="mx-auto">
          <div className="flex items-center justify-between h-12 md:h-14">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-lg bg-[hsla(142,70%,45%,0.2)] flex items-center justify-center group-hover:shadow-[0_0_25px_hsla(142,70%,50%,0.5)] transition-all duration-300">
                <Zap className="w-5 h-5 text-primary group-hover:icon-glow" />
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                EdgeCraft<span className="text-primary">AI</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center">
              <Button 
                variant="hero" 
                size="default"
                onClick={() => (window as any).Calendly?.initPopupWidget({url: 'https://calendly.com/nayakshubham0108?background_color=0c0c0c&text_color=24e32c&primary_color=00ff6c'})}
              >
                Book a Discovery Call
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="md:hidden p-2 text-foreground rounded-full hover:bg-white/5 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu - Separate dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden mt-2 glass-card rounded-2xl border border-border/30 shadow-xl shadow-primary/10 overflow-hidden"
          >
            <div className="p-4">
              <div className="flex flex-col gap-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                    className="text-base font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all px-4 py-3 rounded-xl"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false);
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                className="pt-4 mt-4 border-t border-border/30"
              >
                <Button 
                  variant="hero" 
                  size="default" 
                  className="w-full rounded-xl"
                  onClick={() => {
                    setIsOpen(false);
                    (window as any).Calendly?.initPopupWidget({url: 'https://calendly.com/nayakshubham0108?background_color=0c0c0c&text_color=24e32c&primary_color=00ff6c'});
                  }}
                >
                  Book a Discovery Call
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
