// app/components/WhyChooseUs.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { stakeholdersData, StakeholderCard } from "./OurOffers"

export const WhyChooseUs = () => {
  return (
    <section className="w-full bg-[#F4F5F0] py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section - Centered */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What We Offer
          </h1>
        </div>

        {/* Stakeholder Cards Container */}
        <div className="bg-white rounded-xl shadow-lg p-10 lg:p-16 mx-auto max-w-6xl">
          
          {/* Organized cards layout - 2-2-1 arrangement */}
          <div className="space-y-10 lg:space-y-14">
            {/* Row 1 - 2 cards */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-10">
              {stakeholdersData.slice(0, 2).map((stakeholder, index) => (
                <StakeholderCardComponent key={index} stakeholder={stakeholder} />
              ))}
            </div>

            {/* Row 2 - 2 cards */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-10">
              {stakeholdersData.slice(2, 4).map((stakeholder, index) => (
                <StakeholderCardComponent key={index + 2} stakeholder={stakeholder} />
              ))}
            </div>

            {/* Row 3 - 1 centered card */}
            <div className="flex justify-center">
              <div className="w-full max-w-2xl">
                {stakeholdersData.slice(4, 5).map((stakeholder, index) => (
                  <StakeholderCardComponent key={index + 4} stakeholder={stakeholder} />
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Get in Touch Button */}
        <div className="text-center mt-16">
          <Link href="/contacts">
            <button className="relative bg-[#004316] text-white font-semibold px-8 py-4 rounded-lg hover:bg-green-800 hover:scale-105 transition-all duration-300 transform shadow-lg hover:shadow-xl border-2 border-transparent hover:border-green-300 group cursor-pointer overflow-hidden">
              <span className="relative z-10">GET IN TOUCH</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-700/0 via-green-600/20 to-green-700/0 group-hover:via-green-600/40 group-hover:to-green-700/20 transition-all duration-300 transform group-hover:scale-150"></div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};


const StakeholderCardComponent = ({ stakeholder }: { stakeholder: StakeholderCard }) => {
  return (
    <div className="group relative flex flex-col items-center text-center bg-[#004316] rounded-3xl p-10 lg:p-12 w-full min-h-[450px] shadow-xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 cursor-pointer overflow-hidden mx-auto">
      {/* Hover overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/0 via-green-800/0 to-green-900/0 group-hover:via-green-800/10 group-hover:to-green-900/20 transition-all duration-500 rounded-3xl"></div>
      
      {/* Icon container*/}
      <div className="relative mb-8 p-5 bg-white rounded-2xl w-24 h-24 lg:w-28 lg:h-28 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 group-hover:bg-green-50 transition-all duration-300 z-10">
        <Image 
          src={stakeholder.icon}
          alt={stakeholder.iconAlt}
          width={56}
          height={56}
          className="w-14 h-14 lg:w-16 lg:h-16 object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 group-hover:text-green-200 group-hover:translate-x-1 transition-all duration-300">
          {stakeholder.title}
        </h3>
        
        <p className="text-gray-200 leading-relaxed text-lg lg:text-xl flex-grow group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300">
          {stakeholder.description}
        </p>
      </div>

      {/* Border hover effect */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-green-300/30 transition-all duration-300"></div>
    </div>
  );
};