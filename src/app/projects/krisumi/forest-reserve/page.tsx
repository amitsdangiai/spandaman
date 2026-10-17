import Image from "next/image";
import Link from "next/link";
import { ForestReserveContent } from "@/components/forest-reserve-content";
import { JsonLd } from "@/components/json-ld";
import { LeadForm } from "@/components/lead-form";
import { LinkButton } from "@/components/link-button";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";
import { projects, site, telUrl, whatsappUrl } from "@/lib/site";

const forest = projects.forestReserve;

const whatsappMessage =
  "Hi Spandaman, I want to enquire about Krisumi Waterside Residences — The Forest Reserve in Sector 36A, Gurugram.";

export const metadata = pageMetadata({
  title: "Krisumi Forest Reserve",
  description:
    "Krisumi Forest Reserve in Sector 36A, Gurugram. 3 LDK, 4 LDK, and penthouse homes. Spandaman arranges site visits and confirms current availability.",
  path: "/projects/krisumi/forest-reserve",
  keywords: [
    "Krisumi Forest Reserve",
    "Waterside Residences Forest Reserve",
    "Krisumi 4 LDK",
    "Krisumi Sector 36A",
  ],
});

export default function ForestReservePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(forest.faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Krisumi", path: "/projects/krisumi" },
          { name: "Forest Reserve", path: "/projects/krisumi/forest-reserve" },
        ])}
      />
      <section className="relative min-h-[100svh] overflow-hidden text-white">
        <Image
          src={forest.gallery[0].src}
          alt={forest.gallery[0].alt}
          fill
          priority
          sizes="100vw"
          className="object-cover ken-burns"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,22,28,0.62)_0%,rgba(15,22,28,0.28)_40%,rgba(15,22,28,0.82)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(15,22,28,0.45)_100%)]" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20">
          <p className="text-sm font-semibold tracking-[0.16em] text-sand uppercase animate-fade">
            {forest.shortLocation}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-tight sm:text-5xl md:text-6xl animate-rise">
            Krisumi {forest.name}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg animate-rise-delay">
            {forest.headline}. {forest.support}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton
              href="#forest-reserve-enquire"
              size="lg"
              className="bg-white text-ink hover:bg-white/90"
            >
              Enquire now
            </LinkButton>
            <LinkButton
              href={whatsappUrl(whatsappMessage)}
              external
              size="lg"
              variant="outline"
              className="border-white/50 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              WhatsApp
            </LinkButton>
            <LinkButton
              href={telUrl()}
              size="lg"
              variant="ghost"
              className="text-white hover:bg-white/10 hover:text-white"
            >
              Call {site.phoneDisplay}
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
            <p className="mt-2 font-display text-2xl text-ink">
              {forest.location}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wider text-sage uppercase">
              Pricing
            </p>
            <p className="mt-2 font-display text-2xl text-ink">
              {forest.priceLabel}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wider text-sage uppercase">
              Typologies
            </p>
            <p className="mt-2 font-display text-xl leading-snug text-ink sm:text-2xl">
              {forest.typologies.join(" · ")}
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.14em] text-sage uppercase">
            Project highlights
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Why The Forest Reserve is on shortlists in Sector 36A
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Buyers who want larger Waterside footprints — green framing,
            wellness-led amenities, and 3 LDK / 4 LDK or penthouse living — are
            asking for The Forest Reserve specifically. Spandaman helps you
            verify inventory and compare it with Waterfall Residences and Suites
            on the ground.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {forest.highlights.map((item) => (
            <div key={item.title} className="border-t border-border/80 pt-5">
              <h3 className="font-display text-xl text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border/70 bg-white/70">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Sector 36A location framing
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              The Forest Reserve sits in Sector 36A, Gurugram — the same Krisumi
              pocket buyers use for Dwarka Expressway–linked reach toward Delhi
              and other Gurugram sectors. Spandaman will map your commute and
              visit route when you enquire.
            </p>
          </div>
          <ul className="mt-8 grid gap-4 text-sm text-ink sm:grid-cols-3 sm:text-base">
            <li className="border-l-2 border-sage pl-4">
              Sector 36A address within the wider Krisumi campus
            </li>
            <li className="border-l-2 border-sage pl-4">
              Dwarka Expressway–linked connectivity framing
            </li>
            <li className="border-l-2 border-sage pl-4">
              Green-space neighbourhood context reviewed on a Spandaman site
              visit
            </li>
          </ul>
        </div>
      </section>

      <ForestReserveContent name="Forest Reserve" />

      <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Compare other Krisumi homes
            </h2>
            <p className="mt-3 text-muted-foreground">
              Forest Reserve is the larger Waterside home at Sector 36A.
              Waterside Residences and Forest Reserve II sit on the same visit.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium">
            <Link
              href="/projects/krisumi/waterside-residences"
              className="text-brand underline-offset-2 hover:underline"
            >
              ← Waterside Residences
            </Link>
            <Link
              href="/projects/krisumi/forest-reserve-ii"
              className="text-brand underline-offset-2 hover:underline"
            >
              Forest Reserve II →
            </Link>
            <Link
              href="/projects/krisumi/waterfall-residences"
              className="text-brand underline-offset-2 hover:underline"
            >
              Waterfall Residences →
            </Link>
          </div>
        </div>
      </section>

      <section
        id="forest-reserve-enquire"
        className="border-t border-border/70 bg-white/75"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-[0.14em] text-sage uppercase">
              Lead enquiry
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink">
              Request Forest Reserve details
            </h2>
            <p className="mt-3 text-muted-foreground">
              Tell Spandaman your preferred configuration. Krisumi has not
              published a price list for this project — we confirm the current
              figure. Or call{" "}
              <a
                className="font-medium text-brand underline-offset-2 hover:underline"
                href={telUrl()}
              >
                {site.phoneDisplay}
              </a>
              .
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <LinkButton
                href={whatsappUrl(whatsappMessage)}
                external
                className="bg-sage text-white hover:bg-sage/90"
              >
                WhatsApp enquire
              </LinkButton>
              <LinkButton href={telUrl()} variant="outline">
                Call now
              </LinkButton>
            </div>
          </div>
          <LeadForm defaultProject="Krisumi Forest Reserve" />
        </div>
      </section>

      <section className="bg-mist/80">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Questions buyers ask before they visit
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {forest.faqs.map((faq) => (
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
              Ready for a Forest Reserve site visit?
            </h2>
            <p className="mt-3 text-base text-white/80">
              Spandaman will confirm which published homes are open and
              schedule a walkthrough that fits your day — including a
              side-by-side look at{" "}
              <Link
                href="/projects/krisumi/forest-reserve-ii"
                className="underline underline-offset-2 hover:text-white"
              >
                Forest Reserve II
              </Link>
              ,{" "}
              <Link
                href="/projects/krisumi/waterside-residences"
                className="underline underline-offset-2 hover:text-white"
              >
                Waterside Residences
              </Link>
              , or{" "}
              <Link
                href="/projects/krisumi/waterfall-residences"
                className="underline underline-offset-2 hover:text-white"
              >
                Waterfall Residences
              </Link>{" "}
              if you want to compare footprints.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <LinkButton
                href={telUrl()}
                size="lg"
                className="float-cta bg-white text-ink hover:bg-white/90"
              >
                Call {site.phoneDisplay}
              </LinkButton>
              <LinkButton
                href="/"
                size="lg"
                variant="outline"
                className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                Back to home
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
