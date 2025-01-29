// components/Navbar.tsx
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import logo4 from "../../../public/upatto_logo.jpeg";

export default function OgNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 p-4 flex justify-between items-center bg-white dshadow-sm z-50">
      {/* Logo - Replace with your actual logo */}
      {/* <div className="w-12 h-12 bg-gray-200 rounded" /> */}
      <Image
        className="bg-transparent"
        src={logo4}
        alt="Logo"
        width={100}
        height={30}
      />

      <Button
        variant="ghost"
        className="z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </Button>

      {/* Mobile Menu */}
      <motion.div
        className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-4"
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex flex-col gap-4 mt-16">
          <Link href="/" className="hover:text-gray-600">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-600">
            About
          </Link>
          <Link href="/services" className="hover:text-gray-600">
            Services
          </Link>
          <Link href="/contact" className="hover:text-gray-600">
            Contact
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}
