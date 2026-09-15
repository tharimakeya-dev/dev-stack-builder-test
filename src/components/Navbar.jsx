import { useState } from 'react'

const NAV_LINKS = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Mobile: hamburger on the left */}
        <button
          type="button"
          className="mr-2 inline-flex h-9 w-9 items-center justify-center rounded-lg text-ink md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>

        {/* Brand: left on desktop, centered on mobile */}
        <a href="#home" className="flex items-center gap-2 md:mr-auto">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-sm font-bold text-white font-display">
            DS
          </span>
          <span className="text-lg font-semibold text-ink font-display">
            Dev <span className="brand-text">Stack</span>
          </span>
        </a>

        {/* Center nav links (desktop only) */}
        <ul className="hidden items-center gap-8 text-sm font-medium text-ink/70 md:flex">
          {NAV_LINKS.map((link, i) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={i === 0 ? 'text-pink-600' : 'transition-colors hover:text-ink'}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="ml-auto flex items-center gap-2 md:ml-0 md:gap-4">
          <button
            type="button"
            className="hidden text-sm font-medium text-ink/80 hover:text-ink sm:inline-block"
          >
            Sign In
          </button>
          <button
            type="button"
            className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <ul className="flex flex-col gap-1 border-t border-black/5 bg-white px-4 py-3 text-sm font-medium text-ink/80 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-2 py-2 hover:bg-cloud"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
