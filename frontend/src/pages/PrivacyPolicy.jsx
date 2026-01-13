import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Lock, Eye, Database, Globe, Cookie, Shield } from "lucide-react";

import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
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
                        <Lock className="w-8 h-8 text-surface-dark-foreground" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-medium text-surface-dark-foreground mb-4"
                    >
                        Privacy Policy
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-surface-dark-muted text-lg max-w-2xl mx-auto"
                    >
                        Your privacy is non-negotiable. Here's how we protect and manage your data.
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="grid gap-6">
                        {[
                            {
                                icon: Eye,
                                title: "1. Information We Collect",
                                content: "We collect only what's necessary: your name, contact details, and project requirements when you fill out our forms. We do NOT buy or sell data from third parties."
                            },
                            {
                                icon: Database,
                                title: "2. How We Use Your Data",
                                content: "Your information is used strictly to communicate with you regarding your project, send proposals, and deliver the services you requested. No spam, ever."
                            },
                            {
                                icon: Shield,
                                title: "3. Data Security",
                                content: "We employ industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure."
                            },
                            {
                                icon: Globe,
                                title: "4. Third-Party Sharing",
                                content: "We do not share your personal data with anyone, except for trusted partners (like payment processors or hosting providers) necessary to deliver your specific services."
                            },
                            {
                                icon: Cookie,
                                title: "5. Cookies",
                                content: "Our website uses minimal cookies to improve your browsing experience and analyze site traffic. You can choose to disable cookies in your browser settings."
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

                    <div className="mt-20 p-8 border border-border rounded-3xl text-center bg-card/50">
                        <h3 className="text-2xl font-bold text-foreground mb-4">Privacy Concerns?</h3>
                        <p className="text-muted-foreground mb-8">Data protection officer contact: hello@artifexweb.in</p>
                        <button
                            onClick={() => navigate("/#contact")}
                            className="inline-block px-8 py-3 bg-surface-dark text-surface-dark-foreground font-bold rounded-full hover:bg-surface-dark/90 transition-colors cursor-pointer"
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

export default PrivacyPolicy;
