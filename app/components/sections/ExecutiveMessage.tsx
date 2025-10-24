'use client';
import Image from 'next/image';

export const ExecutiveMessage = () => {
  return (
    <article className="w-full bg-white px-4 py-16">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-stretch">
        
        {/* Image + Yellow Accent */}
        <div className="relative w-full flex justify-center items-center">
          
          {/* Yellow Accent */}
   {/* <div className="absolute left-0 top-0 h-[60%] w-5 bg-[#F7C35F] rounded-tl-lg rounded-bl-lg" /> */}

          {/* Executive Image */}
          <div className="relative w-full rounded-xl overflow-hidden aspect-[4/5] max-w-[500px] z-10">
            <Image 
              src="/ihuoma.png" 
              alt="Portrait of Mr. Ihuoma Ndubuisi, Executive Director of Keijo-Agro Global Limited"
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
              priority
            />
          </div>
        </div>

        {/* Message Content */}
        <div className="flex flex-col justify-center bg-white p-6 rounded-lg shadow-md">
          <header className="mb-6">
            <h2 className="text-4xl font-bold text-black mb-2">
              Executive Director’s Message
            </h2>
            <h3 className="text-2xl font-semibold text-[#246A21]">
              Mr. Ihuoma Ndubuisi
            </h3>
          </header>

          <div className="space-y-4 text-gray-700 leading-relaxed text-lg lg:text-xl">
            <p>
              At Keijo-Agro Global Limited, we believe that agriculture is the bedrock of sustainable growth and community prosperity. We are committed to building resilient and efficient food systems that empower farmers, strengthen rural economies, and deliver quality, nutritious food to consumers.
            </p>
            <p>
              Through innovation, data-driven solutions, and best agronomic practices, we optimize crop and livestock production, enhance soil health, and add value across the agricultural value chain. By partnering with farmers, businesses, governments, and research institutions, we create scalable solutions that generate measurable impact and drive inclusive growth.
            </p>
            <p>
              We are not just cultivating crops — we are cultivating opportunity, resilience, and a sustainable future. Together with our partners, Keijo-Agro is shaping the next generation of African agriculture and securing tomorrow’s harvests.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
