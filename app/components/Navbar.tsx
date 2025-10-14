"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const menuItems = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    dropdown: [
      {
        name: "Our Team",
        href: "/about/profile",
        description: "Meet the passionate individuals driving our mission.",
      },
      {
        name: "Mission Vision",
        href: "/about/mission",
        description: "Our mission and vision define our purpose and aspirations, guiding every step toward creating lasting impact and growth.Core principles that shape our culture and decisions.",
      },
      {
        name: "History",
        href: "/about/history",
        description: "Our journey from inception to industry leadership.",
      },
    ],
  },
  {
    "name": "Solutions",
    "dropdown": [
      {
        "name": "Passenger Vehicles",
        "href": "/solutions/passanger_vehicles",
        "description": "Affordable mobility with efficient performance and minimal maintenance."
      },
      {
        "name": "Two Wheeler",
        "href": "/solutions/two_wheeler",
        "description": "Smart mobility on two wheels—economical, reliable, and effortless."
      },
      {
        "name": "Commercial Vehicles",
        "href": "/solutions/commercial_vehicles",
        "description": "Strong, reliable, and built to keep your operations moving forward with efficient fleets designed."
      },
      {
        "name": "Automotive Lifestyle",
        "href": "/solutions/automotive_lifestyle",
        "description": "From custom designs to car events—connecting communities and celebrating automotive culture."
      },
      {
        "name": "Aeromotion",
        "href": "/solutions/aromotion",
        "description": "Elevating flight: Where reliability meets innovation and breakthrough thinking."
      },
      {
        "name": "Agricultural & Industrial Transportation",
        "href": "/solutions/agricultural_industrial",
        "description": "Innovative mobility designed to move industries and harvest success."
      },
      {
        "name": "Marine Transportation",
        "href": "/solutions/marine_transportation",
        "description": "Smart marine mobility built for efficient, low-maintenance voyages."
      }
    ]
  },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-black/30 backdrop-blur-md fixed w-full z-50 border-b border-white/10 transition-all duration-300">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="EShElL Logo"
            width={120}
            height={60}
            className="rounded-md"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {menuItems.map((item) =>
                item.dropdown ? (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuTrigger className="text-white hover:text-yellow-400 bg-transparent transition">
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] bg-black/90 backdrop-blur-md gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px] rounded-md shadow-lg">
                        {item.dropdown.map((drop) => (
                          <li key={drop.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={drop.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-white hover:bg-white/10 hover:text-yellow-300"
                              >
                                <div className="text-md font-medium leading-none">{drop.name}</div>
                                   <div className="text-xs font-small leading-2 md:leading-5">{drop.description}</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink
                      asChild
                      className={`${navigationMenuTriggerStyle()} text-white bg-transparent hover:text-yellow-400 transition`}
                    >
                      <Link href={item.href}>{item.name}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ),
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </nav>
  )
}

function MobileMenu() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="md:hidden">
      {/* Hamburger */}
      <button
        className="relative z-50 flex flex-col justify-center items-center w-8 h-8 space-y-1"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span
          className={`block h-0.5 w-6 bg-white transition-all ${
            open ? "rotate-45 translate-y-[6px]" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-white transition-all ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-white transition-all ${
            open ? "-rotate-45 -translate-y-[6px]" : ""
          }`}
        />
      </button>

      {/* Animated Bottom-Fixed Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-2xl flex flex-col items-center justify-start pb-10"
          >
            {/* Cards Container */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-sm mx-auto space-y-4 px-4"
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-yellow-400/10 via-gray-900/50 to-yellow-800/10 border border-yellow-400/20 rounded-2xl p-4 shadow-lg shadow-yellow-500/10 backdrop-blur-md"
                >
                  {item.dropdown ? (
                    <>
                      <h3 className="text-yellow-400 text-center text-lg font-semibold mb-2">
                        {item.name}
                      </h3>
                      <div className="flex flex-col space-y-1 text-center">
                        {item.dropdown.map((drop) => (
                          <Link
                            key={drop.name}
                            href={drop.href}
                            onClick={() => setOpen(false)}
                            className="text-white text-sm hover:text-yellow-300 hover:scale-105 transition-all"
                          >
                            {drop.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block text-center text-lg font-semibold text-white hover:text-yellow-400 hover:scale-105 transition-all"
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Footer */}
            <p className="text-gray-400 text-xs mt-6">
              © 2025 <span className="text-yellow-400 font-medium">EShElL Motors</span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
