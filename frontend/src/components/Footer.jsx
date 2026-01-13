import { ArrowRight, MapPin, Mail, MessageCircle, ShieldCheck } from "lucide-react";
import logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-surface-dark py-12 border-t border-surface-dark-muted/10">  {/* Reduced padding */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10"> {/* Reduced gap and margin */}

          {/* Column 1: Brand */}
          <div className="space-y-4"> {/* Reduced space-y */}
            <div className="flex items-center gap-2">
              <img src={logo} alt="Artifex Logo" className="w-8 h-8 rounded-full object-cover" />
              <span className="text-surface-dark-foreground font-semibold text-lg tracking-tight">
                Artifex
              </span>
            </div>
            <p className="text-surface-dark-muted text-xs leading-relaxed max-w-xs">
              Crafting high-converting digital experiences for the dental & healthcare industry.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-surface-dark-foreground hover:text-primary transition-colors group">
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-surface-dark-foreground/80 mb-4">Services</h4> {/* refined header */}
            <ul className="space-y-2.5"> {/* Reduced vertical spacing */}
              <li>
                <a href="#services" className="text-surface-dark-foreground text-sm hover:text-primary transition-colors flex items-center gap-2">
                  Dentist Website Design
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                </a>
              </li>
              <li>
                <a href="#services" className="text-surface-dark-muted text-sm hover:text-surface-dark-foreground transition-colors">
                  Healthcare Website Design
                </a>
              </li>
              <li>
                <a href="#services" className="text-surface-dark-muted text-sm hover:text-surface-dark-foreground transition-colors">
                  Business Websites
                </a>
              </li>
              <li>
                <a href="#services" className="text-surface-dark-muted text-sm hover:text-surface-dark-foreground transition-colors">
                  Website Redesign
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-surface-dark-foreground/80 mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#about" className="text-surface-dark-muted text-sm hover:text-surface-dark-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#approach" className="text-surface-dark-muted text-sm hover:text-surface-dark-foreground transition-colors">
                  Our Approach
                </a>
              </li>
              <li>
                <a href="#faq" className="text-surface-dark-muted text-sm hover:text-surface-dark-foreground transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#contact" className="text-surface-dark-muted text-sm hover:text-surface-dark-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-surface-dark-foreground/80 mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-surface-dark-muted" />
                <span className="text-surface-dark-muted text-sm">Jalandhar, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-surface-dark-muted" />
                <a href="mailto:hello@artifexweb.in" className="text-surface-dark-muted text-sm hover:text-surface-dark-foreground transition-colors">
                  hello@artifexweb.in
                </a>
              </div>
              <a
                href="https://wa.me/YOUR_NUMBER"
                className="inline-flex items-center gap-2 text-sm text-surface-dark-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center w-full px-5 py-2.5 bg-surface-dark-foreground text-surface-dark text-xs font-bold uppercase tracking-wide rounded-md hover:bg-surface-dark-foreground/90 transition-all mt-2"
            >
              Get Free Website Audit
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-surface-dark-muted/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-surface-dark-muted/50 text-[10px] uppercase tracking-wider">
            © 2026 Artifex. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-surface-dark-muted/50 hover:text-surface-dark-muted text-[10px] uppercase tracking-wider transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-surface-dark-muted/50 hover:text-surface-dark-muted text-[10px] uppercase tracking-wider transition-colors">
              Terms of Service
            </a>
            <a href="/terms" className="flex items-center gap-1.5 text-surface-dark-muted/50 hover:text-surface-dark-muted text-[10px] uppercase tracking-wider transition-colors group">
              <ShieldCheck className="w-3 h-3 group-hover:text-primary transition-colors" />
              <span>Terms & Conditions</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
