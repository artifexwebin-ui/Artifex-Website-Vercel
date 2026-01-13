import { motion } from "framer-motion";
import { MessageSquare, Target, Layout, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: MessageSquare,
    title: "Clear and honest communication",
    description: "We prioritize transparency and keeping you informed at every stage."
  },
  {
    icon: Target,
    title: "Conversion-first mindset",
    description: "Strategies designed to turn website visitors into loyal patients."
  },
  {
    icon: Layout,
    title: "Clean, modern design",
    description: "Aesthetics that reflect the professionalism and care of your practice."
  },
  {
    icon: HeartHandshake,
    title: "Long-term support focus",
    description: "We build partnerships, providing ongoing maintenance and growth."
  }
];

const Testimonials = () => {
  return (
    <section id="why-choose-us" className="py-24 bg-surface-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
          <span className="text-surface-dark-muted text-sm uppercase tracking-widest mb-4 block">Our Values</span>
          <h2 className="text-4xl md:text-5xl font-medium text-surface-dark-foreground max-w-3xl">
            Why Practices <span className="font-serif italic text-surface-dark-muted">Choose Artifex</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface-dark/50 p-6 rounded-2xl border border-surface-dark-muted/10 relative group hover:bg-surface-dark-foreground/5 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-surface-dark-foreground/10 text-surface-dark-foreground flex items-center justify-center mb-6">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-surface-dark-foreground mb-3">{item.title}</h3>
              <p className="text-surface-dark-muted text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="inline-block px-4 py-2 rounded-full border border-surface-dark-muted/20 bg-surface-dark/30 backdrop-blur-sm"
        >
          <p className="text-surface-dark-muted text-sm italic">
            Currently working with early-stage clients and concept projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
