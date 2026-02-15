import { useEffect, useState } from "react";
import { Trash2, RefreshCw, HardDrive, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CacheManager() {
  const [isClearing, setIsClearing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [cacheSize, setCacheSize] = useState("0 MB");

  const calculateCacheSize = () => {
    let total = 0;
    for (const key in localStorage) {
      if (Object.prototype.hasOwnProperty.call(localStorage, key)) {
        total += localStorage[key].length + key.length;
      }
    }
    for (const key in sessionStorage) {
      if (Object.prototype.hasOwnProperty.call(sessionStorage, key)) {
        total += sessionStorage[key].length + key.length;
      }
    }
    const mb = (total / (1024 * 1024)).toFixed(2);
    setCacheSize(`${mb} MB`);
  };

  const clearCache = async () => {
    setIsClearing(true);

    try {
      const cookieConsent = localStorage.getItem("cookieConsent");
      const cookieConsentDate = localStorage.getItem("cookieConsentDate");

      localStorage.clear();

      if (cookieConsent) {
        localStorage.setItem("cookieConsent", cookieConsent);
      }
      if (cookieConsentDate) {
        localStorage.setItem("cookieConsentDate", cookieConsentDate);
      }

      sessionStorage.clear();

      if ("caches" in window) {
        const cacheNames = await caches.keys();
        await Promise.all(cacheNames.map((name) => caches.delete(name)));
      }

      if ("serviceWorker" in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        for (const registration of registrations) {
          await registration.unregister();
        }
      }

      setShowSuccess(true);
      calculateCacheSize();

      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error clearing cache:", error);
    } finally {
      setIsClearing(false);
    }
  };

  const clearCookies = () => {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substring(0, eqPos).trim() : cookie.trim();
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    }

    const domains = [window.location.hostname, `.${window.location.hostname}`];
    domains.forEach((domain) => {
      cookies.forEach((cookie) => {
        const name = cookie.split("=")[0].trim();
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${domain}`;
      });
    });

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const clearAll = async () => {
    await clearCache();
    clearCookies();
  };

  useEffect(() => {
    calculateCacheSize();
  }, []);

  return (
    <div className="rounded-2xl border border-white/20 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-violet-400/30">
          <HardDrive className="h-6 w-6 text-violet-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Gestion du cache</h3>
          <p className="text-sm text-gray-400">Taille actuelle: {cacheSize}</p>
        </div>
      </div>

      {showSuccess && (
        <div className="mb-4 rounded-lg border border-green-500/30 bg-green-500/10 p-4 flex items-center gap-3 animate-fade-in">
          <CheckCircle className="h-5 w-5 text-green-400" />
          <p className="text-sm text-green-300">Cache et cookies supprimés avec succès!</p>
        </div>
      )}

      <div className="space-y-3">
        <Button
          onClick={clearCache}
          disabled={isClearing}
          className="w-full bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-semibold"
        >
          {isClearing ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Suppression...
            </>
          ) : (
            <>
              <Trash2 className="mr-2 h-4 w-4" />
              Vider le cache
            </>
          )}
        </Button>

        <Button
          onClick={clearCookies}
          variant="outline"
          className="w-full border-white/20 bg-white/5 hover:bg-white/10 text-white"
        >
          Supprimer les cookies
        </Button>

        <Button
          onClick={clearAll}
          variant="outline"
          className="w-full border-red-500/30 bg-red-500/10 hover:bg-red-500/20 text-red-300 hover:text-red-200"
        >
          Tout supprimer
        </Button>
      </div>

      <div className="mt-6 space-y-2 text-xs text-gray-400">
        <p>• Le cache améliore les performances du site</p>
        <p>• Vider le cache peut résoudre certains problèmes d'affichage</p>
        <p>• Vos préférences de cookies seront préservées</p>
      </div>
    </div>
  );
}
