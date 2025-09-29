'use client';

import Image from 'next/image';
import Link from 'next/link';

export const HeroSection = () => {
    return (
        <section className="relative h-screen min-h-[500px] sm:min-h-[600px] md:min-h-[715px] w-full overflow-hidden">
            {/* Background Image */}
            <Image 
                src="/hero.jpg" 
                alt="Agricultural background" 
                fill
                className="object-cover"
                priority
                sizes="100vw"
            />
            
            {/* Gradient Overlay - Enhanced for mobile */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-green-800/80 to-green-700/60 md:bg-gradient-to-r md:from-green-900/95 md:via-green-800/50 md:to-transparent" />
            
            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center md:justify-start px-4 sm:px-8 lg:px-12 xl:pl-24 xl:pr-44 pt-16 md:pt-44">
                <div className="max-w-2xl w-full text-center md:text-left">
                    
                    {/* Main Headline */}
                    <div className="mb-6 md:mb-8 space-y-2 md:space-y-4">
                        <h1 className="font-raleway font-bold text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-[#F7C35F] leading-tight">
                            Innovating Today for
                        </h1>
                        <h2 className="font-raleway font-bold text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
                            Tomorrow's Harvest
                        </h2>
                    </div>
                    
                    {/* Description */}
                    <p className="font-raleway text-lg sm:text-xl md:text-2xl lg:text-3xl text-white mb-8 md:mb-10 leading-relaxed max-w-lg mx-auto md:mx-0">
                        Partner with us today to build a sustainable agricultural future.
                    </p>
                    
                    {/* CTA Button */}

<div className="flex justify-center md:justify-start">
    <Link href="/about">
        <button className="bg-[#DCA443] text-black font-raleway font-bold text-sm sm:text-base md:text-lg px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-xl md:rounded-2xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl cursor-pointer">
            LEARN MORE
        </button>
    </Link>
</div>
                </div>
            </div>

            
        </section>
    );
};