'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#051249] text-black sticky top-0 z-50 py-4 md:py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* Left Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo-placeholder.png"
            alt="Medico Pilot Logo"
            width={40}
            height={40}
            className="rounded"
          />
          <span className="text-base md:text-lg font-bold text-white">
            Medico Pilot
          </span>
        </Link>

        {/* Desktop Menu Container */}
        <div className="hidden md:flex bg-white shadow-[0_4px_20px_rgba(0,0,0,0.2)] 
        rounded-full px-6 lg:px-10 py-3 lg:py-4 items-center space-x-6 lg:space-x-10">

          <div className="flex items-center space-x-6 lg:space-x-10 font-semibold text-sm lg:text-base">
            <Link
              href="/"
              className="bg-[#051249] text-white px-4 py-2 text-xs lg:text-sm rounded-full shadow-md"
            >
              Home
            </Link>
            <Link href="/about" className="hover:text-[#051249] transition">About</Link>
            <Link href="/pricing" className="hover:text-[#051249] transition">Plan & Pricing</Link>
            <Link href="/webinars" className="hover:text-[#051249] transition">Webinars</Link>
            <Link href="/careers" className="hover:text-[#051249] transition">Careers</Link>
            <Link href="/contact" className="hover:text-[#051249] transition">Contact Us</Link>


          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu (Dynamic + Smooth + Compact) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white mt-3 border-t border-blue-800 py-4 animate-fadeIn">
          <div className="flex flex-col space-y-4 px-6 text-black font-medium text-sm">
            <Link href="/" className="hover:text-[#051249] transition">Home</Link>
            <Link href="/about" className="hover:text-[#051249] transition">About</Link>
            <Link href="/pricing" className="hover:text-[#051249] transition">Plan & Pricing</Link>
            <Link href="/webinars" className="hover:text-[#051249] transition">Webinars</Link>
            <Link href="/careers" className="hover:text-[#051249] transition">Careers</Link>
            <Link href="/contact" className="hover:text-[#051249] transition">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
