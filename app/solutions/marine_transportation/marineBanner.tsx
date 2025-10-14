"use client";
import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Ship,
  Anchor,
  Waves,
  Package,
  Clock,
  Shield,
  Globe,
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";

const MarineTransportSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Container Shipping",
      description: "Global cargo solutions with state-of-the-art container vessels",
      image:
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&h=600&fit=crop",
      icon: Ship,
      color: "from-blue-600 to-cyan-500",
    },
    {
      id: 2,
      title: "Port Services",
      description: "Comprehensive port management and logistics support",
      image:
        "https://images.unsplash.com/photo-1606768666853-403c90a981ad?w=1200&h=600&fit=crop",
      icon: Anchor,
      color: "from-teal-600 to-blue-500",
    },
    {
      id: 3,
      title: "Ocean Freight",
      description: "Reliable maritime transport across international waters",
      image:
        "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?w=1200&h=600&fit=crop",
      icon: Waves,
      color: "from-indigo-600 to-blue-600",
    },
    {
      id: 4,
      title: "Bulk Carriers",
      description: "Efficient transportation of dry and liquid bulk cargo",
      image:
        "https://images.unsplash.com/photo-1569090551734-8428e73d22bb?w=1200&h=600&fit=crop",
      icon: Ship,
      color: "from-blue-700 to-teal-600",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const IconComponent = slides[currentSlide].icon;

  const services = [
    {
      icon: Ship,
      title: "Fleet Management",
      description:
        "Modern fleet with advanced tracking and monitoring systems for optimal performance",
    },
    {
      icon: Package,
      title: "Cargo Handling",
      description:
        "Expert handling of all cargo types with specialized equipment and trained personnel",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description:
        "99.8% on-time delivery rate with real-time tracking and proactive communication",
    },
    {
      icon: Shield,
      title: "Secure Transport",
      description:
        "Advanced security protocols and insurance coverage for complete peace of mind",
    },
    {
      icon: Globe,
      title: "Global Network",
      description:
        "Connected to 150+ ports across 80 countries for seamless worldwide shipping",
    },
    {
      icon: Anchor,
      title: "Port Operations",
      description:
        "Efficient port services including loading, unloading, and customs clearance",
    },
  ];

  const features = [
    "Real-time cargo tracking",
    "24/7 customer support",
    "Eco-friendly vessels",
    "Competitive pricing",
    "Insurance included",
    "Door-to-door service",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Slider Section */}
      <div className="flex items-center justify-center p-4 py-12">
        <div className="w-full max-w-6xl">
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            {slides.map((slide, index: number) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentSlide
                    ? "opacity-100 translate-x-0"
                    : index < currentSlide
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <div className="absolute inset-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-70`}
                  ></div>
                  <div className="absolute inset-0 bg-black opacity-30"></div>
                </div>

                <div className="relative h-full flex flex-col justify-center px-12 md:px-20">
                  <div className="mb-6 animate-fade-in">
                    <IconComponent className="w-16 h-16 text-white opacity-90" />
                  </div>
                  <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl text-white/90 max-w-2xl animate-slide-up-delay">
                    {slide.description}
                  </p>
                  <button className="mt-8 px-8 py-4 bg-white text-blue-900 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 w-fit hover:scale-105 animate-slide-up-delay-2 flex items-center gap-2">
                    Learn More <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}

            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
              {slides.map((_, index: number) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide
                      ? "w-12 h-3 bg-white"
                      : "w-3 h-3 bg-white/50 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-200">Vessels Worldwide</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl font-bold text-white mb-2">150+</div>
              <div className="text-blue-200">Ports Connected</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-200">Customer Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Comprehensive maritime solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index: number) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
              >
                <service.icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-blue-200">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Us
              </h2>
              <p className="text-xl text-blue-200 mb-8">
                Industry-leading maritime transportation with unmatched
                reliability and service quality
              </p>
              <div className="space-y-4">
                {features.map((feature, index: number) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                    <span className="text-lg text-white">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="mt-8 px-8 py-4 bg-cyan-500 text-white rounded-full font-semibold hover:bg-cyan-400 transition-all duration-300 flex items-center gap-2">
                Get Started <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-center">
                <Users className="w-12 h-12 text-white mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">10K+</div>
                <div className="text-white/90">Happy Clients</div>
              </div>
              <div className="bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl p-8 text-center">
                <Award className="w-12 h-12 text-white mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">25+</div>
                <div className="text-white/90">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl p-8 text-center">
                <TrendingUp className="w-12 h-12 text-white mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">99.8%</div>
                <div className="text-white/90">Success Rate</div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl p-8 text-center">
                <Globe className="w-12 h-12 text-white mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">80+</div>
                <div className="text-white/90">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Ship with Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free quote today and experience world-class maritime
            transportation services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2">
              Request Quote <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        .animate-slide-up-delay {
          animation: slide-up 0.8s ease-out 0.2s both;
        }
        .animate-slide-up-delay-2 {
          animation: slide-up 0.8s ease-out 0.4s both;
        }
      `}</style>
    </div>
  );
};

export default MarineTransportSlider;