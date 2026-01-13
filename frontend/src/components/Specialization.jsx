import { motion } from "framer-motion";
import { ArrowRight, Stethoscope, Building2, GraduationCap } from "lucide-react";

const industries = [
    {
        icon: Stethoscope,
        title: "Dentists & Dental Clinics",
        description: "Patient-focused websites that build trust and drive appointments.",
        highlight: true,
        link: "https://minimal-dental-website.vercel.app/"
    },
    {
        icon: Building2,
        title: "Healthcare Clinics",
        description: "Professional digital presence for medical centers and specialists.",
        highlight: false,
        link: "#"
    },
    {
        icon: GraduationCap,
        title: "Coaching Institutes",
        description: "Engaging platforms for education providers and training centers.",
        highlight: false,
        link: "#"
    }
];

const Specialization = () => {
    return (
        <section className="py-24 bg-surface-dark relative overflow-hidden">
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

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                    {industries.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`p-8 rounded-2xl border transition-all duration-300 group ${item.highlight
                                ? "bg-surface-dark-foreground text-surface-dark border-surface-dark-foreground shadow-xl hover:-translate-y-1"
                                : "bg-surface-dark/50 border-surface-dark-muted/20 text-surface-dark-foreground hover:border-surface-dark-foreground/50 hover:bg-surface-dark/80"
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
                                <a
                                    href={item.link}
                                    target={item.link.startsWith("http") ? "_blank" : "_self"}
                                    rel={item.link.startsWith("http") ? "noopener noreferrer" : ""}
                                    className="inline-flex items-center gap-2 text-sm font-bold hover:gap-3 transition-all"
                                >
                                    Learn More <ArrowRight size={16} />
                                </a>
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
