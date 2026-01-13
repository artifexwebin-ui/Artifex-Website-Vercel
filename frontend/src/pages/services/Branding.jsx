import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const Branding = () => {
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
                            Brand <span className="font-serif italic">Identity</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-surface-dark-muted text-xl max-w-2xl mx-auto mb-10"
                        >
                            Defining your visual voice in a crowded marketplace.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">More Than a Logo</h2>
                            <p className="text-muted-foreground text-lg mb-8">
                                Your brand is your story. We help you tell it through cohesive visual systems, tone of voice, and strategic positioning.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Logo design & variations",
                                    "Color palette & typography",
                                    "Brand guidelines",
                                    "Social media assets",
                                    "Marketing materials"
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
                            <div className="text-surface-dark-muted">Brand Guidelines Preview</div>
                        </div>
                    </div>
                </div>
            </section>

            <CTA />
            <Footer />
        </div>
    );
};

export default Branding;
