import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Lock, FileText, CheckCircle } from "lucide-react";

import { useNavigate } from "react-router-dom";

const Terms = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 pb-12 bg-surface-dark relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-16 h-16 mx-auto bg-surface-dark-foreground/10 rounded-2xl flex items-center justify-center mb-6"
                    >
                        <Shield className="w-8 h-8 text-surface-dark-foreground" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-medium text-surface-dark-foreground mb-4"
                    >
                        Terms of Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-surface-dark-muted text-lg max-w-2xl mx-auto"
                    >
                        Transparency is our key policy. Before we begin our journey together, please take a moment to understand how we work.
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="grid gap-6">
                        {[
                            {
                                icon: CheckCircle,
                                title: "1. Acceptance of Terms",
                                content: "By engaging with Artifex Web for website design, development, or branding services, you agree to be bound by these terms. We believe in mutual respect and clear communication to deliver the best results."
                            },
                            {
                                icon: FileText,
                                title: "2. Services & Scope",
                                content: "We are committed to delivering high-quality digital products. The specific scope of work, timeline, and deliverables will be detailed in your custom proposal or contract. Any additional work outside this scope will be quoted separately."
                            },
                            {
                                icon: Lock,
                                title: "3. Payment & Pricing",
                                content: "To kickstart your project, we typically require a 50% upfront deposit. The remaining balance is due upon project completion and your satisfaction, before the final hand-off or launch."
                            },
                            {
                                icon: Shield,
                                title: "4. Intellectual Property",
                                content: "Upon full payment, you own 100% of the visual designs and content created for your project. We reserve the right to display the work in our portfolio to showcase our craftsmanship."
                            },
                            {
                                icon: FileText,
                                title: "5. Revisions",
                                content: "We want you to love your website. Our standard packages include up to 3 rounds of revisions to ensure everything is perfect. Major structural changes after approval may incur additional fees."
                            }
                        ].map((item, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                key={index}
                                className="p-8 rounded-2xl border border-border/40 hover:border-primary/20 bg-card hover:bg-muted/30 transition-all duration-300 md:flex gap-6"
                            >
                                <div className="shrink-0 mb-4 md:mb-0">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <item.icon className="w-6 h-6 text-primary" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed text-base">
                                        {item.content}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 p-8 bg-surface-dark rounded-3xl text-center">
                        <h3 className="text-2xl font-bold text-surface-dark-foreground mb-4">Still have questions?</h3>
                        <p className="text-surface-dark-muted mb-8">We're here to explain everything in plain English.</p>
                        <button
                            onClick={() => navigate("/#contact")}
                            className="inline-block px-8 py-3 bg-surface-dark-foreground text-surface-dark font-bold rounded-full hover:bg-surface-dark-foreground/90 transition-colors cursor-pointer"
                        >
                            Contact Support
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Terms;
