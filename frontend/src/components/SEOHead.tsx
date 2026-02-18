import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  structuredData?: Record<string, any>;
}

/**
 * SEO Head component for dynamically updating meta tags
 * Updates document title, meta description, OG tags, and structured data
 */
export default function SEOHead({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  canonical,
  structuredData
}: SEOHeadProps) {
  useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
      updateMetaTag('og:title', ogTitle || title);
    }

    // Update description
    if (description) {
      updateMetaTag('description', description);
      updateMetaTag('og:description', ogDescription || description);
    }

    // Update OG image
    if (ogImage) {
      updateMetaTag('og:image', ogImage);
      updateMetaTag('twitter:image', ogImage);
    }

    // Update OG type
    if (ogType) {
      updateMetaTag('og:type', ogType);
    }

    // Update canonical
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    // Update structured data
    if (structuredData) {
      let script = document.querySelector('script[data-seo-structured]');
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seo-structured', '');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, ogTitle, ogDescription, ogImage, ogType, canonical, structuredData]);

  return null;
}

/**
 * Helper function to update meta tags
 */
function updateMetaTag(name: string, content: string) {
  let tag = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    if (name.startsWith('og:')) {
      tag.setAttribute('property', name);
    } else {
      tag.setAttribute('name', name);
    }
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}
