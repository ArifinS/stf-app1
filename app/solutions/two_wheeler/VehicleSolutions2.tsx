// app/components/VehicleSolutions.tsx

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/twowhiler/whi-1.png",
  "/images/twowhiler/whi-2.png",
  "/images/twowhiler/whi-3.png",
];

const stats = [
  {
    title: "400 km–600 km",
    desc: "The CTP highly efficient integrated technology with a stable chemistry system balance product performance and economic benefits by offering 400–600 km mileage, which is just enough to meet daily operation requirements.",
  },
  {
    title: "30 min",
    desc: "With the unique 'fast ion ring' and 'super electronic network' technologies, the battery can be charged to 80% SOC in only 30 minutes, which makes your time more valuable.",
  },
  {
    title: "RMB60,000/year",
    desc: "Compared with corresponding internal combustion engine (ICE), electric vehicles with CATL batteries can save RMB 60,000 in energy consumption costs each year. Same cost, higher returns.",
  },
  {
    title: "8 years or 800,000 km",
    desc: "With an ultra-long warranty of eight years or 800,000 km, the full life cycle demands of operating vehicles can be met with a single battery, enabling you to enjoy a worry-free and cost-saving driving experience.",
  },
];

const bottomStats = [
  {
    title: "±3%",
    desc: "The BMS ensures SOC estimation inaccuracy within ±3%, promising you a safe and timely arrival.",
  },
  {
    title: "+6℃/min",
    desc: "Using a unique battery self-heating technology, the battery is able to warm up +6℃ per minute without additional cost; it only takes five minutes to raise the battery temperature from −30℃ to 0℃.",
  },
  {
    title: "1 min",
    desc: "Supported by modular battery swap solution, it takes about one minute to swap a single battery block, saving refueling time and creating higher operation value.",
  },
];

export default function VehicleSolutions() {
  const [index, setIndex] = useState(0);

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Electric Operating Vehicle Solutions
          </h2>
          <p className="text-gray-600 leading-relaxed">
            CATL has an ultra-long service life traction battery system solution that perfectly satisfies the needs of operating vehicles which are frequently used, and enables them to achieve uninterrupted operation, 24 hours a day, all year round.
          </p>
        </motion.div>

        {/* Image Slider */}
        <div className="flex flex-col items-center">
          <div className="relative w-[500px] h-[300px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 flex justify-center items-center"
              >
                <Image
                  src={images[index]}
                  alt={`Slide ${index + 1}`}
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex mt-4 space-x-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full ${
                  index === i ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-4 gap-8 text-center">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-blue-600 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Bottom Stats */}
      <div className="max-w-4xl mx-auto mt-16 grid md:grid-cols-3 gap-8 text-center">
        {bottomStats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-blue-600 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
