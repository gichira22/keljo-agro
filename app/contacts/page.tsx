// app/contact-us/page.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero/Breadcrumb Section */}
      <section className="relative py-24 bg-green-900">
        <div className="absolute inset-0 bg-black opacity-50">
          <Image 
            src="/contact-hero.jpg"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-green-200 mb-4">
              <Link href="/" className="hover:text-white transition-colors">HOME</Link>
              <span>/</span>
              <span className="text-white">CONTACT</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Contact</h1>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Left Column - Contact Information */}
              <div className="lg:col-span-1 space-y-8">
                {/* Email Address */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Email Address</h3>
                  <a 
                    href="mailto:info@keljoagro.com" 
                    className="text-green-600 hover:text-green-800 transition-colors text-lg"
                  >
                    info@keljoagro.com
                  </a>
                </div>

                {/* Contact Details */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Contact</h3>
                  <div className="space-y-2">
                    <a 
                      href="tel:+2348032240379" 
                      className="block text-gray-700 hover:text-green-600 transition-colors"
                    >
                      +234 803 2240 379
                    </a>
                    <a 
                      href="mailto:support@keljoagro.com" 
                      className="block text-gray-700 hover:text-green-600 transition-colors"
                    >
                      support@keljoagro.com
                    </a>
                    <p className="text-gray-600 text-sm">
                      Mon - Fri: 7:00 am - 6:00 pm
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Address</h3>
                  <address className="text-gray-700 not-italic">
                    4th Floor Wing D Re-insurance Building<br />
                    Plot 764 Herbert Macaulay way CBD<br />
                    Abuja
                  </address>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a message</h2>
                  
                  <form className="space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name Here
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Enter Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                        placeholder="Subject of your message"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Write Message
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-vertical"
                        placeholder="Write your message here..."
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium text-lg shadow-lg hover:shadow-xl"
                    >
                      SEND MESSAGE
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Keljo Agro</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Keljo-Agro Global Limited is a leading agribusiness dedicated to transforming 
                agriculture through innovation, sustainability, and excellence.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Link</h3>
              <ul className="space-y-2">
                {['About', 'Testimonials', 'Product', 'Career', 'Blog', 'Contact Us'].map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={`/${link.toLowerCase().replace(' ', '-')}`} 
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-200 inline-block"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Services Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                {[
                  'Crop Production',
                  'Livestock Production', 
                  'Agricultural Trade',
                  'Farmer Aggregation',
                  'Fertilizer Trials'
                ].map((service, index) => (
                  <li key={index}>
                    <Link 
                      href="/services" 
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-200 inline-block"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Products Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Products</h3>
              <ul className="space-y-2">
                {[
                  'Focus Crops',
                  'Animal Production',
                  'Processed Foods',
                  'Agro-Allied Products',
                  'Machinery & Inputs'
                ].map((product, index) => (
                  <li key={index}>
                    <Link 
                      href="/products" 
                      className="text-gray-300 hover:text-white text-sm transition-colors duration-200 inline-block"
                    >
                      {product}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}