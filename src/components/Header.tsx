import { useState } from 'react'
import { brand } from '../data'

const links = [
  { href: '#about', label: 'About' },
  { href: '#what-we-do', label: 'What We Do' },
  { href: '#vision-mission', label: 'Vision & Mission' },
  { href: '#process', label: 'Process' },
  { href: '#values', label: 'Values' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container nav">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <img className="brand__logo" src={brand.logo} alt="NEXT GEN INNOVATORS logo" />
          <span className="brand__text">
            <span className="brand__name">{brand.name}</span>
            <span className="brand__tag">{brand.tagline}</span>
          </span>
        </a>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>

        <nav
          id="site-nav"
          className={open ? 'nav__links nav__links--open' : 'nav__links'}
          aria-label="Primary"
        >
          {links.map((link) => (
            <a key={link.href} className="nav__link" href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
