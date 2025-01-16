"use client";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import LoadingImages from "@/components/HomePage/LoadingImages";
import ImageGallery from "@/components/HomePage/ImageGallery";
import { GalleryDemo } from "@/components/HomePage/GalleryDemo";

const sampleProjects = [
  {
    _id: "project1",
    title: "Nazim Residence",
    subtitle: "Multifamily House",
    image:
      "https://www.4wallsbd.com/public/uploads/AKKHKXvUZfWNbdmbFK1gmrpBTcLudPB6MiZLBMp4.jpg",
    href: "project1",
  },
  {
    _id: "project2",
    title: "Asset Untamed",
    subtitle: "Commercial",
    image:
      "https://www.4wallsbd.com/public/uploads/oAGNJDgmMeCXYNOmwsq9tQZqfnulqw6OssqFzNWM.jpg",
    href: "project2",
  },
  {
    _id: "project3",
    title: "Radison Red",
    subtitle: "Hotels & Resorts",
    image:
      "https://www.4wallsbd.com/public/uploads/AKKHKXvUZfWNbdmbFK1gmrpBTcLudPB6MiZLBMp4.jpg",
    href: "project3",
  },
  {
    _id: "project4",
    title: "Mutual Khan Tower",
    subtitle: "Multifamily House",
    image:
      "https://www.4wallsbd.com/public/uploads/oAGNJDgmMeCXYNOmwsq9tQZqfnulqw6OssqFzNWM.jpg",
    href: "project4",
  },
  {
    _id: "project5",
    title: "Jams Ariyana Loft",
    subtitle: "Multifamily House",
    image:
      "https://www.4wallsbd.com/public/uploads/AKKHKXvUZfWNbdmbFK1gmrpBTcLudPB6MiZLBMp4.jpg",
    href: "project5",
  },
  {
    _id: "project6",
    title: "Moinah's Bari",
    subtitle: "Single Family House",
    image:
      "https://www.4wallsbd.com/public/uploads/oAGNJDgmMeCXYNOmwsq9tQZqfnulqw6OssqFzNWM.jpg",
    href: "project6",
  },
  {
    _id: "project7",
    title: "ADN HQ",
    subtitle: "Commercial",
    image:
      "https://www.4wallsbd.com/public/uploads/AKKHKXvUZfWNbdmbFK1gmrpBTcLudPB6MiZLBMp4.jpg",
    href: "project7",
  },
  {
    _id: "project8",
    title: "Radiant Head Office",
    subtitle: "Commercial",
    image:
      "https://www.4wallsbd.com/public/uploads/oAGNJDgmMeCXYNOmwsq9tQZqfnulqw6OssqFzNWM.jpg",
    href: "project8",
  },
  {
    _id: "project9",
    title: "Khazana Dhaka",
    subtitle: "Hotels & Resorts",
    image:
      "https://www.4wallsbd.com/public/uploads/AKKHKXvUZfWNbdmbFK1gmrpBTcLudPB6MiZLBMp4.jpg",
    href: "project9",
  },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((value) => {
      setIsScrolled(value > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <main className="min-h-screen bg-white">
      {isLoading && <LoadingScreen setIsLoading={setIsLoading} />}

      <section className="h-screen relative flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="relative"
        >
          {/* Logo and Sticks Container */}
          <motion.div
            className="flex items-center"
            animate={
              isScrolled
                ? {
                    x: "-40vw",
                    y: "-45vh",
                    scale: 0.6,
                  }
                : {
                    x: 0,
                    y: 0,
                    scale: 1,
                  }
            }
            transition={{ duration: 0.5 }}
          >
            {/* Logo */}
            <div className="relative">
              <div className="text-6xl font-bold">
                <span className="text-orange-500">U</span>
                <span>PATTO</span>
              </div>
              <div className="text-xl mt-2">
                <span>inside</span>
                <span className="block">outside</span>
              </div>
            </div>

            {/* Vertical Sticks */}
          </motion.div>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isScrolled ? 1 : 0, y: isScrolled ? 0 : 50 }}
          className="max-w-3xl mx-auto text-center py-20"
        >
          <p className="text-xl text-gray-400 italic">
            We are a team of experts dedicated for creating sustainable
            architecture that is in harmony with its surroundings.
          </p>
        </motion.div>
      </section>
      <section>
        {/* <LoadingImages images={sampleProjects} /> */}
        {/* <ImageGallery /> */}
        <GalleryDemo />
      </section>
    </main>
  );
}
