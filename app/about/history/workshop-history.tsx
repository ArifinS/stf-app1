"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wrench, Users, Award, MapPin, Calendar, Car, Bike } from "lucide-react"
import Image from "next/image" // Import Next.js Image component
import { motion } from "framer-motion"

const milestones = [
  {
    year: "1985",
    title: "Humble Beginnings",
    description: "Started as a small family garage with just 2 mechanics and a passion for quality automotive repair.",
    icon: Wrench,
    image: "/images/workshop/w1.jpg",
  },
  {
    year: "1992",
    title: "First Expansion",
    description: "Expanded to a 5-bay facility and introduced specialized services for European vehicles.",
    icon: MapPin,
    image: "/images/workshop/w2.jpg",
  },
  {
    year: "2001",
    title: "Digital Revolution",
    description: "Implemented computerized diagnostic systems and became certified for hybrid vehicle maintenance.",
    icon: Car,
    image: "/images/workshop/w3.jpg",
  },
  {
    year: "2010",
    title: "Award Recognition",
    description: "Received 'Best Auto Service' award and expanded team to 15 certified technicians.",
    icon: Award,
    image: "/images/workshop/w4.jpg",
  },
  {
    year: "2018",
    title: "Modern Facility",
    description: "Moved to our current state-of-the-art 12,000 sq ft facility with advanced equipment.",
    icon: Users,
     image: "/images/workshop/w5.jpg",
  },
  {
    year: "2024",
    title: "Electric Future",
    description: "Became certified for electric vehicle service and installed EV charging stations.",
    icon: Bike,
     image: "/images/workshop/w6.jpg",
  },
]

const stats = [
  { number: "39", label: "Years of Excellence", icon: Calendar },
  { number: "50,000+", label: "Vehicles Serviced", icon: Car },
  { number: "25", label: "Expert Technicians", icon: Users },
  { number: "98%", label: "Customer Satisfaction", icon: Award },
]

export default function WorkshopHistory() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-4">
              Since 1985
            </Badge>
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Step Into The 
            <span className="text-primary"> New Automotive Dimention</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Experience the future of mobility with cutting-edge delivering unmatched reliability and efficiency.From desiging to delevaring products on your hands where you will find all solution in one place
          </motion.p>
        </div>
      </motion.section>


      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey Through Time</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every milestone tells a story of growth, innovation, and our commitment to serving our community.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <motion.div 
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-0.5"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            ></motion.div>

            <motion.div 
              className="space-y-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.3,
                    delayChildren: 0.4
                  }
                }
              }}
            >
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline Dot */}
                  <motion.div 
                    className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full md:transform md:-translate-x-1.5 z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  ></motion.div>

                  {/* Content Card */}
                  <motion.div 
                    className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                    whileHover={{ y: -5 }}
                  >
                    <motion.div
                      className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.div 
                        className="aspect-video bg-muted relative overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <Image
                          src={milestone.image}
                          alt={milestone.title}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          viewport={{ once: true }}
                        ></motion.div>
                      </motion.div>
                      <CardContent className="p-6">
                        <motion.div 
                          className="flex items-center gap-3 mb-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                            <milestone.icon className="w-5 h-5 text-primary" />
                          </div>
                          <Badge variant="secondary" className="font-mono">
                            {milestone.year}
                          </Badge>
                        </motion.div>
                        <motion.h3 
                          className="text-xl font-semibold text-foreground mb-3"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          viewport={{ once: true }}
                        >
                          {milestone.title}
                        </motion.h3>
                        <motion.p 
                          className="text-muted-foreground text-pretty"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          viewport={{ once: true }}
                        >
                          {milestone.description}
                        </motion.p>
                      </CardContent>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Built on Strong Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles have guided us through nearly four decades of service.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {[
              { icon: Award, title: "Quality First", desc: "Every repair, every service, every interaction is held to the highest standards of excellence." },
              { icon: Users, title: "Community Focus", desc: "We are not just a business, we are neighbors committed to keeping our community moving." },
              { icon: Wrench, title: "Innovation", desc: "Continuously evolving with technology to provide the best possible service experience." }
            ].map((value, index) => (
              <motion.div 
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="text-center p-8 hover:shadow-lg transition-shadow duration-300">
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <value.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-semibold text-foreground mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {value.title}
                  </motion.h3>
                  <motion.p 
                    className="text-muted-foreground"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {value.desc}
                  </motion.p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Be Part of Our Story?
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience the difference that four decades of expertise makes. Join thousands of satisfied customers who
            trust us with their vehicles.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Service
            </motion.button>
            <motion.button 
              className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-accent transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}