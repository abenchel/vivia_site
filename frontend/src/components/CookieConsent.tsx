import { useState, useEffect } from "react";
import { X, Cookie, Shield, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      const saved = JSON.parse(consent);
      setPreferences(saved);
      initializeTracking(saved);
    }
  }, []);

  const initializeTracking = (prefs: typeof preferences) => {
    if (prefs.analytics) {
      console.log("Analytics enabled");
    }
    if (prefs.marketing) {
      console.log("Marketing enabled");
    }
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem("cookieConsent", JSON.stringify(allAccepted));
    localStorage.setItem("cookieConsentDate", new Date().toISOString());
    initializeTracking(allAccepted);
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    setPreferences(necessaryOnly);
    localStorage.setItem("cookieConsent", JSON.stringify(necessaryOnly));
    localStorage.setItem("cookieConsentDate", new Date().toISOString());
    setShowBanner(false);
    setShowSettings(false);
  };

  const savePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    localStorage.setItem("cookieConsentDate", new Date().toISOString());
    initializeTracking(preferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === "necessary") return;
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!showBanner) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 animate-fade-in-up">
        <div className="mx-auto max-w-6xl">
          <div className="relative rounded-2xl border border-white/20 bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl shadow-2xl shadow-black/50">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/10 via-cyan-500/10 to-violet-500/10 opacity-50" />

            <div className="relative p-6 sm:p-8">
              {!showSettings ? (
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-violet-400/30">
                      <Cookie className="h-6 w-6 text-violet-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">Nous utilisons des cookies 🍪</h3>
                      <p className="text-sm text-gray-300 leading-relaxed max-w-2xl">
                        Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et personnaliser le contenu.
                        En cliquant sur "Tout accepter", vous consentez à notre utilisation des cookies.
                      </p>
                      <button
                        onClick={() => setShowSettings(true)}
                        className="mt-2 text-sm text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors"
                      >
                        Personnaliser les préférences
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 lg:shrink-0">
                    <Button
                      onClick={acceptNecessary}
                      variant="outline"
                      className="border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm"
                    >
                      Nécessaires uniquement
                    </Button>
                    <Button
                      onClick={acceptAll}
                      className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-semibold shadow-lg shadow-violet-500/30"
                    >
                      Tout accepter
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Settings className="h-6 w-6 text-violet-400" />
                      <h3 className="text-xl font-bold text-white">Paramètres des cookies</h3>
                    </div>
                    <button
                      onClick={() => setShowSettings(false)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Shield className="h-5 w-5 text-green-400" />
                          <h4 className="font-semibold text-white">Cookies nécessaires</h4>
                        </div>
                        <div className="flex h-6 w-11 items-center rounded-full bg-green-500 px-1">
                          <div className="h-4 w-4 rounded-full bg-white translate-x-5 transition-transform" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-400">
                        Ces cookies sont essentiels au fonctionnement du site et ne peuvent pas être désactivés.
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-white">Cookies analytiques</h4>
                        <button
                          onClick={() => togglePreference("analytics")}
                          className={`flex h-6 w-11 items-center rounded-full px-1 transition-colors ${
                            preferences.analytics ? "bg-violet-500" : "bg-gray-600"
                          }`}
                        >
                          <div
                            className={`h-4 w-4 rounded-full bg-white transition-transform ${
                              preferences.analytics ? "translate-x-5" : ""
                            }`}
                          />
                        </button>
                      </div>
                      <p className="text-sm text-gray-400">
                        Nous aident à comprendre comment les visiteurs interagissent avec notre site.
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-white">Cookies marketing</h4>
                        <button
                          onClick={() => togglePreference("marketing")}
                          className={`flex h-6 w-11 items-center rounded-full px-1 transition-colors ${
                            preferences.marketing ? "bg-violet-500" : "bg-gray-600"
                          }`}
                        >
                          <div
                            className={`h-4 w-4 rounded-full bg-white transition-transform ${
                              preferences.marketing ? "translate-x-5" : ""
                            }`}
                          />
                        </button>
                      </div>
                      <p className="text-sm text-gray-400">
                        Utilisés pour afficher des publicités pertinentes et mesurer l'efficacité des campagnes.
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-white">Cookies de préférences</h4>
                        <button
                          onClick={() => togglePreference("preferences")}
                          className={`flex h-6 w-11 items-center rounded-full px-1 transition-colors ${
                            preferences.preferences ? "bg-violet-500" : "bg-gray-600"
                          }`}
                        >
                          <div
                            className={`h-4 w-4 rounded-full bg-white transition-transform ${
                              preferences.preferences ? "translate-x-5" : ""
                            }`}
                          />
                        </button>
                      </div>
                      <p className="text-sm text-gray-400">
                        Permettent au site de mémoriser vos choix (langue, région, etc.).
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
                    <Button
                      onClick={() => setShowSettings(false)}
                      variant="outline"
                      className="border-white/20 bg-white/5 hover:bg-white/10 text-white"
                    >
                      Retour
                    </Button>
                    <Button
                      onClick={savePreferences}
                      className="flex-1 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-semibold"
                    >
                      Enregistrer les préférences
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 animate-fade-in" />
    </>
  );
}
