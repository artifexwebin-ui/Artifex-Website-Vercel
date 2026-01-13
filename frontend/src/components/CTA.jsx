import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-2">
            Create Bold.
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic mb-10">
            Deliver Better.
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:artiflexstudio@gmail.com"
              className="px-10 py-5 bg-foreground text-background font-bold text-lg rounded-full hover:bg-foreground/90 transition-all shadow-xl hover:scale-105"
            >
              Get a Free Consultation
            </a>
            <a
              href="#works"
              className="px-10 py-5 border-2 border-border text-foreground font-semibold text-lg rounded-full hover:bg-muted transition-all"
            >
              View Our Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
