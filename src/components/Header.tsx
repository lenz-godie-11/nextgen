import { useEffect, useState } from 'react'
import { brand } from '../data'

const links = [
  { href: '#about', label: 'About' },
  { href: '#what-we-do', label: 'What We Do' },
  { href: '#vision-mission', label: 'Vision' },
  { href: '#process', label: 'Process' },
  { href: '#values', label: 'Values' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container nav">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <img className="brand__logo" src={brand.logo} alt="NEXT GEN INNOVATORS logo" />
          <span className="brand__text">
            <span className="brand__name">{brand.name}</span>
            <span className="brand__tag">{brand.tagline}</span>
          </span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} className="nav__link" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="btn btn--primary nav__cta" href="#contact">
          Let&apos;s Talk
          
        </a>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" />
        </button>
      </div>

      <div id="mobile-nav" className={`mobile-menu${open ? ' is-open' : ''}`}>
        <div className="container">
          <nav className="mobile-menu__inner" aria-label="Mobile">
            {links.map((link) => (
              <a
                key={link.href}
                className="mobile-menu__link"
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="btn btn--primary mobile-menu__cta"
              href="#contact"
              onClick={() => setOpen(false)}
            >
              Let&apos;s Talk
              
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}