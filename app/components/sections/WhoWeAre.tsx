import Image from 'next/image';

export const WhoWeAre = () => {
    return (
        <section className="w-full bg-gray-50 py-16">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Column - Content */}
                    <div className="space-y-8 order-2 lg:order-1">
                        <div className="space-y-4">
                            <div className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold">
                                Who we are
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                                <p>We're a Leader in Agriculture Market</p>
                            </h2>
                        </div>
                        
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                            <p>
                                Keijo-Agro Global Limited is shaping the future of agriculture through innovation, sustainability, and strategic partnerships.
                            </p>
                            
                            <p>
                                From farms to markets, we deliver agricultural excellence that empowers farmers, nourishes communities, and drives economic growth.
                            </p>
                        </div>
                        
                        {/* CTA Button */}
                        <button className="bg-green-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                            SEE MORE
                        </button>
                    </div>
                    
                    {/* Right Column - Image */}
                    <div className="relative h-96 lg:h-[500px] order-1 lg:order-2">
                        <Image 
                            src="/whoarewe.jpg" // Update with your actual image filename
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