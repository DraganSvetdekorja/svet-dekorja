import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/tapete', label: 'Tapete' },
    { href: '/fototapete', label: 'Fototapete' },
    { href: '/folije', label: 'Samolepilne folije' },
    { href: '/tkanine', label: 'Dekorativne tkanine & Zavese' },
    { href: '/tepahi', label: 'Tepihi & Wall Tattoos' },
    { href: '/salon', label: 'Salon / B2B / Svetovanje' },
  ];

  return (
    <header className="border-b border-gray/10 bg-white/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center space-x-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Svet Dekorja"
              className="h-8 w-auto"
            />
          </Link>
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded hover:bg-gray/50"
            aria-label="Open menu"
          >
            <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex md:items-center md:space-x-6">
          {/* Navigation */}
          <nav className="flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-terracotta transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Search, Wishlist, Cart */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded hover:bg-gray/50">
              <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 105.636 12.364m0 0A7.5 7.5 0 1112.364 5.636m0 0a3 3 0 10-4.243 4.242" />
              </svg>
            </button>
            <button className="p-2 rounded hover:bg-gray/50">
              <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h10m-9 3h18" />
              </svg>
            </button>
            <button className="relative p-2 rounded hover:bg-gray/50">
              <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l4.9M3 3h2l4.9M6 6l2.127 2.127a55.032 55.032 0 016.236 6.237c-.556.217-1.13.33-1.714.33a11.94 11.94 0 00-6.231-2.283" />
              </svg>
              {/* Cart badge */}
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-terracotta text-xs font-medium text-white">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 ${isOpen ? 'block' : 'hidden'}`}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded text-base font-medium text-gray-700 hover:bg-gray/50 hover:text-terracotta"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center px-3 pt-2 pb-4 space-x-3">
              <button className="p-2 rounded hover:bg-gray/50">
                <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 105.636 12.364m0 0A7.5 7.5 0 1112.364 5.636m0 0a3 3 0 10-4.243 4.242" />
                </svg>
              </button>
              <button className="p-2 rounded hover:bg-gray/50">
                <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h10m-9 3h18" />
                </svg>
              </button>
              <button className="relative p-2 rounded hover:bg-gray/50">
                <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l4.9M3 3h2l4.9M6 6l2.127 2.127a55.032 55.032 0 016.236 6.237c-.556.217-1.13.33-1.714.33a11.94 11.94 0 00-6.231-2.283" />
                </svg>
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-terracotta text-xs font-medium text-white">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}