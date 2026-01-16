import { motion, AnimatePresence } from "framer-motion";
import { X, Globe, Zap, Users, ShieldCheck } from "lucide-react";

const AboutModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-4xl bg-surface-dark border border-surface-dark-foreground/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-20 p-2 text-surface-dark-foreground/50 hover:text-surface-dark-foreground bg-black/20 hover:bg-black/40 rounded-full transition-all"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Left Side: Visual / Branding */}
                        <div className="md:w-2/5 relative p-8 flex flex-col justify-between overflow-hidden group">
                            {/* Animated Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-surface-dark-foreground/10 to-surface-dark z-0" />
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/30 transition-all duration-700" />

                            <div className="relative z-10">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <h3 className="text-sm font-bold tracking-widest text-emerald-500 uppercase mb-2">Who We Are</h3>
                                    <h2 className="text-4xl font-serif text-white leading-tight mb-4">
                                        Crafting <br />
                                        <span className="text-surface-dark-muted italic">Digital Excellence</span>
                                    </h2>
                                </motion.div>
                            </div>

                            <div className="relative z-10 mt-12 md:mt-0">
                                <div className="flex gap-4 mb-8">
                                    <div className="glass-card p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm">
                                        <span className="block text-2xl font-bold text-white">100%</span>
                                        <span className="text-xs text-surface-dark-muted">Commitment</span>
                                    </div>
                                    <div className="glass-card p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm">
                                        <span className="block text-2xl font-bold text-white">24/7</span>
                                        <span className="text-xs text-surface-dark-muted">Support</span>
                                    </div>
                                </div>
                                <p className="text-sm text-surface-dark-muted/80">
                                    © 2026 Artifex Web. All rights reserved.
                                </p>
                            </div>
                        </div>

                        {/* Right Side: Content */}
                        <div className="md:w-3/5 p-8 md:p-12 overflow-y-auto bg-surface-dark/50">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="space-y-8"
                            >
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3">About Artifex</h3>
                                    <p className="text-surface-dark-muted leading-relaxed">
                                        Artifex Web is a premium digital agency tailored for healthcare professionals and forward-thinking businesses. We don't just build websites; we engineer digital ecosystems that build trust, attract patients, and streamline operations.
                                    </p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <FeatureItem
                                        icon={<Globe className="w-5 h-5 text-emerald-500" />}
                                        title="Global Standards"
                                        desc="World-class design tailored for local impact."
                                    />
                                    <FeatureItem
                                        icon={<Zap className="w-5 h-5 text-emerald-500" />}
                                        title="High Performance"
                                        desc="Lightning-fast load times and smooth interactions."
                                    />
                                    <FeatureItem
                                        icon={<ShieldCheck className="w-5 h-5 text-emerald-500" />}
                                        title="Security First"
                                        desc="Enterprise-grade protection for your data."
                                    />
                                    <FeatureItem
                                        icon={<Users className="w-5 h-5 text-emerald-500" />}
                                        title="Patient Centric"
                                        desc="UX designed to convert visitors into appointments."
                                    />
                                </div>

                                <div className="pt-6 border-t border-white/5">
                                    <p className="text-sm text-surface-dark-muted mb-4">Ready to elevate your practice?</p>
                                    <button
                                        onClick={() => {
                                            onClose();
                                            window.location.href = "#contact";
                                        }}
                                        className="px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors flex items-center gap-2"
                                    >
                                        Let's Talk
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

const FeatureItem = ({ icon, title, desc }) => (
    <div className="flex flex-col gap-2">
        <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
            {icon}
        </div>
        <div>
            <h4 className="font-semibold text-white text-sm">{title}</h4>
            <p className="text-xs text-surface-dark-muted leading-relaxed">{desc}</p>
        </div>
    </div>
);

export default AboutModal;
