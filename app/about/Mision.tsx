//MissionVision.tsx
import React from 'react';
import Image from 'next/image';

const MissionVision: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-12 lg:py-20">
      <div className="w-full max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Mission Column*/}
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 rounded-2xl overflow-hidden shadow-2xl h-[500px] lg:h-[600px]">
            {/* Mission Image */}
            <div className="relative h-full lg:col-span-2 overflow-hidden cursor-pointer group ">
              <Image
                src="/about/mission.png"
                alt="Agriculture Mission"
                layout="fill"
                objectFit="cover"
                className="opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
              />
            </div>

            {/* Mission Content*/}
            <div className="bg-[#F4F5F0] h-full p-4 lg:p-16 flex flex-col justify-center lg:col-span-4 rounded-2xl cursor-pointer group">
              <div className="bg-white h-full p-4 rounded-xl shadow-sm border border-gray-100 group-hover:shadow-lg group-hover:border-gray-200 group-hover:translate-y-[-4px] transition-all duration-300">
                {/* Centered Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#246A21] rounded-full flex items-center justify-center group-hover:bg-[#2a7a26] group-hover:scale-110 transition-all duration-300">
                    <Image
                      src="/icons/mission.svg"
                      alt="Mission Icon"
                      width={32}
                      height={32}
                      className="text-white filter brightness-0 invert"
                    />
                  </div>
                </div>

                {/* Heading with spacing from icon */}
                <h3 className="text-4xl font-bold text-black mb-8 text-center">
                  Our Mission
                </h3>

                <div>
                  <p className="text-base sm:text-lg text-black leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    To revolutionize agriculture through innovation and sustainability, ensuring food security through sustainable production, processing, and distributing of high-quality agricultural products while empowering farmers and agribusinesses.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Column */}
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 rounded-2xl overflow-hidden shadow-2xl h-[500px] lg:h-[600px]">
            {/* Vision Image */}
            <div className="relative h-full lg:col-span-2 overflow-hidden cursor-pointer group">
              <Image
                src="/about/vision.png"
                alt="Agriculture Vision"
                layout="fill"
                objectFit="cover"
                className="opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
              />
            </div>

            {/* Vision Content*/}
            <div className="bg-[#F4F5F0] h-full p-8 lg:p-16 flex flex-col justify-center lg:col-span-4 rounded-2xl cursor-pointer group">
              <div className="bg-white h-full p-4 rounded-xl shadow-sm border border-gray-100 group-hover:shadow-lg group-hover:border-gray-200 group-hover:translate-y-[-4px] transition-all duration-300">
                {/* Centered Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#246A21] rounded-full flex items-center justify-center group-hover:bg-[#2a7a26] group-hover:scale-110 transition-all duration-300">
                    <Image
                      src="/icons/vision.svg"
                      alt="Vision Icon"
                      width={32}
                      height={32}
                      className="text-white filter brightness-0 invert"
                    />
                  </div>
                </div>

                {/* Heading with spacing from icon */}
                <h3 className="text-4xl font-bold text-black mb-8 text-center">
                  Our Vision
                </h3>

                <div>
                  <p className="text-base sm:text-lg text-black leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    To be a globally recognized agribusiness, driving sustainable agricultural development, fostering food self-sufficiency, and enhancing economic growth through technology and partnerships.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default MissionVision;