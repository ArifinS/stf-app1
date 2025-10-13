"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

const newsData = [
  {
    title: "Advanced EV Diagnostic Equipment Installed",
    description:
      "State-of-the-art electric vehicle diagnostic tools now available for all major EV brands. Our workshop is now equipped to handle the most complex EV systems.",
    gradient: "from-gray-900 via-gray-800 to-black",
    textColor: "text-white",
    image: "/modern-car-diagnostic-equipment.jpg",
  },
  {
    title: "Extended Weekend Service Hours",
    description:
      "Saturday and Sunday appointments now available starting January 2025. We're here when you need us most.",
    gradient: "from-gray-100 via-gray-50 to-white",
    textColor: "text-gray-900",
    image: "/car-service-workshop.jpg",
  },
  {
    title: "Certified Hybrid Specialists Join Our Team",
    description:
      "With over 100,000 vehicles serviced, we're the most trusted workshop for hybrid maintenance and repair.",
    gradient: "from-black via-gray-900 to-gray-800",
    textColor: "text-white",
    image: "/automotive-technicians-working.jpg",
    fullWidth: true,
  },
]

export default function WorkshopNews() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="min-h-screen bg-background py-12 px-4 md:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* First Card - Dark Gradient */}
          <Card
            className={`relative overflow-hidden rounded-3xl border-0 bg-gradient-to-br ${newsData[0].gradient} p-8 md:p-12 ${newsData[0].textColor} group transition-all duration-500 hover:scale-[1.02] ${
              mounted ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.1s" }}
          >
            <div className="relative z-10 flex flex-col h-full min-h-[400px] justify-between">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">{newsData[0].title}</h2>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">{newsData[0].description}</p>
              </div>
              <div className="flex items-center gap-3 text-white/70 group-hover:text-white transition-colors">
                <span className="text-sm font-medium">Learn more</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
            {/* Decorative overlay */}
            <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-500" />
          </Card>

          {/* Second Card - Light Gradient */}
          <Card
            className={`relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br ${newsData[1].gradient} p-8 md:p-12 ${newsData[1].textColor} group transition-all duration-500 hover:scale-[1.02] ${
              mounted ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative z-10 flex flex-col h-full min-h-[400px] justify-between">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">{newsData[1].title}</h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">{newsData[1].description}</p>
              </div>
              <div className="flex items-center gap-3 text-gray-600 group-hover:text-gray-900 transition-colors">
                <span className="text-sm font-medium">Learn more</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
            {/* Decorative overlay */}
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
          </Card>
        </div>

        {/* Third Card - Full Width Dark Gradient */}
        <Card
          className={`relative overflow-hidden rounded-3xl border-0 bg-gradient-to-br ${newsData[2].gradient} p-8 md:p-12 ${newsData[2].textColor} group transition-all duration-500 hover:scale-[1.01] ${
            mounted ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.3s" }}
        >
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-balance">{newsData[2].title}</h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">{newsData[2].description}</p>
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-full group-hover:scale-105 transition-transform duration-300"
            >
              Book an Appointment
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </div>
          {/* Decorative overlay */}
          <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-500" />
        </Card>
      </div>
    </section>
  )
}
