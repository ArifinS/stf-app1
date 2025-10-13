// app/components/HybridSolutions.tsx

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  {
    title: "Instant Strong Power",
    desc: "Advanced material technologies, such as Nano-coating, enhance the conductivity of material to achieve a high-rate discharge ability and adjustable power supply. It efficiently manage every working condition for you.",
  },
  {
    title: "Small Body, Great Energy",
    desc: "Tailored for hybrid electric vehicles, the high energy density cell makes a thin and light pack possible. More space is saved, making your trip even more comfortable.",
  },
  {
    title: "High Fuel-economizing Rate",
    desc: "The fuel consumption of a vehicle can reach 1.3 L/100 km with a fuel-economizing rate as high as 80%. This very economical and environmentally friendly driving experience also better suits the harmonious coexistence of people, mobility and nature.",
  },
  {
    title: "Ultra-long Service Life",
    desc: "After being charged and discharged 6,000 times, the capacity retention rate is still above 80% and the service life is as long as 15 years. Such durable power allows you to be worry-free during the whole cycle of ownership.",
  },
];

export default function HybridSolutions() {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/images/twowhiler/whi-4.png"
            alt="Hybrid Car"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Hybrid Solutions
          </h2>
          <p className="text-gray-600 leading-relaxed">
            CATL’s small and light high-power cells are naturally match mainstream hybrid systems, 
            which offer power instantly and in full, as well as being highly efficient and energy-saving. 
            This makes you travel green every day.
          </p>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-4 gap-12 text-center">
        {stats.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="px-4"
          >
            <h3 className="text-base font-bold text-blue-800 mb-2">
              {item.title}
            </h3>
            <div className="w-12 h-[1px] bg-gray-300 mx-auto mb-4"></div>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
