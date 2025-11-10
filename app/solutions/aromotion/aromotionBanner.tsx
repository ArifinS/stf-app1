"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

type Slide = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  color: string;
};

export default function PremiumSlider() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const slides: Slide[] = [
  {
    id: 1,
    title: "AeroMotion",
    subtitle: "Reach New Heights",
    description: "AeroMotion is a visionary transportation lineup bringing advanced dynamic problem solution to bring highest speed for the fastest transportation system to solve the complex dynamic problem.",
    image: "/images/aromotion/ae1.png",
    color: "#0ea5e9",
  },
  {
    id: 2,
    title: "Custom Aero Solution",
    subtitle: "Your Requirement, Our Commitment",
    description: "At STF Automotive, our Aero Motion Solutions deliver custom-designed aerial systems—from drones to air taxis—engineered to meet unique performance needs and specialized altitude requirements. We blend innovation, efficiency, and precision engineering to shape the next era of smart air mobility.",
    image: "/images/aromotion/ae2.png",
    color: "#8b5cf6",
  },
  {
    id: 3,
    title: "Aero Sourcing",
    subtitle: "Quality with Reliability for Your Product",
    description: "STF Automotive provides specialized sourcing solutions for the aerospace and drone industry, offering high-quality motors, propellers, control systems, and structural components. Our goal is to deliver reliable, efficient, and performance-ready parts that power the next generation of air mobility solutions.",
    image: "/images/aromotion/ae3.png",
    color: "#f59e0b",
  },
  ];

  const nextSlide = () => {
    setDirection("next");
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection("prev");
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? "next" : "prev");
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [currentSlide, isPlaying]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Main Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index: number) => {
          const isActive = index === currentSlide;
          const isPrev =
            index === (currentSlide - 1 + slides.length) % slides.length;
          const isNext =
            index === (currentSlide + 1) % slides.length;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                isActive
                  ? "opacity-100 z-20 scale-100"
                  : isPrev
                  ? "opacity-0 z-10 scale-110 -translate-x-full"
                  : isNext
                  ? "opacity-0 z-10 scale-90 translate-x-full"
                  : "opacity-0 z-0 scale-90"
              }`}
            >
              {/* Background Image with Parallax Effect */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-out ${
                    isActive ? "scale-110" : "scale-100"
                  }`}
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center px-8 md:px-16 lg:px-24 z-10">
                <div className="max-w-3xl">
                  {/* Number Badge */}
                  <div
                    className={`mb-8 transition-all duration-1000 ${
                      isActive
                        ? "opacity-100 translate-x-0 delay-200"
                        : "opacity-0 -translate-x-20"
                    }`}
                  >
                    <div className="inline-flex items-center gap-3">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white border-2 border-white/30 backdrop-blur-sm"
                        style={{ backgroundColor: `${slide.color}40` }}
                      >
                        {slide.id}
                      </div>
                      <div className="h-px w-20 bg-gradient-to-r from-white/50 to-transparent" />
                    </div>
                  </div>

                  {/* Title */}
                  <h1
                    className={`text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 leading-none transition-all duration-1000 ${
                      isActive
                        ? "opacity-100 translate-x-0 delay-400"
                        : "opacity-0 -translate-x-20"
                    }`}
                    style={{
                      textShadow: "4px 4px 20px rgba(0,0,0,0.8)",
                    }}
                  >
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <h2
                    className={`text-3xl md:text-5xl font-light mb-8 transition-all duration-1000 ${
                      isActive
                        ? "opacity-100 translate-x-0 delay-600"
                        : "opacity-0 -translate-x-20"
                    }`}
                    style={{ color: slide.color }}
                  >
                    {slide.subtitle}
                  </h2>

                  {/* Description */}
                  <p
                    className={`text-xl md:text-2xl text-white/90 mb-12 font-light leading-relaxed transition-all duration-1000 ${
                      isActive
                        ? "opacity-100 translate-x-0 delay-800"
                        : "opacity-0 -translate-x-20"
                    }`}
                  >
                    {slide.description}
                  </p>

                  {/* CTA Buttons */}
                  <div
                    className={`flex gap-4 transition-all duration-1000 ${
                      isActive
                        ? "opacity-100 translate-x-0 delay-1000"
                        : "opacity-0 -translate-x-20"
                    }`}
                  >
                    <button
                      className="px-10 py-5 rounded-full font-bold text-lg text-white border-2 border-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
                      style={{ backgroundColor: slide.color }}
                    >
                      Explore Now
                    </button>
                    <button className="px-10 py-5 rounded-full font-semibold text-lg text-white border-2 border-white/30 backdrop-blur-md hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                      View Gallery
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Side Navigation */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-30">
        {slides.map((slide, index: number) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative"
          >
            <div
              className={`w-4 h-4 rounded-full border-2 border-white transition-all duration-500 ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-transparent hover:bg-white/50"
              }`}
            />
            <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              <div className="bg-white text-black px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap shadow-xl">
                {slide.title}
              </div>
            </div>
            {index === currentSlide && (
              <div
                className="absolute right-6 top-1/2 -translate-y-1/2 h-px w-8 bg-white animate-pulse"
                style={{ backgroundColor: slides[currentSlide].color }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <div className="flex items-center justify-between px-8 py-8">
          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
            <button
              onClick={nextSlide}
              className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="flex-1 mx-12">
            <div className="flex items-center gap-4">
              <span className="text-white font-bold text-lg">
                {String(currentSlide + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full transition-all duration-500 rounded-full"
                  style={{
                    width: `${((currentSlide + 1) / slides.length) * 100}%`,
                    backgroundColor: slides[currentSlide].color,
                  }}
                />
              </div>
              <span className="text-white/60 font-bold text-lg">
                {String(slides.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Play / Pause */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-110"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" fill="currentColor" />
            ) : (
              <Play className="w-6 h-6" fill="currentColor" />
            )}
          </button>
        </div>
      </div>

      {/* Decorative Text */}
      <div className="absolute top-8 left-8 z-30">
        <div className="text-white/40 text-sm font-mono tracking-wider">
          PREMIUM COLLECTION
        </div>
      </div>
    </div>
  );
}
