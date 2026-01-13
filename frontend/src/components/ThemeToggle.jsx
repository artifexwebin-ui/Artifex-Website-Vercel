import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Sun, Moon, Cloud, Star } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-2 sm:gap-4">
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={`relative w-16 h-8 rounded-full transition-all duration-500 border overflow-hidden ${isDark
          ? "bg-[#0f172a] border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.6),0_0_10px_rgba(255,255,255,0.4)] ring-2 ring-white/70"
          : "bg-[#e2e8f0] border-white/50 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]"
          }`}
        aria-label="Toggle theme"
      >
        {/* Background Decorations */}
        <div className="absolute inset-0 flex items-center justify-between px-2 pt-0.5">
          <div className={`transition-all duration-500 ${isDark ? "opacity-0 scale-50" : "opacity-100 scale-100"}`}>
            <Cloud size={12} className="text-white fill-white" />
          </div>
          <div className={`transition-all duration-500 ${isDark ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}>
            <div className="relative">
              <Star size={8} className="text-white fill-white absolute -top-1 -right-1 animate-pulse" />
              <Star size={5} className="text-white/50 fill-white/50 absolute top-2 right-1" />
            </div>
          </div>
        </div>

        {/* Sliding Knob */}
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className={`relative z-10 w-6 h-6 rounded-full shadow-lg flex items-center justify-center mx-1 ${isDark
            ? "ml-auto bg-white text-slate-900 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            : "bg-white text-amber-500 shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
            }`}
        >
          {isDark ? (
            <Moon size={14} className="fill-current" />
          ) : (
            <Sun size={14} className="fill-current" />
          )}
        </motion.div>
      </button>
    </div>
  );
};

export default ThemeToggle;
