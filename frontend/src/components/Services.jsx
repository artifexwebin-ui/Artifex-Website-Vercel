import { motion } from "framer-motion";
import { Globe, Palette, ShoppingCart, Code, Layers, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Globe,
    title: "Patient-First Websites",
    description: "Trustworthy designs that convert visitors into booked appointments.",
    link: "#"
  },
  {
    icon: Palette,
    title: "Medical Branding",
    description: "Professional identity that builds confidence and authority in your local area.",
    link: "#"
  },
  {
    icon: ShoppingCart,
    title: "Online Booking & Payments",
    description: "Seamless integration for patient appointments and secure bill payments.",
    link: "#"
  },
  {
    icon: Code,
    title: "Local SEO Dominance",
    description: "Optimized structure to ensure your clinic appears first in local searches.",
    link: "#"
  },
  {
    icon: Layers,
    title: "Mobile Optimization",
    description: "Flawless experience for patients browsing on smartphones and tablets.",
    link: "#"
  },
  {
    icon: Zap,
    title: "Fast Page Speed",
    description: "Instant loading times to reduce bounce rates and keep patients engaged.",
    link: "#"
  }
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={service.link}
        className="group block p-8 rounded-3xl border border-border bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-xl h-full flex flex-col"
      >
        <div className="w-14 h-14 rounded-2xl bg-background text-foreground flex items-center justify-center mb-6 group-hover:bg-primary-foreground group-hover:text-primary transition-colors duration-300">
          <service.icon size={28} />
        </div>
        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1 group-hover:text-primary-foreground/80">
          {service.description}
        </p>
        <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
          Learn More <ArrowRight size={16} />
        </div>
      </Link>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
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
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
