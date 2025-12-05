import React from 'react';
import Link from 'next/link';

const footerLinks = {
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/signature-journey', label: 'Our Journey' },
    { href: '/how-it-works', label: 'How it Works' },
    { href: '/faq', label: 'FAQ' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms & Conditions' },
    { href: '/refund', label: 'Refund & Cancellation Policy' },
    { href: '/cookies', label: 'Cookie Policy' },
  ],
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-green text-white mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">Nonna Travel</h3>
            <p className="text-white/90 mb-4">
              Unforgettable journeys to your grandparents' village. Authentic food, real stories, and the warmth of Italy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 mb-6">
              <li>
                <a
                  href="mailto:hello@nonnatravel.com"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  hello@nonnatravel.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+13479935093"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  US: +1 (347) 993-5093
                </a>
              </li>
              <li>
                <a
                  href="tel:+393409478878"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  IT: +39 340 9478878
                </a>
              </li>
            </ul>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/80 text-sm">
          <p>&copy; {new Date().getFullYear()} NonnaTravel LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

