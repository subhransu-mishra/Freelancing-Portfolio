import { useEffect } from "react";

export default function SEO({
  title,
  description,
  keywords,
  ogImage = "https://webnexity.com/og-image.jpg",
  ogType = "website",
  route = "",
}) {
  const siteName = "WebNexity";
  const siteUrl = "https://webnexity.com";
  const fullUrl = `${siteUrl}${route}`;
  const fullTitle = `${title} | ${siteName}`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Helper function to set or update meta tags
    const setMetaTag = (property, content, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${property}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Helper function to set link tags
    const setLinkTag = (rel, href) => {
      let element = document.querySelector(`link[rel="${rel}"]`);

      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    // Basic Meta Tags
    setMetaTag("description", description);
    setMetaTag("keywords", keywords.join(", "));

    // Canonical URL
    setLinkTag("canonical", fullUrl);

    // Open Graph Tags
    setMetaTag("og:title", fullTitle, true);
    setMetaTag("og:description", description, true);
    setMetaTag("og:type", ogType, true);
    setMetaTag("og:url", fullUrl, true);
    setMetaTag("og:image", ogImage, true);
    setMetaTag("og:site_name", siteName, true);

    // Twitter Cards
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", fullTitle);
    setMetaTag("twitter:description", description);
    setMetaTag("twitter:image", ogImage);

    // Additional SEO Meta Tags
    setMetaTag("robots", "index, follow");
    setMetaTag("googlebot", "index, follow");
    setMetaTag("theme-color", "#4F46E5");
    setMetaTag("rating", "General");
    setMetaTag("revisit-after", "7 days");

    // Add Structured Data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "WebNexity",
      url: "https://webnexity.com",
      logo: "https://webnexity.com/logo.svg",
      description:
        "Premium digital solutions provider specializing in web development, mobile apps, UI/UX design, and cloud deployments.",
      sameAs: [
        "https://twitter.com/webnexity",
        "https://linkedin.com/company/webnexity",
        "https://github.com/webnexity",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-555-123-4567",
        contactType: "customer service",
        availableLanguage: ["English"],
      },
    };

    let scriptTag = document.querySelector(
      'script[type="application/ld+json"]'
    );
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);
  }, [title, description, keywords, ogImage, ogType, fullUrl, fullTitle]);

  return null;
}
