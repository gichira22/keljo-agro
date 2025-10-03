'use client';

import Image from 'next/image';
import Link from 'next/link';

export const AboutHero = () => {
  return (
    <section className="relative h-screen py-24 md:py-32 lg:py-40 bg-green-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black opacity-50">
        <Image 
          src="/services.jpg" 
          alt="About Keljo-Agro - Agricultural Innovation"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          <h3 className="text-4xl md:text-6xl font-bold lg:text-4xl text-white text-center leading-relaxed mb-8 md:mb-30">
           We are shaping the future of agriculture through innovation, sustainability, and strategic partnerships
          </h3>
          
          {/* Contact Button */}
          <Link 
            href="/contacts" 
            className="inline-block bg-[#DCA443] text-black font-bold text-lg px-8 py-4 md:px-10 md:py-5 rounded-2xl hover:bg-orange-300 transition-all duration-200 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};