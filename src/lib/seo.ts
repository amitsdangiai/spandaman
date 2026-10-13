import type { Metadata } from "next";
import { site } from "@/lib/site";

const OG_IMAGE = {
  url: "/brand/spandaman-logo.png",
  width: 478,
  height: 530,
  alt: "Spandaman Realtors logo",
} as const;

export function pageUrl(path: string) {
  if (path === "/") return site.url;
  return `${site.url}${path}`;
}

export function pageMetadata({
  title,
  description,
  path,
  keywords,
  index = true,
}: {
  title: string;
  description: string;
  path: string;
  keywords: string[];
  index?: boolean;
}): Metadata {
  const url = pageUrl(path);
  const socialTitle = `${title} | Spandaman`;

  return {
    title: { absolute: socialTitle },
    description,
    keywords,
    alternates: { canonical: url },
    robots: { index, follow: true },
    openGraph: {
      type: "website",
      url,
      title: socialTitle,
      description,
      siteName: site.name,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phoneTel,
    image: `${site.url}/brand/spandaman-logo.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      addressCountry: "IN",
    },
    areaServed: "Gurugram",
    openingHours: "Mo-Sa 10:00-19:00",
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: pageUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}
