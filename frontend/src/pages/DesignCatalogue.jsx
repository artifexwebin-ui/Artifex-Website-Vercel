import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const designs = [
    {
        id: 1,
        title: "Cosmic Smile",
        category: "Modern / Dark",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2400&auto=format&fit=crop", // Placeholder
        link: "#"
    },
    {
        id: 2,
        title: "Nature's Touch",
        category: "Organic / Light",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop", // Placeholder
        link: "#"
    },
    {
        id: 3,
        title: "Urban Dental",
        category: "Minimalist",
        image: "https://images.unsplash.com/photo-1600573472591-ee6c5087a329?q=80&w=2400&auto=format&fit=crop", // Placeholder
        link: "#"
    },
    {
        id: 4,
        title: "Pediatric Care",
        category: "Playful / Warm",
        image: "https://images.unsplash.com/photo-1600566753127-6cc75ad1f6cf?q=80&w=2400&auto=format&fit=crop", // Placeholder
        link: "#"
    }
];

const DesignCatalogue = () => {
    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-white/20">
            <Navbar />

            <section className="pt-32 pb-20 relative overflow-hidden">
                {/* Background Blobs for Atmosphere */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-24"
                    >
                        <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">
                            Design <span className="font-serif italic text-white/80">Catalogue</span>
                        </h1>
                        <p className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto font-light">
                            Explore our curated collection of premium website templates designed for dental excellence.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {designs.map((design, index) => (
                            <motion.div
                                key={design.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl hover:bg-white/[0.04] transition-all duration-500"
                            >
                                {/* Glassmorphic Layer */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

                                {/* Image Section */}
                                <div className="aspect-[16/10] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                    <img
                                        src={design.image}
                                        alt={design.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="p-8 relative">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <p className="text-white/40 text-xs font-medium uppercase tracking-widest mb-2">
                                                {design.category}
                                            </p>
                                            <h3 className="text-2xl font-medium text-white group-hover:text-white/90 transition-colors">
                                                {design.title}
                                            </h3>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center text-white/60 group-hover:bg-white text-black transition-all duration-300 transform group-hover:rotate-[-45deg]">
                                            <ArrowRight size={18} />
                                        </div>
                                    </div>

                                    <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent my-6" />

                                    <a
                                        href={design.link}
                                        className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
                                    >
                                        Live Preview <ExternalLink size={14} />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CTA />
            <Footer />
        </div>
    );
};

export default DesignCatalogue;
