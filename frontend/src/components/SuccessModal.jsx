import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X } from "lucide-react";

const SuccessModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Card */}
                    <motion.div
                        initial={{ scale: 1.5, opacity: 0, y: 0 }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                            transition: {
                                type: "spring",
                                stiffness: 300,
                                damping: 25
                            }
                        }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="relative w-full max-w-md bg-surface-dark border border-surface-dark-foreground/10 rounded-3xl p-8 shadow-2xl overflow-hidden text-center"
                    >
                        {/* Background Glow */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-surface-dark-foreground/50 hover:text-surface-dark-foreground transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Icon */}
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            className="w-20 h-20 mx-auto bg-surface-dark-foreground/5 rounded-full flex items-center justify-center mb-6 border border-surface-dark-foreground/10"
                        >
                            <CheckCircle className="w-10 h-10 text-emerald-500" />
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <h2 className="text-2xl font-bold text-surface-dark-foreground mb-2">Message Sent! 🚀</h2>
                            <p className="text-surface-dark-muted text-lg leading-relaxed mb-6">
                                Message has been sent successfully.<br />
                                <span className="text-surface-dark-foreground font-medium">Check your email please 📧</span>
                            </p>

                            <button
                                onClick={onClose}
                                className="w-full py-3.5 px-6 bg-surface-dark-foreground hover:bg-surface-dark-foreground/90 text-surface-dark font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
                            >
                                Amazing!
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default SuccessModal;
