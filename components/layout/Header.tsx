'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui';

const navLinks = [
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Use Case', href: '#use-case' },
  { label: 'FAQ', href: '#faq' },
];

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Header - Clean floating design */}
      <header className="fixed top-6 left-0 right-0 z-50 hidden lg:flex justify-center pointer-events-none">
        <div 
          className="pointer-events-auto bg-white shadow-lg"
          style={{
            width: '800px',
            height: '70px',
            borderRadius: '200px',
            paddingTop: '15px',
            paddingRight: '24px',
            paddingBottom: '15px',
            paddingLeft: '28px',
          }}
        >
          <nav className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-0" style={{ marginLeft: '-10px' }}>
              <div className="relative h-[32px] w-[32px]">
                <Image
                  src="/coup.png"
                  alt="Coup"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-[#1D2026] text-[22px] font-bold">coup.</span>
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[15px] font-normal text-[#6b7280] hover:text-[#1f2937] transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <Button variant="primary" href="#contact">
                <span className='text-[16px] font-medium'>Contact Sales</span>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile/Tablet Header */}
      <header className="fixed top-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-full mx-auto" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
          <nav className="flex items-center justify-between h-[70px]">
            {/* Logo */}
            <Link href="/" className="shrink-0 flex items-center">
              <div className="relative h-[36px] w-[100px]">
                <Image
                  src="/Group 1.png"
                  alt="Coup"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* CTA Button - Tablet */}
            <div className="hidden md:block lg:hidden">
              <Button variant="primary" href="#contact">
                Contact Sales
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-[#1A1A1A]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isMobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </nav>

          {/* Mobile Menu Dropdown */}
          <div
            className={`
              overflow-hidden transition-all duration-300
              ${isMobileMenuOpen ? 'max-h-80 pb-6' : 'max-h-0'}
            `}
          >
            <div className="flex flex-col gap-4 pt-4 border-t border-[#E5E7EB]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[15px] font-medium text-[#1A1A1A] hover:text-[#007AFF] py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="primary" href="#contact" className="mt-2 md:hidden">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
