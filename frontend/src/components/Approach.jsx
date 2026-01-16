import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understanding your practice",
    description: "We dive deep into understanding your goals, audience, and vision to create a strategic foundation.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&auto=format&fit=crop",
    details: [
      "Initial Consultation & Vision Mapping",
      "Competitor & Market Analysis",
      "Target Audience Persona Definition",
      "Sitemap & Content Strategy"
    ]
  },
  {
    number: "02",
    title: "Designing for patient trust",
    description: "Our designers craft pixel-perfect interfaces using the latest design trends and technologies.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&auto=format&fit=crop",
    details: [
      "Wireframing & UX Layout",
      "Moodboard & Visual Style Selection",
      "High-Fidelity Interface Design",
      "Credibility Elements Integration"
    ]
  },
  {
    number: "03",
    title: "Fast & secure development",
    description: "Every element is optimized for performance and designed to convert visitors into customers.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop",
    details: [
      "Clean, Semantic HTML5/CSS3 Coding",
      "React/Next.js Framework Implementation",
      "Performance Optimization (Core Web Vitals)",
      "Security protocols & SSL Setup"
    ]
  },
  {
    number: "04",
    title: "Optimized for local growth",
    description: "We bring designs to life with clean, efficient code that's built to scale and perform.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop",
    details: [
      "Google Business Profile Integration",
      "Local Keyword Optimization",
      "Schema Markup for Local Businesses",
      "Analytics & Conversion Tracking Setup"
    ]
  }
];

const Approach = () => {
  const [selectedStep, setSelectedStep] = useState(null);

  return (
    <section id="about" className="py-10 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-medium">Our Approach</h2>
          <p className="text-muted-foreground mt-2">Click on any card to see our detailed process.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              layoutId={`card-${step.number}`}
              onClick={() => setSelectedStep(step)}
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <motion.img
                  layoutId={`image-${step.number}`}
                  src={step.image}
                  alt={step.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <motion.span
                  layoutId={`number-${step.number}`}
                  className="absolute bottom-4 left-4 font-mono text-5xl font-bold text-white/20 select-none z-10"
                >
                  {step.number}
                </motion.span>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
              </div>
              <motion.h3
                layoutId={`title-${step.number}`}
                className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors"
              >
                {step.title}
              </motion.h3>
              <motion.p
                layoutId={`desc-${step.number}`}
                className="text-muted-foreground text-sm leading-relaxed"
              >
                {step.description}
              </motion.p>
              <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                View Workflow <ArrowRight size={16} className="ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedStep && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStep(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              layoutId={`card-${selectedStep.number}`}
              className="w-full max-w-4xl bg-card border border-border rounded-3xl overflow-hidden shadow-2xl relative z-60 flex flex-col md:flex-row max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedStep(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 z-20 backdrop-blur-md transition-colors"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-1/2 relative h-64 md:h-auto">
                <motion.img
                  layoutId={`image-${selectedStep.number}`}
                  src={selectedStep.image}
                  alt={selectedStep.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/80 opacity-60" />
                <motion.span
                  layoutId={`number-${selectedStep.number}`}
                  className="absolute bottom-6 left-6 font-mono text-8xl font-bold text-white/20 select-none"
                >
                  {selectedStep.number}
                </motion.span>
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 bg-card flex flex-col overflow-y-auto">
                <div className="mb-8">
                  <motion.h4
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-primary text-sm font-bold uppercase tracking-wider mb-2"
                  >
                    Workflow Process
                  </motion.h4>
                  <motion.h3
                    layoutId={`title-${selectedStep.number}`}
                    className="text-3xl font-bold text-card-foreground mb-4"
                  >
                    {selectedStep.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`desc-${selectedStep.number}`}
                    className="text-muted-foreground text-lg leading-relaxed"
                  >
                    {selectedStep.description}
                  </motion.p>
                </div>

                <div className="space-y-4">
                  {selectedStep.details.map((detail, i) => (
                    <motion.div
                      key={detail}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (i * 0.1) }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50"
                    >
                      <div className="mt-1 p-1 rounded-full bg-primary/20 text-primary">
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-foreground font-medium">{detail}</span>
                    </motion.div>
                  ))}
                  <div className="pt-4">
                    <a href="#contact" onClick={() => setSelectedService(null)} className="inline-flex w-full items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all">
                      Start Your Journey <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Approach;
