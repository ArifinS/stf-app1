"use client"

import { ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const slides = [
  {
    id: 1,
    title: "Passenger Vehicles Solutions",
    image: "/images/twowhiler/two.png",
  },
  {
    id: 2,
    title: "Commercial Fleet Efficiency",
    image: "/images/twowhiler/three.png",
  },
]

export default function CommercialHero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        {slides.map(
          (slide, index) =>
            index === current && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-blue-900/60" />
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.h1
              key={slides[current].id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-white mb-8 lg:text-5xl"
            >
              {slides[current].title}
            </motion.h1>

            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-white/80">
              <span className="hover:text-white cursor-pointer transition-colors">
                Home
              </span>
              <ChevronRight className="h-4 w-4" />
              <span className="hover:text-white cursor-pointer transition-colors">
                Solution
              </span>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">{slides[current].title}</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-white w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
