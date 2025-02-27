// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useState, useEffect } from "react";

// export function SquareAnimation({ onAnimationComplete }) {
//   const [animationStage, setAnimationStage] = useState(0);
//   // const [showQuote, setShowQuote] = useState(false);
//   // const [showLastImage, setShowLastImage] = useState(true);

//   const { scrollY } = useScroll();
//   const progress = useTransform(scrollY, [0, 50], [0, 1]);

//   useEffect(() => {
//     const unsubscribe = progress.onChange((value) => {
//       console.log("Progress value:", value);
//       if (value >= 0.8 && animationStage !== 3) {
//         setAnimationStage(3);
//         onAnimationComplete(true);
//       } else if (value < 0.2 && animationStage === 3) {
//         setAnimationStage(2);
//         onAnimationComplete(false);
//       }

//       // Hide the last image when scrolling down, show when scrolling up.
//       if (value > 0.5) {
//         setShowLastImage(false);
//       } else {
//         setShowLastImage(true);
//       }
//     });

//     return () => unsubscribe();
//   }, [progress, animationStage, onAnimationComplete]);

//   const scrollValue = scrollY.get();

//   const containerVariants = {
//     center: {
//       x: 0,
//       y: 0,
//       scale: 1,
//       transition: { duration: 0.9, ease: "easeInOut" },
//     },
//     topLeft: {
//       x: "-47vw",
//       y: "-42.2vh",
//       scale: 0.5,
//       transition: { duration: 1.5, ease: "easeInOut" },
//     },
//   };

//   // Variants for the last image (Animation Image 4)
//   // "visible": normal position (in the middle), "hidden": moved upward (near the navbar)
//   const lastImageVariants = {
//     visible: { opacity: 1, y: 0 },
//     hidden: { opacity: 0, y: -150 }, // Adjust y offset as needed
//   };

//   return (
//     <div className=" bg-white">
//       <motion.div
//         className="fixed inset-0 flex z-0 items-center justify-center pointer-events-none"
//         variants={containerVariants}
//         initial="center"
//         animate={progress.get() >= 0.5 ? "topLeft" : "center"}
//       >
//         <motion.div className="relative w-[400px] h-[400px]">
//           {/* Square Outline Animation */}
//           <div className="absolute w-[30px] h-[30px] top-[140px] left-[185px]">
//             <motion.div
//               className="absolute bottom-0 right-0 h-[5px] bg-black"
//               initial={{ width: 0 }}
//               animate={{ width: "100%" }}
//               transition={{ duration: 1, ease: "linear" }}
//             />
//             <motion.div
//               className="absolute bottom-0 left-0 w-[4px] bg-black"
//               initial={{ height: 0 }}
//               animate={{ height: "100%" }}
//               transition={{ duration: 1, ease: "linear", delay: 1 }}
//             />
//             <motion.div
//               className="absolute top-0 left-0 h-[3px] bg-black"
//               initial={{ width: 0 }}
//               animate={{ width: "100%" }}
//               transition={{ duration: 1, ease: "linear", delay: 2 }}
//             />
//             <motion.div
//               className="absolute top-0 right-0 w-[2px] bg-black"
//               initial={{ height: 0 }}
//               animate={{ height: "100%" }}
//               transition={{ duration: 1, ease: "linear", delay: 3 }}
//             />
//           </div>

//           {/* Other Animated Images */}
//           <motion.img
//             src="https://res.cloudinary.com/daa4x7pfh/image/upload/v1738150065/img1_g4bczj.png"
//             alt="Animation Image 1"
//             className="absolute w-[90px] h-[120px] top-[100px] left-[132px]"
//             initial={{ opacity: 0, x: -100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 2, ease: "easeOut", delay: 5.5 }}
//           />
//           <motion.img
//             src="https://res.cloudinary.com/daa4x7pfh/image/upload/v1738214372/img-6_mxqhoh.png"
//             alt="Animation Image 6"
//             className="absolute w-[20px] h-[100px] top-[110px] right-[158px]"
//             initial={{ opacity: 0, y: -100 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 2, ease: "easeOut", delay: 4 }}
//           />
//           <motion.img
//             src="https://res.cloudinary.com/daa4x7pfh/image/upload/v1738214385/img-7_lxvywr.png"
//             alt="Animation Image 7"
//             className="absolute nw-[90px] h-[60px] top-[120px] right-[118px]"
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 2, ease: "easeOut", delay: 4.5 }}
//           />
//           <motion.img
//             src="https://res.cloudinary.com/daa4x7pfh/image/upload/v1738150066/img3_a13tp5.png"
//             alt="Animation Image 3"
//             className="absolute w-[90px] top-[178px] right-[90px]"
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 2, ease: "easeOut", delay: 7 }}
//           />

//           {/* Last Image – always rendered, but its animation is driven by scroll */}
//           {/* <motion.img
//             src="https://res.cloudinary.com/daa4x7pfh/image/upload/v1738150066/img4_hirtvm.png"
//             alt="Animation Image 4"
//             className="absolute w-[240px] bottom-[60px] top-56 left-[132px] -translate-x-1/2"
//             // On initial load, animate from below (with delay); afterward, use the scroll-controlled variants.
//             initial={animationStage === 0 ? { opacity: 0, y: 100 } : undefined}
//             animate={showLastImage ? "visible" : "hidden"}
//             variants={lastImageVariants}
//             transition={
//               animationStage === 0
//                 ? { duration: 2, ease: "easeOut", delay: 8 }
//                 : { duration: 1, ease: "easeOut" }
//             }
//             onAnimationComplete={() => {
//               if (animationStage === 0) {
//                 setAnimationStage(2);
//                 setShowQuote(true);
//               }
//             }}
//           /> */}
//           <motion.img
//           src="https://res.cloudinary.com/daa4x7pfh/image/upload/v1738150066/img4_hirtvm.png"
//           alt="Animation Image 4"
//           className="absolute w-[240px] bottom-[60px] top-56 left-[132px] -translate-x-1/2"
//           initial={{ opacity: 0, y: 100 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 2, ease: "easeOut", delay: 8 }}
//           onAnimationComplete={() => setAnimationStage(2)}
//         />
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }


"use client"

import { motion, useAnimation } from "framer-motion"
import { useState, useEffect } from "react"

export function SquareAnimation({ onAnimationComplete }) {
  const [isInitialAnimationComplete, setIsInitialAnimationComplete] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialAnimationComplete(true)
      onAnimationComplete(true)
    }, 12200) 

    return () => clearTimeout(timer)
  }, [onAnimationComplete])

  useEffect(() => {
    // if (isInitialAnimationComplete) {
      const timer = setTimeout(() => {
        controls.start({
          x: "-47vw",
          y: "-42.2vh",
          scale: 0.5,
          transition: { duration: 1.5, ease: "easeInOut" },
        })        
      }, 11000) 
  
      return () => clearTimeout(timer)
    // }
  }, [isInitialAnimationComplete, controls])

 

  const containerVariants = {
    initial: {
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.9, ease: "easeInOut" },
    },
    animate: {
      x: isInitialAnimationComplete ? "-47vw" : 0,
      y: isInitialAnimationComplete ? "-42.2vh" : 0,
      scale: isInitialAnimationComplete ? 0.5 : 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 11, 
      },
    },
  }

  return (
    <div className="bg-white h-screen w-screen flex items-center justify-center">
      <motion.div
        className="relative"
        variants={containerVariants}
        initial="center"
        animate={isInitialAnimationComplete ? "topLeft" : "topLeft"}
      >
        <motion.div className="relative w-[400px] h-[400px]" animate={controls}>
          {/* Square Outline Animation */}
          <div className="absolute w-[30px] h-[30px] top-[140px] left-[185px]">
            <motion.div
              className="absolute bottom-0 right-0 h-[5px] bg-black"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-[4px] bg-black"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1, ease: "linear", delay: 1 }}
            />
            <motion.div
              className="absolute top-0 left-0 h-[3px] bg-black"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, ease: "linear", delay: 2 }}
            />
            <motion.div
              className="absolute top-0 right-0 w-[2px] bg-black"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1, ease: "linear", delay: 3 }}
            />
          </div>

          {/* Other Animated Images */}
          <motion.img
            src="https://res.cloudinary.com/daa4x7pfh/image/upload/v1738150065/img1_g4bczj.png"
            alt="Animation Image 1"
            className="absolute w-[90px] h-[120px] top-[100px] left-[132px]"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeOut", delay: 5.5 }}
          />
          <motion.img
            src="https://res.cloudinary.com/daa4x7pfh/image/upload/v1738214372/img-6_mxqhoh.png"
            alt="Animation Image 6"
            className="absolute w-[20px] h-[100px] top-[110px] right-[158px]"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut", delay: 4 }}
          />
          <motion.img
            src="https://res.cloudinary.com/daa4x7pfh/image/upload/v1738214385/img-7_lxvywr.png"
            alt="Animation Image 7"
            className="absolute nw-[90px] h-[60px] top-[120px] right-[118px]"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeOut", delay: 4.5 }}
          />
          <motion.img
            src="https://res.cloudinary.com/daa4x7pfh/image/upload/v1738150066/img3_a13tp5.png"
            alt="Animation Image 3"
            className="absolute w-[90px] top-[178px] right-[90px]"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeOut", delay: 7 }}
          />
          <motion.img
            src="https://res.cloudinary.com/daa4x7pfh/image/upload/v1738150066/img4_hirtvm.png"
            alt="Animation Image 4"
            className="absolute w-[240px] bottom-[60px] top-56 left-[132px] -translate-x-1/2"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeOut", delay: 8 }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
