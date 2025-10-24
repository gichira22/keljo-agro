'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export const GetInTouch: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsSending(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });

      if (!res.ok) {
        throw new Error('Failed to send message.');
      }

      setSuccess('Message sent successfully!');
      setEmail('');
      setMessage('');
    } catch (err) {
      setError('Oops! Something went wrong. Please try again later.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="w-full bg-gray-50 py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Still have questions? We would love to hear from you
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Email + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Email */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-[#246A21] mb-4 flex items-center">
                  <div className="w-8 h-8 bg-[#246A21] rounded-full flex items-center justify-center mr-3">
                    <Image src="/icons/email.svg" alt="Email" width={20} height={20} />
                  </div>
                  Email
                </h3>
                <p className="text-black font-medium">info@keljoagro.com</p>
              </div>

              {/* Phone */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-[#246A21] mb-4 flex items-center">
                  <div className="w-8 h-8 bg-[#246A21] rounded-full flex items-center justify-center mr-3">
                    <Image src="/icons/call.svg" alt="Phone" width={20} height={20} />
                  </div>
                  Phone
                </h3>
                <p className="text-black font-medium">+234 803 224 0379</p>
              </div>
            </div>

            {/* Office */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-[#246A21] mb-4 flex items-center">
                <div className="w-8 h-8 bg-[#246A21] rounded-full flex items-center justify-center mr-3">
                  <Image src="/icons/location.svg" alt="Location" width={20} height={20} />
                </div>
                Office
              </h3>
              <p className="text-black font-medium">
                4th Floor Wing D Re–Insurance Building<br />
                Hot 764 Herbert Macaulay way CBD, Abuja
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xl font-semibold text-[#246A21] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xl font-semibold text-[#246A21] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200 resize-vertical"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              {/* Feedback */}
              {error && <p className="text-red-600 text-sm">{error}</p>}
              {success && <p className="text-green-600 text-sm">{success}</p>}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSending}
                className={`w-full bg-[#246A21] text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform ${
                  isSending
                    ? 'opacity-60'
                    : 'hover:bg-green-700 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer'
                }`}
              >
                {isSending ? 'Sending...' : 'SEND MESSAGE'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
