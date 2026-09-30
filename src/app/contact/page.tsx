import type { Metadata } from "next";
import { LeadForm } from "@/components/lead-form";
import { LinkButton } from "@/components/link-button";
import { site, telUrl, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Enquire",
  description:
    "Contact Spandaman to enquire on Krsumi in Sector 36A, Gurugram — call, WhatsApp, or request a callback.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 pt-10 sm:px-6 sm:pt-14">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold tracking-[0.14em] text-sage uppercase">
          Contact
        </p>
        <h1 className="mt-3 font-display text-4xl tracking-tight text-ink sm:text-5xl">
          Talk to Spandaman
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Prefer a quick chat? Call or WhatsApp. Prefer a structured follow-up?
          Use the form — interest defaults to Krsumi, Sector 36A.
        </p>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-6 rounded-2xl bg-brand px-6 py-8 text-white">
          <div>
            <p className="text-xs font-semibold tracking-wider text-sand uppercase">
              Phone
            </p>
            <a href={telUrl()} className="mt-2 block font-display text-2xl">
              {site.phoneDisplay}
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wider text-sand uppercase">
              Email
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 block text-lg text-white/90 hover:text-white"
            >
              {site.email}
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wider text-sand uppercase">
              Hours
            </p>
            <p className="mt-2 text-white/85">{site.hours}</p>
            <p className="mt-1 text-white/70">{site.address}</p>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <LinkButton href={telUrl()} className="bg-white text-ink hover:bg-white/90">
              Call now
            </LinkButton>
            <LinkButton
              href={whatsappUrl()}
              external
              className="bg-sage text-white hover:bg-sage/90"
            >
              WhatsApp
            </LinkButton>
          </div>
        </div>

        <LeadForm />
      </div>
    </div>
  );
}
