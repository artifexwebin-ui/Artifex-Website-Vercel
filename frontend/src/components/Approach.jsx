import { motion } from "framer-motion";
const steps = [
  {
    number: "01",
    title: "Understanding your practice",
    description: "We dive deep into understanding your goals, audience, and vision to create a strategic foundation.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&auto=format&fit=crop"
  },
  {
    number: "02",
    title: "Designing for patient trust",
    description: "Our designers craft pixel-perfect interfaces using the latest design trends and technologies.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&auto=format&fit=crop"
  },
  {
    number: "03",
    title: "Fast & secure development",
    description: "Every element is optimized for performance and designed to convert visitors into customers.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop"
  },
  {
    number: "04",
    title: "Optimized for local growth",
    description: "We bring designs to life with clean, efficient code that's built to scale and perform.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop"
  }
];
const Approach = () => {
  return <section id="about" className="py-10 bg-background"><div className="container mx-auto px-6"><motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6 }}
    className="mb-6"
  ><h2 className="text-3xl md:text-4xl font-medium">Our Approach</h2></motion.div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{steps.map((step, index) => <motion.div
    key={step.number}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    className="group"
  ><div className="relative overflow-hidden rounded-xl mb-4"><img
    src={step.image}
    alt={step.title}
    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
  /><span className="absolute bottom-4 left-4 font-mono text-5xl font-bold text-white/20 select-none z-10">{step.number}</span></div><h3 className="text-lg font-semibold mb-2 text-foreground">{step.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p></motion.div>)}</div></div></section>;
};

export default Approach;
