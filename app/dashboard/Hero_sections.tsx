"use client";
import React, { useState } from "react";
import Link from "next/link";

const hotspots = [
  {
    id: 1,
    top: "35%",
    left: "25%",
    title: "Passanger Vehecales",
    desc: "Passenger Vehicles: Eco-friendly and efficient transport solutions designed for sustainable and comfortable road travel.",
    link: "/solutions/passanger_vehicles",
  },
  {
    id: 2,
    top: "50%",
    left: "70%",
    title: "Automotive life style and custom auto motive desing",
    desc: "Automotive Lifestyle and Custom Automotive Design: Innovative and personalized vehicle designs crafted for unique style and performance.",
    link: "/solutions/automotive_lifestyle",
  },
  {
    id: 3,
    top: "70%",
    left: "65%",
    title: "Comercial Vehicle",
    desc: "Commercial Vehicle: Robust and efficient vehicles powered by sustainable energy for reliable, eco-conscious transport solutions.",
    link: "/solutions/commercial_vehicles",
  },
  {
    id: 4,
    top: "55%",
    left: "40%",
    desc: "Eco-friendly two-wheeler powered by clean energy, designed for sustainable and efficient urban mobility",
    title: "Two Wheeler",
    link: "/solutions/two_wheeler",
  },

    {
    id: 5,
    top: "15%",
    left: "40%",
    desc: "Areomotion: Eco-friendly two-wheeler powered by clean energy, designed for sustainable and efficient urban mobility",
    title: "Areomotion",
    link: "/solutions/aromotion",
  },
      {
    id: 6,
    top: "30%",
    left: "15%",
    desc: "Agricultural & Industrial Transportation: Eco-friendly two-wheeler powered by clean energy, designed for sustainable",
    title: "Agricultural & Industial Transportation",
    link: "/solutions/agricultural_industrial",
  },
        {
    id: 7,
    top: "90%",
    left: "55%",
    desc: "Merin & Transportation: Eco-friendly two-wheeler powered by clean energy, designed for sustainable and efficient urban mobility.",
    title: "Merin & Transportation",
    link: "/solutions/marine_transportation",
  },
];

const HeroSections = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      className="hero-section"
      style={{
        padding: 0,
        margin: 0,
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero.gif"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src="/images/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.3)",
          zIndex: 1,
        }}
      />

      {/* Hotspots */} 
    {hotspots.map((spot) => (
      <div
        key={spot.id}
        style={{
          position: "absolute",
          top: spot.top,
          left: spot.left,
          transform: "translate(-50%, -50%)",
          zIndex: 2,
        }}
      >
        {/* 🔗 Make the dot itself a link */}
        <Link href={spot.link}>
          <div
            onMouseEnter={() => setHovered(spot.id)}
            onMouseLeave={() => setHovered(null)}
            className="firefly-dot"
          />
        </Link>

        {/* Hover Card (still shows on hover) */}
        {hovered === spot.id && (
          <div className="hover-card">
            <h4>{spot.title}</h4>
            <p>{spot.desc}</p>
          </div>
        )}
      </div>
    ))}

      {/* Animation & Styles */}
      <style jsx>{`
        .firefly-dot {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          animation: pulse 2s infinite;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
          transition: transform 0.3s ease;
        }

        .firefly-dot:hover {
          transform: scale(1.3);
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.4),
              0 0 10px rgba(255, 255, 255, 0.6);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 1),
              0 0 40px rgba(255, 255, 255, 0.8);
          }
          100% {
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.4),
              0 0 10px rgba(255, 255, 255, 0.6);
          }
        }

        .hover-card {
          position: absolute;
          top: 120%;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 14px 20px;
          border-radius: 14px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
          min-width: 220px;
          text-align: center;
          color: white;
          animation: fadeIn 0.3s ease;
        }

        .hover-card h4 {
          margin: 0 0 6px;
          font-size: 16px;
          font-weight: 600;
        }

        .hover-card p {
          margin: 0;
          font-size: 13px;
          opacity: 0.9;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translate(-50%, 10px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSections;
