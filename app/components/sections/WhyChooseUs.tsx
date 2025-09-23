import Image from 'next/image';
import React from 'react';

interface StakeholderCard {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
}

export const WhyChooseUs = () => {
  const stakeholders: StakeholderCard[] = [
    {
      title: "Farmers",
      description: "We empower farmers with timely access to quality inputs, practical training, mechanization solutions, and robust market linkages, enabling higher productivity, sustainable livelihoods, and long-term growth.",
      icon: "/icons/farmers-icon.svg",
      iconAlt: "Farmers icon"
    },
    {
      title: "Governments & NGOs",
      description: "We collaborate on strategic initiatives in food security, rural development, and sustainable agriculture, delivering scalable, data-driven, and impactful solutions.",
      icon: "/icons/ngos-icon.svg",
      iconAlt: "Government icon"
    },
    {
      title: "Agribusinesses",
      description: "We take away the burden of farmer outreach and aggregation by managing end-to-end agronomy projects, including trials, demonstrations, and field support.",
      icon: "/icons/agribs-icon.svg",
      iconAlt: "Business icon"
    },
    {
      title: "Investors",
      description: "We offer attractive agribusiness investment opportunities that combine strong financial returns with demonstrable social, economic, and environmental impact.",
      icon: "/icons/investors-icon.svg",
      iconAlt: "Investor icon"
    },
    {
      title: "Consumers",
      description: "We provide nutritious, affordable, and high-quality food products that meet evolving demands while supporting sustainable production practices.",
      icon: "/icons/consumers-icon.svg",
      iconAlt: "Consumer icon"
    }
  ];

  return (
    <section className="w-full bg-[#F4F5F0] py-16">
      <div className="max-w-[1440px] mx-auto px-4 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-4xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Agricultural Solutions
          </h1>
          <h2 className="text-2xl lg:text-3xl font-semibold text-[#004316]">
            Why Choose Us
          </h2>
        </div>

        {/* Stakeholder Cards Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          {stakeholders.map((stakeholder, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center text-center bg-[#004316] rounded-2xl p-8 w-[350px] min-h-[400px] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer overflow-hidden"
            >
              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-900/0 via-green-800/0 to-green-900/0 group-hover:via-green-800/10 group-hover:to-green-900/20 transition-all duration-500 rounded-2xl"></div>
              
              {/* Icon container */}
              <div className="relative mb-6 p-4 bg-white rounded-2xl w-20 h-20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 group-hover:bg-green-50 transition-all duration-300 z-10">
                <Image 
                  src={stakeholder.icon}
                  alt={stakeholder.iconAlt}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-200 group-hover:translate-x-1 transition-all duration-300">
                  {stakeholder.title}
                </h3>
                
                <p className="text-gray-200 leading-relaxed text-base flex-grow group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300">
                  {stakeholder.description}
                </p>
              </div>

              {/* Border hover effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-300/30 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Get in Touch Button */}
        <div className="text-center mt-16">
          <button className="relative bg-[#004316] text-white font-semibold px-8 py-4 rounded-lg hover:bg-green-800 hover:scale-105 transition-all duration-300 transform shadow-lg hover:shadow-xl border-2 border-transparent hover:border-green-300 group overflow-hidden">
            <span className="relative z-10">GET IN TOUCH</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-700/0 via-green-600/20 to-green-700/0 group-hover:via-green-600/40 group-hover:to-green-700/20 transition-all duration-300 transform group-hover:scale-150"></div>
          </button>
        </div>
      </div>
    </section>
  );
};