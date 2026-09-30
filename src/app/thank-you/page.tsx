import type { Metadata } from "next";
import { LinkButton } from "@/components/link-button";
import { site, telUrl, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank you",
  description: "Your enquiry was received by Spandaman. We will follow up shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col px-4 pb-24 pt-14 sm:px-6 sm:pt-20">
      <p className="text-sm font-semibold tracking-[0.14em] text-sage uppercase">
        Enquiry received
      </p>
      <h1 className="mt-3 font-display text-4xl tracking-tight text-ink sm:text-5xl">
        Thank you — Spandaman will follow up
      </h1>
      <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
        Your details are with our team. Expect a call or WhatsApp on the number
        you shared, usually within business hours ({site.hours}).
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <LinkButton
          href={telUrl()}
          className="bg-brand text-brand-foreground hover:bg-brand/90"
        >
          Call {site.phoneDisplay}
        </LinkButton>
        <LinkButton
          href={whatsappUrl()}
          external
          className="bg-sage text-white hover:bg-sage/90"
        >
          Message on WhatsApp
        </LinkButton>
        <LinkButton href="/projects/krsumi" variant="outline">
          Back to Krsumi
        </LinkButton>
      </div>
    </div>
  );
}
