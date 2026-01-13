import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Line, Sphere, Stars, Html } from "@react-three/drei";
// import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import { useTheme } from "next-themes";

// --- Components ---

const GlowingGlobe = ({ isDark }) => {
    const globeRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (globeRef.current) {
            globeRef.current.rotation.y = t * 0.05; // Slow rotation
        }
    });

    return (
        <group ref={globeRef}>
            {/* 1. Main Physical Globe */}
            <Sphere args={[4.5, 64, 64]}>
                <meshPhysicalMaterial
                    color={isDark ? "#0f172a" : "#cbd5e1"}
                    emissive={isDark ? "#0891b2" : "#ffffff"}
                    emissiveIntensity={isDark ? 0.2 : 0}
                    roughness={0.2}
                    metalness={0.8}
                    clearcoat={0.1}
                    clearcoatRoughness={0.1}
                    transparent
                    opacity={isDark ? 0.9 : 0.6}
                    side={THREE.DoubleSide}
                />
            </Sphere>

            {/* 2. Wireframe Network Layer */}
            <Sphere args={[4.55, 64, 64]}>
                <meshBasicMaterial
                    color={isDark ? "#22d3ee" : "#64748b"} // Cyan-400 vs Slate-500
                    wireframe
                    transparent
                    opacity={isDark ? 0.15 : 0.1}
                />
            </Sphere>

            {/* 3. Glowing Connection Lines (Curves) */}
            <NetworkLines count={20} radius={4.6} color={isDark ? "#22d3ee" : "#3b82f6"} />


        </group>
    );
};

const NetworkLines = ({ count, radius, color }) => {
    const lines = useMemo(() => {
        const l = [];
        for (let i = 0; i < count; i++) {
            // Create random curve on sphere surface
            const p1 = new THREE.Vector3().setFromSphericalCoords(radius, Math.random() * Math.PI, Math.random() * Math.PI * 2);
            const p2 = new THREE.Vector3().setFromSphericalCoords(radius, Math.random() * Math.PI, Math.random() * Math.PI * 2);

            // Simple great circle interpolation (approx via Bezier for visual flare)
            const mid = p1.clone().add(p2).normalize().multiplyScalar(radius * 1.2); // Arch out
            const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
            const points = curve.getPoints(20);
            l.push(points);
        }
        return l;
    }, [count, radius]);

    return (
        <group>
            {lines.map((points, i) => (
                <Line
                    key={i}
                    points={points}
                    color={color}
                    opacity={0.4}
                    transparent
                    lineWidth={1}
                />
            ))}
        </group>
    );
};



const ParticleField = ({ isDark }) => {
    return (
        <Stars
            radius={50}
            depth={20}
            count={2000}
            factor={3}
            saturation={0}
            fade
            speed={0.5}
        />
    );
};

const Scene = ({ isDark }) => {
    const { viewport } = useThree();
    const isMobile = viewport.width < 10;

    // Scale & Position
    const scale = isMobile ? 0.6 : 1;
    const position = [0, isMobile ? 0 : -0.5, 0];

    return (
        <>
            <group position={position} scale={[scale, scale, scale]}>
                <GlowingGlobe isDark={isDark} />
            </group>
            <ParticleField isDark={isDark} />

            {/* Lighting */}
            <ambientLight intensity={isDark ? 0.2 : 0.8} />
            {/* Rim Light for drama */}
            <spotLight position={[-10, 10, -5]} intensity={isDark ? 2 : 0.5} color="#22d3ee" angle={0.5} penumbra={1} />
            <pointLight position={[10, 5, 10]} intensity={isDark ? 1 : 0.5} color="#f59e0b" />

            {/* Post-Processing */}
            {/* Post-Processing */}
            {/* <EffectComposer>
                <Bloom
                    luminanceThreshold={isDark ? 0.2 : 0.8}
                    luminanceSmoothing={0.9}
                    height={300}
                    intensity={isDark ? 1.5 : 0.5} // Subtle in light mode
                />
            </EffectComposer> */}
        </>
    );
};

const HeroBackground = () => {
    // Force dark mode for this specific section styling
    const isDark = true;
    // const { theme } = useTheme(); 
    // const isDark = theme === "dark" || theme === "system";

    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Base Background */}
            <div className={`absolute inset-0 transition-colors duration-700 ${isDark ? 'bg-[#020617]' : 'bg-slate-50'}`} />

            {/* Gradient Overlay for Text Readability */}
            <div className={`absolute inset-0 z-20 ${isDark
                ? 'bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617]'
                : 'bg-gradient-to-b from-white/80 via-transparent to-white/90'
                }`}
            />

            {/* Canvas */}
            <div className="absolute inset-0 z-10">
                <Canvas
                    camera={{ position: [0, 0, 14], fov: 45 }}
                    gl={{
                        antialias: false, // Post-processing handles AA usually, or disable for performance 
                        powerPreference: "high-performance",
                        alpha: true
                    }}
                    dpr={[1, 1.5]} // Limit pixel ratio for performance
                >
                    <Scene isDark={isDark} />
                </Canvas>
            </div>
        </div>
    );
};

export default HeroBackground;
