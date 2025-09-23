import Image from 'next/image';
import React from 'react';

export const GetInTouch: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Still have questions? We would love to hear from you
          </p>
        </div>

        {/* Divider */}
        <div className="w-24 h-1 bg-green-500 mx-auto mb-12 lg:mb-16 rounded-full"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
           <div>
            {/* Email Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-[#246A21] mb-4 flex items-center">
                <div className="w-8 h-8 bg-[#246A21] rounded-full flex items-center justify-center mr-3">
                    <img
                    src="/icons/email.svg"
                    alt="Email"
                    width={20}
                    height={20}
                    className='text-white'
                    /> 
                </div>
                Email
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2">
                  <span className="text-[#292121] font-medium">info@keljoagro.com</span>
                </div>
                
              </div>
            </div>
            
            {/* Phone Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-[#246A21] mb-4 flex items-center">
                <div className="w-8 h-8 bg-[#246A21] rounded-full flex items-center justify-center mr-3">
                    <img
                    src="/icons/call.svg"
                    alt="Phone"
                    width={20}
                    height={20}
                    className='text-white'
                    /> 
                </div>
                Phone
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2">
                    <span className="text-[#292121] font-medium">Phone Number</span>
                </div>
              </div>
            </div>
        </div> 
            
            {/* Office Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-[#246A21] mb-4 flex items-center">
                <div className="w-8 h-8 bg-[#246A21] rounded-full flex items-center justify-center mr-3">
                    <img
                    src="/icons/location.svg"
                    alt="Office"
                    width={20}
                    height={20}
                    className='text-white'
                    /> 
                </div>
                Office
              </h3>
              <p className="text-[#292121] font-medium">
                4th Floor Wing D Re–Insurance Building<br />
                Hot 764 Herbert Macaulay way CBD, Abuja
              </p>
            </div>
          </div>

          {/* Right Column - Message Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            {/* <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-2 h-6 bg-green-500 mr-3 rounded-full"></span>
              Send us a Message
            </h3> */}
            
            <form className="space-y-6">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm text-[#246A21] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm text-[#246A21] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200 resize-vertical"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              {/* Send Button */}
              <button
                type="submit"
                className="w-full bg-green-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};