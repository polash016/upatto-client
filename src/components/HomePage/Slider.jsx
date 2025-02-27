"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const Slider = ({ project }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef(null)

  const slides =
    project.slides && project.slides.length > 0
      ? project.slides
      : [
          {
            image: project.image,
            text: `${project.client_name} - Slide 1 details...`,
          },
          {
            image: project.image,
            text: `${project.client_name} - Slide 2 details...`,
          },
          {
            image: project.image,
            text: `${project.client_name} - Slide 3 details...`,
          },
          {
            image: project.image,
            text: `${project.client_name} - Slide 4 details...`,
          },
        ]

  const totalSlides = slides.length

  useEffect(() => {
    const slider = sliderRef.current
    let isScrolling = false
    let startX
    let scrollLeft

    const handleTouchStart = (e) => {
      isScrolling = true
      startX = e.touches[0].pageX - slider.offsetLeft
      scrollLeft = slider.scrollLeft
    }

    const handleTouchMove = (e) => {
      if (!isScrolling) return
      e.preventDefault()
      const x = e.touches[0].pageX - slider.offsetLeft
      const walk = (x - startX) * 2
      slider.scrollLeft = scrollLeft - walk
    }

    const handleTouchEnd = () => {
      isScrolling = false
      const slideWidth = slider.offsetWidth
      const newSlide = Math.round(slider.scrollLeft / slideWidth)
      setCurrentSlide(newSlide)
      slider.scrollTo({
        left: newSlide * slideWidth,
        behavior: "smooth",
      })
    }

    slider.addEventListener("touchstart", handleTouchStart)
    slider.addEventListener("touchmove", handleTouchMove)
    slider.addEventListener("touchend", handleTouchEnd)

    return () => {
      slider.removeEventListener("touchstart", handleTouchStart)
      slider.removeEventListener("touchmove", handleTouchMove)
      slider.removeEventListener("touchend", handleTouchEnd)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-[600px] bg-gray-100 overflow-hidden"
    >
      <div
        ref={sliderRef}
        className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full snap-center">
            <div className="grid grid-cols-1 md:grid-cols-8 h-full">
              <div className="flex flex-col justify-center items-center col-span-2 md:items-end p-4">
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-2 text-end">{project.client_name}</h3>
                <p className="text-gray-500 text-sm text-end">{project.location}</p>
                <p className="text-gray-500 text-sm text-end">2025</p>
              </div>

              <div className="relative h-full col-span-4 w-full">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={project.client_name}
                  layout="fill"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>

              <div className="mt-4 text-gray-700 text-base text-end md:text-center flex items-center col-span-2 p-4">
                <p>{slide.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Slider

