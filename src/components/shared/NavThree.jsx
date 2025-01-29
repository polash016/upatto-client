"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Home, Settings, User } from "lucide-react";

const FloatingNav = ({ navItems, className, activeTab }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-0 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2]  dark:bg-black bg-gray-300 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500",
              {
                "text-blue-500 dark:text-blue-400": activeTab === navItem.link,
              }
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-black text-sm">
              {navItem.name}
            </span>
          </Link>
        ))}
        <button
          className={cn(
            "border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full",
            {
              "text-blue-500 dark:text-blue-400 border-blue-500 dark:border-blue-400":
                activeTab === "/login",
            }
          )}
        >
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <Home className="h-4 w-4" />,
    },
    {
      name: "Profile",
      link: "/profile",
      icon: <User className="h-4 w-4" />,
      icon: <Settings className="h-4 w-4" />,
    },
    {
      name: "Settings",
      link: "/settings",
      icon: <Settings className="h-4 w-4" />,
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} className="max-w-full" />
    </div>
  );
}
