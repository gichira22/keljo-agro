import Image from 'next/image';

export const ExecutiveMessage = () => {
  return (
    <section className="w-full bg-white px-4 py-16">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Left Column - Executive Image */}
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-sm h-full">
          <Image 
            src="/message.jpg" 
            alt="Executive Director" 
            width={564} 
            height={724} 
            className="rounded-lg object-cover w-full h-auto"
          />
          <div className="text-lg text-gray-600 mt-4">Mr. Ihuoma Ndubuisi</div>
        </div>

        {/* Right Column - Message Content */}
        <div className="bg-white p-6 rounded-lg shadow-sm space-y-6 h-full">
          <div>
            <h2 className="text-4xl font-bold text-black mb-4">
              Executive Directors Message
            </h2>
            <h3 className="text-2xl font-semibold text-[#246A21] mb-6">
              Mr. Ihuoma Ndubuisi
            </h3>
          </div>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              At Keijo-Agro Global Limited, we believe that agriculture is the bedrock of sustainable growth and community prosperity. We are interested in building resilient and efficient food systems that empower farmers, strengthen rural economies, and deliver quality, nutritious food to consumers.
            </p>
            <p>
              Through innovation, data-driven solutions, and best agronomic practices, we optimize crop and livestock production, enhance soil health, and add value across the agricultural value chain. Through partnerships with farmers, businesses, governments, and research institutions, we create scalable solutions that generate measurable impact and drive inclusive growth.
            </p>
            <p>
              We are not just cultivating crops — we are cultivating opportunity, resilience, and a sustainable future. Together with our partners, Keijo-Agro is shaping the next generation of African agriculture and securing tomorrows harvests.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
