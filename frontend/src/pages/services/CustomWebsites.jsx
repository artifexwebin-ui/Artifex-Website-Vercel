import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CustomWebsites = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20 bg-surface-dark relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-primary text-sm uppercase tracking-widest mb-4 block"
                        >
                            Service
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-medium text-surface-dark-foreground mb-6"
                        >
                            Custom <span className="font-serif italic">Websites</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-surface-dark-muted text-xl max-w-2xl mx-auto mb-10"
                        >
                            Tailor-made digital experiences designed to convert visitors into loyal customers.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Why Go Custom?</h2>
                            <p className="text-muted-foreground text-lg mb-8">
                                Templates have limits. Your brand doesn't. We build websites from the ground up to ensure they align perfectly with your business goals and performance needs.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Unique design that stands out",
                                    "Lightning fast performance",
                                    "SEO optimized architecture",
                                    "Scalable as you grow",
                                    "Seamless mobile experience"
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <Check size={14} />
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-surface-dark rounded-3xl p-8 aspect-square flex items-center justify-center">
                            {/* Placeholder for visual/graphic */}
                            <div className="text-surface-dark-muted">Visual Placeholder</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-24 bg-surface-dark/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Our Process</h2>
                        <p className="text-muted-foreground w-full max-w-xl mx-auto">From concept to launch, we handle everything.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Discovery", desc: "Understanding your goals and audience." },
                            { step: "02", title: "Design", desc: "Crafting the visual identity and UI." },
                            { step: "03", title: "Development", desc: "Building with clean, modern code." },
                            { step: "04", title: "Launch", desc: "Testing, optimization, and go-live." }
                        ].map((item) => (
                            <div key={item.step} className="bg-background p-8 rounded-2xl shadow-sm">
                                <span className="text-4xl font-serif italic text-primary/20 mb-4 block">{item.step}</span>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-muted-foreground text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
            <Footer />
        </div>
    );
};

export default CustomWebsites;
