import React from "react";
import { useLocale } from '@/lib/locale';

const AVAILABLE: { code: string; label: string }[] = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' }
];

export default function LanguageToggle() {
  const { lang, setLang } = useLocale();

  const handleLanguageChange = (newLang: string) => {
    setLang(newLang as any);
    // Auto-refresh the page when language changes
    window.location.reload();
  };

  return (
    <label className="flex items-center gap-2">
      <select
        aria-label="Select language"
        value={lang}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="bg-transparent text-sm px-2 py-1 rounded border border-border/20"
      >
        {AVAILABLE.map((a) => (
          <option key={a.code} value={a.code}>
            {a.label}
          </option>
        ))}
      </select>
    </label>
  );
}
