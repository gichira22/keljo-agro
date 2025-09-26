'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full h-[123px] px-[53px] py-[10px] flex items-center justify-between relative bg-white shadow-sm">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
                <Image 
                    src="/logo.png" 
                    alt="Keljo Agro Logo" 
                    width={188}
                    height={87}
                    className="h-[87px] w-[188px] object-cover"
                    priority
                />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-start gap-[53px] flex-1 justify-center">
                <Link href="/" className="text-[19px] text-gray-900 font-normal leading-[32px] hover:text-green-600 transition-colors whitespace-nowrap">
                    Home
                </Link>
                <Link href="/about" className="text-[19px] text-gray-900 font-normal leading-[32px] hover:text-green-600 transition-colors whitespace-nowrap">
                    About Us
                </Link>
                <Link href="/services" className="text-[19px] text-gray-900 font-normal leading-[32px] hover:text-green-600 transition-colors whitespace-nowrap">
                    Services
                </Link>
                <Link href="/products" className="text-[19px] text-gray-900 font-normal leading-[32px] hover:text-green-600 transition-colors whitespace-nowrap">
                    Products
                </Link>
                <Link href="/blogs" className="text-[19px] text-gray-900 font-normal leading-[32px] hover:text-green-600 transition-colors whitespace-nowrap">
                    Blogs
                </Link>
                <Link href="/contacts" className="text-[19px] text-gray-900 font-normal leading-[32px] hover:text-green-600 transition-colors whitespace-nowrap">
                    Contact Us
                </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
                className="lg:hidden p-2 rounded-md text-gray-700 hover:text-green-600 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-lg lg:hidden z-50">
                    <div className="flex flex-col p-4 space-y-4">
                        <Link href="/home" className="text-green-200 hover:text-white transition-colors">
                          Home
                        </Link>
                        <Link href="/about" className="text-[19px] text-gray-900 font-normal hover:text-green-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                            About Us
                        </Link>
                        <Link href="/services" className="text-[19px] text-gray-900 font-normal hover:text-green-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                            Services
                        </Link>
                        <Link href="/products" className="text-[19px] text-gray-900 font-normal hover:text-green-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                            Products
                        </Link>
                        <Link href="/blogs" className="text-[19px] text-gray-900 font-normal hover:text-green-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                            Blogs
                        </Link>
                        <Link href="/contacts" className="text-[19px] text-gray-900 font-normal hover:text-green-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};