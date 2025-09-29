import Image from 'next/image';

export const AboutUs = () => {
    return (
        <section className="min-h-screen w-full bg-white py-8 lg:py-40">
            <div className="h-full w-full max-w-[1540px] mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-6 lg:gap-8 h-full">
                    
                    {/* Left Column - Content */}
                    <div className="relative h-full min-h-[400px] lg:min-h-[500px] rounded-2xl bg-[#EAEAEA] space-y-6 p-6 lg:p-12 flex flex-col justify-center">
                        <div className="space-y-4">
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#246A21]">
                                Who We Are
                            </h2>
                        </div>
                        
                        <div className="space-y-4 text-base lg:text-lg text-black leading-relaxed">
                            <p className="mb-4">
                                Keljo-Agro Global Limited is a diversified
                                agribusiness delivering end-to-end agricultural
                                solutions across Africa and global markets.
                            </p>
                            <p>
                                We combine modern farming practices, agro-
                                processing, research, and strategic collaborations
                                to transform agriculture into a driver of food
                                security, innovation, and economic empowerment.
                            </p>
                        </div>
                    </div>
                    
                    {/* Right Column */}
                    <div className="relative h-64 sm:h-75 lg:h-full min-h-[400px] w-full flex items-center justify-end">
                        <div className="relative h-full w-full">
                            {/* Main Image */}
                            <Image 
                                src="/about/about-us.png" 
                                alt="Keljo-Agro agricultural operations - farmers working in fields"
                                fill
                                className="object-cover rounded-lg"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        {/* Yellow rectangle */}
                        <div className="absolute right-0 translate-x-full top-0 h-80 w-4 lg:w-4 bg-[#F7C35F] rounded-tr-lg rounded-br-lg"></div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};