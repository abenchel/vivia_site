# Cookie & Cache Management Setup Guide 🍪

## Overview

This package includes everything you need to implement GDPR-compliant cookie consent and cache management for your website.

## Files Included

1. **CookieConsent.tsx** - Cookie consent banner with customizable preferences
2. **CacheManager.tsx** - Cache and storage management tool
3. **PrivacyPolicy.tsx** - Complete privacy policy page
4. **COOKIE_CACHE_SETUP.md** - This guide

---

## 🚀 Quick Start

### 1. Install Dependencies

Make sure you have these packages installed:

```bash
npm install lucide-react
# or
yarn add lucide-react
```

### 2. Add Components to Your App

#### Add Cookie Consent Banner

In your main layout file (e.g., `App.tsx`, `layout.tsx`, or `_app.tsx`):

```typescript
import CookieConsent from './components/CookieConsent';

export default function App() {
  return (
    <>
      {/* Your app content */}
      <CookieConsent />
    </>
  );
}
```

The banner will automatically:
- Show after 1 second delay
- Save user preferences to localStorage
- Not show again once user makes a choice

#### Add Cache Manager (Optional)

Add to a settings page or admin panel:

```typescript
import CacheManager from './components/CacheManager';

export default function SettingsPage() {
  return (
    <div className="container mx-auto p-6">
      <h1>Settings</h1>
      <CacheManager />
    </div>
  );
}
```

#### Add Privacy Policy Page

Create a new route (e.g., `/privacy` or `/politique-de-confidentialite`):

```typescript
import PrivacyPolicy from './components/PrivacyPolicy';

export default function PrivacyPage() {
  return <PrivacyPolicy />;
}
```

---

## 🔧 Configuration

### Cookie Categories

The consent banner includes 4 cookie categories:

1. **Necessary** (always enabled)
   - Authentication
   - Security
   - Core functionality

2. **Analytics** (optional)
   - Google Analytics
   - Traffic analysis
   - User behavior tracking

3. **Marketing** (optional)
   - Ad targeting
   - Retargeting pixels
   - Campaign tracking

4. **Preferences** (optional)
   - Language settings
   - UI preferences
   - Saved filters

### Integrating with Analytics

In `CookieConsent.tsx`, find the `initializeTracking` function:

```typescript
const initializeTracking = (prefs: typeof preferences) => {
  if (prefs.analytics) {
    // Add your Google Analytics code
    window.gtag('config', 'GA-XXXXXXXXX');
    
    // Or Google Tag Manager
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'consent_updated',
      'analytics_consent': 'granted'
    });
  }
  
  if (prefs.marketing) {
    // Add Facebook Pixel
    fbq('consent', 'grant');
    
    // Or other marketing pixels
  }
};
```

### Google Analytics Integration

Add this to your `index.html` or layout:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA-XXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  
  // Don't initialize until consent is given
  gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'ad_storage': 'denied'
  });
</script>
```

Then in `CookieConsent.tsx`:

```typescript
if (prefs.analytics) {
  gtag('consent', 'update', {
    'analytics_storage': 'granted'
  });
  gtag('config', 'GA-XXXXXXXXX');
}
```

---

## 🎨 Customization

### Change Colors

Replace violet/cyan with your brand colors:

```typescript
// In CookieConsent.tsx
className="from-violet-600 to-cyan-600"
// Change to:
className="from-blue-600 to-green-600"
```

### Change Position

Banner is at bottom by default. To move to top:

```typescript
// Change this:
<div className="fixed bottom-0 left-0 right-0">

// To this:
<div className="fixed top-0 left-0 right-0">
```

### Change Language

All text is in French. To change to English:

```typescript
// In CookieConsent.tsx
"Nous utilisons des cookies 🍪"
// Change to:
"We use cookies 🍪"
```

### Modify Cookie Expiry

By default, consent is stored indefinitely. To add expiry:

```typescript
const saveConsent = (preferences) => {
  const expiryDate = new Date();
  expiryDate.setMonth(expiryDate.getMonth() + 12); // 12 months
  
  const consentData = {
    preferences,
    expiry: expiryDate.toISOString()
  };
  
  localStorage.setItem("cookieConsent", JSON.stringify(consentData));
};
```

Then check expiry on load:

```typescript
useEffect(() => {
  const consent = localStorage.getItem("cookieConsent");
  if (consent) {
    const data = JSON.parse(consent);
    const expiry = new Date(data.expiry);
    
    if (expiry < new Date()) {
      // Expired - show banner again
      localStorage.removeItem("cookieConsent");
      setShowBanner(true);
    } else {
      setPreferences(data.preferences);
    }
  }
}, []);
```

---

## 🔒 GDPR Compliance

### Requirements Met

✅ **Consent before tracking** - No analytics until user accepts  
✅ **Granular control** - Users can choose specific categories  
✅ **Easy to withdraw** - Settings can be reopened anytime  
✅ **Clear information** - Privacy policy explains everything  
✅ **Data retention** - Consent date is stored  

### Adding a Consent Withdrawal Button

Add this to your footer or settings:

```typescript
<button
  onClick={() => {
    localStorage.removeItem("cookieConsent");
    window.location.reload();
  }}
  className="text-sm text-gray-400 hover:text-white"
>
  Modifier mes préférences de cookies
</button>
```

### Required Legal Pages

You should also have:
1. Privacy Policy (✅ included)
2. Terms of Service
3. Cookie Policy (can extract from privacy policy)

---

## 🧹 Cache Management Features

### What Gets Cleared

1. **localStorage** (except cookie consent)
2. **sessionStorage**
3. **Browser cache** (via Cache API)
4. **Service Workers**
5. **Cookies**

### Preserve User Data

To preserve additional data when clearing cache:

```typescript
const clearCache = async () => {
  // Save important data
  const userToken = localStorage.getItem("userToken");
  const preferences = localStorage.getItem("userPreferences");
  
  // Clear everything
  localStorage.clear();
  
  // Restore saved data
  if (userToken) localStorage.setItem("userToken", userToken);
  if (preferences) localStorage.setItem("userPreferences", preferences);
};
```

---

## 🐛 Troubleshooting

### Banner Not Showing

1. Check localStorage: `localStorage.getItem("cookieConsent")`
2. Clear it manually: `localStorage.removeItem("cookieConsent")`
3. Check component is imported in layout
4. Verify z-index doesn't conflict

### Analytics Not Working

1. Check browser console for errors
2. Verify GA tracking ID is correct
3. Check cookie consent was granted
4. Test in incognito mode
5. Use browser dev tools → Network tab

### Styles Not Applying

1. Ensure Tailwind is configured
2. Check className syntax
3. Verify backdrop-blur is supported
4. Add browser prefixes if needed

---

## 📱 Mobile Optimization

The components are fully responsive:

- Cookie banner stacks on mobile
- Touch-friendly toggle switches
- Readable text sizes
- Proper spacing

Test on:
- ✅ iPhone (Safari)
- ✅ Android (Chrome)
- ✅ iPad (Safari)
- ✅ Desktop (all browsers)

---

## 🔗 Adding to Footer

Add cookie/privacy links to your footer:

```typescript
<footer className="bg-slate-900 text-white py-8">
  <div className="container mx-auto px-6">
    <div className="flex flex-wrap gap-6 text-sm">
      <a href="/privacy" className="hover:text-violet-400">
        Politique de confidentialité
      </a>
      <a href="/cookies" className="hover:text-violet-400">
        Gestion des cookies
      </a>
      <button
        onClick={() => {
          localStorage.removeItem("cookieConsent");
          window.location.reload();
        }}
        className="hover:text-violet-400"
      >
        Préférences cookies
      </button>
    </div>
  </div>
</footer>
```

---

## 📊 Testing Checklist

Before going live:

- [ ] Cookie banner appears on first visit
- [ ] "Accept all" works and saves preferences
- [ ] "Necessary only" works and saves preferences
- [ ] Settings view shows all categories
- [ ] Toggle switches work properly
- [ ] Preferences are saved correctly
- [ ] Banner doesn't show after accepting
- [ ] Analytics loads only when accepted
- [ ] Privacy policy page is accessible
- [ ] Cache manager clears data properly
- [ ] Mobile view works correctly
- [ ] All links in footer work
- [ ] Console has no errors

---

## 🚀 Advanced Features

### Auto-refresh on Consent Change

```typescript
const acceptAll = () => {
  // ... save preferences ...
  
  // Reload page to initialize tracking
  window.location.reload();
};
```

### Show Banner After X Days

```typescript
useEffect(() => {
  const consentDate = localStorage.getItem("cookieConsentDate");
  if (consentDate) {
    const daysSince = (Date.now() - new Date(consentDate)) / (1000 * 60 * 60 * 24);
    if (daysSince > 365) {
      // Ask for consent again after 1 year
      localStorage.removeItem("cookieConsent");
      setShowBanner(true);
    }
  }
}, []);
```

### Track Consent Choices

```typescript
const acceptAll = () => {
  // ... existing code ...
  
  // Track in analytics
  if (typeof gtag !== 'undefined') {
    gtag('event', 'cookie_consent', {
      'event_category': 'engagement',
      'event_label': 'accepted_all'
    });
  }
};
```

---

## 📞 Support

If you need help:
1. Check this documentation
2. Review component code comments
3. Test in browser console
4. Check browser compatibility

Enjoy your GDPR-compliant website! 🎉
