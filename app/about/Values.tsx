import Image from 'next/image';
import React from 'react';

interface ValueCard {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
}

export const Values = () => {
  const values: ValueCard[] = [
    {
      title: "Innovation & Excellence",
      description: "We leverage cutting-edge technologies and industry best practices to enhance efficiency, productivity, and performance across all our operations.",
      icon: "/icons/innovations.svg",
      iconAlt: "Innovation & Excellence icon"
    },
    {
      title: "Collaboration & Impact",
      description: "We cultivate strategic partnerships with farmers, businesses, and research institutions to drive agricultural advancement while generating measurable value for all stakeholders.",
      icon: "/icons/collaborations.svg",
      iconAlt: "Collaboration & Impact icon"
    },
    {
      title: "Sustainability",
      description: "We are committed to environmentally responsible, climate-smart agricultural practices that conserve natural resources and ensure long-term food security.",
      icon: "/icons/sustainability.svg",
      iconAlt: "Sustainability icon"
    },
    {
      title: "Integrity & Quality",
      description: "We uphold the highest ethical standards, delivering superior products and services with transparency, reliability, and trustworthiness.",
      icon: "/icons/integrity.svg",
      iconAlt: "Integrity & Quality icon"
    },
    {
      title: "Empowerment & Growth",
      description: "We actively invest in building capacity, providing training, and fostering ecosystem development.",
      icon: "/icons/empowerment.svg",
      iconAlt: "Empowerment & Growth icon"
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#292121] mb-4">Our Core Values</h2>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-10 lg:p-16 mx-auto max-w-6xl">
          
          {/* Organized cards layout */}
          <div className="space-y-10 lg:space-y-14">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-10">
              {values.slice(0, 2).map((value, index) => (
                <ValueCard key={index} value={value} />
              ))}
            </div>

            {/* Row 2 - 2 cards */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-10">
              {values.slice(2, 4).map((value, index) => (
                <ValueCard key={index + 2} value={value} />
              ))}
            </div>

            {/* Row 3 - 1 centered card */}
            <div className="flex justify-center">
              <div className="w-full max-w-xl">
                {values.slice(4, 5).map((value, index) => (
                  <ValueCard key={index + 4} value={value} />
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

const ValueCard = ({ value }: { value: ValueCard }) => {
  return (
    // <div className="group relative flex flex-col items-center text-center bg-gradient-to-br from-[#004316] to-[#006627] rounded-3xl p-8 lg:p-10 min-h-[320px] shadow-xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 cursor-pointer overflow-hidden">
        <div className="group relative flex flex-col items-center text-center bg-[#F4F5F0] rounded-3xl p-8 lg:p-10 min-h-[320px] shadow-xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 cursor-pointer overflow-hidden">
  
      {/* Enhanced hover effects */}
      {/* Icon with enhanced styling */}
      <div className="relative mb-6 p-4 bg-white rounded-xl w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 group-hover:bg-green-50 transition-all duration-500 z-10">
        <Image 
          src={value.icon}
          alt={value.iconAlt}
          width={48}
          height={48}
          className="w-12 h-12 lg:w-14 lg:h-14 object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      {/* Content with better typography */}
      <div className="relative z-10 flex flex-col flex-grow space-y-4">
       <h3 className="text-xl lg:text-2xl font-bold text-[#292121] group-hover:text-[#292121] transition-all duration-300">

          {value.title}
        </h3>
        
       <p className="text-[#292121] leading-relaxed text-base lg:text-lg flex-grow group-hover:text-[#292121] transition-all duration-300">

          {value.description}
        </p>
      </div>

      {/* Enhanced border effect */}
      <div className="absolute inset-0 rounded-3xl border-3 border-transparent transition-all duration-500"></div>
    </div>
  );
};