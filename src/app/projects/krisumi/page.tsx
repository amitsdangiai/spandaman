import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LeadForm } from "@/components/lead-form";
import { LinkButton } from "@/components/link-button";
import { projects, site, telUrl, whatsappUrl } from "@/lib/site";

const krisumi = projects.krisumi;

export const metadata: Metadata = {
  title: "Krisumi, Sector 36A Gurugram",
  description:
    "Enquire on Krisumi in Sector 36A, Gurugram with Spandaman — residences, site visits, and price on request from an independent broker.",
};

export default function KrisumiProjectPage() {
  return (
    <>
      <section className="relative min-h-[70svh] overflow-hidden text-white">
        <Image
          src={krisumi.gallery[2].src}
          alt={krisumi.gallery[2].alt}
          fill
          priority
          sizes="100vw"
          className="object-cover ken-burns"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,26,22,0.55)_0%,rgba(15,26,22,0.72)_100%)]" />
        <div className="relative mx-auto flex min-h-[70svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6">
          <p className="text-sm font-semibold tracking-[0.16em] text-sand uppercase animate-fade">
            {krisumi.shortLocation}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-tight sm:text-5xl md:text-6xl animate-rise">
            {krisumi.name}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg animate-rise-delay">
            {krisumi.headline}. {krisumi.support}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton
              href="#project-enquire"
              size="lg"
              className="bg-white text-ink hover:bg-white/90"
            >
              Enquire on Krisumi
            </LinkButton>
            <LinkButton
              href={whatsappUrl()}
              external
              size="lg"
              variant="outline"
              className="border-white/50 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              WhatsApp Spandaman
            </LinkButton>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-8 border-b border-border/80 pb-10 md:grid-cols-3">
          <div>
            <p className="text-xs font-semibold tracking-wider text-sage uppercase">
              Location
            </p>
            <p className="mt-2 font-display text-2xl text-ink">{krisumi.location}</p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wider text-sage uppercase">
              Pricing
            </p>
            <p className="mt-2 font-display text-2xl text-ink">{krisumi.priceLabel}</p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wider text-sage uppercase">
              Configurations
            </p>
            <p className="mt-2 font-display text-2xl text-ink">
              {krisumi.typologies.join(" · ")}
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-3xl tracking-tight text-ink">
              What to expect from a Spandaman-led visit
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We align on budget and preferred BHK, confirm what inventory is
              realistically available, and walk the project with practical
              questions — light, access, amenities, and payment timelines —
              instead of a one-way sales pitch.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink sm:text-base">
              <li className="border-l-2 border-sage pl-4">
                Current availability and floor options discussed on enquiry
              </li>
              <li className="border-l-2 border-sage pl-4">
                Comparable Gurugram options if Krisumi is not the right fit
              </li>
              <li className="border-l-2 border-sage pl-4">
                Documentation guidance and lender introductions on request
              </li>
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              Looking specifically at{" "}
              <Link
                href="/projects/krisumi/waterfall-residences"
                className="font-medium text-brand underline-offset-2 hover:underline"
              >
                Krisumi Waterfall Residences
              </Link>
              ,{" "}
              <Link
                href="/projects/krisumi/waterfall-suites"
                className="font-medium text-brand underline-offset-2 hover:underline"
              >
                Krisumi Waterfall Suites
              </Link>
              ,{" "}
              <Link
                href="/projects/krisumi/waterfall-suites-ii"
                className="font-medium text-brand underline-offset-2 hover:underline"
              >
                Krisumi Waterfall Suites II
              </Link>
              ,{" "}
              <Link
                href="/projects/krisumi/waterside-residences"
                className="font-medium text-brand underline-offset-2 hover:underline"
              >
                Krisumi Waterside Residences
              </Link>
              ,{" "}
              <Link
                href="/projects/krisumi/forest-reserve"
                className="font-medium text-brand underline-offset-2 hover:underline"
              >
                Waterside Residences — The Forest Reserve
              </Link>
              , or{" "}
              <Link
                href="/projects/krisumi/forest-reserve-ii"
                className="font-medium text-brand underline-offset-2 hover:underline"
              >
                Waterside Residences — The Forest Reserve II
              </Link>
              ? Explore configurations, location framing, and dedicated enquiry
              forms for each.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {krisumi.gallery.slice(1).map((image) => (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={800}
                height={560}
                className="h-44 w-full rounded-xl object-cover sm:h-52"
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="project-enquire"
        className="border-t border-border/70 bg-white/75"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl tracking-tight text-ink">
              Request Krisumi details
            </h2>
            <p className="mt-3 text-muted-foreground">
              Price, unit mix, and visit slots are shared personally by{" "}
              {site.name}. Or call{" "}
              <a
                className="font-medium text-brand underline-offset-2 hover:underline"
                href={telUrl()}
              >
                {site.phoneDisplay}
              </a>
              .
            </p>
          </div>
          <LeadForm defaultProject="Krisumi, Sector 36A" />
        </div>
      </section>
    </>
  );
}
