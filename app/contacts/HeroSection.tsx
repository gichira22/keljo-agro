// app/contact-us/sections/HeroSection.tsx
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section className="relative py-32 bg-green-900">
      <div className="absolute inset-0 bg-black opacity-50">
        <Image 
          src="/services.jpg"
          alt="Contact Us"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Contact
          </h1>
        </div>
      </div>
    </section>
  );
};