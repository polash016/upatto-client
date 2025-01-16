"use client";
import { motion } from "framer-motion";

export default function LoadingScreen({ setIsLoading }) {
  return (
    <motion.div
      className="fixed inset-0 bg-white z-50 flex justify-center items-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      onAnimationComplete={() => setIsLoading(false)}
    >
      <motion.div
        className="w-0.5 bg-black"
        initial={{ height: 0 }}
        animate={{ height: "300px" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
