"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

type Card = {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  tone: "dark" | "light";
  image?: string;
};

const CARDS: Card[] = [
  {
    id: "iphone-17-pro",
    title: "Two Wheeler Solutions",
    subtitle: "All out Pro.",
    price: "From $999 or $41.79/mo. for 24 mo.",
    tone: "light",
    image: "/images/apple/1.png",
  },
  {
    id: "iphone-air",
    title: "Marin Transportation Solutions",
    subtitle: "The thinnest iPhone ever.",
    price: "From $599 or $24.12/mo. for 24 mo.",
    tone: "light",
    image: "/images/apple/2.png",
  },
  {
    id: "iphone-18",
    title: "Commercial Vehecal Solutions",
    subtitle: "Magichromatic.",
    price: "From $799 or $33.29/mo. for 24 mo.",
    tone: "light",
    image: "/images/apple/3.png",
  },
  {
    id: "watch-s11",
    title: "Aromotion Solution",
    subtitle: "The ultimate way to keep your health on track.",
    price: "From $399 or $33.25/mo. for 12 mo.",
    tone: "light",
    image: "/images/apple/7.png",
  },
  {
    id: "watch-se",
    title: "Agriculture and industrial Automotive solution",
    subtitle: "Walk it. Talk it. Track it.",
    price: "From $249 or $20.75/mo. for 12 mo.",
    tone: "light",
  image: "/images/apple/8.png",
  },
    {
    id: "watch-se",
    title: "Passerger Vehecal Solutions",
    subtitle: "Walk it. Talk it. Track it.",
    price: "From $249 or $20.75/mo. for 12 mo.",
    tone: "light",
  image: "/images/apple/4.png",
  },
     {
    id: "watch-se",
    title: "Automotive Lifestife",
    subtitle: "Walk it. Talk it. Track it.",
    price: "From $249 or $20.75/mo. for 12 mo.",
    tone: "light",
  image: "/images/apple/9.png",
  },
];

export default function LatestSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      dragFree: true,
      containScroll: "trimSnaps",
      loop: true,
      duration: 30,
    },
    [Autoplay({ delay: 3200, stopOnInteraction: false })]
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const fullSubtitle = "Take a look at our solutions, right now.";

  // Typing Animation
  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        if (currentIndex === 0) {
          setIsDeleting(false);
          return;
        }
        setTypedText((prev) => prev.slice(0, -1));
        setCurrentIndex(currentIndex - 1);
      } else {
        if (currentIndex === fullSubtitle.length) {
          setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
        setTypedText((prev) => prev + fullSubtitle[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 40 : 80);
    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, fullSubtitle]);

  // Navigation Controls
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Pause on hover
  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = emblaApi.plugins()?.autoplay;
    const node = emblaApi.rootNode();

    const handleMouseEnter = () => autoplay?.stop();
    const handleMouseLeave = () => autoplay?.play();

    node.addEventListener("mouseenter", handleMouseEnter);
    node.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      node.removeEventListener("mouseenter", handleMouseEnter);
      node.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [emblaApi]);

  return (
    <section className="relative w-full pt-24 pb-32 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">

      <div className="mx-auto max-w-7xl px-4 md:px-8 relative z-10">
        {/* Hero Title with Typing */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 mb-3">
            The latest.
          </h2>
          <p className="text-xl md:text-2xl text-zinc-600 font-medium">
            <span className="inline-block min-w-[16ch] text-left">
              {typedText}
              <span className="inline-block w-1 h-7 bg-gradient-to-b from-violet-600 to-pink-600 ml-1 animate-pulse"></span>
            </span>
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 px-4 md:px-8">
            {CARDS.map((card, index) => (
              <article
                key={`${card.id}-${index}`}
                className={cn(
                  "group relative flex-shrink-0 w-[85vw] sm:w-[380px] md:w-[460px] h-[540px] rounded-3xl overflow-hidden",
                  "bg-white/80 backdrop-blur-xl border border-black/20 ",
                  "transition-all duration-700 ease-out",
                  " hover:-translate-y-4",
                  "cursor-grab active:cursor-grabbing"
                )}
                style={{
                  transform: `perspective(1000px) rotateY(${index % 2 === 0 ? '-2deg' : '2deg'})`,
                  transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/20 pointer-events-none z-10"></div>

                {/* Image Container */}
                <div className="relative h-[380px] overflow-hidden">
                  {card.image ? (
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      priority={index < 2}
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-zinc-100 to-zinc-200 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-zinc-300 to-zinc-100"></div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="relative p-8 z-20 bg-gradient-to-t from-white via-white to-transparent">
                  <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2">
                    {card.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Glowing Navigation */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 md:px-8 pointer-events-none">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={cn(
              "pointer-events-auto w-14 h-14 rounded-full",
              "bg-white/90 backdrop-blur-xl shadow-xl border border-white/30",
              "flex items-center justify-center transition-all duration-300",
              "hover:scale-110 hover:shadow-2xl hover:shadow-violet-500/30",
              canScrollPrev ? "opacity-100" : "opacity-30 cursor-not-allowed"
            )}
          >
            <svg
              className="w-6 h-6 text-zinc-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={cn(
              "pointer-events-auto w-14 h-14 rounded-full",
              "bg-white/90 backdrop-blur-xl shadow-xl border border-white/30",
              "flex items-center justify-center transition-all duration-300",
              "hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/30",
              canScrollNext ? "opacity-100" : "opacity-30 cursor-not-allowed"
            )}
          >
            <svg
              className="w-6 h-6 text-zinc-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}