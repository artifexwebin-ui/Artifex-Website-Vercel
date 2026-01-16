import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const HomePricing = () => {
    return (
        <section className="py-20 relative bg-black overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/20 blur-[120px] rounded-full opacity-30 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto rounded-[2rem] bg-surface-dark/60 backdrop-blur-xl border border-white/10 p-8 md:p-12 text-center transform hover:scale-[1.01] transition-transform duration-500"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
                        <Sparkles size={12} />
                        <span>Transparent Pricing</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">
                        Premium Design, <br />
                        <span className="font-serif italic text-white/60">Accessible Investment.</span>
                    </h2>

                    <div className="flex flex-col items-center justify-center gap-2 mb-8">
                        <p className="text-surface-dark-muted text-lg">Website packages starting from</p>
                        <motion.span
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3, type: "spring" }}
                            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60"
                        >
                            ₹8,000
                        </motion.span>
                        <p className="text-sm text-surface-dark-muted font-medium mt-1">
                            Basic Starter • 1-page landing website
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/pricing"
                            className="w-full sm:w-auto px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group"
                        >
                            View Plans
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a
                            href="#contact"
                            className="w-full sm:w-auto px-8 py-3 bg-surface-dark-foreground/5 text-white font-bold rounded-xl border border-white/10 hover:bg-surface-dark-foreground/10 transition-all"
                        >
                            Request a Quote
                        </a>
                    </div>

                    <p className="mt-6 text-sm text-surface-dark-muted">
                        No hidden fees. 100% transparent.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default HomePricing;
