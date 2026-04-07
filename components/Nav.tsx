'use client'

import { useEffect, useState } from 'react'

const links = [
  { label: 'About',     href: '#about'     },
  { label: 'Portfolio', href: '#portfolio'  },
  { label: 'Contact',   href: '#contact'   },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-[#080808]/90 backdrop-blur-md border-b border-[#1a1a1a]'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-[#e8e0d0] text-xl tracking-wider hover:text-[#c41e1e] transition-colors duration-300"
        >
          nefi<span className="text-[#c41e1e]">.</span>ink
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[10px] text-[#7a7060] hover:text-[#e8e0d0] transition-colors duration-300 uppercase tracking-[0.25em]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-mono text-[10px] px-5 py-2.5 border border-[#c41e1e] text-[#c41e1e] hover:bg-[#c41e1e] hover:text-[#e8e0d0] transition-all duration-300 uppercase tracking-[0.25em]"
          >
            Book
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-px bg-[#e8e0d0] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`}
          />
          <span
            className={`block w-6 h-px bg-[#e8e0d0] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-px bg-[#e8e0d0] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } bg-[#0e0e0e] border-t border-[#1a1a1a]`}
      >
        <div className="flex flex-col px-6 py-6 gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-xs text-[#7a7060] hover:text-[#c41e1e] transition-colors uppercase tracking-[0.25em]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="font-mono text-xs px-5 py-3 border border-[#c41e1e] text-[#c41e1e] text-center uppercase tracking-[0.25em]"
          >
            Book your session
          </a>
        </div>
      </div>
    </nav>
  )
}
