// components/HeroSection.tsx
"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function HeroSection() {
  const logoControls = useAnimation();
  const textControls = useAnimation();
  const dialogControls = useAnimation();

  useEffect(() => {
    // Initial animation sequence
    const sequence = async () => {
      // Step 1: Logo animation
      await logoControls.start({
        scale: 1,
        opacity: 1,
        transition: { duration: 1, ease: "easeOut" },
      });

      // Step 2: Company name reveal
      await textControls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" },
      });

      // Step 3: Dialog reveal
      await dialogControls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" },
      });
    };

    sequence();
  }, [logoControls, textControls, dialogControls]);

  return (
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Initial Animation (Logo or Shape) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={logoControls}
        className="mb-8" // Add margin-bottom to separate from the text
      >
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
          <span className="text-2xl font-bold text-black">Upatto</span>
        </div>
      </motion.div>

      {/* Company Name */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={textControls}
        className="text-6xl md:text-8xl font-bold text-white mb-4"
      >
        Company Name
      </motion.h1>

      {/* Dialog */}
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={dialogControls}
        className="text-xl md:text-2xl text-white/80"
      >
        Building modern and unique web experiences.
      </motion.p>
    </div>
  );
}
