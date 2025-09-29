// app/contact-us/page.tsx
// import Link from 'next/link';
import Image from 'next/image';
import ContactCard from './ContactCard';

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen py-32 bg-green-900">
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
            <h1 className="text-5xl md:text-7xl font-bold text-white mt-40 mb-6">
              Contact Us
            </h1>
          </div>
        </div>
      </section>

      {/* Contact Information Cards Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Email Address Card - Green */}
              <ContactCard
                title="Email Address"
                bgColor="bg-[#246A21]"
                
              >
                <a 
                  href="mailto:info@keljoagro.com" 
                  className="text-white hover:text-gray-200 transition-colors text-lg font-medium"
                >
                  info@keljoagro.com
                </a>
              </ContactCard>

              {/* Contact Details Card - Brown */}
              <ContactCard
                title="Contact"
                bgColor="bg-[#513C07]"
            
              >
                <div className="space-y-2">
                  <a 
                    href="tel:+2348032240379" 
                    className="block text-white hover:text-gray-200 transition-colors font-medium"
                  >
                    Phone Number
                  </a>
                  <a 
                    href="mailto:support@keljoagro.com" 
                    className="block text-white hover:text-gray-200 transition-colors font-medium"
                  >
                    support@keljoagro.com
                  </a>
                  <p className="text-white text-opacity-80 text-sm">
                    Mon - Fri: 7:00 am - 6:00 pm
                  </p>
                </div>
              </ContactCard>

              {/* Address Card - Gold */}
              <ContactCard
                title="Address"
                bgColor="bg-[#DCA443]"
           
              >
                <address className="text-white not-italic font-medium">
                  4th Floor Wing D<br />
                  Re-insurance Building<br />
                  Plot 764 Herbert Macaulay way CBD<br />
                  Abuja
                </address>
              </ContactCard>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
     <section className="relative h-full w-full overflow-hidden">
  {/* Background Image */}
  <Image 
    src="/contacts-bg.jpg" 
    alt="Agricultural background" 
    fill
    className="object-cover"
    priority
  />

  {/* Overlay wrapper and form */}
  <div className="relative z-10 w-full h-full flex justify-end items-stretch">
    <div className="w-full lg:w-1/2 h-full bg-white flex items-center">
      <div className="w-full max-w-2xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-black mb-6">Send us a message</h2>

        <form className="space-y-6">
          {/* Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
  <label htmlFor="fullName" className="block text-sm font-medium text-[#5A5A5A] mb-2">
    Enter Full Name
  </label>
  <div className="relative">
    <input
      type="text"
      id="fullName"
      className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
      placeholder="Your full name"
    />
    <span className="absolute inset-y-0 right-0 flex items-center pr-3">
      <Image src="/icons/user-icon.png" alt="User Icon" width={20} height={20} className="opacity-60" />
    </span>
  </div>
</div>

           <div>
  <label htmlFor="email" className="block text-sm font-medium text-[#5A5A5A] mb-2">
    Enter Your Email
  </label>
  <div className="relative">
    <input
      type="email"
      id="email"
      className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
      placeholder="your.email@example.com"
    />
    <span className="absolute inset-y-0 right-0 flex items-center pr-3">
      <Image src="/icons/mail-icon.png" alt="Email Icon" width={20} height={20} className="opacity-60" />

    </span>
  </div>
</div>

          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-[#5A5A5A] mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              placeholder="Subject of your message"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[#5A5A5A] mb-2">
              Write Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-vertical"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-[#246A21] text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium text-lg shadow-lg hover:shadow-xl"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}