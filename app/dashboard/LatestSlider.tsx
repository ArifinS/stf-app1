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
    title: "iPhone 17 Pro",
    subtitle: "All out Pro.",
    price: "From $999 or $41.79/mo. for 24 mo.",
    tone: "light",
    image: "/images/apple/1.jpg",
  },
  {
    id: "iphone-air",
    title: "iPhone Air",
    subtitle: "The thinnest iPhone ever.",
    price: "From $599 or $24.12/mo. for 24 mo.",
    tone: "light",
    image: "/images/apple/2.jpg",
  },
  {
    id: "iphone-17",
    title: "iPhone 17",
    subtitle: "Magichromatic.",
    price: "From $799 or $33.29/mo. for 24 mo.",
    tone: "light",
    image: "/images/apple/3.jpg",
  },
  {
    id: "watch-s11",
    title: "Apple Watch Series 11",
    subtitle: "The ultimate way to keep your health on track.",
    price: "From $399 or $33.25/mo. for 12 mo.",
    tone: "light",
    image: "/images/apple/4.jpg",
  },
  {
    id: "watch-se",
    title: "Apple Watch SE",
    subtitle: "Walk it. Talk it. Track it.",
    price: "From $249 or $20.75/mo. for 12 mo.",
    tone: "light",
    image: "/images/apple/2.jpg",
  },
];

export default function LatestSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      dragFree: true,
      containScroll: "trimSnaps",
      skipSnaps: false,
      loop: true,
      duration: 35, // smoother animation speed
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const fullSubtitle = "Take a look at new, right now.";

  // ✨ Typing Animation
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
          setIsDeleting(true);
          return;
        }
        setTypedText((prev) => prev + fullSubtitle[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 30 : 60);
    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, fullSubtitle]);

  // ✨ Navigation Buttons Control
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

  // ✨ Pause auto-scroll on hover
  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = emblaApi.plugins()?.autoplay;
    const node = emblaApi.rootNode();

    const handleMouseEnter = () => autoplay && autoplay.stop();
    const handleMouseLeave = () => autoplay && autoplay.play();

    node.addEventListener("mouseenter", handleMouseEnter);
    node.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      node.removeEventListener("mouseenter", handleMouseEnter);
      node.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [emblaApi]);

  return (
    <section className="w-full pt-[100px] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black mb-2 text-balance">
          The latest.{" "}
          <span className="text-gray-600">
            {typedText}
            <span className="animate-pulse">|</span>
          </span>
        </h2>
      </div>

      <div className="relative mt-6">
        <div className="px-2 md:px-6">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 md:gap-6">
              {CARDS.map((card, index) => (
                <article
                  key={`${card.id}-${index}`}
                  className={cn(
                    "group mt-8 mb-8 shrink-0 h-[460px] sm:h-[480px] md:h-[502px] w-[82%] sm:w-[380px] md:w-[460px] rounded-2xl border overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]",
                    card.tone === "dark"
                      ? "bg-black text-white border-black/10"
                      : "bg-white text-black border-black/10"
                  )}
                >
                  {/* Text Section */}
                  <div className="p-5 md:p-6">
                    <h3
                      className={cn(
                        "text-lg md:text-xl font-semibold leading-tight",
                        card.tone === "dark" ? "text-white" : "text-zinc-900"
                      )}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-1 text-sm md:text-[15px]",
                        card.tone === "dark"
                          ? "text-zinc-300"
                          : "text-zinc-600"
                      )}
                    >
                      {card.subtitle}
                    </p>
                    <p
                      className={cn(
                        "mt-3 text-xs md:text-sm",
                        card.tone === "dark"
                          ? "text-zinc-400"
                          : "text-zinc-500"
                      )}
                    >
                      {card.price}
                    </p>
                  </div>

                  {/* Image Section */}
                  <div
                    className={cn(
                      "mx-3 mb-3 h-[300px] sm:h-[320px] rounded-xl overflow-hidden relative flex items-center justify-center",
                      card.tone === "dark" ? "bg-zinc-900" : "bg-zinc-50"
                    )}
                  >
                    {card.image ? (
                      <div className="w-full h-full overflow-hidden relative">
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    ) : (
                      <div className="h-24 w-24 rounded-[22%] bg-gradient-to-br from-zinc-200 to-zinc-50 border border-zinc-200" />
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-1 md:px-3">
          <button
            aria-label="Previous"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={cn(
              "pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-sm ring-1 ring-black/10 backdrop-blur transition-all hover:scale-110",
              !canScrollPrev && "opacity-40"
            )}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >                                                             
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            aria-label="Next"
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={cn(
              "pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-sm ring-1 ring-black/10 backdrop-blur transition-all hover:scale-110",
              !canScrollNext && "opacity-40"
            )}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
