import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, BookOpen, Star } from "lucide-react";

const designs = [
    {
        id: 1,
        title: "Smile Bright",
        category: "Cosmetic Dentistry",
        image: "/dental-clinic-specialty.jpg",
        description: "Vibrant and welcoming interface for cosmetic specialists.",
        link: "https://luxury-cosmetic-dentist-website.vercel.app/"
    },
    {
        id: 2,
        title: "Minimal Dental",
        category: "Dental Clinic",
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop",
        description: "Clean, modern design focused on trust and patient care. Ideal for practices that value simplicity and clarity.",
        link: "https://minimal-dental-website.vercel.app/"
    },
    {
        id: 3,
        title: "Care Plus",
        category: "General Practice (SEO Friendly)",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
        description: "Professional layout suitable for multi-specialty clinics.",
        link: "https://local-seo-l4ki.vercel.app/"
    },
    {
        id: 4,
        title: "Pearly Multi-Location",
        category: "Multi-Clinic Group",
        image: "/multi-location-real.jpg",
        description: "Sophisticated design for dental groups with multiple locations and complex SEO needs.",
        link: "https://multi-locationn.vercel.app/"
    },
    {
        id: 5,
        title: "Personal Dentist",
        category: "Personal Branding",
        image: "/personal-dentist-v2.jpg",
        description: "Elegant personal website design for individual dental practitioners.",
        link: "https://personal-d-entist-website.vercel.app/"
    },
    {
        id: 6,
        title: "Elite Smiles",
        category: "Luxury Dental Spa",
        image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2070&auto=format&fit=crop",
        description: "High-end aesthetic for premium dental services.",
        link: "https://behance-unique.vercel.app/"
    },
    {
        id: 7,
        title: "Dental Education Hub",
        category: "Content & Resources",
        image: "/education-hub.jpg",
        description: "Educational focused layout tailored for content marketing and building authority.",
        link: "https://content-rich.vercel.app/"
    }
];

const DesignCatalogue = () => {
    const featuredDesign = designs[0];
    const gridDesigns = designs.slice(1);

    return (
        <div className="min-h-screen bg-background">
            <Helmet>
                <title>Design Catalogue | Dental Website Examples - Artifex Web</title>
                <meta name="description" content="Explore our library of premium dental website templates and case studies. Modern, mobile-first designs crafted for Indian dental practices." />
                <link rel="canonical" href="https://artifexweb.in/design-catalogue" />
            </Helmet>
            <Navbar />

            <main className="pt-24 pb-16">
                <section className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                            Design Catalogue
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Explore our collection of premium, professionally crafted designs tailored for dental and healthcare practices.
                        </p>
                    </motion.div>

                    {/* Featured Design Section */}
                    {featuredDesign && (
                        <div className="mb-20">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                            >
                                <div className="flex items-center gap-2 mb-4">
                                    <Star className="text-primary fill-primary" size={20} />
                                    <span className="text-sm font-bold uppercase tracking-wider text-primary">Featured Design</span>
                                </div>
                                <div className="group relative rounded-3xl overflow-hidden border border-border bg-card shadow-lg hover:shadow-2xl transition-all duration-300">
                                    <div className="grid md:grid-cols-2 gap-0">
                                        <div className="relative h-64 md:h-auto min-h-[300px] md:min-h-[450px] overflow-hidden">
                                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                                            {featuredDesign.image ? (
                                                <img
                                                    src={featuredDesign.image}
                                                    alt={featuredDesign.title}
                                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-secondary/30 flex items-center justify-center">
                                                    <BookOpen className="w-20 h-20 text-muted-foreground/50" />
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-8 md:p-12 flex flex-col justify-center">
                                            <div className="text-sm font-medium text-primary mb-3">
                                                {featuredDesign.category}
                                            </div>
                                            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-card-foreground">
                                                {featuredDesign.title}
                                            </h3>
                                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                                {featuredDesign.description}
                                            </p>
                                            <a
                                                href={featuredDesign.link}
                                                target={featuredDesign.link.startsWith("http") ? "_blank" : "_self"}
                                                rel={featuredDesign.link.startsWith("http") ? "noopener noreferrer" : ""}
                                                className="inline-flex w-fit items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 transition-all hover:gap-3 shadow-md border border-primary/20"
                                            >
                                                View Live Demo <ArrowRight size={18} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}

                    {/* Standard Grid Layout */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {gridDesigns.map((design, index) => (
                            <motion.div
                                key={design.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group flex flex-col rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-300"
                            >
                                <div className="relative h-60 overflow-hidden">
                                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                                    {design.image ? (
                                        <img
                                            src={design.image}
                                            alt={design.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-secondary/30 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-700">
                                            <BookOpen className="w-16 h-16 text-muted-foreground/50" />
                                        </div>
                                    )}
                                    <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm text-foreground">
                                            <ExternalLink size={20} />
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                                        {design.category}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                                        {design.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
                                        {design.description}
                                    </p>

                                    <a
                                        href={design.link}
                                        target={design.link.startsWith("http") ? "_blank" : "_self"}
                                        rel={design.link.startsWith("http") ? "noopener noreferrer" : ""}
                                        className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors hover:gap-3 mt-auto"
                                    >
                                        View Demo <ArrowRight size={16} />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default DesignCatalogue;
