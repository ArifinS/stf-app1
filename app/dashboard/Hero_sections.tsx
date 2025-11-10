"use client";

import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Sparkles, Play, Pause } from "lucide-react";

export default function UltraModernVideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [muted, setMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    // Run animations after mount
    const animateText = () => {
      if (!h1Ref.current) return;
      const text = h1Ref.current.innerText;
      const chars = text.split("");
      h1Ref.current.innerHTML = chars
        .map(
          (char: string) =>
            `<span style="display:inline-block;opacity:0;transform:translateY(80px) rotateX(-90deg);">${
              char === " " ? "&nbsp;" : char
            }</span>`
        )
        .join("");

      const spans = h1Ref.current.querySelectorAll("span");
      spans.forEach((span: Element, i: number) => {
        (span as HTMLElement).animate(
          [
            { opacity: 0, transform: "translateY(80px) rotateX(-90deg)" },
            { opacity: 1, transform: "translateY(0) rotateX(0deg)" },
          ],
          {
            duration: 1200,
            delay: i * 50,
            easing: "cubic-bezier(0.34, 1.56, 0.64, 1)",
            fill: "forwards",
          }
        );
      });
    };

    const animateOthers = () => {
      if (subtitleRef.current) {
        subtitleRef.current.animate(
          [
            {
              opacity: 0,
              transform: "translateY(30px) scale(0.95)",
              filter: "blur(10px)",
            },
            {
              opacity: 1,
              transform: "translateY(0) scale(1)",
              filter: "blur(0px)",
            },
          ],
          {
            duration: 1000,
            delay: 800,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            fill: "forwards",
          }
        );
      }

      if (ctaRef.current) {
        ctaRef.current.animate(
          [
            { opacity: 0, transform: "translateY(20px) scale(0.9)" },
            { opacity: 1, transform: "translateY(0) scale(1)" },
          ],
          {
            duration: 800,
            delay: 1200,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            fill: "forwards",
          }
        );
      }

      if (statsRef.current) {
        const statItems = statsRef.current.querySelectorAll(".stat-item");
        statItems.forEach((item: Element, i: number) => {
          (item as HTMLElement).animate(
            [
              { opacity: 0, transform: "translateY(30px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            {
              duration: 600,
              delay: 1400 + i * 150,
              easing: "cubic-bezier(0.16, 1, 0.3, 1)",
              fill: "forwards",
            }
          );
        });
      }
    };

    animateText();
    animateOthers();

    if (videoRef.current) {
      videoRef.current
        .play()
        .catch((err: Error) => console.warn("Auto-play prevented:", err));
    }
  }, []);

  const toggleMute = () => setMuted((prev) => !prev);

  const togglePlayPause = async () => {
    if (!videoRef.current) return;
    try {
      if (videoRef.current.paused) {
        await videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
     <video
       ref={videoRef}
       autoPlay
       loop
       muted={muted}
       playsInline
       className="absolute inset-0 w-full h-full object-cover"
       style={{ filter: "brightness(0.7) contrast(1.1)" }}
     >
       <source src="/video/video.mp4" type="video/mp4" />
     </video>


      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse-slow" />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-8xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8 hover:bg-white/15 transition-all duration-300">
          <Sparkles className="w-4 h-4 text-yellow-300 animate-pulse" />
          <span className="text-white/90 text-sm font-semibold tracking-wide">
            INNOVATION AWAITS
          </span>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
        </div>

        {/* Main Heading */}
        <h1
          ref={h1Ref}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-none tracking-tight"
          style={{
            textShadow: "0 10px 40px rgba(0,0,0,0.5)",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          REDEFINE TOMORROW
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-12 max-w-4xl mx-auto font-light leading-relaxed"
          style={{
            opacity: 0,
            textShadow: "0 4px 20px rgba(0,0,0,0.4)",
          }}
        >
          Experience the future of innovation with cutting-edge technology
        </p>

        {/* CTA */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16"
          style={{ opacity: 0 }}
        >
          <button className="group relative px-10 py-5 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
            <span className="relative z-10 flex items-center gap-3">
              Launch Experience
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </div>
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-8 left-8 z-20 flex items-center gap-3">
        <button
          onClick={togglePlayPause}
          className="p-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce-slow">
        <span className="text-white/70 text-xs font-bold tracking-widest">
          EXPLORE
        </span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-scroll" />
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-10px);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(12px);
            opacity: 0;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}