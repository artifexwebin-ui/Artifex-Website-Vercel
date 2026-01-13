import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
import { ArrowLeft, Rocket } from "lucide-react";
import { useMemo } from "react";

const StarField = () => {
  // Generate random stars for the background
  const stars = useMemo(() => {
    return Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#050510] flex flex-col relative overflow-hidden font-sans selection:bg-purple-500/30">
      <Navbar />

      {/* Space Background */}
      <StarField />

      {/* Nebula Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-900/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-900/10 rounded-full blur-[150px]" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-6 text-center">

        {/* Floating Astronaut Animation */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotate: [-5, 5, -5]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-[120px] md:text-[180px] mb-8 relative filter drop-shadow-2xl"
        >
          👨‍🚀
          <motion.div
            className="absolute -right-12 -top-12 text-4xl"
            animate={{
              y: [10, -10, 10],
              x: [-10, 10, -10],
              rotate: [0, 360],
              scale: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 20,
              repeat: Infinity
            }}
          >
            🛰️
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-4xl"
        >
          <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] mb-2">
            404
          </h1>

          <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-wide">
            Houston, We Have a Problem
          </h2>

          <p className="text-blue-100/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            The page you are looking for has drifted into a black hole. <br className="hidden md:block" />
            Let's get you back to solid ground before the oxygen runs out.
          </p>

          <div className="flex justify-center gap-6">
            <Link
              to="/"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium rounded-full overflow-hidden transition-all hover:bg-white/20 hover:scale-105 hover:border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <Rocket className="w-5 h-5 group-hover:-rotate-45 transition-transform duration-300" />
              Return directly to Earth
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="py-8 text-center relative z-10 border-t border-white/5 bg-black/20 backdrop-blur-sm">
        <p className="text-white/30 text-xs tracking-[0.2em] font-mono uppercase">
          Signal_Lost // Coordinates_Unknown // Artiflex_Studio
        </p>
      </div>
    </div>
  );
};

export default NotFound;
