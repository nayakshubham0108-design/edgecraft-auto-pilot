import { Zap } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "AI Voice Agents", href: "#" },
    { label: "Intelligent Chatbots", href: "#" },
    { label: "Email Automation", href: "#" },
    { label: "Website Design", href: "#" },
    { label: "Custom AI SaaS", href: "#" },
    { label: "Process Automation", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "ROI Calculator", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Support", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Security", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border py-16 lg:py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                EdgeCraft<span className="text-primary">AI</span>
              </span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs mb-6">
              AI-powered automation that rescues missed revenue, reduces operational load, and delivers predictable growth.
            </p>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} EdgeCraft AI. All rights reserved.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
