import { motion } from "framer-motion";
import { CheckCircle2, Home, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ThankYou = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black text-white selection:bg-primary/30">
            <Helmet>
                <title>Thank You | Artifex Web - Dental Website Excellence</title>
                <meta name="description" content="Thank you for reaching out to Artifex Web. We have received your inquiry and will get back to you shortly." />
                <meta name="robots" content="noindex" />
            </Helmet>

            <Navbar />

            <main className="pt-32 pb-24 relative overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-primary/20 blur-[120px] rounded-full -z-10 opacity-30 pointer-events-none" />

                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }}
                        className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-primary/20"
                    >
                        <CheckCircle2 size={48} className="text-primary" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6 max-w-2xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-medium tracking-tight">
                            Thank You for <span className="font-serif italic text-primary">Trusting Us!</span>
                        </h1>
                        <p className="text-lg text-white/60 leading-relaxed">
                            Your inquiry has been received. Our team of dental design experts will review your request and get back to you within 24 hours to discuss your clinic's digital growth.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                            <button
                                onClick={() => navigate("/")}
                                className="group w-full sm:w-auto px-8 py-4 bg-white text-black rounded-xl font-medium flex items-center justify-center gap-2 transition-all hover:bg-gray-200"
                            >
                                <Home size={18} />
                                Back to Homepage
                            </button>
                            <a
                                href="https://wa.me/918002599534"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto px-8 py-4 bg-primary/10 border border-primary/20 text-primary rounded-xl font-medium flex items-center justify-center gap-2 transition-all hover:bg-primary/20"
                            >
                                Connect on WhatsApp
                                <ArrowRight size={18} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ThankYou;
