import Image from "next/image";
import { HeroVr } from "@/components/hero-vr";
import { LeadForm } from "@/components/lead-form";
import { LinkButton } from "@/components/link-button";
import { projects, site, telUrl, whatsappUrl } from "@/lib/site";

const krisumi = projects.krisumi;

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden text-white">
        {/* Local video paints immediately; VR iframe swaps in only if it loads in time */}
        <HeroVr />

        {/* Gradient overlays for readability */}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(15,22,28,0.65)_0%,rgba(15,22,28,0.25)_42%,rgba(15,22,28,0.78)_100%)]" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(15,22,28,0.55)_100%)]" />

        {/* Wrapper passes clicks through to VR when active; panel restores CTA hit targets */}
        <div className="pointer-events-none relative z-[2] mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center px-4 pb-28 pt-28 text-center sm:px-6 sm:pb-24">
          <div className="hero-cue-group pointer-events-auto max-w-3xl">
            <p className="hero-cue font-display text-5xl tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] sm:text-6xl md:text-7xl">
              {site.name}
            </p>
            <h1 className="hero-cue hero-cue-delay-1 mt-5 text-balance text-xl font-medium leading-snug text-white/95 sm:text-2xl md:text-[1.85rem]">
              Enquire on Krisumi — Sector 36A, Gurugram
            </h1>
            <p className="hero-cue hero-cue-delay-2 mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85 drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)] sm:text-lg">
              Broker-led site visits, current inventory, and price on request —
              clear next steps without brochure fog.
            </p>
            <div className="hero-cue hero-cue-delay-3 mt-8 flex flex-wrap items-center justify-center gap-3">
              <LinkButton
                href="#enquire"
                size="lg"
                className="h-12 bg-white px-7 text-ink hover:bg-white/90"
              >
                Enquire now
              </LinkButton>
              <LinkButton
                href={whatsappUrl()}
                external
                size="lg"
                variant="outline"
                className="h-12 border-white/55 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white"
              >
                WhatsApp
              </LinkButton>
              <LinkButton
                href={telUrl()}
                size="lg"
                variant="ghost"
                className="h-12 px-4 text-white hover:bg-white/10 hover:text-white"
              >
                Call {site.phoneDisplay}
              </LinkButton>
            </div>
            {/* Always-visible project shortcuts — VR hotspots cover all six, but the tour labels
                Sales Office / combined Forest for some dots; chips stay useful when VR falls back. */}
            <nav
              aria-label="Explore Krisumi projects"
              className="hero-cue hero-cue-delay-3 mt-5 flex max-w-2xl flex-wrap items-center justify-center gap-2"
            >
              <span className="w-full text-center text-[0.7rem] font-semibold tracking-[0.16em] text-white/70 uppercase sm:w-auto sm:mr-1">
                Explore projects
              </span>
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
                  className="rounded-sm border border-white/35 bg-black/25 px-2.5 py-1 text-[0.7rem] font-medium tracking-wide text-white/90 backdrop-blur-[2px] transition-colors hover:border-white/60 hover:bg-black/40 hover:text-white"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <a
            href="#enquire"
            className="hero-scroll-hint pointer-events-auto absolute bottom-24 left-1/2 -translate-x-1/2 text-white/70 transition-colors hover:text-white md:bottom-8"
            aria-label="Scroll to enquire form"
          >
            <span className="sr-only">Scroll down</span>
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 5v14m0 0-5-5m5 5 5-5"
              />
            </svg>
          </a>
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
