import { motion } from "framer-motion";
import { ArrowRight, Stethoscope, Building2, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
    {
        icon: Stethoscope,
        title: "Dentists & Dental Clinics",
        description: "Patient-focused websites that build trust and drive appointments.",
        highlight: true,
        link: "/design-catalogue"
    },
    {
        icon: Building2,
        title: "Hotels Website",
        description: "Premium digital experiences for hotels and hospitality businesses.",
        highlight: false,
        link: "#"
    },
    {
        icon: Activity,
        title: "Healthcare Clinics",
        description: "Professional digital presence for medical centers and specialists.",
        highlight: false,
        link: "#"
    }
];

const Specialization = () => {
    return (
        <section className="pt-0 pb-24 bg-surface-dark relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-surface-dark-foreground/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-medium text-surface-dark-foreground mb-4">
                        We Specialize In
                    </h2>
                    <div className="h-1 w-20 bg-surface-dark-foreground/20 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-[90rem] mx-auto mb-16">
                    {industries.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`p-10 md:p-12 rounded-3xl border transition-all duration-300 group h-full flex flex-col justify-between ${item.highlight
                                ? "bg-surface-dark-foreground text-surface-dark border-surface-dark-foreground shadow-2xl hover:-translate-y-2"
                                : "bg-surface-dark/40 backdrop-blur-sm border-surface-dark-muted/20 text-surface-dark-foreground hover:border-surface-dark-foreground/30 hover:bg-surface-dark/60"
                                }`}
                        >
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${item.highlight
                                ? "bg-surface-dark/10 text-surface-dark"
                                : "bg-surface-dark-foreground/10 text-surface-dark-foreground"
                                }`}>
                                <item.icon size={24} />
                            </div>

                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className={`mb-6 text-sm leading-relaxed ${item.highlight ? "text-surface-dark/80" : "text-surface-dark-muted"
                                }`}>
                                {item.description}
                            </p>

                            {item.highlight ? (
                                item.link.startsWith("http") ? (
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-bold hover:gap-3 transition-all"
                                    >
                                        Learn More <ArrowRight size={16} />
                                    </a>
                                ) : (
                                    <Link
                                        to={item.link}
                                        className="inline-flex items-center gap-2 text-sm font-bold hover:gap-3 transition-all"
                                    >
                                        View Examples <ArrowRight size={16} />
                                    </Link>
                                )
                            ) : (
                                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-surface-dark-foreground/5 text-surface-dark-muted">
                                    Coming Soon
                                </span>
                            )}
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center text-surface-dark-muted text-sm max-w-2xl mx-auto bg-surface-dark-foreground/5 py-3 px-6 rounded-full inline-block border border-surface-dark-muted/10"
                >
                    We’re starting with dental practices and expanding to other service-based businesses.
                </motion.p>
            </div>
        </section>
    );
};

export default Specialization;
