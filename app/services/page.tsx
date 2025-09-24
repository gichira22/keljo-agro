// app/services/page.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative py-32 bg-green-900">
        <div className="absolute inset-0 bg-black opacity-50">
          <Image 
            src="/services.jpg"
            alt="Agricultural Services"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Services
            </h1>
            
            {/* Decorative Line */}
            {/* <div className="w-32 h-1 bg-green-600 mx-auto mb-8 rounded-full"></div> */}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">

            <div className="flex flex-col md:flex-row gap-8">
              {/* Crop Production */}
              <div className="flex-1 group">
                <div className="bg-[#F4F5F0] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-green-200 hover:-translate-y-2 h-full">
                  <div className="flex justify-center mb-4">
                    <Image 
                      src="/icons/services-icon.svg" 
                      alt="Crop Production" 
                      width={40} 
                      height={40}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
                    Crop Production
                  </h3>
                  <p className="text-black text-center leading-relaxed">
                    Providing end-to-end support for high-yield, sustainable crop cultivation tailored to diverse agro-ecological zones.
                  </p>
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Livestock Production */}
              <div className="flex-1 group">
                <div className="bg-[#F4F5F0] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-green-200 hover:-translate-y-2 h-full">
                  <div className="flex justify-center mb-4">
                    <Image 
                      src="/icons/services-icon.svg" 
                      alt="Livestock Production" 
                      width={40} 
                      height={40}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
                    Livestock Production
                  </h3>
                  <p className="text-black text-center leading-relaxed">
                    Offering expert guidance and management solutions for sustainable livestock farming, ensuring animal health and productivity.
                  </p>
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/*Agricultural Trade & Farmer Aggregation */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 group">
                <div className="bg-[#F4F5F0] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-green-200 hover:-translate-y-2 h-full">
                  <div className="flex justify-center mb-4">
                    <Image 
                      src="/icons/services-icon.svg" 
                      alt="Agricultural Trade" 
                      width={40} 
                      height={40}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
                    Agricultural Trade (Exports & Imports)
                  </h3>
                  <p className="text-black text-center leading-relaxed">
                    Facilitating the supply and distribution of agricultural commodities and inputs across local and international markets.
                  </p>
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Farmer Aggregation - Right Card */}
              <div className="flex-1 group">
                <div className="bg-[#F4F5F0] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-green-200 hover:-translate-y-2 h-full">
                  <div className="flex justify-center mb-4">
                    <Image 
                      src="/icons/services-icon.svg" 
                      alt="Farmer Aggregation" 
                      width={40} 
                      height={40}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
                    Farmer Aggregation
                  </h3>
                  <p className="text-black text-center leading-relaxed">
                    Organizing and supporting farmer cooperatives to enhance collective bargaining, access to inputs, and market opportunities.
                  </p>
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3: Fertilizer Trials & Agro-Processing */}
            <div className="flex flex-col md:flex-row gap-8">
              {/* Fertilizer Trials - Left Card */}
              <div className="flex-1 group">
                <div className="bg-[#F4F5F0] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-green-200 hover:-translate-y-2 h-full">
                  <div className="flex justify-center mb-4">
                    <Image 
                      src="/icons/services-icon.svg" 
                      alt="Fertilizer Trials" 
                      width={40} 
                      height={40}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
                    Fertilizer Trials & Efficacy Demonstration
                  </h3>
                  <p className="text-black text-center leading-relaxed">
                    Conducting research and field demonstrations to optimize fertilizer use, enhance soil fertility, and improve crop productivity.
                  </p>
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Agro-Processing - Right Card */}
              <div className="flex-1 group">
                <div className="bg-[#F4F5F0] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-green-200 hover:-translate-y-2 h-full">
                  <div className="flex justify-center mb-4">
                    <Image 
                      src="/icons/services-icon.svg" 
                      alt="Agro-Processing" 
                      width={40} 
                      height={40}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
                    Agro-Processing & Value Addition
                  </h3>
                  <p className="text-black text-center leading-relaxed">
                    Transforming raw agricultural produce into high-quality, market-ready products to increase profitability and reduce post-harvest losses.
                  </p>
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 4: Consultancy Services & Supply Chain */}
            <div className="flex flex-col md:flex-row gap-8">
              {/* Consultancy Services - Left Card */}
              <div className="flex-1 group">
                <div className="bg-[#F4F5F0] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-green-200 hover:-translate-y-2 h-full">
                  <div className="flex justify-center mb-4">
                    <Image 
                      src="/icons/services-icon.svg" 
                      alt="Consultancy Services" 
                      width={40} 
                      height={40}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
                    Consultancy Services
                  </h3>
                  <p className="text-black text-center leading-relaxed">
                    Providing expert advisory on agronomy, farm management, supply chain optimization, and sustainable agricultural practices.
                  </p>
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Supply Chain - Right Card */}
              <div className="flex-1 group">
                <div className="bg-[#F4F5F0] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-green-200 hover:-translate-y-2 h-full">
                  <div className="flex justify-center mb-4">
                    <Image 
                      src="/icons/services-icon.svg" 
                      alt="Supply Chain" 
                      width={40} 
                      height={40}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
                    Supply Chain & Market Access
                  </h3>
                  <p className="text-black text-center leading-relaxed">
                    Designing and implementing efficient logistics, storage, and distribution networks to connect farmers to profitable markets.
                  </p>
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}