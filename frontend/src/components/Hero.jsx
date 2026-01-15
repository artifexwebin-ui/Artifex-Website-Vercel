import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HeroBackground from "./HeroBackground";


const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const descY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const buttonsY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const mockupY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const mockupScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const badgesY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  // Parallax for background - passed to component or handled there?
  // Since Three.js handles its own animation, we might not need these specific transforms for the background itself.

  return (
    <section ref={sectionRef} id="home" className="min-h-screen bg-surface-dark pt-32 pb-8 flex flex-col relative overflow-hidden">
      <HeroBackground />

      {/* Layer 2: Gradient Overlay (Removed - Handled in HeroBackground now) */}


      <div className="container mx-auto px-6 flex-1 flex flex-col justify-center relative z-10"><div className="text-center max-w-4xl mx-auto"><motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ y: titleY }}
        className="text-white/60 text-sm uppercase tracking-widest mb-6"
      >
        Artifex Web
      </motion.p><motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{ y: titleY }}
        className="text-4xl md:text-5xl lg:text-7xl font-medium text-white mb-4 leading-tight"
      >
          Websites That Help Dentists <br className="hidden md:block" />
          <span className="font-serif italic text-white/90">Get More Appointments</span>
        </motion.h1><motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ y: descY }}
          className="text-white/70 max-w-xl mx-auto mb-10 text-lg"
        >
          We design modern, conversion-focused websites for dental clinics and growing local practices.
        </motion.p><motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ y: buttonsY }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        ><a
          href="mailto:artifexweb@gmail.com"
          className="px-8 py-4 bg-surface-dark-foreground text-surface-dark font-medium rounded-full hover:bg-surface-dark-foreground/90 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
            Get a Free Website Audit
          </a><a
            href="#works"
            className="px-8 py-3 border border-surface-dark-muted text-surface-dark-foreground font-medium rounded-full hover:border-surface-dark-foreground transition-colors"
          >
            View Dental Website Example
          </a></motion.div></div></div>{
        /* Browser mockup with parallax */
      }<motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{ y: mockupY, scale: mockupScale }}
        className="container mx-auto px-6 mt-16 relative z-10"
      ><div className="max-w-4xl mx-auto"><div className="bg-surface-dark rounded-t-xl p-3 flex items-center gap-2"><div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-500/70" /><div className="w-3 h-3 rounded-full bg-yellow-500/70" /><div className="w-3 h-3 rounded-full bg-green-500/70" /></div><div className="flex-1 flex justify-center"><div className="bg-white/10 rounded-md px-4 py-1 text-xs text-surface-dark-muted">
        artifexweb.in
      </div></div></div><div className="bg-gradient-to-b from-surface-dark to-background rounded-b-xl overflow-hidden"><div className="aspect-video bg-gradient-to-br from-muted to-background flex items-center justify-center"><div className="text-center p-8"><div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-foreground/5 flex items-center justify-center"><span className="text-2xl">✨</span></div><p className="text-muted-foreground text-sm">Your next amazing project starts here</p></div></div></div></div></motion.div>{
        /* Trust badges with parallax */
      }<motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        style={{ y: badgesY }}
        className="container mx-auto px-6 mt-16 relative z-10"
      ><div className="flex flex-col items-center gap-12">
          {/* Trust Stats */}
          {/* Trust Stats - Removed as requested */}

          {/* Trusted By */}

        </div></motion.div>    </section>
  );
};

export default Hero;
