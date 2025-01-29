// // components/HeroSection.tsx
// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Stars } from "@react-three/drei";

// export default function HeroSection() {
//   const [isNavbarVisible, setIsNavbarVisible] = useState(false);
//   const heroRef = useRef < HTMLDivElement > null;
//   const { scrollY } = useScroll();
//   const iconSize = useTransform(scrollY, [0, 500], [100, 40]); // Adjust size on scroll
//   const iconPosition = useTransform(scrollY, [0, 500], [0, -200]); // Adjust position on scroll

//   useEffect(() => {
//     const unsubscribe = scrollY.onChange((y) => {
//       if (y > 200) {
//         setIsNavbarVisible(true);
//       } else {
//         setIsNavbarVisible(false);
//       }
//     });

//     return () => unsubscribe();
//   }, [scrollY]);

//   return (
//     <div ref={heroRef} className="relative h-screen overflow-hidden">
//       {/* Three.js Background */}
//       <Canvas className="absolute inset-0 z-0">
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <Stars
//           radius={100}
//           depth={50}
//           count={5000}
//           factor={4}
//           saturation={0}
//           fade
//         />
//         <OrbitControls autoRotate enableZoom={false} />
//       </Canvas>

//       {/* Hero Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full">
//         <motion.div
//           style={{ width: iconSize, height: iconSize, y: iconPosition }}
//           className="bg-white rounded-full flex items-center justify-center"
//         >
//           <img
//             src="/company-icon.png"
//             alt="Company Icon"
//             className="w-3/4 h-3/4"
//           />
//         </motion.div>
//         <h1 className="text-4xl font-bold text-white mt-4">Company Title</h1>
//       </div>

//       {/* Navbar */}
//       <motion.nav
//         initial={{ opacity: 0, y: -100 }}
//         animate={{
//           opacity: isNavbarVisible ? 1 : 0,
//           y: isNavbarVisible ? 0 : -100,
//         }}
//         transition={{ duration: 0.5 }}
//         className="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-md p-4 flex justify-between items-center z-50"
//       >
//         <div className="flex items-center">
//           <img src="/company-icon.png" alt="Company Icon" className="w-8 h-8" />
//           <span className="text-white text-lg font-bold ml-2">Company</span>
//         </div>
//         <button className="text-white">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           </svg>
//         </button>
//       </motion.nav>
//     </div>
//   );
// }
