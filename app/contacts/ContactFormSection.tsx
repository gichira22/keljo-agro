// app/contact-us/sections/ContactFormSection.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FormData } from './Contacts';

export const ContactFormSection = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const validateForm = () => {
    if (!formData.email) {
      return 'Email is required';
    }
    if (!formData.message) {
      return 'Message is required';
    }
    if (formData.message.length < 10) {
      return 'Message must be at least 10 characters long';
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      return 'Please enter a valid email address';
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validate form
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSending(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Failed to send message.');
      }

      setSuccess('Message sent successfully! We will get back to you soon.');
      setFormData({
        fullName: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      setError('Oops! Something went wrong. Please try again later.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="relative min-h-screen w-full">
      <div className="absolute inset-0">
        <Image 
          src="/contacts-bg.jpg" 
          alt="Agricultural background" 
          fill
          className="object-cover align-stretch"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw h-screen"
        />
      </div>

      {/* Overlay wrapper and form */}
      <div className="relative z-10 w-full min-h-screen flex flex-col lg:flex-row items-stretch">
        {/* Image Area - Visible on desktop */}
        <div className="hidden lg:block lg:w-1/2 h-[85%] relative">
        </div>
        
        {/* Form Container */}
        <div className="w-full lg:w-1/2 min-h-screen bg-[#F4F5F0] flex items-center justify-center py-12 lg:py-0">
          <div className="w-full max-w-2xl mx-auto px-6 lg:px-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">Send us a message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-[#5A5A5A] mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="bg-white w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <Image src="/icons/user-icon.png" alt="User Icon" width={20} height={20} className="opacity-60" />
                    </span>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#5A5A5A] mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-colors"
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
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-white w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-colors"
                  placeholder="Subject of your message"
                />
              </div>

              {/* Message */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="message" className="block text-sm font-medium text-[#5A5A5A]">
                    Your Message *
                  </label>
                  <span className={`text-xs ${formData.message.length < 50 ? 'text-red-500' : 'text-green-600'}`}>
                    {formData.message.length}/50
                  </span>
                </div>
                <textarea
                  id="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white text-black w-full px-4 py-3 border border-gray-300 rounded-lg resize-vertical focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-colors"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              {/* Feedback Messages */}
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <p className="text-red-600 text-sm font-medium">{error}</p>
                  </div>
                </div>
              )}
              {success && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-green-600 text-sm font-medium">{success}</p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSending}
                className={`w-full bg-[#246A21] text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform ${
                  isSending
                    ? 'opacity-60 cursor-not-allowed'
                    : 'hover:bg-green-700 hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer active:scale-95'
                }`}
              >
                {isSending ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  'SEND MESSAGE'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};