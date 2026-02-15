import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/lib/locale';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { labelKey: 'nav.home', href: '/' },
  { labelKey: 'nav.services', href: '/services' },
  { labelKey: 'nav.about', href: '/about' },
  { labelKey: 'nav.blog', href: '/blog' },
  { labelKey: 'nav.news', href: '/actualites' },
  { labelKey: 'nav.contact', href: '/contact' },
];

export default function Navbar() {
  const { t } = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: number | null = null;
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setIsScrolling(true);
      if (scrollTimeout) {
        window.clearTimeout(scrollTimeout);
      }
      scrollTimeout = window.setTimeout(() => {
        setIsScrolling(false);
      }, 140);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        window.clearTimeout(scrollTimeout);
      }
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <>
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
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.labelKey}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm font-medium"
              >
                {t(link.labelKey)}
              </a>
            ))}
          </div>

          {/* CTA + Theme Toggle */}
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <div className="hidden sm:block">
              <Button
                asChild
                variant="cta"
                size="sm"
                className="h-12 w-32 rectangle-full p-0 text-[10px] leading-none shadow-lg"
              >
                <a href="/contact" aria-label={t('nav.appointment')}>{t('nav.appointment')}</a>
              </Button>
            </div>
            <button
              type="button"
              className="lg:hidden ml-1 inline-flex items-center justify-center rounded-md p-2 bg-black/80 text-white hover:bg-black transition"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="mx-3 mb-3 mt-2 rounded-xl bg-transparent shadow-none ring-white/10">
            <div className="px-2 pb-4 pt-2 space-y-1 text-right">
            {navLinks.map((link) => (
              <a
                key={link.labelKey}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-white/85 hover:text-white hover:bg-white/10 transition"
              >
                {t(link.labelKey)}
              </a>
            ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
      <div
        className={`sm:hidden fixed bottom-4 right-4 z-50 transition-opacity duration-200 ${isScrolling ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <Button
          asChild
          variant="cta"
          size="sm"
          className="h-12 w-32 rectangle-full p-0 text-[10px] leading-none shadow-lg"
        >
          <a href="/contact" aria-label={t('nav.appointment')}>{t('nav.appointment')}</a>
        </Button>
      </div>
    </>
  );
}