import Image from 'next/image';

export const AboutUs = () => {
    return (
        <section className="w-full bg-gray-50 py-16">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="grid grid-cols-1 bg-white lg:grid-cols-2 gap-16 items-center rounded-xl text-justify ">
                    
                    {/* Left Column - Content */}
                    <div className="space-y-8 order-2 lg:order-1 p-8 text-center">
                        <div className="space-y-4">
                            <div className="text-4xl font-bold text-[#246A21] mb-4 text-center">
                                Who we are
                            </div>
                        </div>
                        
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                            <p>
                                Keljo-Agro Global Limited is a diversified agribusiness delivering end-to-end agricultural solutions across Africa and global markets. 
                                We combine modern farming practices, agro-processing, research, and strategic collaborations to transform agriculture into a driver of food security, innovation, and economic empowerment.
                            </p>
                        </div>
                    </div>
                    
                    {/* Right Column - Image */}
                    <div className="relative h-96 lg:h-[500px] order-1 lg:order-2">
                        <Image 
                            src="/about/about-us.png" 
                            alt="Keijo-Agro agricultural operations - farmers working in fields"
                            fill
                            className="object-cover rounded-xl"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};