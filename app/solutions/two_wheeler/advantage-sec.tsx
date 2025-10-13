"use client"

import { useState } from "react"
import Image from "next/image"

const advantages = [
  {
    id: "ultra-long-driving",
    title: "Solution Domain",
    description:
      "At stf we focuse on sourcing solution for automotive parts .solving design challange, and supporting manufucture process .Our goal is delever relabialbe ,efficient and low maintanance passanger vehcals",
    position: { left: "15%", top: "70%" },
    image: "/images/twowhiler/whi-1.png",
  },
  {
    id: "instant-charge",
    title: "Instant",
    description: "Advanced fast-charging technology enables rapid energy replenishment for maximum convenience.",
    position: { left: "35%", top: "65%" },
    image: "/images/twowhiler/whi-2.png",
  },
  {
    id: "break-boundaries",
    title: "Break",
    description: "Revolutionary technology that pushes the limits of what's possible in electric mobility.",
    position: { left: "55%", top: "70%" },
    image: "/images/twowhiler/whi-3.png",
  },
  {
    id: "ultra-long-service",
    title: "Ultra",                                                                             
    description: "Engineered for longevity with advanced materials and design for extended operational life.",
    position: { left: "75%", top: "65%" },
    image: "/images/twowhiler/whi-4.png",
  },
  {
    id: "intelligent-management",                                   
    title: "Intelligent",
    description: "Smart systems that optimize performance and efficiency through advanced AI algorithms.",
    position: { left: "85%", top: "75%" },
    image: "/images/twowhiler/whi-5.png",
  },
]

export function AdvantagesSection() {
  const [activeAdvantage, setActiveAdvantage] = useState(0)

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
              {advantages[activeAdvantage].title}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {advantages[activeAdvantage].description}
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            {/* Background Image */}
            <Image
              src={advantages[activeAdvantage].image}
              alt={advantages[activeAdvantage].title}
              width={800}
              height={800}
              className="w-full h-[500px] object-cover transition-all duration-500"
              priority
            />

            {/* Vertical Overlay Borders */}
            {advantages.map((_, index) => (
              <div
                key={`border-${index}`}
                className="absolute top-0 bottom-0 w-px bg-white/20"
                style={{
                  left: `${(100 / advantages.length) * (index + 1)}%`,
                }}
              />
            ))}

            {/* Interactive Points */}
            {advantages.map((advantage, index) => (
              <button
                key={advantage.id}
                className={`absolute w-4 h-4 rounded-full border-2 border-white transition-all duration-300 hover:scale-125 ${
                  activeAdvantage === index
                    ? "bg-blue-500 shadow-lg shadow-blue-500/50"
                    : "bg-white/80 hover:bg-white"
                }`}
                style={{
                  left: advantage.position.left,
                  top: advantage.position.top,
                  transform: "translate(-50%, -50%)",
                }}
                onMouseEnter={() => setActiveAdvantage(index)}
                aria-label={`Select ${advantage.title}`}
              />
            ))}

            {/* Labels */}
            {advantages.map((advantage, index) => (
              <div
                key={`label-${advantage.id}`}
                className={`absolute text-white text-sm font-medium transition-opacity duration-300 ${
                  activeAdvantage === index ? "opacity-100" : "opacity-70"
                }`}
                style={{
                  left: advantage.position.left,
                  top: `calc(${advantage.position.top} + 20px)`,
                  transform: "translateX(-50%)",
                  textShadow: "0 2px 4px rgba(0,0,0,0.8)",
                }}
              >
                {advantage.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
