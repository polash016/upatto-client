"use client";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import LoadingImages from "@/components/HomePage/LoadingImages";
import ImageGallery from "@/components/HomePage/ImageGallery";
import { GalleryDemo } from "@/components/HomePage/GalleryDemo";
import { ContainerScroll } from "@/components/HomeEx";
import HeroSection from "@/components/HomeExTwo";
import Image from "next/image";
import logo from "../../public/upatto_logo.jpeg";
import HeroSectionTwo from "@/components/HeroTwo";
import HeroSectionThree from "@/components/HeroThree";
import HeroSectionLogo, { LampDemo } from "@/components/HeroFour";
import banner from "../../public/upatto_banner.jpg";
import AnimatedLogo from "@/components/shared/AnimatedLogo";

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
      {/* {isLoading && <LoadingScreen setIsLoading={setIsLoading} />} */}

      {/* <section className="h-screen relative flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="relative"
        >
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
            <div className="relative">
              <div className="text-6xl font-bold">
                <Image alt="Logo" src={logo} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section> */}

      {/* <HeroSectionTwo /> */}
      {/* <HeroSectionThree /> */}
      {/* <HeroSectionLogo /> */}

      {/* <ContainerScroll>
        <div className="relative h-full w-full">
          <Image
            src={banner}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white p-4">
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-4">
              Welcome to Upatto
            </h1>
            <p className="text-lg md:text-xl text-center max-w-2xl">
              A team of experts dedicated for creating sustainable architecture
            </p>
          </div>
        </div>
      </ContainerScroll> */}
      <AnimatedLogo />

      {/* Content Section */}
      <section className="min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
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

    // <>
    //   <ContainerScroll
    //     titleComponent={
    //       <div className="text-4xl font-bold text-center mb-8">Upatto</div>
    //     }
    //   />
    //   {/* <HeroSection /> */}
    // </>
  );
}
