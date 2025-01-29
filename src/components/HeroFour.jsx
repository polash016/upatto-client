import React, { useState } from "react";
import { motion } from "framer-motion";

const HeroSectionLogo = () => {
  const [logoPosition, setLogoPosition] = useState("initial");

  return (
    <div className="relative h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
      {/* Logo Animation */}
      <motion.div
        className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold"
        initial={{ y: "-100%", opacity: 0 }} // Start off-screen at the top
        animate={logoPosition}
        variants={{
          initial: { y: "-100%", opacity: 0 }, // Start off-screen
          topToMiddle: { y: "0%", opacity: 1 }, // Move to the middle
          middleToTop: { y: "-100%", opacity: 1 }, // Move back to the top
          spin: { rotate: 360, y: "-100%", opacity: 1 }, // Spin at the top
          middleAgain: { y: "0%", opacity: 1 }, // Appear in the middle again
          moveToCorner: {
            y: "0%",
            x: "0%",
            opacity: 1,
            position: "absolute",
            top: 0,
            left: 0,
          }, // Move to the top-left corner
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
        onAnimationComplete={() => {
          if (logoPosition === "initial") {
            // After starting, move from top to middle
            setLogoPosition("topToMiddle");
          } else if (logoPosition === "topToMiddle") {
            // After moving to the middle, move back to the top
            setLogoPosition("middleToTop");
          } else if (logoPosition === "middleToTop") {
            // After moving back to the top, start spinning
            setLogoPosition("spin");
          } else if (logoPosition === "spin") {
            // After spinning, appear in the middle again
            setLogoPosition("middleAgain");
          } else if (logoPosition === "middleAgain") {
            // After appearing in the middle, move to the top-left corner
            setLogoPosition("moveToCorner");
          }
        }}
      >
        Logo
      </motion.div>

      {/* Dialog Box */}
      {logoPosition === "moveToCorner" && (
        <motion.div
          className="absolute top-24 left-8 bg-white p-4 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }} // Delay to appear after the logo reaches the top-left corner
        >
          <p className="text-sm">This is a dialog box!</p>
        </motion.div>
      )}
    </div>
  );
};

export default HeroSectionLogo;
