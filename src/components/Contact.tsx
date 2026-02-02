import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import humanAiImg from '@/assets/human-ai-collab.jpg';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="relative py-24 bg-background overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(ellipse at 80% 20%, var(--radial-1) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, var(--radial-2) 0%, transparent 40%)`
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Contact</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              <span className="text-foreground">Prêt à </span>
              <span className="text-gradient-cyan">transformer</span>
              <br />
              <span className="text-foreground">votre entreprise?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Contactez-nous pour discuter de vos besoins en automatisation et découvrir 
              comment nous pouvons vous aider à atteindre vos objectifs.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-muted border-border focus:border-primary"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-muted border-border focus:border-primary"
                />
              </div>
              <Input
                placeholder="Nom de votre entreprise"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="bg-muted border-border focus:border-primary"
              />
              <Textarea
                placeholder="Décrivez votre projet..."
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-muted border-border focus:border-primary resize-none"
              />
              <Button variant="cta" size="lg" type="submit" className="w-full sm:w-auto group">
                Envoyer le message
                <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>

          {/* Contact Info & Image */}
          <div className="space-y-8">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden border border-border/50">
              <img 
                src={humanAiImg} 
                alt="Collaboration IA" 
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            {/* Contact Cards */}
            <div className="grid gap-4">
              <ContactCard
                icon={<Mail className="w-5 h-5" />}
                title="Email"
                value="contact@vivia.fr"
                link="mailto:contact@vivia.fr"
              />
              <ContactCard
                icon={<Phone className="w-5 h-5" />}
                title="Téléphone"
                value="+33 1 23 45 67 89"
                link="tel:+33123456789"
              />
              <ContactCard
                icon={<MapPin className="w-5 h-5" />}
                title="Adresse"
                value="Paris, France"
              />
            </div>

            {/* CTA Card */}
            <div className="glass-card rounded-xl p-6 border-primary/30">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Réservez un appel gratuit
              </h3>
              <p className="text-muted-foreground mb-4">
                30 minutes pour discuter de votre projet et explorer les solutions possibles.
              </p>
              <Button variant="outline" className="group">
                Réserver maintenant
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ 
  icon, 
  title, 
  value, 
  link 
}: { 
  icon: React.ReactNode; 
  title: string; 
  value: string;
  link?: string;
}) {
  const content = (
    <div className="glass-card rounded-xl p-4 flex items-center gap-4 hover:border-primary/50 transition-all duration-300 cursor-pointer">
      <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-primary">
        {icon}
      </div>
      <div>
        <p className="text-muted-foreground text-sm">{title}</p>
        <p className="text-foreground font-medium">{value}</p>
      </div>
    </div>
  );

  if (link) {
    return <a href={link}>{content}</a>;
  }
  return content;
}