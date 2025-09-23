// import Link from 'next/link';
// import Button from '../ui/Button';

// export default function Header() {
//   return (
//     <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link href="/" className="flex items-center space-x-2">
//             <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
//               <span className="text-white font-bold text-lg">K</span>
//             </div>
//             <span className="text-xl font-bold text-gray-900">Keljo Agro</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
//               Home
//             </Link>
//             <Link href="/services" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
//               Services
//             </Link>
//             <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
//               About
//             </Link>
//             <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
//               Contact
//             </Link>
//           </div>

//           {/* CTA Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Button variant="outline" size="sm">
//               Login
//             </Button>
//             <Button size="sm">
//               Get Started
//             </Button>
//           </div>

//           {/* Mobile menu button (we'll implement toggle later) */}
//           <button className="md:hidden p-2 rounded-md text-gray-700">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// }
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
                <Link href="/about" className="text-[19px] text-gray-900 font-normal leading-[32px] hover:text-green-600 transition-colors whitespace-nowrap">
                    About Us
                </Link>
                <Link href="/services" className="text-[19px] text-gray-900 font-normal leading-[32px] hover:text-green-600 transition-colors whitespace-nowrap">
                    Services
                </Link>
                <Link href="/products" className="text-[19px] text-gray-900 font-normal leading-[32px] hover:text-green-600 transition-colors whitespace-nowrap">
                    Products
                </Link>
                <Link href="/blog" className="text-[19px] text-gray-900 font-normal leading-[32px] hover:text-green-600 transition-colors whitespace-nowrap">
                    Blog
                </Link>
                <Link href="/contact" className="text-[19px] text-gray-900 font-normal leading-[32px] hover:text-green-600 transition-colors whitespace-nowrap">
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
                        <Link href="/about" className="text-[19px] text-gray-900 font-normal hover:text-green-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                            About Us
                        </Link>
                        <Link href="/services" className="text-[19px] text-gray-900 font-normal hover:text-green-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                            Services
                        </Link>
                        <Link href="/products" className="text-[19px] text-gray-900 font-normal hover:text-green-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                            Products
                        </Link>
                        <Link href="/blog" className="text-[19px] text-gray-900 font-normal hover:text-green-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                            Blog
                        </Link>
                        <Link href="/contact" className="text-[19px] text-gray-900 font-normal hover:text-green-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};