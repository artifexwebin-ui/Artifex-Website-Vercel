import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import SuccessModal from "./SuccessModal";

const PricingEnquiryModal = ({ isOpen, onClose, selectedPlan }) => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        plan: selectedPlan || "Custom Enterprise"
    });

    useEffect(() => {
        if (selectedPlan) {
            setFormData(prev => ({ ...prev, plan: selectedPlan }));
        }
    }, [selectedPlan]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name.trim() || !formData.email.trim()) {
            toast({
                title: "Missing Information",
                description: "Please fill in all required fields.",
                variant: "destructive"
            });
            return;
        }

        setIsSubmitting(true);

        try {
            // Enhanced payload to include the specific plan
            const payload = {
                ...formData,
                subject: `New Enquiry for ${formData.plan} Plan`,
                projectType: "Website Design", // Defaulting for context
                message: `Plan Interested: ${formData.plan}\n\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`
            };

            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5001';
            // Sanitize: ensure https:// and remove trailing slashes
            const cleanUrl = apiUrl.replace(/\/+$/, "");
            const baseUrl = cleanUrl.startsWith('http') ? cleanUrl : `https://${cleanUrl}`;

            console.log("🚀 Calling API:", `${baseUrl}/send-email`);

            const [response] = await Promise.all([
                fetch(`${baseUrl}/send-email`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                }),
                new Promise(resolve => setTimeout(resolve, 1500))
            ]);

            const data = await response.json();

            if (data.success) {
                setShowSuccess(true);
                setFormData({ name: "", email: "", phone: "", message: "", plan: selectedPlan || "Custom Enterprise" });
            } else {
                throw new Error(data.message || "Failed to send message");
            }
        } catch (error) {
            console.error("Submission Error:", error);
            toast({
                title: "Transmission Failed",
                description: "We couldn't reach the server. Please try again later.",
                variant: "destructive"
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
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
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-2xl bg-surface-dark border border-surface-dark-foreground/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
                        >
                            {/* Header */}
                            <div className="p-6 md:p-8 border-b border-white/5 flex justify-between items-center bg-surface-dark-foreground/5">
                                <div>
                                    <h3 className="text-xl font-medium text-white">
                                        Enquire about <span className="text-emerald-400 font-serif italic">{formData.plan}</span>
                                    </h3>
                                    <p className="text-sm text-surface-dark-muted mt-1">
                                        Fill out the form below and we'll get back to you shortly.
                                    </p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 text-surface-dark-foreground/50 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Scrollable Content */}
                            <div className="p-6 md:p-8 overflow-y-auto">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium text-surface-dark-foreground">
                                                Name <span className="text-red-500">*</span>
                                            </label>
                                            <Input
                                                id="name"
                                                name="name"
                                                placeholder="Dr. John Doe"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="h-12 bg-surface-dark-foreground/5 border-surface-dark-foreground/10 focus:border-surface-dark-foreground/30 transition-all font-light"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium text-surface-dark-foreground">
                                                Email <span className="text-red-500">*</span>
                                            </label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="doctor@example.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="h-12 bg-surface-dark-foreground/5 border-surface-dark-foreground/10 focus:border-surface-dark-foreground/30 transition-all font-light"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium text-surface-dark-foreground">
                                            Phone Number <span className="text-surface-dark-muted font-normal">(Optional)</span>
                                        </label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            placeholder="+91 98765 43210"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="h-12 bg-surface-dark-foreground/5 border-surface-dark-foreground/10 focus:border-surface-dark-foreground/30 transition-all font-light"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="plan" className="text-sm font-medium text-surface-dark-foreground">
                                            Selected Plan
                                        </label>
                                        <Input
                                            id="plan"
                                            name="plan"
                                            value={formData.plan}
                                            readOnly
                                            className="h-12 bg-surface-dark-foreground/5 border-surface-dark-foreground/10 text-emerald-400 font-medium cursor-not-allowed opacity-80"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-surface-dark-foreground">
                                            Additional Details <span className="text-surface-dark-muted font-normal">(Optional)</span>
                                        </label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Tell us about your clinic..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            className="resize-none bg-surface-dark-foreground/5 border-surface-dark-foreground/10 focus:border-surface-dark-foreground/30 transition-all font-light pt-4"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full h-14 text-base font-bold rounded-xl bg-surface-dark-foreground text-surface-dark hover:bg-surface-dark-foreground/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                                    >
                                        {isSubmitting ? (
                                            "Processing..."
                                        ) : (
                                            <span className="flex items-center gap-2">
                                                Request Quote <ArrowRight className="w-4 h-4" />
                                            </span>
                                        )}
                                    </Button>

                                    <p className="text-center text-xs text-surface-dark-muted">
                                        100% Secure. We never share your data.
                                    </p>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
            <SuccessModal isOpen={showSuccess} onClose={() => { setShowSuccess(false); onClose(); }} />
        </>
    );
};

export default PricingEnquiryModal;
