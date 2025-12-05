'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/signature-journey', label: 'Our Journey' },
  { href: '/how-it-works', label: 'How it Works' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Logo.png"
              alt="Nonna Travel Logo"
              width={120}
              height={60}
              className="h-auto w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-primary hover:text-primary-green transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" variant="primary" className="ml-4">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary-green rounded"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-text-primary hover:text-primary-green transition-colors font-medium py-2 min-h-[44px] flex items-center"
                >
                  {link.label}
                </Link>
              ))}
              <Button href="/contact" variant="primary" className="mt-2">
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

