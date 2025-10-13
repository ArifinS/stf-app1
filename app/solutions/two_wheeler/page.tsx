'use client';

import React from "react";
import MenuItem from "../../components/Navbar";
import Footer from "../../components/Footer";
import CommercialHero from "./twowheeler-hero";
import { AdvantagesSection } from "./advantage-sec";
import { VehicleSolutionsSection } from "./vehecalssolution";
import FeatureGrid from "./featuregrid";
import VehicleSolutions from "./VehicleSolutions2";
import HybridSolutions from "./HybridSolutions";

export default function TwoWhilerPage() {
  return (
    <div className="font-sans min-h-screen grid grid-rows-[auto_1fr_auto] bg-[#f9f9f9]">
      <header className="w-full">
        <MenuItem />
      </header>
      <main className="flex flex-col items-center px-4 sm:px-0">
        < CommercialHero/>
        <AdvantagesSection/>
        <VehicleSolutionsSection/>
        <FeatureGrid/>
        <VehicleSolutions/>
        <HybridSolutions/>
        {/* Add more EV charging solution details/components here */}
      </main>
      <footer className="w-full flex justify-center">
        <Footer />
      </footer>
    </div>
  );
}