import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star, Zap, Shield, Crown, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PricingEnquiryModal from "../components/PricingEnquiryModal";

const plans = [
    {
        name: "Basic Starter",
        tagline: "For New Clinics",
        price: "₹8,000 - ₹14,000",
        description: "A professional online landing page to establish your digital presence.",
        icon: Shield,
        maintenance: "₹1,000",
        features: [
            "Professional Landing Page (Single Page)",
            "Clinic Overview & Doctor Profile",
            "Mobile Responsive Design",
            "Direct Phone Call Button",
            "Google Maps Location Integration",
            "Basic Contact Form (Email Enquiries)",
            "Fast Loading Speed"
        ],
        buttonText: "Choose Basic",
        popular: false,
        gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
        name: "Standard Growth",
        tagline: "Most Popular",
        price: "₹15,000 - ₹21,000",
        description: "Enhanced features with WhatsApp integration to connect with patients instantly.",
        icon: Star,
        maintenance: "₹2,000",
        features: [
            "Everything in Basic Starter",
            "5-Page Complete Website",
            "WhatsApp Chat Integration (Direct Connect)",
            "Patient Testimonials Section",
            "Treatments & Services Showcase",
            "Social Media Links (Instagram/Facebook)",
            "Basic SEO Setup (Google My Business)"
        ],
        buttonText: "Choose Standard",
        popular: true,
        gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
        name: "Premium Excellence",
        tagline: "For Multi-Specialty",
        price: "₹22,000 - ₹30,000",
        description: "A complete digital ecosystem with advanced features and priority support.",
        icon: Crown,
        maintenance: "₹4,000",
        features: [
            "Everything in Standard Growth",
            "Smile Makeover Gallery (Before/After)",
            "Online Appointment Booking System",
            "Advanced SEO & Competitor Alignment",
            "Blog Section for Dental Health Tips",
            "Payment Gateway Integration",
            "Fast Response Support",
            "1 Month Free Support"
        ],
        buttonText: "Choose Premium",
        popular: false,
        gradient: "from-amber-500/20 to-orange-500/20"
    }
];

const Pricing = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handlePlanSelect = (planName) => {
        setSelectedPlan(planName);
        setIsModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-black text-foreground font-sans selection:bg-primary/30">
            <Helmet>
                <title>Pricing Plans | Artifex Web - Dental Website Design India</title>
                <meta name="description" content="Affordable dental website design packages in India starting at ₹8,000. Includes SEO, WhatsApp booking, and mobile responsiveness." />
                <link rel="canonical" href="https://artifexweb.in/pricing" />
            </Helmet>
            <Navbar />

            <main className="pt-32 pb-24 relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/20 blur-[120px] rounded-full -z-10 opacity-30 pointer-events-none" />

                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-20 space-y-4"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium tracking-wide text-white/80 backdrop-blur-md">
                            Simple, Transparent Pricing
                        </span>
                        <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white">
                            Invest in Your <span className="font-serif italic text-primary">Clinic's Growth</span>
                        </h1>
                        <p className="text-lg text-white/60 max-w-2xl mx-auto">
                            Packages tailored specifically for Dentists in India. No hidden fees, just results.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative p-8 rounded-3xl border backdrop-blur-xl flex flex-col h-full group transition-all duration-500 hover:-translate-y-2
                  ${plan.popular
                                        ? "bg-white/10 border-white/20 shadow-2xl shadow-primary/10"
                                        : "bg-surface-dark/40 border-white/5 hover:bg-surface-dark/60 hover:border-white/10"
                                    }
                `}
                            >
                                {/* Popular Badge */}
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                                        Recommended
                                    </div>
                                )}

                                {/* Header */}
                                <div className="mb-8 space-y-4">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${plan.gradient} mb-6`}>
                                        <plan.icon size={28} className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-white mb-1">{plan.name}</h3>
                                        <p className="text-sm text-white/50">{plan.tagline}</p>
                                    </div>
                                    <div>
                                        <div className="flex items-baseline flex-wrap gap-1">
                                            <span className="text-2xl md:text-3xl font-bold text-white">{plan.price}</span>
                                            <span className="text-white/40 text-sm">/project</span>
                                        </div>
                                        <p className="text-primary/80 text-xs mt-2 font-medium">
                                            + Maintenance: {plan.maintenance}/mo <span className="text-white/40 font-normal">(or 10%)</span>
                                        </p>
                                    </div>
                                    <p className="text-white/70 text-sm leading-relaxed border-t border-white/10 pt-4">
                                        {plan.description}
                                    </p>
                                </div>

                                {/* Features List */}
                                <div className="flex-1 space-y-4 mb-10">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3 text-sm text-white/80 group-hover:text-white transition-colors">
                                            <div className="mt-0.5 min-w-[18px]">
                                                <Check size={16} className="text-primary" />
                                            </div>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Action Button */}
                                <button
                                    onClick={() => handlePlanSelect(plan.name)}
                                    className={`w-full py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-300
                    ${plan.popular
                                            ? "bg-white text-black hover:bg-gray-200 shadow-lg shadow-white/10"
                                            : "bg-white/5 text-white hover:bg-white/10 border border-white/5"
                                        }
                  `}
                                >
                                    {plan.buttonText}
                                    <ArrowRight size={18} />
                                </button>

                                {/* Subtle Gradient Glow */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none rounded-3xl`} />
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <p className="text-white/50 mb-6">Need a custom enterprise solution?</p>
                        <button
                            onClick={() => handlePlanSelect("Custom Enterprise")}
                            className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5"
                        >
                            Contact our sales team
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
            <PricingEnquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                selectedPlan={selectedPlan}
            />
        </div>
    );
};

export default Pricing;
