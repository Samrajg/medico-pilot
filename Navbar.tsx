'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[var(--secondary)] text-black sticky top-0 z-50 py-4 lg:py-6 font-poppins">
      <div className="container mx-auto px-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo-placeholder.png"
            alt="Medico Pilot Logo"
            width={40}
            height={40}
            className="rounded"
          />
          <span className="text-base lg:text-lg font-bold text-white">
            Medico Pilot
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex bg-white shadow-[0_4px_20px_rgba(0,0,0,0.2)]
        rounded-full px-6 xl:px-10 py-3 xl:py-4 items-center space-x-3 xl:space-x-6">

          {/* HOME */}
          <Link
            href="/"
            className="
              px-4 py-2 rounded-full text-[var(--secondary)] text-xs xl:text-sm font-semibold
              transition-all duration-200
              hover:bg-[var(--secondary)] hover:text-white
            "
          >
            Home
          </Link>

          {[
            { name: "About", href: "/about" },
            { name: "Plan & Pricing", href: "/pricing" },
            { name: "Webinars", href: "/webinars" },
            { name: "Careers", href: "/careers" },
            { name: "Contact Us", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="
                px-4 py-2 rounded-full text-[var(--secondary)] text-xs xl:text-sm font-semibold
                transition-all duration-200
                hover:bg-[var(--secondary)] hover:text-white
              "
            >
              {item.name}
            </Link>
          ))}

        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white"
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white mt-3 border-t-2 border-[var(--primary)] py-4 animate-fadeIn">
          <div className="flex flex-col space-y-4 px-6 text-black font-medium text-sm">
            <Link href="/" className="hover:text-[var(--secondary)] transition">Home</Link>
            <Link href="/about" className="hover:text-[var(--secondary)] transition">About</Link>
            <Link href="/pricing" className="hover:text-[var(--secondary)] transition">Plan & Pricing</Link>
            <Link href="/webinars" className="hover:text-[var(--secondary)] transition">Webinars</Link>
            <Link href="/careers" className="hover:text-[var(--secondary)] transition">Careers</Link>
            <Link href="/contact" className="hover:text-[var(--secondary)] transition">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
