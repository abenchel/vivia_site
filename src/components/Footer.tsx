import { Linkedin, Twitter, Instagram, ArrowUp } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Automatisation', href: '#' },
    { label: 'Intelligence Artificielle', href: '#' },
    { label: 'Chatbots', href: '#' },
    { label: 'Analyse de Données', href: '#' }
  ],
  company: [
    { label: 'À Propos', href: '#about' },
    { label: 'Blog', href: '#blog' },
    { label: 'Carrières', href: '#' },
    { label: 'Contact', href: '#contact' }
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
    <footer className="relative bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">V</span>
              </div>
              <span className="text-xl font-bold text-foreground">VIVIA</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Automatisation & IA pour PME. Réduisez les tâches répétitives, accélérez vos processus, 
              améliorez vos résultats.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
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
            <h4 className="text-foreground font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-3">
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
            <h4 className="text-foreground font-semibold mb-4">Légal</h4>
            <ul className="space-y-3">
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
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2026 VIVIA. Tous droits réservés.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-muted/80 transition-colors"
            aria-label="Retour en haut"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}