import Image from "next/image"

export default function EnergyStorageSection() {
  return (
    <div className="bg-gray-50">
      {/* First Section - Power Generation */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <Image
                src="/images/passagervehecals/pass-1.png"
                alt="Energy storage infrastructure with solar panels, wind turbines, and battery storage units"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl"
                priority
              />
            </div>

            {/* Right side - Content */}
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                News and events
              </h2>

              <p className="text-gray-600 leading-relaxed text-lg">
               energy storage systems provide energy storage and output management in power generation. The
                electrochemical technology and renewable energy power generation technology form a joint system. Through
                the high-level consistency of cells and the powerful computing of BMS, CATL enables the power generation
                to restore a stable power grid, optimize the power output curve, reduce solar and wind curtailment,
                provide system inertia and the functions of frequency and peak modulation, increase the proportion of
                renewable energy in total power generation, and optimize the energy structure.
              </p>

              <div className="pt-4">
                <button className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200">
                  Luneng national energy storage power station demonstration project
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
               Products
              </h2>

              <p className="text-gray-600 leading-relaxed text-lg">
              nergy storage systems provide smart load management for power transmission and distribution, and
                modulate frequency and peak in time according to power grid loads. The CATL electrochemical energy
                storage system has the functions of capacity increasing and expansion, backup power supply etc. It can
                adjust more renewable energy in power transmission and distribution in order to ensure the safe, stable,
                efficient and low-cost operation of the power grid.
              </p>

              <div className="pt-4">
                <button className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200">
                  Jiangsu 100 MWh energy storage power station project
                </button>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative">
              <Image
                src="/images/passagervehecals/pass-2.png"
                alt="Electrical transmission towers and power lines with blue battery storage units"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
