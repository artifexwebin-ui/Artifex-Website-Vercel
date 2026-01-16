import { motion } from "framer-motion";
import { Calendar, Smartphone, Shield, Search, ArrowRight } from "lucide-react";
import dentalConceptImage from "../assets/dental_concept_artifex.png";

const features = [
    {
        icon: Calendar,
        title: "Appointment-focused",
        description: "Streamlined booking flow to convert visitors into patients."
    },
    {
        icon: Smartphone,
        title: "Mobile-first experience",
        description: "Flawless navigation on all devices for on-the-go patients."
    },
    {
        icon: Shield,
        title: "Trust-building sections",
        description: " prominently displayed reviews, credentials, and testimonials."
    },
    {
        icon: Search,
        title: "Local SEO–ready",
        description: "Optimized structure to help you rank in local search results."
    }
];

const DentistConcept = () => {
    return (
        <section className="py-24 bg-surface-dark relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Content Side */}
                    <div className="flex-1 w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-2 mb-6">
                                <span className="px-3 py-1 rounded-full bg-surface-dark-foreground/10 text-surface-dark-foreground text-xs font-medium uppercase tracking-wider">
                                    Concept / Example
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-medium text-surface-dark-foreground mb-6 leading-tight">
                                Built Specifically for <br />
                                <span className="font-serif italic text-primary">Dental Clinics</span>
                            </h2>

                            <p className="text-surface-dark-muted text-lg mb-10 leading-relaxed max-w-xl">
                                We understand the unique needs of dental practices. Our websites are designed to establish trust and make appointment scheduling effortless.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10 mb-10">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={feature.title}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                                        className="flex flex-col gap-3"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 rounded-lg bg-surface-dark-foreground/5 text-surface-dark-foreground">
                                                <feature.icon size={20} />
                                            </div>
                                            <h3 className="font-medium text-surface-dark-foreground">{feature.title}</h3>
                                        </div>
                                        <p className="text-sm text-surface-dark-muted pl-11">
                                            {feature.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                            <a
                                href="/design-catalogue"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-surface-dark-foreground text-surface-dark font-medium rounded-full hover:bg-surface-dark-foreground/90 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                View Dental Website Example
                                <ArrowRight size={18} />
                            </a>
                        </motion.div>
                    </div>

                    {/* Image Side */}
                    <div className="flex-1 w-full relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative rounded-2xl overflow-hidden shadow-2xl border border-surface-dark-muted/10 group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                            <img
                                src={dentalConceptImage}
                                alt="Dental Clinic Website Concept"
                                className="w-full h-auto object-cover"
                            />

                            <div className="absolute bottom-6 left-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 text-white">
                                <p className="font-medium text-sm">Example Layout: Modern & Conversational</p>
                            </div>
                        </motion.div>

                        {/* Decorative background blur */}
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl -z-10 pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DentistConcept;
