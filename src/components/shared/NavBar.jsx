// components/shared/NavBar.js
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar({ isScrolled }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ["ABOUT US", "PROJECTS", "MEDIA", "CONTACT US"];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0 }}
        className={`fixed w-full z-50 ${isScrolled ? "bg-white" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-8 py-6 flex gap-4 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              animate={{ opacity: isScrolled ? 1 : 0 }}
              className="flex items-center"
            >
              <span className="font-bold text-2xl">
                <span className="text-orange-500">U</span>
                <span>PATTO</span>
              </span>
            </motion.div>
          </Link>

          {isScrolled && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col space-y-1.5 ml-4"
            >
              <div className="w-8 h-0.5 bg-gray-800" />
              <div className="w-8 h-0.5 bg-gray-800" />
              <div className="w-8 h-0.5 bg-gray-800" />
            </button>
          )}
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-40 pt-24"
          >
            <div className="max-w-7xl mx-auto px-8">
              <div className="flex flex-col space-y-12">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-xl text-gray-800 cursor-pointer hover:text-gray-600"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
