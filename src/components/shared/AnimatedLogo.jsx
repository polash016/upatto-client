"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function SquareAnimation({ onAnimationComplete }) {
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    if (animationStage === 2) {
      const timer = setTimeout(() => {
        setAnimationStage(3);
      }, 1000); // Wait 1 second before moving to navbar
      return () => clearTimeout(timer);
    }
    if (animationStage === 3) {
      const timer = setTimeout(() => {
        onAnimationComplete();
      }, 2000); // Wait 2 seconds for move animation before completing
      return () => clearTimeout(timer);
    }
  }, [animationStage, onAnimationComplete]);

  const containerVariants = {
    center: { x: 0, y: 0, scale: 1 },
    topLeft: { x: "-50vw", y: "-44vh", scale: 0.5 },
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center"
      initial="center"
      animate={animationStage === 3 ? "topLeft" : "center"}
      variants={containerVariants}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <motion.div
        className="relative w-[400px] h-[400px]"
        animate={{ opacity: animationStage === 3 ? 0 : 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {/* Square Animation */}
        <div className="absolute w-[30px] h-[30px] top-[140px] left-[185px]">
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-black"
            initial={{ width: "40px" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, ease: "linear" }}
          />
          <motion.div
            className="absolute top-0 left-0 w-[2px] bg-black"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1, ease: "linear", delay: 1 }}
          />
          <motion.div
            className="absolute top-0 left-0 h-[2px] bg-black"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, ease: "linear", delay: 2 }}
          />
          <motion.div
            className="absolute top-0 right-0 w-[2px] bg-black"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1, ease: "linear", delay: 3 }}
          />
        </div>

        {/* Images */}
        <motion.img
          src="https://res.cloudinary.com/daa4x7pfh/image/upload/v1738150065/img1_g4bczj.png"
          alt="Animation Image 1"
          className="absolute w-[90px] h-[120px] top-[100px] left-[132px]"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 4.5 }}
        />
        <motion.img
          src="https://res.cloudinary.com/daa4x7pfh/image/upload/v1738150066/img2_dlk8ug.png"
          alt="Animation Image 2"
          className="absolute w-[90px] h-[120px] top-[90px] right-[95px]"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 4 }}
        />
        <motion.img
          src="https://res.cloudinary.com/daa4x7pfh/image/upload/v1738150066/img3_a13tp5.png"
          alt="Animation Image 3"
          className="absolute w-[90px] top-[180px] right-[95px]"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 5 }}
        />
        <motion.img
          src="https://res.cloudinary.com/daa4x7pfh/image/upload/v1738150066/img4_hirtvm.png"
          alt="Animation Image 4"
          className="absolute w-[240px] bottom-[60px] top-56 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 5 }}
          onAnimationComplete={() => setAnimationStage(2)}
        />
      </motion.div>
    </motion.div>
  );
}
