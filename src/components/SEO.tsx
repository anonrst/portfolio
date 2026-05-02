import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

/**
 * SEO Component for dynamic meta tag management
 * Updates document head with SEO-friendly meta tags
 */
const SEO = ({
  title = "Anon - Spring Boot Java Engineer | Backend Developer Portfolio",
  description = "Spring Boot Java focused engineer specializing in backend development, microservices, and scalable systems. Experienced with Java, Spring Boot, Docker, PostgreSQL, Redis, and building production-grade APIs.",
  keywords = "Spring Boot Developer, Java Engineer, Backend Developer, Microservices, REST API, Docker, PostgreSQL, Redis, Kafka, System Design, Software Engineer",
  ogImage = "https://storage.googleapis.com/gpt-engineer-file-uploads/XrccRxK1upN7ap7zms8QxHxcOJp2/social-images/social-1772790342651-WIN_20260223_15_37_04_Pro.webp",
  canonicalUrl = "https://yourportfolio.com/"
}: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:url', canonicalUrl, true);

    // Twitter tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [title, description, keywords, ogImage, canonicalUrl]);

  return null;
};

export default SEO;
