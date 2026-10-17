import Image from "next/image";
import { HeroVr } from "@/components/hero-vr";
import { JsonLd } from "@/components/json-ld";
import { LeadForm } from "@/components/lead-form";
import { LinkButton } from "@/components/link-button";
import { faqJsonLd, pageMetadata } from "@/lib/seo";
import { projects, site, telUrl, whatsappUrl } from "@/lib/site";

const krisumi = projects.krisumi;

export const metadata = pageMetadata({
  title: "Krisumi Sector 36A Gurugram",
  description:
    "Enquire on Krisumi in Sector 36A, Gurugram with Spandaman. Compare homes, book a broker-led site visit, and get the current price on request.",
  path: "/",
  keywords: [
    "Krisumi Sector 36A",
    "Krisumi Gurugram",
    "Spandaman",
    "Krisumi site visit",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(krisumi.faqs)} />
      <section className="relative h-[calc(75svh-4.5rem)] overflow-hidden md:h-[75svh]">
        <HeroVr />
        <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-24 bg-gradient-to-b from-black/50 to-transparent" />
      </section>

      <section className="flex min-h-[25svh] items-center border-b border-border/70 bg-mist">
        <div className="mx-auto flex w-full max-w-6xl flex-col justify-center gap-2.5 px-4 py-3 sm:gap-3 sm:px-6 sm:py-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h1 className="text-balance font-display text-2xl tracking-tight text-ink sm:text-3xl">
                Enquire on Krisumi — Sector 36A, Gurugram
              </h1>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Broker-led site visits, current inventory, and price on request.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <LinkButton
                href="#enquire"
                size="sm"
                className="bg-brand text-brand-foreground hover:bg-brand/90"
              >
                Enquire now
              </LinkButton>
              <LinkButton
                href={whatsappUrl()}
                external
                size="sm"
                className="bg-sage text-white hover:bg-sage/90"
              >
                WhatsApp
              </LinkButton>
              <LinkButton href={telUrl()} size="sm" variant="outline">
                Call {site.phoneDisplay}
              </LinkButton>
            </div>
          </div>
          <nav
            aria-label="Explore Krisumi projects"
            className="flex gap-1.5 overflow-x-auto pb-0.5 md:flex-wrap md:overflow-visible"
          >
            {(
              [
                ["Waterfall Residences", "/projects/krisumi/waterfall-residences"],
                ["Waterfall Suites", "/projects/krisumi/waterfall-suites"],
                ["Waterfall Suites II", "/projects/krisumi/waterfall-suites-ii"],
                ["Waterside Residences", "/projects/krisumi/waterside-residences"],
                ["Forest Reserve", "/projects/krisumi/forest-reserve"],
                ["Forest Reserve II", "/projects/krisumi/forest-reserve-ii"],
              ] as const
            ).map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="shrink-0 rounded-full border border-border bg-white px-2.5 py-1 text-[0.72rem] font-medium whitespace-nowrap text-ink transition-colors hover:border-brand/40 hover:text-brand"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.14em] text-sage uppercase">
            Featured project
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Why buyers are asking about Krisumi
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Krisumi is a residential opportunity in Sector 36A that Spandaman is
            actively marketing to end-users and investors who want a clear
            Gurugram address — not a vague &ldquo;upcoming corridor&rdquo; pitch.
            Featured inventory includes{" "}
            <a
              href="/projects/krisumi/waterfall-residences"
              className="font-medium text-brand underline-offset-2 hover:underline"
            >
              Waterfall Residences
            </a>
            ,{" "}
            <a
              href="/projects/krisumi/waterfall-suites"
              className="font-medium text-brand underline-offset-2 hover:underline"
            >
              Waterfall Suites
            </a>
            ,{" "}
            <a
              href="/projects/krisumi/waterfall-suites-ii"
              className="font-medium text-brand underline-offset-2 hover:underline"
            >
              Waterfall Suites II
            </a>
            ,{" "}
            <a
              href="/projects/krisumi/waterside-residences"
              className="font-medium text-brand underline-offset-2 hover:underline"
            >
              Waterside Residences
            </a>
            ,{" "}
            <a
              href="/projects/krisumi/forest-reserve"
              className="font-medium text-brand underline-offset-2 hover:underline"
            >
              Forest Reserve
            </a>
            , and{" "}
            <a
              href="/projects/krisumi/forest-reserve-ii"
              className="font-medium text-brand underline-offset-2 hover:underline"
            >
              Forest Reserve II
            </a>
            .
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {krisumi.highlights.map((item) => (
            <div key={item.title} className="border-t border-border/80 pt-5">
              <h3 className="font-display text-xl text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <p className="text-sm font-medium text-ink">
            {krisumi.priceLabel} · {krisumi.typologies.join(" · ")}
          </p>
          <LinkButton
            href="/projects/krisumi"
            variant="outline"
            className="border-brand/30 text-brand"
          >
            View Krisumi details
          </LinkButton>
          <LinkButton
            href="/projects/krisumi/waterfall-residences"
            variant="outline"
            className="border-brand/30 text-brand"
          >
            Waterfall Residences
          </LinkButton>
          <LinkButton
            href="/projects/krisumi/waterfall-suites"
            variant="outline"
            className="border-brand/30 text-brand"
          >
            Waterfall Suites
          </LinkButton>
          <LinkButton
            href="/projects/krisumi/waterfall-suites-ii"
            variant="outline"
            className="border-brand/30 text-brand"
          >
            Waterfall Suites II
          </LinkButton>
          <LinkButton
            href="/projects/krisumi/waterside-residences"
            variant="outline"
            className="border-brand/30 text-brand"
          >
            Waterside Residences
          </LinkButton>
          <LinkButton
            href="/projects/krisumi/forest-reserve"
            variant="outline"
            className="border-brand/30 text-brand"
          >
            Forest Reserve
          </LinkButton>
          <LinkButton
            href="/projects/krisumi/forest-reserve-ii"
            variant="outline"
            className="border-brand/30 text-brand"
          >
            Forest Reserve II
          </LinkButton>
        </div>
      </section>

      <section className="border-y border-border/70 bg-white/70">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-3">
          {[
            {
              title: "Independent brokerage",
              body: "Spandaman represents buyers. We shortlist inventory and coordinate visits without developer spin.",
            },
            {
              title: "Gurugram-first focus",
              body: "Local market familiarity across Dwarka Expressway–adjacent and established residential sectors.",
            },
            {
              title: "Fast human follow-up",
              body: "Enquire by form, call, or WhatsApp — expect a callback with next steps, not an auto-blast.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h2 className="font-display text-xl text-ink">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="enquire"
        className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_1.05fr]"
      >
        <div className="animate-fade">
          <p className="text-sm font-semibold tracking-[0.14em] text-sage uppercase">
            Lead enquiry
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Tell us what you are looking for
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            Share your name and phone. Default interest is Krisumi — change it if
            you want comparable options in Gurugram.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl">
            <Image
              src={krisumi.gallery[1].src}
              alt={krisumi.gallery[1].alt}
              width={900}
              height={700}
              className="h-64 w-full object-cover sm:h-80"
            />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <LinkButton
              href={whatsappUrl()}
              external
              className="bg-sage text-white hover:bg-sage/90"
            >
              Prefer WhatsApp?
            </LinkButton>
            <LinkButton href={telUrl()} variant="outline">
              Call {site.phoneDisplay}
            </LinkButton>
          </div>
        </div>
        <LeadForm />
      </section>

      <section className="bg-mist/80">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Questions buyers ask before they visit
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {krisumi.faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl bg-white/80 p-5 sm:p-6">
                <h3 className="text-base font-semibold text-ink">{faq.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-brand px-6 py-12 text-white sm:px-10">
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-sage/40 blur-2xl" />
          <div className="relative max-w-xl">
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              Ready for a Krisumi site visit?
            </h2>
            <p className="mt-3 text-base text-white/80">
              Spandaman will confirm inventory, share price on request, and
              schedule a walkthrough that fits your day.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <LinkButton
                href="/contact"
                size="lg"
                className="float-cta bg-white text-ink hover:bg-white/90"
              >
                Contact Spandaman
              </LinkButton>
              <LinkButton
                href="/projects/krisumi"
                size="lg"
                variant="outline"
                className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                Explore the project
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
