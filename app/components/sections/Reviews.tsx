'use client';

import Image from 'next/image';
import React, { useState } from 'react';

interface ReviewCard {
  name: string;
  role: string;
  company: string;
  quote: string;
}

export const Reviews: React.FC = () => {
  const reviews: ReviewCard[] = [
    {
      name: "Mila McSabbu",
      role: "Farmer",
      company: "Keljo Agro",
      quote: "Investing in agriculture through Investa Farm has changed my experience completely. The profits have exceeded my expectations!"
    },
    {
      name: "John Kiprop",
      role: "Agribusiness Owner",
      company: "Green Valley Farms",
      quote: "The support and training provided have transformed our operations. Our yield has increased by 60% in just one season!"
    },
    {
      name: "Sarah Chen",
      role: "Agricultural Investor",
      company: "Growth Capital Partners",
      quote: "Keljo Agro&rsquo;s innovative approach to sustainable farming has delivered outstanding returns while supporting local communities."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section className="w-full bg-[#F7C35F] py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What People Are Saying
          </h2>
        </div>

        {/* Main Review Card Container */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 max-w-4xl mx-auto">
          
          {/* Review Content - Reversed layout */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-6 mb-8">
              <div className="w-20 h-20 rounded-full bg-gray-200 border-2 border-[#F7C35F] overflow-hidden flex-shrink-0">
                <Image 
                  src="/reviews.jpg"
                  alt={reviews[currentIndex].name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Name and Details */}
              <div className="text-left">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                  {reviews[currentIndex].name}
                </h3>
                <p className="text-gray-600 text-base lg:text-lg">
                  {reviews[currentIndex].role}, {reviews[currentIndex].company}
                </p>
              </div>
            </div>

            {/* Quote Icon */}
            <div className="text-5xl text-[#F7C35F] mb-4">&quot;</div>
            
            {/* Review Text at BOTTOM */}
            <blockquote className="text-gray-700 text-lg lg:text-xl leading-relaxed italic max-w-3xl mx-auto">
              "{reviews[currentIndex].quote}"
            </blockquote>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-6 lg:gap-8 mt-8">
            {/* Previous Arrow */}
            <button
              onClick={prevReview}
              className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-200 hover:scale-110 shadow-md"
              aria-label="Previous review"
            >
              <svg className="w-6 h-6 lg:w-7 lg:h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dot Indicators */}
            <div className="flex gap-2 lg:gap-3">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-200 ${
                    index === currentIndex ? 'bg-[#F7C35F]' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Arrow */}
            <button
              onClick={nextReview}
              className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center bg-[#F7C35F] rounded-full hover:bg-amber-500 transition-all duration-200 hover:scale-110 shadow-md"
              aria-label="Next review"
            >
              <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* CTA Button */}
                <div className="text-center mt-16">
          <button className="relative bg-[#004316] text-white font-semibold px-8 py-4 rounded-lg hover:bg-green-800 hover:scale-105 transition-all duration-300 transform shadow-lg hover:shadow-xl border-2 border-transparent hover:border-green-300 group overflow-hidden">
            <span className="relative z-10">READ MORE REVIEWS</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-700/0 via-green-600/20 to-green-700/0 group-hover:via-green-600/40 group-hover:to-green-700/20 transition-all duration-300 transform group-hover:scale-150"></div>
          </button>
        </div>
      </div>
    </section>
  );
};