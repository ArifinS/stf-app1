"use client"

import { ChevronRight, ChevronLeft } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

type Slide = {
  id: number
  title: string
  image: string
}
const slides: Slide[] = [
  {
    id: 1,
    title: "Passenger Vehicles Solutions",
    image: "/images/passagervehecals/one.png",
  },
  {
    id: 2,
    title: "Comfortable Travel Experience",
    image: "/images/passagervehecals/one.png",
  },
]
export default function PassengerBanner() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 5000
    const interval = 50
    const increment = (interval / duration) * 100

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setDirection(1)
          setCurrent((prevCurrent) => (prevCurrent + 1) % slides.length)
          return 0
        }
        return prev + increment
      })
    }, interval)

    return () => clearInterval(progressInterval)
  }, [current])

  const handleNext = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % slides.length)
    setProgress(0)
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    setProgress(0)
  }
  const handleDotClick = (index: number) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
    setProgress(0)
  }


  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1200 : -1200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1200 : -1200,
      opacity: 0,
    }),
  }

  return (
    <section
      className="relative h-[500px] md:h-[700px] w-full overflow-hidden bg-gray-900"
    >
      {/* Background Slides */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={slides[current].id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 200, damping: 35 },
            opacity: { duration: 0.6 },
          }}
          className="absolute inset-0"
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${slides[current].image})`,
            }}
          />
          {/* Clean gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-20 bg-white/5 hover:bg-white/15 backdrop-blur-md p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-105 border border-white/10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-white" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 bg-white/5 hover:bg-white/15 backdrop-blur-md p-3 md:p-4 rounded-full transition-all duration-300 hover:scale-105 border border-white/10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-white" />
      </button>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            {/* Main Heading */}
            <div className="overflow-hidden mb-8">
              <motion.h1
                key={`title-${slides[current].id}`}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -80, opacity: 0 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 80,
                }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight"
              >
                {slides[current].title}
              </motion.h1>
            </div>

            {/* Breadcrumb */}
            <motion.nav
              key={`breadcrumb-${slides[current].id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center space-x-2 text-sm md:text-base text-white/60"
            >
              <span className="hover:text-white cursor-pointer transition-colors">
                Home
              </span>
              <ChevronRight className="h-4 w-4" />
              <span className="hover:text-white cursor-pointer transition-colors">
                Solution
              </span>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">{slides[current].title}</span>
            </motion.nav>
          </div>
        </div>
      </div>

      {/* Modern Progress Indicators */}
      <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((slide, i: number) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="group relative"
          >
            {/* Base indicator */}
            <div
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? "w-12 h-3 bg-white"
                  : "w-3 h-3 bg-white/40 hover:bg-white/60"
              }`}
            />

            {/* Progress ring */}
            {i === current && (
              <svg
                className="absolute -inset-2.5 -rotate-90"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="14"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.2"
                />
                <motion.circle
                  cx="16"
                  cy="16"
                  r="14"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 14}`}
                  strokeDashoffset={`${2 * Math.PI * 14 * (1 - progress / 100)}`}
                  style={{ transition: "stroke-dashoffset 0.05s linear" }}
                />
              </svg>
            )}
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-8 md:bottom-10 right-6 md:right-10 text-white/90 text-sm md:text-base font-medium backdrop-blur-sm bg-white/5 px-4 md:px-5 py-2 md:py-3 rounded-full z-20 border border-white/10"
      >
        <span className="text-lg md:text-xl font-semibold">{String(current + 1).padStart(2, "0")}</span>
        <span className="text-white/40 mx-1.5">/</span>
        <span className="text-white/60">{String(slides.length).padStart(2, "0")}</span>
      </motion.div>
    </section>
  )
}