"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Truck, Factory, Wheat, Package, Clock, Shield, Users, Award, Leaf, Zap, Settings, TrendingUp, ArrowRight, CheckCircle, Phone, Mail, MapPin, Star, BarChart, Globe, PlayCircle } from 'lucide-react';

const STFAutomationTransport = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const heroSlides = [
    {
      id: 1,
      title: "Agricultural Transport Solutions",
      description: "Specialized logistics for farm equipment, crops, and agricultural products",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1600&h=900&fit=crop",
      icon: Wheat,
      tag: "Agriculture",
      stats: { label: "Delivery Rate", value: "99.8%" }
    },
    {
      id: 2,
      title: "Industrial Equipment Moving",
      description: "Heavy machinery and industrial equipment transportation expertise",
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1600&h=900&fit=crop",
      icon: Factory,
      tag: "Industrial",
      stats: { label: "Equipment Moved", value: "10K+" }
    },
    {
      id: 3,
      title: "Automated Logistics",
      description: "Smart automation systems for efficient supply chain management",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&h=900&fit=crop",
      icon: Zap,
      tag: "Technology",
      stats: { label: "AI Efficiency", value: "95%" }
    },
    {
      id: 4,
      title: "Fleet Management",
      description: "Real-time tracking and management of your transport operations",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&h=900&fit=crop",
      icon: Truck,
      tag: "Logistics",
      stats: { label: "Fleet Size", value: "500+" }
    }
  ];

  const services = [
    {
      icon: Wheat,
      title: "Agricultural Logistics",
      description: "Specialized transport for tractors, harvesters, and farm equipment",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop",
      features: ["Climate Control", "Farm Equipment", "Crop Transport"]
    },
    {
      icon: Factory,
      title: "Industrial Transport",
      description: "Heavy machinery and manufacturing equipment hauling services",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
      features: ["Heavy Hauling", "Construction", "Manufacturing"]
    },
    {
      icon: Package,
      title: "Warehouse Solutions",
      description: "Integrated storage and distribution facilities nationwide",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop",
      features: ["24/7 Access", "Security", "Distribution"]
    },
    {
      icon: Zap,
      title: "Smart Automation",
      description: "IoT tracking and automated fleet management systems",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      features: ["Real-Time GPS", "AI Analytics", "Automation"]
    }
  ];

  const testimonials = [
    {
      name: "John Anderson",
      role: "Farm Owner, Green Valley Farms",
      comment: "STFAutomation transformed our logistics. Equipment arrives on time, every time. Outstanding service!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop"
    },
    {
      name: "Sarah Mitchell",
      role: "Operations Director, BuildCo Industries",
      comment: "Their industrial transport solutions are top-notch. Professional team and reliable delivery.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "CEO, TechManufacturing Inc",
      comment: "The automation technology they use is impressive. Real-time tracking gives us complete peace of mind.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    }
  ];

  const processSteps = [
    { number: "01", title: "Request Quote", description: "Share your transport needs with our team", icon: Phone },
    { number: "02", title: "Plan Route", description: "We design the optimal logistics solution", icon: MapPin },
    { number: "03", title: "Track Shipment", description: "Monitor your cargo in real-time", icon: Globe },
    { number: "04", title: "Delivery Done", description: "Safe delivery to your destination", icon: CheckCircle }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Slider - Modern Card Style */}
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            {/* Main Slide Display */}
            <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
              {/* Left Content */}
              <div className="order-2 lg:order-1">
                <div className="inline-block px-4 py-1 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 text-sm font-semibold mb-6">
                  {heroSlides[currentSlide].tag}
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  {heroSlides[currentSlide].title}
                </h2>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  {heroSlides[currentSlide].description}
                </p>
                
                {/* Stats Badge */}
                <div className="flex items-center gap-6 mb-8">
                  <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      {/* <heroSlides[currentSlide].icon className="w-6 h-6 text-white" /> */}
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{heroSlides[currentSlide].stats.label}</div>
                      <div className="text-2xl font-bold text-white">{heroSlides[currentSlide].stats.value}</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all flex items-center gap-2">
                    Start Now <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-xl font-semibold hover:bg-white/10 transition-all flex items-center gap-2">
                    <PlayCircle className="w-5 h-5" /> Watch Demo
                  </button>
                </div>
              </div>

              {/* Right Image */}
              <div className="order-1 lg:order-2 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
                  <img
                    src={heroSlides[currentSlide].image}
                    alt={heroSlides[currentSlide].title}
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl blur-3xl opacity-50"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl blur-3xl opacity-50"></div>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex gap-4 justify-center">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(index)}
                  className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                    index === currentSlide 
                      ? 'w-32 h-20 ring-2 ring-green-500 ring-offset-2 ring-offset-slate-950' 
                      : 'w-24 h-16 opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40"></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="py-12 px-4 bg-gradient-to-r from-green-900/20 to-blue-900/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">500+</div>
            <div className="text-gray-400">Fleet Vehicles</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">5K+</div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">15+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">99.5%</div>
            <div className="text-gray-400">Success Rate</div>
          </div>
        </div>
      </div>

      {/* Services - Modern Bento Grid */}
      <div id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 text-sm font-semibold mb-4">
              OUR SERVICES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Complete Transport Solutions</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Specialized services for agriculture and industrial sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-green-500/50 transition-all duration-500"
              >
                <div className="grid md:grid-cols-2 gap-6 p-8">
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-400 mb-6">{service.description}</p>
                    </div>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden h-64">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div id="process" className="py-20 px-4 bg-gradient-to-b from-green-900/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-blue-500/20 border border-blue-500/50 rounded-full text-blue-400 text-sm font-semibold mb-4">
              HOW IT WORKS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Simple Process</h2>
            <p className="text-xl text-gray-400">From request to delivery in four easy steps</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-green-500 to-transparent -translate-x-1/2"></div>
                )}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-green-500/50 transition-all group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-5xl font-bold text-green-500/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials - Modern Slider */}
      <div id="testimonials" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-purple-500/20 border border-purple-500/50 rounded-full text-purple-400 text-sm font-semibold mb-4">
              TESTIMONIALS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Clients Say</h2>
          </div>

          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  index === currentTestimonial ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute inset-0'
                }`}
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-12">
                  <div className="flex gap-2 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-2xl text-white mb-8 leading-relaxed">"{testimonial.comment}"</p>
                  <div className="flex items-center gap-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover border-2 border-green-500" />
                    <div>
                      <div className="font-bold text-white text-lg">{testimonial.name}</div>
                      <div className="text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentTestimonial ? 'w-12 bg-green-500' : 'w-2 bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-blue-600 rounded-3xl p-12 md:p-16 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&h=600&fit=crop')] opacity-10 bg-cover bg-center"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transform Your Logistics Today
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                Join 5000+ satisfied clients who trust STFAutomation for their transportation needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-all flex items-center justify-center gap-2 shadow-lg">
                  <Phone className="w-5 h-5" /> Request Quote
                </button>
                <button className="px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white text-white rounded-xl font-semibold hover:bg-white/30 transition-all flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" /> Contact Sales
                </button>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-white">
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  <span>info@stfautomation.com</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>Nationwide Coverage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-md border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-white">STFAutomation</div>
                <div className="text-xs text-gray-400">Smart Transport Solutions</div>
              </div>
            </div>
            <div className="text-gray-400 text-center">
              © 2025 STFAutomation. All rights reserved. Leading provider of agricultural and industrial transportation.
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default STFAutomationTransport;