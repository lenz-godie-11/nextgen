import { brand } from '../data'

const currentYear = new Date().getFullYear()

const exploreLinks = [
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
          <div className="footer__brand-col">
            <div className="footer__brand">
              <img src={brand.logo} alt="NEXT GEN INNOVATORS logo" />
              <div>
                <h2 className="footer__title">{brand.name}</h2>
                <div className="footer__tag">{brand.tagline}</div>
              </div>
            </div>
            <p className="footer__desc">{brand.description}</p>
          </div>

          <nav className="footer__nav" aria-labelledby="footer-explore">
            <h3 className="footer__heading" id="footer-explore">
              Explore
            </h3>
            <div className="footer__links">
              {exploreLinks.map((link) => (
                <a href={link.href} key={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        </div>

        <div className="footer__wordmark" aria-hidden="true">
          NEXT GEN
        </div>

        <div className="footer__bottom">
          <span>
            © {currentYear} {brand.name}. All rights reserved.
          </span>
          
        </div>
      </div>
    </footer>
  )
}