// // components/AnimatedLogo.tsx
// "use client";
// import { motion, AnimatePresence } from "framer-motion";
// import { usePathname, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// const logo1 = "/logo_part1.jpeg";
// const logo2 = "/logo_part2.jpeg";
// const logo3 = "/logo_part3.jpeg";
// const logo4 = "/logo_part4.jpeg";

// // const logos = [logo1, logo2, logo3, logo4];

// const logos = [
//   "https://res.cloudinary.com/daa4x7pfh/image/upload/v1738139966/logo_part1_kganys.jpg",
//   "https://res.cloudinary.com/daa4x7pfh/image/upload/v1738140011/logo_part2_y4pdjz.jpg",
//   "https://res.cloudinary.com/daa4x7pfh/image/upload/v1738140037/logo_part3_gshfcr.jpg",
//   "https://res.cloudinary.com/daa4x7pfh/image/upload/v1738140063/logo_part4_a4znj3.jpg",
// ];

// export default function AnimatedLogo() {
//   const [animationComplete, setAnimationComplete] = useState(false);
//   const pathname = usePathname();
//   const isHomePage = pathname === "/";
//   // Logo animation variants
//   const logoVariants = {
//     initial: { scale: 1, x: 0, y: 0 },
//     animate: {
//       scale: 0.5,
//       x: -50,
//       y: -50,
//       transition: { duration: 1, ease: "easeInOut" },
//     },
//   };

//   return (
//     <>
//       {isHomePage && (
//         <AnimatePresence>
//           {!animationComplete && (
//             <motion.div
//               className="fixed inset-0 flex items-center justify-center"
//               initial={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             >
//               <motion.div
//                 className="relative w-[40px] h-[40px]"
//                 variants={logoVariants}
//                 initial="initial"
//                 animate={animationComplete ? "animate" : "initial"}
//                 onAnimationComplete={() => setAnimationComplete(true)}
//               >
//                 {/* Square Animation */}
//                 <motion.div
//                   className="absolute bottom-0 left-0 h-[2px] bg-black w-0"
//                   animate={{ width: "100%" }}
//                   transition={{ duration: 1 }}
//                 />
//                 <motion.div
//                   className="absolute left-0 top-0 w-[2px] bg-black h-0"
//                   animate={{ height: "100%" }}
//                   transition={{ duration: 1, delay: 1 }}
//                 />
//                 <motion.div
//                   className="absolute top-0 left-0 h-[2px] bg-black w-0"
//                   animate={{ width: "100%" }}
//                   transition={{ duration: 1, delay: 2 }}
//                 />
//                 <motion.div
//                   className="absolute right-0 top-0 w-[2px] bg-black h-0"
//                   animate={{ height: "100%" }}
//                   transition={{ duration: 1, delay: 3 }}
//                 />

//                 {/* Falling Images */}
//                 {[logo4, logo1, logo2, logo3].map((logo, i) => (
//                   <motion.img
//                     key={i}
//                     src={logo}
//                     alt={`Image ${i}`}
//                     className="absolute"
//                     initial={{ opacity: 0, y: -100 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{
//                       delay: 4 + i * 0.3,
//                       duration: 0.5,
//                       ease: "easeOut",
//                     }}
//                     style={{
//                       width: 90,
//                       height: 120,
//                       // Position each image accordingly
//                       ...getImagePosition(i),
//                     }}
//                   />
//                 ))}
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       )}
//     </>
//   );
// }

// function getImagePosition(index) {
//   switch (index) {
//     case 1:
//       return { top: -40, left: -53 };
//     case 2:
//       return { top: -50, right: -90 };
//     case 3:
//       return { top: 40, right: -90 };
//     case 4:
//       return { bottom: -80, left: "50%", transform: "translateX(-50%)" };
//     default:
//       return {};
//   }
// }

// components/AnimatedLogo.tsx
// "use client";
// import { motion, AnimatePresence } from "framer-motion";
// import { usePathname } from "next/navigation";
// import { useState } from "react";

// const logos = [
//   "/logo_part1.png",
//   "/logo_part2.png",
//   "/logo_part3.png",
//   "/logo_part4.png",
// ];

// export default function AnimatedLogo() {
//   const [animationComplete, setAnimationComplete] = useState(false);
//   const pathname = usePathname();
//   const isHomePage = pathname === "/";

//   return (
//     <>
//       {isHomePage && (
//         <AnimatePresence>
//           {!animationComplete && (
//             <motion.div
//               className="fixed inset-0 flex items-center justify-center"
//               initial={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             >
//               {/* Square Container */}
//               <motion.div
//                 className="relative w-[20px] h-[20px]"
//                 style={{ top: -60, left: -65 }}
//               >
//                 {/* Bottom Line */}
//                 <motion.div
//                   className="absolute bottom-0 left-0 h-[2px] bg-black"
//                   initial={{ width: 0 }}
//                   animate={{ width: "100%" }}
//                   transition={{ duration: 1 }}
//                 />

//                 {/* Left Line */}
//                 <motion.div
//                   className="absolute left-0 top-0 w-[3px] bg-black"
//                   initial={{ height: 0 }}
//                   animate={{ height: "100%" }}
//                   transition={{ duration: 1, delay: 1 }}
//                 />

//                 {/* Top Line */}
//                 <motion.div
//                   className="absolute top-0 left-0 h-[2px] bg-black"
//                   initial={{ width: 0 }}
//                   animate={{ width: "100%" }}
//                   transition={{ duration: 1, delay: 2 }}
//                 />

//                 {/* Right Line */}
//                 <motion.div
//                   className="absolute right-0 top-0 w-[1px] bg-black"
//                   initial={{ height: 0 }}
//                   animate={{ height: "100%" }}
//                   transition={{ duration: 1, delay: 3 }}
//                 />

//                 {/* Falling Images */}
//                 <motion.img
//                   src={logos[0]}
//                   alt="Image 1"
//                   className="absolute"
//                   initial={{ opacity: 0, y: -100 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 4.5, duration: 2, ease: "easeOut" }}
//                   style={{ top: -22, left: -13, width: 90, height: 70 }}
//                 />

//                 <motion.img
//                   src={logos[1]}
//                   alt="Image 2"
//                   className="absolute"
//                   initial={{ opacity: 0, y: -100 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 4, duration: 2, ease: "easeOut" }}
//                   style={{ top: -25, right: -22, height: 70 }}
//                 />

//                 <motion.img
//                   src={logos[2]}
//                   alt="Image 3"
//                   className="absolute"
//                   initial={{ opacity: 0, x: 100 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 5, duration: 2, ease: "easeOut" }}
//                   style={{ top: 20, right: -25, width: 40, height: 25 }}
//                 />

//                 <motion.img
//                   src={logos[3]}
//                   alt="Image 4"
//                   className="absolute"
//                   initial={{ opacity: 0, y: 100 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 5, duration: 2, ease: "easeOut" }}
//                   style={{
//                     bottom: -50,
//                     left: "50%",
//                     transform: "translateX(-50%)",
//                     // width: 10,
//                     height: 5,
//                   }}
//                 />
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       )}
//     </>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import "./AnimatedLogo.css";

import logo1 from "../../../public/logo_part1.png";
import logo2 from "../../../public/logo_part2.png";
import logo3 from "../../../public/logo_part3.png";
import logo4 from "../../../public/logo_part4.png";

const AnimatedLogo = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  // const logo1 = "/logo_part1.jpeg";
  // const logo2 = "/logo_part2.jpeg";
  // const logo3 = "/logo_part3.jpeg";
  // const logo4 = "/logo_part4.jpeg";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 7000); // Adjust time based on animation duration

    return () => clearTimeout(timer);
  }, []);

  if (!showAnimation) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
      <div className="square-container">
        <div className="line bottom"></div>
        <div className="line left"></div>
        <div className="line top"></div>
        <div className="line right"></div>

        {/* Images */}
        <Image
          src="/logo_part1.png"
          width={90}
          height={120}
          className="falling-image image1"
          alt="Image 1"
        />
        <Image
          src="/logo_part2.png"
          width={90}
          height={120}
          className="fall-image img-right"
          alt="Image 2"
        />
        <Image
          src="/logo_part3.png"
          width={100}
          height={120}
          className="fall-image img-bottom-right"
          alt="Image 3"
        />
        <Image
          src="/logo_part4.png"
          width={120}
          height={120}
          className="fall-image img-bottom"
          alt="Image 4"
        />
      </div>
    </div>
    // <>
    //   <div className="square-container">
    //     <div className="line bottom"></div>
    //     <div className="line left"></div>
    //     <div className="line top"></div>
    //     <div className="line right"></div>
    //     <img
    //       src="/logo_part1.png"
    //       className="falling-image image1"
    //       alt="Image 1"
    //     />
    //     <img src={logo2} className="fall-image img-right" alt="Image 2" />
    //     <img
    //       src={logo3}
    //       alt="Image 3"
    //       className="fall-image img-bottom-right"
    //     />
    //     <img src={logo4} alt="Image 4" className="fall-image img-bottom" />
    //   </div>
    // </>
  );
};

export default AnimatedLogo;
