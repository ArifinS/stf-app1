"use client"

import { useState } from "react"
import Image from "next/image"

const advantages = [
  {
    id: "whole-life-cost",
    title: "Manufacture Process Sulutions",
    description:
      'Thanks to features such as the high reliability, long service life and high energy efficiency of CATL\'s battery systems, "renewable energy + energy storage" has more advantages in cost per kWh in the whole life cycle.',
    image: "/images/commercial/three.png",
    position: { x: "15%", y: "65%" },
  },
  {
    id: "Sourching Solution",
    title: "Sourching Solution",
    description:
      "CATL's advanced battery management system provides comprehensive safety protection through multiple layers of monitoring, thermal management, and intelligent diagnostics to ensure reliable operation.",
    image: "/images/passagervehecals/pass-2.png",
    position: { x: "50%", y: "65%" },
  },
  {
    id: "Design-Solutions",
    title: "Design-solutions",
    description:
      "From initial consultation to installation, maintenance, and optimization, CATL provides end-to-end solutions that cover every aspect of your energy storage needs.",
    image: "/images/passagervehecals/pass-3.png",
    position: { x: "85%", y: "65%" },
  },
]

export default function ThreeAdvantages() {
  const [activeAdvantage, setActiveAdvantage] = useState(advantages[0])

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">Solution Domain</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-5xl font-bold text-gray-900 leading-tight">{activeAdvantage.title}</h3>
            <p className="text-gray-600 text-lg leading-relaxed">{activeAdvantage.description}</p>
          </div>

          {/* Right Interactive Image */}
          <div className="relative">
            <div className="relative w-full h-96 rounded-lg overflow-hidden">
              <Image
                src={activeAdvantage.image || "/placeholder.svg"}
                alt={activeAdvantage.title}
                fill
                className="object-cover transition-all rounded duration-500"
              />

              {/* Interactive Points */}
              {advantages.map((advantage) => (
                <button
                  key={advantage.id}
                  className="absolute w-4 h-4 bg-white rounded-full border-2 border-blue-500 hover:scale-125 transition-all duration-300 group"
                  style={{
                    left: advantage.position.x,
                    top: advantage.position.y,
                    transform: "translate(-50%, -50%)",
                  }}
                  onMouseEnter={() => setActiveAdvantage(advantage)}
                >
                  {/* Pulse animation */}
                  <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75"></div>

                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-white text-gray-900 text-sm font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                    {advantage.title}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
