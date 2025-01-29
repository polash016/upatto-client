"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Cover } from "../ui/cover";
import Image from "next/image";
import logo from "../../../public/upatto_logo3.png";
import logo2 from "../../../public/logo002.png";
import logo3 from "../../../public/logo004.png";
import logo4 from "../../../public/logo005.png";
import logo5 from "../../../public/logo006.png";
import logo6 from "../../../public/logo007.png";
import logo7 from "../../../public/logo008.png";

export default function NavTwo() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { label: "HOME", to: "/", position: { top: "30%", left: "35%" } },
    {
      label: "PROJECTS",
      to: "/projects-category",
      position: { top: "40%", left: "43%" },
    },
    { label: "MEDIA", to: "/media", position: { top: "48%", left: "72%" } },
    { label: "ABOUT US", to: "/about", position: { top: "60%", left: "58%" } },
  ];

  return (
    <>
      {/* Fixed Navbar */}
      <motion.nav
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        className="fixed w-full z-50 bg-black shadow-md"
      >
        <div className="max-w-7xl mx-auto px-8 py-3 flex gap-4 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div animate={{ opacity: 1 }} className="flex items-center">
              <Cover>
                {/* <h1 className="px-8 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 hover:from-pink-500 hover:to-yellow-500 transition-all duration-500">
                  Upatto
                </h1> */}
                <div className="px-8">
                  <Image
                    className="bg-transparent"
                    src={logo4}
                    alt="Logo"
                    width={150}
                    height={30}
                  />
                </div>
              </Cover>
            </motion.div>
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-auto flex flex-col space-y-1.5"
          >
            <div className="w-8 h-0.5 bg-white" />
            <div className="w-8 h-0.5 bg-white" />
            <div className="w-8 h-0.5 bg-white" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40 flex items-center justify-center"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-8 flex flex-col space-y-1.5"
            >
              <div className="w-8 h-0.5 bg-gray-800 rotate-45 transform translate-y-1" />
              <div className="w-8 h-0.5 bg-gray-800 -rotate-45 transform -translate-y-1" />
            </button>

            {/* Menu Items */}
            <div className="relative w-full h-full">
              {menuItems.map((item, index) => (
                <motion.a
                  href={item.to}
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  style={item.position}
                  className="absolute text-xl font-bold text-gray-500 cursor-pointer hover:text-gray-600 sborder-t sborder-b w-full py-4"
                >
                  <span className="border-l-4 border-l-gray-400 px-4 py-4">
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to Ensure Content Starts Below Navbar */}
      {/* <div className="h-24"></div> */}
    </>
  );
}
