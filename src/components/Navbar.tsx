import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Accueil', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'À propos', href: '#about' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 -ml-8 sm:-ml-12 md:-ml-16">
            <a href="/" className="flex items-center" aria-label="VIVIA home">
              <img
                src="/logo2.svg"
                alt="VIVIA logo"
                className="h-24 sm:h-26 md:h-29 lg:h-32 w-auto object-contain"
              />
            </a>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <span className="hidden sm:block text-muted-foreground text-sm">EN</span>
            <Button variant="cta" size="sm">
              Réserver un rendez-vous
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}