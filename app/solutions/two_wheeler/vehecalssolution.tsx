"use client"

import { useState } from "react"
import Image from "next/image"

const carImages = [
  "/images/twowhiler/whi-1.png", 
  "/images/twowhiler/whi-2.png",
  "/images/twowhiler/whi-3.png",
]

export function VehicleSolutionsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Car Image + Dots */}
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-xl">
            <Image
              src={carImages[activeIndex]}
              alt="Electric Vehicle"
              width={600}
              height={400}
              className="w-full h-auto object-contain transition-all duration-500"
              priority
            />
          </div>

          {/* Slider Dots */}
          <div className="flex justify-center mt-6 space-x-3">
            {carImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index
                    ? "bg-blue-600 w-4 h-4"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right - Static Text */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 leading-snug">
            Electric Private Vehicle Solutions
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            With rapid iterative material innovation, simplified product design and a constantly
            improved manufacturing process, CATL has made significant breakthroughs in system energy
            density and ultra-long range to facilitate your driving experience.
          </p>
        </div>
      </div>
    </section>
  )
}
