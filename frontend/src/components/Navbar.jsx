import { useState, useEffect } from "react";
import { Menu, X, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/logo.jpg";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Works", href: "#works" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToHome = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled
        ? "bg-surface-dark/80 backdrop-blur-md border-b border-white/5 py-4"
        : "bg-surface-dark/50 backdrop-blur-sm py-6"
        }`}
    >
      <div className="container mx-auto px-6 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" onClick={(e) => { e.preventDefault(); handleBackToHome(); }} className="flex items-center gap-2">
            <img src={logo} alt="Artifex Logo" className="w-10 h-10 rounded-full object-cover" />
            <span className={`font-medium text-lg transition-colors ${scrolled ? "text-surface-dark-foreground" : "text-white"}`}>
              Artifex
            </span>
          </a>

          {/* Desktop Navigation */}
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">
            {isHome ? (
              navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${scrolled ? "text-surface-dark-muted" : "text-white/80 hover:text-white"
                    }`}
                >
                  {link.name}
                </a>
              ))
            ) : (
              <button
                onClick={handleBackToHome}
                className={`flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-full transition-all hover:scale-105 ${scrolled
                  ? "bg-surface-dark-foreground text-surface-dark hover:bg-surface-dark-foreground/90"
                  : "bg-white text-black hover:bg-white/90"
                  }`}
              >
                <ArrowLeft size={18} />
                Back to Home
              </button>
            )}
          </div>

          {/* Desktop Actions - Right Aligned */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            {isHome && (
              <a
                href="#contact"
                className={`px-5 py-2.5 text-sm font-bold rounded-full transition-all hover:scale-105 ${scrolled
                  ? "bg-surface-dark-foreground text-surface-dark hover:bg-surface-dark-foreground/90"
                  : "bg-white text-black hover:bg-white/90"
                  }`}
              >
                Get Started
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={scrolled ? "text-surface-dark-foreground" : "text-white"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 bg-surface-dark/95 backdrop-blur-xl rounded-2xl border border-white/5 overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-2">
                {isHome ? (
                  <>
                    {navLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 text-surface-dark-muted hover:text-surface-dark-foreground hover:bg-white/5 rounded-xl transition-colors"
                      >
                        {link.name}
                      </a>
                    ))}
                    <a
                      href="#contact"
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 mt-2 bg-surface-dark-foreground text-surface-dark font-bold text-center rounded-xl hover:bg-surface-dark-foreground/90 transition-colors"
                    >
                      Get Started
                    </a>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      handleBackToHome();
                    }}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-surface-dark-foreground text-surface-dark font-bold rounded-xl hover:bg-surface-dark-foreground/90 transition-colors"
                  >
                    <ArrowLeft size={18} />
                    Back to Home
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
