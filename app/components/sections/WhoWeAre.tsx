import Image from 'next/image';

export const WhoWeAre = () => {
    return (
        <section className="w-full bg-gray-50 py-16">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Column - Content */}
                    <div className="space-y-8 order-2 lg:order-1">
                        <div className="space-y-4">
                            <div className="text-4xl font-bold text-black mb-4">
                                Who we are
                            </div>
                            <div className="text-2xl font-semibold text-[#246A21] mb-6">
                               We are a Leader in Agriculture Market
                            </div>
                        </div>
                        
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                            <p>
                                Keijo-Agro Global Limited is shaping the future of agriculture through innovation, sustainability, and strategic partnerships.
                                From farms to markets, we deliver agricultural excellence that empowers farmers, nourishes communities, and drives economic growth.
                            </p>
                        </div>
                        
                        {/* CTA Button */}
                        <button className="bg-[#246A21] text-white font-semibold px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                            SEE MORE
                        </button>
                    </div>
                    
                    {/* Right Column - Image */}
                    <div className="relative h-96 lg:h-[500px] order-1 lg:order-2">
                        <Image 
                            src="/whoarewe.jpg" 
                            alt="Keijo-Agro agricultural operations - farmers working in fields"
                            fill
                            className="object-cover rounded-2xl shadow-xl"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};