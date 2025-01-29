"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Image from "next/image";

const AnimationNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHamburgerVisible, setIsHamburgerVisible] = useState(false);
  const upattoWords = [
    "LANDSCAPE",
    "ENGINEERING",
    "ARCHITECTURE",
    "PLANNING",
    "PRODUCTS",
  ];
  const otherMenuItems = ["EDUCATION", "MUSEUM"];
  const hamburgerMenuItems = ["Home", "About", "Services", "Contact"];

  const initialLoadAnimation = useAnimation();
  const navbarAnimation = useAnimation();
  const logoAnimation = useAnimation();
  const upattoAnimations = ["U", "P", "A", "T", "T", "O"].map(() =>
    useAnimation()
  );

  const logoRef = useRef(null);
  const upattoRefs = useRef([]);
  const menuRef = useRef(null);

  useEffect(() => {
    const sequence = async () => {
      await initialLoadAnimation.start({
        opacity: 1,
        transition: { duration: 0.5 },
      });

      const navbarLogoRect = logoRef.current?.getBoundingClientRect();
      const menuRect = menuRef.current?.getBoundingClientRect();

      if (navbarLogoRect && menuRect) {
        await logoAnimation.start({
          x: navbarLogoRect.left - window.innerWidth / 2 + 50,
          y: navbarLogoRect.top - window.innerHeight / 2,
          transition: { duration: 1, ease: "easeInOut" },
        });

        const spreadDistance = 50;
        await Promise.all(
          upattoAnimations.map((animation, index) =>
            animation.start({
              x: (index - 2.5) * spreadDistance,
              transition: { duration: 0.5, ease: "easeOut" },
            })
          )
        );

        await new Promise((resolve) => setTimeout(resolve, 500));

        await Promise.all(
          upattoAnimations.map((animation, index) => {
            const targetX =
              menuRect.left +
              (index * menuRect.width) / upattoWords.length -
              window.innerWidth / 2;
            const targetY = menuRect.top - window.innerHeight / 2;
            return animation.start({
              x: targetX,
              y: targetY,
              transition: { duration: 1, ease: "easeInOut" },
            });
          })
        );

        await navbarAnimation.start({
          opacity: 1,
          transition: { duration: 0.5 },
        });

        await initialLoadAnimation.start({
          opacity: 0,
          transition: { duration: 0.5 },
        });
      }
    };

    sequence();
  }, [
    initialLoadAnimation,
    navbarAnimation,
    logoAnimation,
    ...upattoAnimations,
  ]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative h-screen bg-black overflow-hidden">
      {/* Initial Loading Text */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-bold flex space-x-4"
        animate={initialLoadAnimation}
        initial={{ opacity: 0 }}
      >
        <motion.div animate={logoAnimation} className="w-24 h-8 relative">
          <Image
            src="https://blankspacer.com/logoanimation/logo.png"
            alt="Logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </motion.div>
        <motion.div className="flex space-x-2">
          {["U", "P", "A", "T", "T", "O"].map((letter, index) => (
            <motion.span
              key={index}
              animate={upattoAnimations[index]}
              initial={{ opacity: 1 }}
              ref={(el) => (upattoRefs.current[index] = el)}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Navbar */}
      <motion.nav
        className="fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-md z-50 py-4 px-6 md:px-10 lg:px-20 flex justify-between items-center text-black"
        animate={navbarAnimation}
        initial={{ opacity: 0 }}
      >
        {/* Logo/Hamburger Menu */}
        <div className="relative">
          <motion.button
            className="flex items-center group"
            onHoverStart={() => setIsHamburgerVisible(true)}
            onHoverEnd={() => setIsHamburgerVisible(false)}
            onClick={toggleMenu}
          >
            <motion.div
              className="w-24 h-8 relative mr-2"
              animate={{ opacity: isHamburgerVisible ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              ref={logoRef}
            >
              <Image
                src="https://blankspacer.com/logoanimation/logo.png"
                alt="Logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </motion.div>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
              animate={{ opacity: isHamburgerVisible ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </motion.svg>
          </motion.button>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md overflow-hidden"
              >
                {hamburgerMenuItems.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log(`Clicked on ${item}`);
                      setIsMenuOpen(false);
                    }}
                  >
                    {item}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Menu Items */}
        <div
          className="hidden md:flex items-center space-x-8 lg:space-x-12"
          ref={menuRef}
        >
          <div className="flex items-center space-x-8 lg:space-x-12">
            {upattoWords.map((word, index) => (
              <motion.a
                key={index}
                href="#"
                className="hover:underline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                {word}
              </motion.a>
            ))}
          </div>
          <div className="flex items-center space-x-8 lg:space-x-12">
            {otherMenuItems.map((item, index) => (
              <motion.a
                key={index}
                href="#"
                className="hover:underline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Language Selector */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          <motion.button className="hover:underline">FRANCE</motion.button>
        </motion.div>
      </motion.nav>

      {/* Page Content */}
      {/* <div className="pt-32">
        <p className="text-white text-center">
          Page Content Here (replace with your actual content)
        </p>
      </div> */}
    </div>
  );
};

export default AnimationNav;
