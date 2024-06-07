"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <header className="mb-4 flex items-center justify-between py-4 md:py-8">
            {/* logo - start */}
            <Link href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
              <div className="w-16">
                <img src="/logo1.png" alt="Logo" />
              </div>
              <span className="hidden sm:inline">Study Buddy</span>
            </Link>
            {/* logo - end */}

            {/* nav - start */}
            <nav className="hidden gap-12 lg:flex">
              <Link href="/" className="text-lg font-semibold text-indigo-500">Home</Link>
              <Link href="/about" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">About</Link>
              <Link href="/resorce" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Resources</Link>
              <Link href="/gallery" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Gallery</Link>
              <Link href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Join Group</Link>
            
            </nav>
            {/* nav - end */}

            {/* buttons - start */}
            <Link href="/contact" className="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block">Contact Us</Link>

            <button onClick={toggleMenu} type="button" className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              Menu
            </button>
            {/* buttons - end */}
          </header>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden">
              <nav className="flex flex-col gap-4">
                <Link href="/" className="text-lg font-semibold text-indigo-500">Home</Link>
                <Link href="/about" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">About</Link>
                <Link href="/resorce" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Resources</Link>
                <Link href="gallery" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Gallery</Link>
                <Link href="#" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Join Group</Link>
               
                <Link href="/contact" className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Contact Us</Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
