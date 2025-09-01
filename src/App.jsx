import React, { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [cardRotate, setCardRotate] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    const { offsetWidth, offsetHeight } = e.currentTarget;
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;

    const rotateY = ((x / offsetWidth) - 0.5) * 30; // left-right tilt
    const rotateX = ((y / offsetHeight) - 0.5) * -30; // up-down tilt

    setCardRotate({ rotateX, rotateY });
  };

  const resetRotation = () => {
    setCardRotate({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#2F184B] relative overflow-hidden">
      
      {/* Floating background circles */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 rounded-full bg-[#E6E6FA] opacity-20 blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-[#D8A7D7] opacity-20 blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Text */}
      <h1 className="text-4xl md:text-6xl font-bold text-[#DFFFE0] drop-shadow-lg text-center">
        Welcome to the one whom you waiting for.
      </h1>
      <p className="mt-4 text-lg md:text-2xl text-[#FADADD] text-center max-w-xl">
        Because love deserves clarity.
      </p>

      {/* Floating Glassmorphic Card */}
      <motion.div
        className="mt-12 w-72 h-44 rounded-2xl bg-[#E6E6FA]/20 backdrop-blur-xl border border-[#FADADD]/40 shadow-2xl flex items-center justify-center cursor-pointer"
        style={{
          transform: `perspective(1000px) rotateX(${cardRotate.rotateX}deg) rotateY(${cardRotate.rotateY}deg)`,
          transition: "transform 0.2s ease",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetRotation}
      >
        <p className="text-[#DFFFE0] font-semibold text-lg">✨ Love Clarity Card</p>
      </motion.div>

      {/* CTA Button */}
      <button className="mt-10 px-6 py-3 rounded-2xl bg-[#D8A7D7] text-[#2F184B] font-semibold shadow-lg hover:bg-[#FADADD] transition">
        Get Started
      </button>
    </div>
  );
}

