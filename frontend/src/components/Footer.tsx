import { Linkedin, Twitter, Instagram, ArrowUp } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Automatisation', href: '#' },
    { label: 'Intelligence Artificielle', href: '#' },
    { label: 'Chatbots', href: '#' },
    { label: 'Analyse de Données', href: '#' }
  ],
  company: [
    { label: 'À Propos', href: '/#about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Actualités', href: '/actualites' },
    { label: 'Carrières', href: '#' },
    { label: 'Contact', href: '/#contact' }
  ],
  legal: [
    { label: 'Mentions Légales', href: '#' },
    { label: 'Politique de Confidentialité', href: '#' },
    { label: 'CGV', href: '#' }
  ]
};

const socialLinks = [
  { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
  { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
  { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' }
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-base"></span>
              </div>
              <span className="text-lg font-bold text-foreground">VIVIA</span>
            </div>
            <p className="text-muted-foreground mb-5 max-w-sm text-sm leading-relaxed">
              Automatisation & IA pour PME. Réduisez les tâches répétitives, accélérez vos processus, 
              améliorez vos résultats.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-white/10 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold mb-3 text-sm uppercase tracking-wide">Services</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-foreground font-semibold mb-3 text-sm uppercase tracking-wide">Entreprise</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-foreground font-semibold mb-3 text-sm uppercase tracking-wide">Légal</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © 2026 VIVIA. Tous droits réservés.
          </p>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-white/10 transition-colors"
            aria-label="Retour en haut"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}