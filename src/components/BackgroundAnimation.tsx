"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function BackgroundAnimation() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const opacity = useTransform(scrollY, [0, 300], [0.8, 0.3]);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#030014]/90">
      {/* Floating Gradient Orbs */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl animate-float-slow"
        style={{
          background: "linear-gradient(to right, #FF0080, #7928CA)",
          top: "30%",
          left: "25%",
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl animate-float-slow-reverse"
        style={{
          background: "linear-gradient(to right, #7928CA, #FF0080)",
          top: "60%",
          left: "75%",
        }}
      />

      {/* Animated Stars */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.3 + 0.1,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Parallax Grid Lines */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: y1, opacity }}
      >
        <div className="absolute inset-0 bg-grid-white/[0.01] bg-[length:50px_50px]" />
      </motion.div>

      {/* Floating Particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Gradient Overlays */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"
        style={{ opacity }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-background/90 via-transparent to-background/90"
        style={{ y: y2 }}
      />
    </div>
  );
}
