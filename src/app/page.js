// "use client";
// import { useState, useEffect } from "react";
// import { motion, useScroll } from "framer-motion";
// import { SquareAnimation } from "@/components/shared/AnimatedLogo";
// import OgNavbar from "@/components/shared/OgNav";
// import ProjectsCard from "@/components/HomePage/ProjectsCard";
// import AnimatedProjects from "@/components/HomePage/AnimatedProjects";

// export default function Home() {
//   const { scrollY } = useScroll();
//   const [showNavbar, setShowNavbar] = useState(false);

//   useEffect(() => {
//     let timeoutId = null;
//     const handleScroll = (value) => {
//       // Using 25px because your progress maps [0,50] -> [0,1]
//       if (value > 25) {
//         if (timeoutId) clearTimeout(timeoutId);
//         // Wait 1.5s (the same as the container's topLeft transition)
//         timeoutId = setTimeout(() => {
//           setShowNavbar(true);
//         }, 1500);
//       } else {
//         setShowNavbar(false);
//         if (timeoutId) clearTimeout(timeoutId);
//       }
//     };

//     const unsubscribe = scrollY.onChange(handleScroll);

//     return () => {
//       unsubscribe();
//       if (timeoutId) clearTimeout(timeoutId);
//     };
//   }, [scrollY]);

//   return (
//     <main className="min-h-screen bg-white">
//       <SquareAnimation onAnimationComplete={() => {}} />
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: showNavbar ? 1 : 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <OgNavbar />
//       </motion.div>

//       {/* Content Section */}
//       <section className="min-h-screen px-4"></section>
//       <section>
//         <ProjectsCard />
//         {/* <AnimatedProjects /> */}
//       </section>
//     </main>
//   );
// }


"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SquareAnimation } from "@/components/shared/AnimatedLogo"
import ProjectsCard from "@/components/HomePage/ProjectsCard"
import OgNavbar from "@/components/shared/OgNav"

export default function Home() {
  const [showContent, setShowContent] = useState(false)
  const [showNavbar, setShowNavbar] = useState(false)

  const handleAnimationComplete = (completed) => {
    if (completed) {
      setShowContent(true)
      setTimeout(() => setShowNavbar(true), 0) // Delay navbar appearance
    }
  }

  return (
    <main className="min-h-screen bg-white overflow-hidden flex flex-col">
      <AnimatePresence>
        {!showContent && (
          <motion.div
            // key="banner"
            // initial={{ opacity: 1 }}
            // exit={{ opacity: 0, y: "-100vh" }}
            // transition={{ duration: 1 }}
            className="fixed inset-0 z-50 bg-white"
          >
            <SquareAnimation onAnimationComplete={handleAnimationComplete} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showNavbar ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-40"
      >
        <OgNavbar show={showNavbar} />
      </motion.div>

      <AnimatePresence>
        {showContent && (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex-grow"
          >
            <ProjectsCard />
          </motion.div>
        )}
      </AnimatePresence>


    </main>
  )
}

