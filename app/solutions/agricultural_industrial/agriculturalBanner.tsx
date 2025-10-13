"use client";
import { useState, useEffect } from 'react';
import { Truck, Wheat, Factory, Boxes, Gauge, Users, ChevronDown } from 'lucide-react';

export default function AgriIndustrialSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      id: 1,
      category: "AGRICULTURAL",
      title: "Farm to Market",
      subtitle: "Fresh Produce Distribution",
      description: "Temperature-controlled fleet ensuring farm-fresh quality from harvest to destination with advanced cold chain logistics",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1920&q=80",
      icon: Wheat,
      color: "#16a34a",
      bgGradient: "from-green-900/95 to-emerald-800/95",
      features: ["Climate Control", "GPS Tracking", "24/7 Monitoring"],
      stats: { fleet: "500+ Trucks", coverage: "48 States", delivery: "99.8%" }
    },
    {
      id: 2,
      category: "INDUSTRIAL",
      title: "Heavy Equipment",
      subtitle: "Machinery Transport Solutions",
      description: "Specialized hauling for construction equipment, industrial machinery, and oversized cargo with expert handling",
      image: "https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?w=1920&q=80",
      icon: Factory,
      color: "#ea580c",
      bgGradient: "from-orange-900/95 to-red-800/95",
      features: ["Flatbed Service", "Lowboy Trailers", "Crane Support"],
      stats: { fleet: "350+ Units", coverage: "North America", delivery: "99.5%" }
    },
    {
      id: 3,
      category: "AGRICULTURAL",
      title: "Grain & Livestock",
      subtitle: "Bulk Agricultural Transport",
      description: "Comprehensive grain hauling and livestock transportation with certified handlers and FDA-compliant vehicles",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80",
      icon: Boxes,
      color: "#ca8a04",
      bgGradient: "from-yellow-900/95 to-amber-800/95",
      features: ["Hopper Bottom", "Livestock Trailers", "Sanitation Certified"],
      stats: { fleet: "420+ Trailers", coverage: "Midwest", delivery: "99.9%" }
    },
    {
      id: 4,
      category: "INDUSTRIAL",
      title: "Manufacturing Logistics",
      subtitle: "Supply Chain Excellence",
      description: "Just-in-time delivery for manufacturing plants with real-time inventory management and production scheduling",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80",
      icon: Truck,
      color: "#0284c7",
      bgGradient: "from-blue-900/95 to-cyan-800/95",
      features: ["JIT Delivery", "Inventory Sync", "Multi-Stop Routes"],
      stats: { fleet: "600+ Vehicles", coverage: "Nationwide", delivery: "99.7%" }
    }
  ];

  const current = slides[activeSlide];

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 7000);
    return () => clearInterval(timer);
  }, [activeSlide, isTransitioning]);

  const CurrentIcon = current.icon;

  return (
    <div className="relative w-full h-screen bg-slate-950 overflow-hidden">
      {/* Split Screen Layout */}
      <div className="flex h-full">
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 relative z-20 flex flex-col justify-between p-8 md:p-12 lg:p-16">
          {/* Top Section */}
          <div>
            {/* Category Badge */}
            <div className="inline-flex items-center gap-3 mb-8">
              <div 
                className="px-5 py-2 rounded-full font-bold text-sm tracking-widest text-white border-2"
                style={{ 
                  borderColor: current.color,
                  backgroundColor: `${current.color}20`
                }}
              >
                {current.category}
              </div>
              <div className="flex gap-1">
                {slides.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      idx === activeSlide ? 'w-12 bg-white' : 'w-8 bg-white/30'
                    }`}
                    style={idx === activeSlide ? { backgroundColor: current.color } : {}}
                  />
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <h2 
                className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight"
                style={{ textShadow: '2px 2px 20px rgba(0,0,0,0.5)' }}
              >
                {current.title}
              </h2>
              
              <h3 
                className="text-3xl md:text-4xl font-light"
                style={{ color: current.color }}
              >
                {current.subtitle}
              </h3>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
                {current.description}
              </p>

              {/* Features List */}
              <div className="flex flex-wrap gap-3 pt-4">
                {current.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg text-white text-sm font-medium"
                  >
                    ✓ {feature}
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <button 
                  className="group px-10 py-5 rounded-full font-bold text-lg text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-3 shadow-2xl"
                  style={{ backgroundColor: current.color }}
                >
                  Get a Quote
                  <ChevronDown className="w-5 h-5 rotate-[-90deg] group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5">
              <Truck className="w-6 h-6 mb-2" style={{ color: current.color }} />
              <p className="text-white text-2xl font-bold mb-1">{current.stats.fleet}</p>
              <p className="text-gray-400 text-sm">Fleet Size</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5">
              <Gauge className="w-6 h-6 mb-2" style={{ color: current.color }} />
              <p className="text-white text-2xl font-bold mb-1">{current.stats.coverage}</p>
              <p className="text-gray-400 text-sm">Coverage</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5">
              <Users className="w-6 h-6 mb-2" style={{ color: current.color }} />
              <p className="text-white text-2xl font-bold mb-1">{current.stats.delivery}</p>
              <p className="text-gray-400 text-sm">On-Time</p>
            </div>
          </div>
        </div>

        {/* Right Side - Images */}
        <div className="hidden lg:block w-1/2 relative">
          {slides.map((slide, index) => {
            const SlideIcon = slide.icon;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === activeSlide
                    ? 'opacity-100 scale-100 z-10'
                    : index < activeSlide
                    ? 'opacity-0 scale-95 -translate-y-12 z-0'
                    : 'opacity-0 scale-95 translate-y-12 z-0'
                }`}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient}`} />
                </div>

                {/* Large Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="w-64 h-64 rounded-full flex items-center justify-center backdrop-blur-sm border-4"
                    style={{ 
                      borderColor: slide.color,
                      backgroundColor: `${slide.color}10`
                    }}
                  >
                    <SlideIcon className="w-32 h-32 text-white" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-12 right-12">
                  <div 
                    className="text-9xl font-black opacity-10"
                    style={{ color: slide.color }}
                  >
                    {String(slide.id).padStart(2, '0')}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Vertical Navigation */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20">
            {slides.map((slide, index) => {
              const NavIcon = slide.icon;
              return (
                <button
                  key={slide.id}
                  onClick={() => {
                    if (!isTransitioning) {
                      setIsTransitioning(true);
                      setActiveSlide(index);
                      setTimeout(() => setIsTransitioning(false), 1000);
                    }
                  }}
                  className="group relative"
                  disabled={isTransitioning}
                >
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 border-2 ${
                      index === activeSlide
                        ? 'bg-white scale-110 shadow-2xl'
                        : 'bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20'
                    }`}
                    style={index === activeSlide ? { borderColor: slide.color } : {}}
                  >
                    <NavIcon
                      className={`w-6 h-6 transition-colors ${
                        index === activeSlide ? 'text-slate-900' : 'text-white'
                      }`}
                    />
                  </div>
                  {/* Tooltip */}
                  <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap shadow-xl">
                      {slide.category}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Image Background */}
      <div className="lg:hidden absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${slide.bgGradient}`} />
          </div>
        ))}
      </div>

      {/* Diagonal Divider (Desktop) */}
      <div className="hidden lg:block absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent z-30" />

      {/* Corner Decorations */}
      <div 
        className="absolute top-0 left-0 w-32 h-32 opacity-20"
        style={{
          background: `linear-gradient(135deg, ${current.color} 0%, transparent 100%)`
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-32 h-32 opacity-20"
        style={{
          background: `linear-gradient(-45deg, ${current.color} 0%, transparent 100%)`
        }}
      />
    </div>
  );
}