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
                src="/images/ev-charge/energy-storage.png"
                alt="Energy storage infrastructure with solar panels, wind turbines, and battery storage units"
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Right side - Content */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Energy Storage on Power Generation
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
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Energy Storage on Power Transmission and Distribution
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
                  src="/images/ev-charge/3.png"
                alt="Electrical transmission towers and power lines with blue battery storage units"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <Image
                 src="/images/ev-charge/2.png"
                alt="Solar panel canopy charging station with electric vehicles"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>

            {/* Right side - Content */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Energy Storage on Power Consumption
              </h2>

              <p className="text-gray-600 leading-relaxed text-lg">
                s energy storage systems provide users with a peak-valley electricity price arbitrage, social and
                global power quality management.  electrochemical energy storage products have been successfully
                applied in large-scale industrial, commercial and residential areas, and have expanded to emerging
                scenarios such as base stations, UPS backup power, off-grid and distributed systems, intelligent
                charging stations for vehicle energy charging and timing, etc. Such applications help regions that have
                a lack of power grids to have access to electricity, reduce electricity costs, ensure a stable power
                network, and achieve maximum social and economic benefits by using renewable energy to the greatest
                extent.
              </p>

              <div className="pt-4 space-y-3">
                <div className="flex flex-wrap gap-3">
                  <button className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200">
                    CATL BESS Charging Station
                  </button>
                  <button className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200">
                    Zhengjiazhuang Gansu Cement Energy Storage Project
                  </button>
                </div>
                <div>
                  <button className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-200">
                    UPS and telecommunications backup power applications
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
