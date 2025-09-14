'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/ser', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/clients', label: 'Clients' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact Us' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 text-white header-animated-gradient backdrop-blur-md shadow-md font-heading">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 md:py-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-3"
        >
          <span className="text-2xl font-extrabold tracking-tight drop-shadow-md">
            PAL Trading plc
          </span>
          <span className="text-sm text-orange-300 font-semibold md:mt-1 italic">
            Crafting Stories, Defining the Future
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="relative hover:text-accent transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-accent hover:after:w-full after:transition-all after:duration-300"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-md hover:scale-105 hover:ring-2 hover:ring-accent transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden bg-white text-primary shadow-inner animate-fade-in-down">
          <ul className="flex flex-col px-6 py-4 space-y-3 font-medium">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block hover:text-accent transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
