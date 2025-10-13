"use client"

import { motion } from "framer-motion"

const features = [
  {
    title: "5 min",
    description:
      "High-rate, fast-charging technology combined with the intelligent BMS strategy makes it possible to charge a battery to 80% in just five minutes.",
  },
  {
    title: "1000 km",
    description:
      "Thanks to advanced nickel-rich NCM chemistry material, silicon-doped lithium supplement technology, and innovative cell to pack (CTP) technology, the battery system energy density is improved to 265Wh/kg. This enables electric vehicles to have an ultra-long driving mileage and eliminates users’ range anxiety.",
  },
  {
    title: "±3%",
    description:
      "The BMS ensures SOC estimation inaccuracy within ±3%, making you travel smart.",
  },
  {
    title: "+6℃/min",
    description:
      "Using a unique battery self-heating technology, the battery is able to warm up 6℃ per minute without additional cost. It only takes five minutes to raise the battery temperature from -30℃ to 0℃.",
  },
  {
    title: "1-3 battery blocks",
    description:
      "Featuring the flexible combination, EVOGO provides customers with need-based battery rental. Customers are free to take one to three blocks to meet different range requirements at swap stations, enjoying the freedom of power consumption.",
  },
]

export default function FeatureGrid() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-x-12 gap-y-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h3 className="text-2xl font-bold text-blue-700 mb-3">
              {feature.title}
            </h3>
            <div className="h-px bg-gray-200 mb-4" />
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
