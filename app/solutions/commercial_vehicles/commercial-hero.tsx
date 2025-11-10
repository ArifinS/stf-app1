"use client";

import { ChevronRight, ChevronLeft, Pause, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Commercial Application Solutions",
    image: "/images/commercial/one.png",
  },
  {
    id: 2,
    title: "Your Requredment our Solutions",
    image: "/images/commercial/two.png",
  },
  {
    id: 3,
    title: "Meet Your Last Mile Delivery",
    image: "/images/commercial/four.png",
  },
];

export default function CommercialHero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const duration = 5000;
  const increment = (50 / duration) * 100;

  // Auto-play with pause control
  useEffect(() => {
    if (isPaused) return;

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setDirection(1);
          setCurrent((prevCurrent) => (prevCurrent + 1) % slides.length);
          return 0;
        }
        return prev + increment;
      });
    }, 50);

    intervalRef.current = setTimeout(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
      setProgress(0);
    }, duration);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      if (intervalRef.current) clearTimeout(intervalRef.current);
    };
  }, [current, isPaused]);

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
    setProgress(0);
  };

  const togglePause = () => setIsPaused((prev) => !prev);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1400 : -1400,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1400 : -1400,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section
      className="relative h-[600px] md:h-[700px] w-full overflow-hidden"
      style={{
        background: "radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.15), transparent 50%), radial-gradient(circle at 80% 30%, rgba(168, 85, 247, 0.15), transparent 50%), linear-gradient(to bottom right, #0f172a, #1e293b, #0f172a)",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-br from-blue-600/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-40 w-96 h-96 bg-gradient-to-tl from-purple-600/30 to-pink-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      </div>

      {/* Background Slides */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={slides[current].id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 180, damping: 30 },
            opacity: { duration: 0.7 },
            scale: { duration: 0.7 },
          }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            className="object-cover"
            priority
          />
          {/* Dynamic Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handlePrev}
        className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-xl p-4 md:p-5 rounded-full transition-all duration-300 hover:bg-white/20 hover:shadow-2xl hover:shadow-blue-500/30 border border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 md:h-7 md:w-7 text-white" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleNext}
        className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-xl p-4 md:p-5 rounded-full transition-all duration-300 hover:bg-white/20 hover:shadow-2xl hover:shadow-purple-500/30 border border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 md:h-7 md:w-7 text-white" />
      </motion.button>

      {/* Content */}
      <div className="relative z-20 flex h-full items-center">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-4xl">
            {/* Main Heading */}
            <div className="overflow-hidden">
              <motion.h1
                key={`title-${slides[current].id}`}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{
                  duration: 0.9,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight"
                style={{
                  textShadow: "0 10px 30px rgba(0,0,0,0.4)",
                  background: "linear-gradient(to right, #ffffff, #e0e7ff)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                {slides[current].title}
              </motion.h1>
            </div>

            {/* Breadcrumb */}
            <motion.nav
              key={`breadcrumb-${slides[current].id}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex items-center space-x-3 mt-6 text-white/70"
            >
              <motion.span
                whileHover={{ color: "#ffffff" }}
                className="text-sm md:text-base font-medium cursor-pointer transition-colors"
              >
                Home
              </motion.span>
              <ChevronRight className="h-4 w-4 text-white/50" />
              <motion.span
                whileHover={{ color: "#ffffff" }}
                className="text-sm md:text-base font-medium cursor-pointer transition-colors"
              >
                Solutions
              </motion.span>
              <ChevronRight className="h-4 w-4 text-white/50" />
              <span className="text-sm md:text-base font-bold text-white">
                {slides[current].title}
              </span>
            </motion.nav>
          </div>
        </div>
      </div>

      {/* Modern Progress Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className="group relative"
            aria-label={`Go to slide ${i + 1}`}
          >
            {/* Progress Ring */}
            <svg
              className="w-12 h-12 -rotate-90"
              viewBox="0 0 48 48"
            >
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="3"
                fill="none"
              />
              <motion.circle
                cx="24"
                cy="24"
                r="20"
                stroke="url(#gradient)"
                strokeWidth="3"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 20}`}
                strokeDashoffset={`${2 * Math.PI * 20 * (1 - (i === current ? progress / 100 : 0))}`}
                initial={{ strokeDashoffset: 2 * Math.PI * 20 }}
                animate={{ strokeDashoffset: i === current ? 2 * Math.PI * 20 * (1 - progress / 100) : 2 * Math.PI * 20 }}
                transition={{ duration: 0.1 }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>

            {/* Center Dot */}
            <div
              className={`absolute inset-0 m-auto w-3 h-3 rounded-full transition-all duration-300 ${
                i === current ? "bg-white shadow-lg shadow-white/50" : "bg-white/30"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Slide Counter + Play/Pause */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-10 right-6 md:right-12 flex items-center gap-4 text-white/90 backdrop-blur-xl bg-white/10 px-5 py-3 rounded-full z-30 border border-white/20 shadow-2xl"
      >
        <button
          onClick={togglePause}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
        >
          {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
        </button>
        <span className="text-lg font-bold">{String(current + 1).padStart(2, "0")}</span>
        <span className="text-white/40 mx-1">/</span>
        <span className="text-white/60">{String(slides.length).padStart(2, "0")}</span>
      </motion.div>

      {/* Shine Sweep Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0"
        animate={{ opacity: current % 2 === 0 ? [0, 0.3, 0] : [0, 0.2, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] animate-shine"></div>
      </motion.div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-shine {
          animation: shine 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
} 