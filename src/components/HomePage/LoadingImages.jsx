"use client";
import {
  motion,
  AnimatePresence,
  useInView,
  useAnimation,
} from "framer-motion";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectDetails from "./ProjectDetails";

const LoadingImages = ({ images }) => {
  const [loadedImages, setLoadedImages] = useState(images.map(() => false));
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });
  const [showLoader, setShowLoader] = useState(true);
  const [selectedProject, setSelectedProject] = useState("");

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.3 * i, delay: 0.1 * i, ease: "easeOut" },
      }));
    }
  }, [controls, inView]);

  useEffect(() => {
    const allLoaded = loadedImages.every((loaded) => loaded);
    if (allLoaded) {
      setShowLoader(false);
    }
  }, [loadedImages]);

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };
  const handleProjectClick = (id) => {
    setSelectedProject(id);
  };

  const loaderVariants = {
    initial: { opacity: 1 },
    animate: {
      opacity: 0,
      transition: { duration: 0.5, delay: 0.3, ease: "easeOut" },
    },
  };

  const lineVariants = {
    initial: { height: 0, opacity: 1 },
    animate: {
      height: "100%",
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const circleVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-5 relative">
      <AnimatePresence>
        {showLoader && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="initial"
            variants={loaderVariants}
            className="absolute inset-0 z-50 bg-white"
          >
            <motion.div
              variants={lineVariants}
              className="absolute w-[1px] left-1/2 transform -translate-x-1/2  bg-red-500"
            ></motion.div>
            <motion.div
              variants={circleVariants}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-full h-3 w-3 bg-red-500"
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {images.map((image, index) => (
        <motion.div
          ref={ref}
          key={index}
          initial={{ opacity: 0, y: 100 }}
          animate={controls.start.bind(null, index)}
        >
          <ProjectCard
            image={image}
            index={index}
            handleImageLoad={handleImageLoad}
            handleProjectClick={handleProjectClick}
          />
        </motion.div>
      ))}
      <ProjectDetails
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />
    </div>
  );
};

export default LoadingImages;
