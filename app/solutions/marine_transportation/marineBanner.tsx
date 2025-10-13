"use client";
import { useState, useEffect } from "react";
import { Anchor, Ship, Waves, MapPin, ArrowRight, Clock, Package } from "lucide-react";

type Slide = {
  id: number;
  vessel: string;
  route: string;
  title: string;
  description: string;
  image: string;
  stats: {
    capacity: string;
    speed: string;
    ports: string;
  };
  icon: React.ElementType;
  gradient: string;
};

export default function MaritimeSlider() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  const slides: Slide[] = [
    {
      id: 1,
      vessel: "CONTAINER SHIP",
      route: "Asia to Europe",
      title: "Global Container Services",
      description:
        "Reliable container shipping with state-of-the-art vessels carrying 20,000+ TEU capacity",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&q=80",
      stats: { capacity: "20,000 TEU", speed: "22 Knots", ports: "150+" },
      icon: Package,
      gradient: "from-blue-900 via-blue-700 to-cyan-600",
    },
    {
      id: 2,
      vessel: "BULK CARRIER",
      route: "Trans-Pacific",
      title: "Dry Bulk Transportation",
      description:
        "Specialized bulk carriers for coal, grain, ore, and raw materials across global trade routes",
      image:
        "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1920&q=80",
      stats: { capacity: "180,000 DWT", speed: "14 Knots", ports: "85+" },
      icon: Ship,
      gradient: "from-slate-900 via-slate-700 to-blue-800",
    },
    {
      id: 3,
      vessel: "TANKER FLEET",
      route: "Middle East to Americas",
      title: "Liquid Cargo Solutions",
      description:
        "Advanced tanker fleet for crude oil, refined products, and chemical transportation",
      image:
        "https://images.unsplash.com/photo-1605651202774-7d573fd3f12d?w=1920&q=80",
      stats: { capacity: "320,000 DWT", speed: "16 Knots", ports: "120+" },
      icon: Waves,
      gradient: "from-indigo-900 via-purple-800 to-blue-700",
    },
    {
      id: 4,
      vessel: "RO-RO CARRIER",
      route: "Global Auto Trade",
      title: "Vehicle Transportation",
      description:
        "Roll-on/Roll-off vessels specialized in automobiles and heavy machinery transport",
      image:
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1920&q=80",
      stats: { capacity: "8,500 Cars", speed: "20 Knots", ports: "95+" },
      icon: Anchor,
      gradient: "from-teal-900 via-blue-800 to-cyan-700",
    },
  ];

  const currentSlide = slides[activeIndex];
  const Icon = currentSlide.icon;

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((current) => (current + 1) % slides.length);
          return 0;
        }
        return prev + 0.5;
      });
    }, 30);

    return () => clearInterval(progressTimer);
  }, [activeIndex, slides.length]);

  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
  };

  return (
    <div className="relative w-full h-screen bg-slate-950 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {slides.map((slide, index: number) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-90`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
          </div>
        ))}
      </div>

      {/* Animated Wave Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            className="text-cyan-400 animate-pulse"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative h-full flex flex-col justify-between p-8 md:p-12 lg:p-16 z-10">
        {/* Top Header */}
        <div className="flex justify-between items-start">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 flex items-center justify-center">
              <Anchor className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg tracking-wide">
                MARITIME
              </h3>
              <p className="text-cyan-300 text-xs tracking-widest">LOGISTICS</p>
            </div>
          </div>

          {/* Vessel Type */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full">
            <p className="text-white font-mono text-sm tracking-wider">
              {currentSlide.vessel}
            </p>
          </div>
        </div>

        {/* Center Content */}
        <div className="max-w-5xl">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold tracking-wide">
              {currentSlide.route}
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 leading-none">
            {currentSlide.title}
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mb-12 leading-relaxed">
            {currentSlide.description}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mb-12">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <Package className="w-5 h-5 text-cyan-400" />
                <p className="text-gray-400 text-sm">Capacity</p>
              </div>
              <p className="text-white text-2xl font-bold">
                {currentSlide.stats.capacity}
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-cyan-400" />
                <p className="text-gray-400 text-sm">Speed</p>
              </div>
              <p className="text-white text-2xl font-bold">
                {currentSlide.stats.speed}
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <p className="text-gray-400 text-sm">Ports</p>
              </div>
              <p className="text-white text-2xl font-bold">
                {currentSlide.stats.ports}
              </p>
            </div>
          </div>

          <button className="group px-8 py-5 bg-cyan-500 hover:bg-cyan-400 text-white rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3 shadow-2xl">
            Request Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-between items-end">
          <div className="flex gap-4">
            {slides.map((slide, index: number) => {
              const SlideIcon = slide.icon;
              return (
                <button
                  key={slide.id}
                  onClick={() => handleSlideChange(index)}
                  className="group relative"
                >
                  <div
                    className={`w-20 h-20 rounded-2xl border-2 transition-all duration-500 flex items-center justify-center ${
                      index === activeIndex
                        ? "bg-white border-white scale-110"
                        : "bg-white/10 border-white/30 hover:bg-white/20 backdrop-blur-md"
                    }`}
                  >
                    <SlideIcon
                      className={`w-8 h-8 transition-colors ${
                        index === activeIndex
                          ? "text-slate-900"
                          : "text-white"
                      }`}
                    />
                  </div>
                  {index === activeIndex && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-cyan-400 transition-all duration-100"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}
                  <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap shadow-xl">
                      {slide.vessel}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-5xl font-black text-white font-mono">
                {String(activeIndex + 1).padStart(2, "0")}
              </p>
              <p className="text-gray-400 text-sm font-mono">
                / {String(slides.length).padStart(2, "0")}
              </p>
            </div>
            <div className="w-px h-16 bg-white/30" />
            <Icon className="w-12 h-12 text-cyan-400" />
          </div>
        </div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>
    </div>
  );
}
