import { motion, AnimatePresence } from "framer-motion";
import { X, Rocket, Sparkles, Clock, ArrowRight } from "lucide-react";

const WorksModal = ({ isOpen, onClose }) => {
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
                        className="relative w-full max-w-lg bg-surface-dark border border-surface-dark-foreground/10 rounded-3xl overflow-hidden shadow-2xl p-8 text-center"
                    >
                        {/* Background Effects */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-20 p-2 text-surface-dark-foreground/50 hover:text-surface-dark-foreground bg-black/20 hover:bg-black/40 rounded-full transition-all"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Icon */}
                        <div className="relative z-10 mx-auto w-20 h-20 mb-6 bg-surface-dark-foreground/5 rounded-full flex items-center justify-center border border-surface-dark-foreground/10">
                            <Sparkles className="w-10 h-10 text-purple-400" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 space-y-4">
                            <h2 className="text-3xl font-serif text-white">
                                Masterpieces in <span className="text-surface-dark-muted italic">Production</span>
                            </h2>
                            <p className="text-surface-dark-muted leading-relaxed">
                                We are currently formatting case studies from our inaugural exclusive projects. We believe in showcasing nothing less than perfection.
                            </p>

                            <div className="flex items-center justify-center gap-2 py-2">
                                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-medium border border-purple-500/20 flex items-center gap-1">
                                    <Clock className="w-3 h-3" /> Coming Soon
                                </span>
                            </div>

                            <div className="pt-6 mt-2 border-t border-white/5">
                                <p className="text-sm text-white mb-4 font-medium">Want to be our next featured success story?</p>
                                <button
                                    onClick={() => {
                                        onClose();
                                        window.location.href = "#contact";
                                    }}
                                    className="w-full py-3.5 px-6 bg-surface-dark-foreground hover:bg-surface-dark-foreground/90 text-surface-dark font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
                                >
                                    Start Your Project <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default WorksModal;
