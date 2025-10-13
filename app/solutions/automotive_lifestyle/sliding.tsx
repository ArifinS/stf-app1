"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Sparkles, 
  Zap, 
  Heart, 
  Compass, 
  Camera, 
  Coffee,
  Mountain,
  Sunset,
  Wind,
  Star,
  TrendingUp,
  Users
} from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const lifestyleCategories = [
  {
    id: 1,
    title: "Urban Explorer",
    tagline: "Navigate the Concrete Jungle",
    description: "For those who find beauty in city lights and endless possibilities in urban landscapes. Your vehicle is your passport to metropolitan adventures.",
    image: "/images/lifestyle/urban.jpg",
    icon: Compass,
    color: "#6366f1",
    gradient: "from-indigo-500 to-purple-600",
    features: ["City Navigation", "Smart Parking", "Urban Routes"],
    stats: { enthusiasts: "2.5M+", journeys: "Daily" }
  },
  {
    id: 2,
    title: "Weekend Warrior",
    tagline: "Escape the Ordinary",
    description: "Transform Friday evenings into epic getaways. From mountain trails to coastal highways, your adventure vehicle awaits the open road.",
    image: "/images/lifestyle/adventure.jpg",
    icon: Mountain,
    color: "#10b981",
    gradient: "from-emerald-500 to-teal-600",
    features: ["Off-Road Ready", "Cargo Solutions", "All-Weather"],
    stats: { enthusiasts: "1.8M+", journeys: "Weekend" }
  },
  {
    id: 3,
    title: "Luxury Connoisseur",
    tagline: "Define Your Status",
    description: "Experience automotive excellence where every detail speaks of refinement. Your vehicle is a statement of success and sophisticated taste.",
    image: "/images/lifestyle/luxury.jpg",
    icon: Star,
    color: "#f59e0b",
    gradient: "from-amber-500 to-orange-600",
    features: ["Premium Comfort", "Advanced Tech", "Concierge Service"],
    stats: { enthusiasts: "950K+", journeys: "Executive" }
  },
  {
    id: 4,
    title: "Speed Enthusiast",
    tagline: "Feel the Adrenaline",
    description: "For those who live for the thrill of acceleration and the roar of a finely-tuned engine. Performance is not optional, it's essential.",
    image: "/images/lifestyle/performance.jpg",
    icon: Zap,
    color: "#ef4444",
    gradient: "from-red-500 to-pink-600",
    features: ["Track Ready", "Performance Tuning", "Racing Community"],
    stats: { enthusiasts: "1.2M+", journeys: "High-Octane" }
  },
  {
    id: 5,
    title: "Eco Conscious",
    tagline: "Drive the Change",
    description: "Pioneering sustainable mobility without compromising style or performance. Your choices today shape tomorrow's world.",
    image: "/images/lifestyle/eco.jpg",
    icon: Wind,
    color: "#14b8a6",
    gradient: "from-teal-500 to-cyan-600",
    features: ["Zero Emission", "Smart Charging", "Green Routes"],
    stats: { enthusiasts: "3.1M+", journeys: "Sustainable" }
  },
  {
    id: 6,
    title: "Family Voyager",
    tagline: "Create Memories Together",
    description: "Where safety meets comfort and every journey becomes a cherished memory. Built for those who value togetherness above all.",
    image: "/images/lifestyle/family.jpg",
    icon: Heart,
    color: "#8b5cf6",
    gradient: "from-violet-500 to-purple-600",
    features: ["Safety First", "Space & Comfort", "Entertainment"],
    stats: { enthusiasts: "4.2M+", journeys: "Family" }
  }
]

const communityHighlights = [
  { 
    icon: Users, 
    value: "12M+", 
    label: "Active Community",
    color: "#6366f1" 
  },
  { 
    icon: Camera, 
    value: "500K+", 
    label: "Shared Moments",
    color: "#10b981" 
  },
  { 
    icon: TrendingUp, 
    value: "98%", 
    label: "Satisfaction Rate",
    color: "#f59e0b" 
  },
  { 
    icon: Coffee, 
    value: "2,500+", 
    label: "Monthly Meetups",
    color: "#ef4444" 
  }
]

export default function AutomotiveLifestyle() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section with Animated Background */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="outline" className="mb-6 px-6 py-2 text-sm border-indigo-500/50 text-indigo-300">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              Lifestyle Collection 2024
            </Badge>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Live Your
            <motion.span 
              className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Automotive Dream
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover your perfect automotive lifestyle. From urban sophistication to off-road adventures, 
            find the community that matches your passion and elevate every journey.
          </motion.p>
        </div>
      </section>

      {/* Lifestyle Categories Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Choose Your Lifestyle
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Every driver has a unique story. What's yours?
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {lifestyleCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.id}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <Card className="group relative overflow-hidden bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all duration-500 h-full backdrop-blur-sm">
                    {/* Gradient overlay on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    {/* Image Section */}
                    <div className="relative h-64 overflow-hidden">
                      <motion.div
                        className="w-full h-full bg-slate-800"
                        animate={hoveredCard === index ? { scale: 1.1 } : { scale: 1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                          <Icon className="w-24 h-24 text-slate-600" strokeWidth={1} />
                        </div>
                      </motion.div>
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                      
                      {/* Floating Icon */}
                      <motion.div 
                        className="absolute top-6 right-6 w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/10"
                        style={{ backgroundColor: `${category.color}20` }}
                        animate={hoveredCard === index ? { 
                          rotate: [0, -10, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        } : {}}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon 
                          className="w-7 h-7" 
                          style={{ color: category.color }}
                        />
                      </motion.div>

                      {/* Stats Badge */}
                      <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                        <Badge 
                          variant="secondary" 
                          className="backdrop-blur-md bg-black/40 border-white/10 text-white"
                        >
                          {category.stats.enthusiasts}
                        </Badge>
                        <Badge 
                          variant="secondary" 
                          className="backdrop-blur-md bg-black/40 border-white/10 text-white"
                        >
                          {category.stats.journeys}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6 relative z-10">
                      <motion.h3 
                        className="text-2xl font-bold text-white mb-2"
                        animate={hoveredCard === index ? { x: 5 } : { x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {category.title}
                      </motion.h3>
                      
                      <p 
                        className="text-sm font-medium mb-3"
                        style={{ color: category.color }}
                      >
                        {category.tagline}
                      </p>

                      <p className="text-slate-400 mb-6 leading-relaxed">
                        {category.description}
                      </p>

                      {/* Features Pills */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {category.features.map((feature, idx) => (
                          <motion.span
                            key={idx}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800/50 text-slate-300 border border-slate-700"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
                          >
                            {feature}
                          </motion.span>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <motion.button
                        className="w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 relative overflow-hidden group/btn"
                        style={{ backgroundColor: category.color }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <motion.span 
                          className="relative z-10"
                          animate={hoveredCard === index ? { x: -5 } : { x: 0 }}
                        >
                          Explore Lifestyle
                        </motion.span>
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.5 }}
                        />
                      </motion.button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20" />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Sunset className="w-16 h-16 mx-auto mb-6 text-indigo-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Your Journey Today
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Choose your lifestyle, connect with enthusiasts, and transform every drive into an unforgettable experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-bold text-lg shadow-2xl shadow-indigo-500/50"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(99, 102, 241, 0.6)" }}
                whileTap={{ scale: 0.95 }}
              >
                Find Your Style
              </motion.button>
              <motion.button
                className="px-10 py-4 bg-slate-800/50 backdrop-blur-md text-white rounded-full font-bold text-lg border-2 border-slate-700 hover:border-slate-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Community
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}