"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../../public/upatto_logo.jpeg";
import Image from "next/image";

export default function HeroSection() {
  const [isSpinning, setIsSpinning] = useState(true);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    // Show dialog after 5 seconds
    const dialogTimeout = setTimeout(() => {
      setShowDialog(true);
    }, 5000);

    return () => {
      clearTimeout(dialogTimeout);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent">
      {/* 360-degree Spinning Logo/Image */}
      <div
        style={{
          perspective: "1000px", // Add perspective for 3D effect
        }}
      >
        <motion.div
          animate={{
            rotateY: isSpinning ? 360 : 0, // Rotate around the Y-axis
          }}
          transition={{
            duration: 5, // Duration of one full rotation
            ease: "linear",
            repeat: Infinity, // Repeat indefinitely
          }}
          // className="w-32 h-32"
          style={{
            transformStyle: "preserve-3d", // Enable 3D transformations
            transformOrigin: "center", // Rotate around the center
          }}
        >
          <Image
            width={200}
            height={200}
            src={logo}
            alt="Logo"
            className="w-full h-full object-cover"
            style={{
              backfaceVisibility: "visible", // Ensure the back of the image is visible
            }}
          />
        </motion.div>
      </div>

      {/* Dialog/Title */}
      <AnimatePresence>
        {showDialog && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mt-8 text-center"
          >
            {/* <h1 className="text-4xl font-bold text-gray-800">
              Welcome to Upatto
            </h1> */}
            <p className="mt-2 text-lg text-gray-600">
              Building modern and unique web experiences.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
