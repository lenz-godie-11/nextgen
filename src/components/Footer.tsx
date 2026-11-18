import { brand } from '../data'

const footerLinks = [
  { href: '#about', label: 'About' },
  { href: '#what-we-do', label: 'What We Do' },
  { href: '#vision-mission', label: 'Vision & Mission' },
  { href: '#process', label: 'Process' },
  { href: '#values', label: 'Values' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <div className="footer__brand">
              <img src={brand.logo} alt="NEXT GEN INNOVATORS logo" />
              <div>
                <div className="footer__title">{brand.name}</div>
                <div className="footer__tag">{brand.tagline}</div>
              </div>
            </div>
            <p className="footer__desc">
              A technology-driven startup focused on transforming real-world problems into practical,
              innovative, and scalable solutions.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            {footerLinks.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer__wordmark" aria-hidden="true">
          NEXT GEN
        </div>

        <div className="footer__bottom">
          <span>© 2026 {brand.name}. All rights reserved.</span>
          <span>Turning Impossible into Possible.</span>
        </div>
      </div>
    </footer>
  )
}