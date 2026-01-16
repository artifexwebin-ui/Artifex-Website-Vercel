import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Palette, ShoppingCart, Code, Layers, Zap, ArrowRight, X, Check } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Patient-First Websites",
    description: "Trustworthy designs that convert visitors into booked appointments.",
    details: [
      "Custom UI/UX design tailored for dental patients",
      "Accessibility compliance (WCAG) for all users",
      "Clear calls-to-action for higher conversion rates",
      "Integration with patient forms and portals"
    ]
  },
  {
    icon: Palette,
    title: "Medical Branding",
    description: "Professional identity that builds confidence and authority in your local area.",
    details: [
      "Logo design and visual identity systems",
      "Consistent color palettes and typography",
      "Brand guidelines for social media and print",
      "Clinic stationery and brochure design"
    ]
  },
  {
    icon: ShoppingCart,
    title: "Online Booking & Payments",
    description: "Seamless integration for patient appointments and secure bill payments.",
    details: [
      "Integration with major practice management software",
      "24/7 online appointment scheduling",
      "Secure payment gateways for treatments",
      "Automated appointment reminders"
    ]
  },
  {
    icon: Code,
    title: "Local SEO Dominance",
    description: "Optimized structure to ensure your clinic appears first in local searches.",
    details: [
      "Google Business Profile optimization",
      "Local keyword targeting (e.g., 'dentist near me')",
      "Review management strategies",
      "Location-specific landing pages"
    ]
  },
  {
    icon: Layers,
    title: "Mobile Optimization",
    description: "Flawless experience for patients browsing on smartphones and tablets.",
    details: [
      "Responsive design for all screen sizes",
      "Touch-friendly navigation menus",
      "Fast loading on mobile networks",
      "Click-to-call functionality"
    ]
  },
  {
    icon: Zap,
    title: "Fast Page Speed",
    description: "Instant loading times to reduce bounce rates and keep patients engaged.",
    details: [
      "Image optimization and lazy loading",
      "Code minification and caching strategies",
      "CDN integration for global delivery",
      "Core Web Vitals performance tuning"
    ]
  }
];

const ServiceCard = ({ service, index, onClick }) => {
  return (
    <motion.div
      layoutId={`card-container-${service.title}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => onClick(service)}
      className="group cursor-pointer block p-8 rounded-3xl border border-white/5 bg-surface-dark/40 backdrop-blur-md hover:bg-surface-dark/60 hover:border-white/10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 h-full flex flex-col relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <motion.div layoutId={`card-icon-${service.title}`} className="w-14 h-14 rounded-2xl bg-white/5 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10">
        <service.icon size={28} className="text-white/80 group-hover:text-white" />
      </motion.div>
      <motion.h3 layoutId={`card-title-${service.title}`} className="text-xl font-medium text-white mb-3 relative z-10">{service.title}</motion.h3>
      <motion.p layoutId={`card-desc-${service.title}`} className="text-white/60 text-sm leading-relaxed mb-6 flex-1 group-hover:text-white/80 transition-colors relative z-10">
        {service.description}
      </motion.p>
      <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
        Learn More <ArrowRight size={16} />
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-surface-dark/50" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-medium mb-4">
            How We Help Your <span className="font-serif italic">Practice Grow Online.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We provide the essential tools to attract new patients and build a thriving practice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              onClick={setSelectedService}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                layoutId={`card-container-${selectedService.title}`}
                className="w-full max-w-2xl bg-surface-dark border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8 md:p-12">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-20"
                  >
                    <X size={20} className="text-white/70" />
                  </button>

                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <motion.div layoutId={`card-icon-${selectedService.title}`} className="w-16 h-16 shrink-0 rounded-2xl bg-white/5 text-white flex items-center justify-center">
                      <selectedService.icon size={32} className="text-white" />
                    </motion.div>

                    <div className="flex-1">
                      <motion.h3 layoutId={`card-title-${selectedService.title}`} className="text-3xl font-medium text-white mb-4">
                        {selectedService.title}
                      </motion.h3>
                      <motion.p layoutId={`card-desc-${selectedService.title}`} className="text-white/70 text-lg leading-relaxed mb-8">
                        {selectedService.description}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-4"
                      >
                        <h4 className="text-sm uppercase tracking-wider text-muted-foreground font-semibold">What We Deliver</h4>
                        <div className="grid gap-3">
                          {selectedService.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-3 text-white/80">
                              <Check size={18} className="mt-1 text-primary shrink-0" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-10 pt-8 border-t border-white/10 flex justify-end gap-3"
                  >
                    <a
                      href="#contact"
                      onClick={() => setSelectedService(null)}
                      className="px-6 py-2.5 rounded-full bg-primary text-black font-medium hover:bg-primary/90 transition-colors"
                    >
                      Get this Service
                    </a>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="px-6 py-2.5 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors"
                    >
                      Close Details
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
