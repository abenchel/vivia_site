import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Cookie, Eye, Lock, UserCheck } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 md:pt-28">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-violet-400/30 mb-6">
              <Shield className="h-8 w-8 text-violet-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Politique de Confidentialité
            </h1>
            <p className="text-lg text-gray-400">
              Dernière mise à jour: {new Date().toLocaleDateString("fr-FR")}
            </p>
          </div>

          <div className="space-y-8">
            <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Cookie className="h-6 w-6 text-violet-400" />
                <h2 className="text-2xl font-bold text-white">Utilisation des Cookies</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits
                  fichiers texte stockés sur votre appareil.
                </p>

                <div className="space-y-3">
                  <div className="pl-4 border-l-2 border-violet-400/30">
                    <h3 className="font-semibold text-white mb-1">Cookies nécessaires</h3>
                    <p className="text-sm">Essentiels au fonctionnement du site (authentification, sécurité, préférences).</p>
                  </div>

                  <div className="pl-4 border-l-2 border-cyan-400/30">
                    <h3 className="font-semibold text-white mb-1">Cookies analytiques</h3>
                    <p className="text-sm">Nous aident à comprendre comment vous utilisez notre site (Google Analytics).</p>
                  </div>

                  <div className="pl-4 border-l-2 border-purple-400/30">
                    <h3 className="font-semibold text-white mb-1">Cookies marketing</h3>
                    <p className="text-sm">Permettent d'afficher des publicités pertinentes sur d'autres sites.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-6 w-6 text-cyan-400" />
                <h2 className="text-2xl font-bold text-white">Collecte des Données</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>Nous collectons les informations suivantes:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Données de navigation (pages visitées, durée, appareil)</li>
                  <li>Adresse IP et données de localisation approximative</li>
                  <li>Informations fournies volontairement (formulaires de contact)</li>
                  <li>Préférences de cookies et paramètres du site</li>
                </ul>
              </div>
            </section>

            <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="h-6 w-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">Utilisation des Données</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>Vos données sont utilisées pour:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Améliorer nos services et votre expérience utilisateur</li>
                  <li>Analyser les tendances et le comportement des visiteurs</li>
                  <li>Répondre à vos demandes et questions</li>
                  <li>Envoyer des communications marketing (avec votre consentement)</li>
                  <li>Respecter nos obligations légales</li>
                </ul>
              </div>
            </section>

            <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-6 w-6 text-green-400" />
                <h2 className="text-2xl font-bold text-white">Sécurité des Données</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>
                  Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données
                  personnelles contre tout accès non autorisé, modification, divulgation ou destruction.
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Cryptage SSL/TLS pour toutes les communications</li>
                  <li>Stockage sécurisé des données</li>
                  <li>Accès limité aux données personnelles</li>
                  <li>Audits de sécurité réguliers</li>
                </ul>
              </div>
            </section>

            <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Vos Droits (RGPD)</h2>
              <div className="space-y-3 text-gray-300">
                <p>Conformément au RGPD, vous disposez des droits suivants:</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <h3 className="font-semibold text-white mb-1">Droit d'accès</h3>
                    <p className="text-sm">Consulter vos données personnelles</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <h3 className="font-semibold text-white mb-1">Droit de rectification</h3>
                    <p className="text-sm">Corriger vos données inexactes</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <h3 className="font-semibold text-white mb-1">Droit à l'effacement</h3>
                    <p className="text-sm">Supprimer vos données</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <h3 className="font-semibold text-white mb-1">Droit d'opposition</h3>
                    <p className="text-sm">Refuser le traitement de vos données</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-violet-400/30 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 backdrop-blur-xl p-6 text-center">
              <h2 className="text-2xl font-bold text-white mb-3">Questions?</h2>
              <p className="text-gray-300 mb-4">
                Pour toute question concernant cette politique ou pour exercer vos droits, contactez-nous:
              </p>
              <a
                href="mailto:privacy@example.com"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-semibold transition-all duration-300 hover:scale-105"
              >
                privacy@example.com
              </a>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
