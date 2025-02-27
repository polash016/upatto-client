// components/Navbar.tsx
"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import logo4 from "../../../public/upatto_logo.jpeg";

export default function OgNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [filterOptionsOpen, setFilterOptionsOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");

  const projectTypes = ["Landscape", "Engineering", "Architecture", "Interior"];
  const projectStatuses = ["Completed", "Ongoing", "Upcoming"];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        filterOptionsOpen && // Only close if the dropdown is open
        !event.target.closest(".filter-container") // Check if the click is *not* inside the container
      ) {
        setFilterOptionsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // Use mousedown for better responsiveness

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up event listener
    };
  }, [filterOptionsOpen]); 

  return (
    <nav className="fixed w-full top-0 left-0 p-4 flex justify-between items-center bg-white shadow-sm z-50">
      <Image
        className="bg-transparent"
        src={logo4}
        alt="Logo"
        width={80}
        height={30}
      />

      <div className="hidden md:flex md:gap-12 lg:gap-24 font-medium items-center justify-evenly text-gray-500"> {/* Container for project types */}
        {projectTypes.map((type) => (
          <Link
            key={type}
            href={`/projects?type=${type}`} // Example: Link to projects page with filter
            className="hover:text-gray-600"
          >
            {type}
          </Link>
        ))}

        {/* Filter Input */}
        <div className="relative"> {/* Relative for positioning dropdown */}
          {/* <input
            type="text"
            className="px-2 py-1 outline-none w-32"
            placeholder="search"
            value={selectedFilter}
            onClick={() => setFilterOptionsOpen(!filterOptionsOpen)}
            readOnly // Prevent direct text input
          /> */}
          <div className="relative">
  <input
    type="text"
    className="px-2 py-1 outline-none w-32 pl-8"
    placeholder="Search"
    value={selectedFilter}
    onClick={() => setFilterOptionsOpen(!filterOptionsOpen)}
    readOnly
  />
  <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500">
    <span role="img" aria-label="Search"> {/* Add aria-label for accessibility */}
      🔍 {/* Or use: {project1.icon} if you have it available */}
    </span>
  </span>
</div>
          {filterOptionsOpen && (
            <div className="absolute top-full left-0 w-max  z-10">
              {projectStatuses.map((status) => (
                <div
                  key={status}
                  className="px-2 py-2 text-gray-500 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedFilter(status);
                    setFilterOptionsOpen(false);
                    // Apply filter logic here (e.g., update project display)
                    console.log("Filtering by:", status); // Placeholder
                  }}
                >
                  {status}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>


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