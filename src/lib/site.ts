export const site = {
  name: "Spandaman",
  tagline: "Real estate brokerage for Gurugram buyers",
  phoneDisplay: "+91 98100 45021",
  phoneTel: "+919810045021",
  whatsapp: "919810045021",
  email: "enquire@spandaman.in",
  address: "Gurugram, Haryana",
  hours: "Mon–Sat, 10:00 AM – 7:00 PM",
} as const;

export const projects = {
  krsumi: {
    slug: "krsumi",
    name: "Krsumi",
    location: "Sector 36A, Gurugram",
    shortLocation: "Gurugram · Sector 36A",
    headline: "Residences shaped for how Gurugram lives now",
    support:
      "Spacious homes with thoughtful planning, strong connectivity, and a calm residential address — price on request.",
    priceLabel: "Price on request",
    typologies: ["2 BHK", "3 BHK", "Premium residences"],
    highlights: [
      {
        title: "Sector 36A address",
        body: "A residential pocket with growing social infrastructure and practical access across Gurugram.",
      },
      {
        title: "Homes for everyday living",
        body: "Layouts planned for light, storage, and family routines — not just brochure square footage.",
      },
      {
        title: "Connectivity that matters",
        body: "Reach Dwarka Expressway corridors, workplaces, schools, and leisure hubs with fewer daily compromises.",
      },
      {
        title: "Guided by brokers who sell",
        body: "Spandaman helps you shortlist inventory, compare options, and negotiate with clear next steps.",
      },
    ],
    faqs: [
      {
        q: "Where is Krsumi located?",
        a: "Krsumi is in Sector 36A, Gurugram — a residential stretch buyers choose for connectivity and neighbourhood convenience.",
      },
      {
        q: "What is the price of Krsumi?",
        a: "Pricing depends on unit type, floor, and availability. Share your budget and preferred configuration — Spandaman will share current options on request.",
      },
      {
        q: "Can I schedule a site visit?",
        a: "Yes. Call or WhatsApp Spandaman, or submit the enquire form. We coordinate visits around your schedule, including weekends where possible.",
      },
      {
        q: "Do you help with home loan introductions?",
        a: "We can introduce you to lending partners and walk you through typical documentation. Final eligibility and rates are decided by the bank or NBFC.",
      },
      {
        q: "Is Spandaman the developer?",
        a: "No. Spandaman is an independent real estate brokerage. We represent buyers looking at Krsumi and comparable projects in Gurugram.",
      },
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
        alt: "Modern residential tower exterior with balconies at dusk",
      },
      {
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
        alt: "Bright living room with large windows and contemporary finishes",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        alt: "Luxury home facade with landscaped entrance",
      },
      {
        src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
        alt: "Spacious modern kitchen and dining area",
      },
    ],
  },
} as const;

export function whatsappUrl(message?: string) {
  const text =
    message ??
    "Hi Spandaman, I want to enquire about Krsumi in Sector 36A, Gurugram.";
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function telUrl() {
  return `tel:${site.phoneTel}`;
}
