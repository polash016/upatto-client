"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import logo from "../../../public/upatto_logo.jpeg";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Cover } from "../ui/cover";

export default function NavBar() {
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
      <motion.nav className={cn(` w-full z-50 bg-white}`)}>
        <div className="max-w-7xl mx-auto px-8 flex gap-4 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div className="flex items-center">
              <Cover>
                <h1 className="px-8 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 hover:from-pink-500 hover:to-yellow-500 transition-all duration-500">
                  Upatto
                </h1>
              </Cover>
            </motion.div>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-auto flex flex-col space-y-1.5"
          >
            <div className="w-8 h-0.5 bg-gray-800" />
            <div className="w-8 h-0.5 bg-gray-800" />
            <div className="w-8 h-0.5 bg-gray-800" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div className="fixed inset-0 bg-white z-40 flex items-center justify-center">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-8 flex flex-col space-y-1.5"
            >
              <div className="w-8 h-0.5 bg-gray-800 rotate-45 transform translate-y-1" />
              <div className="w-8 h-0.5 bg-gray-800 -rotate-45 transform -translate-y-1" />
            </button>
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
                  <span className=" border-l-4 border-l-gray-400  px-4 py-4 ">
                    {" "}
                    {item.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
