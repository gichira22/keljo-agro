'use client';

import Image from 'next/image';

export const HeroSection = () => {
    return (
        <section className="relative h-screen min-h-[715px] w-full overflow-hidden">
            {/* Background Image */}
            <Image 
                src="/hero.jpg" 
                alt="Agricultural background" 
                fill
                className="object-cover"
                priority
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 via-green-800/50 to-transparent" />
            
            {/* Content */}
            <div className="relative z-10 h-full flex items-center pl-24 pr-44 pt-44">
                <div className="max-w-2xl">
                    {/* Main Headline */}
                    <div className="mb-4">
                        <h1 className="font-raleway font-bold text-6xl text-green-500 mb-2">
                            Innovating Today for
                        </h1>
                        <h2 className="font-raleway font-bold text-6xl text-white">
                            Tomorrows Harvest
                        </h2>
                    </div>
                    
                    {/* Description */}
                    <p className="font-raleway text-3xl text-white mb-8 leading-relaxed">
                        Partner with us today to build a sustainable agricultural future.
                    </p>
                    
                    {/* CTA Button */}
                    <button className="bg-orange-500 text-black font-raleway font-bold text-lg px-10 py-5 rounded-2xl hover:bg-orange-600 transition-all duration-200 hover:scale-105">
                        LEARN MORE
                    </button>
                </div>
            </div>
        </section>
    );
};