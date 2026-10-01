import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LeadForm } from "@/components/lead-form";
import { LinkButton } from "@/components/link-button";
import { projects, site, telUrl, whatsappUrl } from "@/lib/site";

const waterside = projects.watersideResidences;

const whatsappMessage =
  "Hi Spandaman, I want to enquire about Krisumi Waterside Residences in Sector 36A, Gurugram.";

export const metadata: Metadata = {
  title: "Krisumi Waterside Residences, Sector 36A Gurugram",
  description:
    "Enquire on Krisumi Waterside Residences in Sector 36A, Gurugram with Spandaman — 2 LDK and 3 LDK options, Nikken / A.N.D design framing, site visits, and price on request from an independent broker.",
};

export default function WatersideResidencesPage() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden text-white">
        <Image
          src={waterside.gallery[0].src}
          alt={waterside.gallery[0].alt}
          fill
          priority
          sizes="100vw"
          className="object-cover ken-burns"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,22,28,0.62)_0%,rgba(15,22,28,0.28)_40%,rgba(15,22,28,0.82)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(15,22,28,0.45)_100%)]" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20">
          <p className="text-sm font-semibold tracking-[0.16em] text-sand uppercase animate-fade">
            {waterside.shortLocation}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-tight sm:text-5xl md:text-6xl animate-rise">
            {waterside.name}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg animate-rise-delay">
            {waterside.headline}. {waterside.support}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton
              href="#waterside-enquire"
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
              {waterside.location}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wider text-sage uppercase">
              Pricing
            </p>
            <p className="mt-2 font-display text-2xl text-ink">
              {waterside.priceLabel}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wider text-sage uppercase">
              Typologies
            </p>
            <p className="mt-2 font-display text-xl leading-snug text-ink sm:text-2xl">
              {waterside.typologies.join(" · ")}
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.14em] text-sage uppercase">
            Project highlights
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Why Waterside Residences is on shortlists in Sector 36A
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Buyers who want wellness-led Waterside living — Nikken / A.N.D
            design framing, 2 LDK / 3 LDK footprints, and Dwarka Expressway
            reach — are asking for Waterside Residences specifically. Spandaman
            helps you verify inventory and compare it with Waterfall and Forest
            Reserve offerings on the ground.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {waterside.highlights.map((item) => (
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
              Waterside Residences sits in Sector 36A, Gurugram on Dwarka
              Expressway — framed for reach toward Delhi and other Gurugram
              sectors, with neighbourhood green-zone context marketed by the
              developer. Spandaman will map your commute and visit route when
              you enquire.
            </p>
          </div>
          <ul className="mt-8 grid gap-4 text-sm text-ink sm:grid-cols-3 sm:text-base">
            <li className="border-l-2 border-sage pl-4">
              Dwarka Expressway–linked connectivity from Sector 36A
            </li>
            <li className="border-l-2 border-sage pl-4">
              Access framing toward Delhi and wider Gurugram
            </li>
            <li className="border-l-2 border-sage pl-4">
              Green-zone neighbourhood context reviewed on a Spandaman site
              visit
            </li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Gallery
            </h2>
            <p className="mt-3 text-muted-foreground">
              Atmosphere references for waterside residential living — confirm
              actual inventory and finishes on your visit with Spandaman.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium">
            <Link
              href="/projects/krisumi/waterfall-suites-ii"
              className="text-brand underline-offset-2 hover:underline"
            >
              ← Waterfall Suites II
            </Link>
            <Link
              href="/projects/krisumi/forest-reserve"
              className="text-brand underline-offset-2 hover:underline"
            >
              Forest Reserve →
            </Link>
            <Link
              href="/projects/krisumi/forest-reserve-ii"
              className="text-brand underline-offset-2 hover:underline"
            >
              Forest Reserve II →
            </Link>
          </div>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {waterside.gallery.slice(1).map((image) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={900}
              height={700}
              className="h-52 w-full rounded-xl object-cover sm:h-56"
            />
          ))}
        </div>
      </section>

      <section
        id="waterside-enquire"
        className="border-t border-border/70 bg-white/75"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-[0.14em] text-sage uppercase">
              Lead enquiry
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink">
              Request Waterside Residences details
            </h2>
            <p className="mt-3 text-muted-foreground">
              Tell Spandaman your preferred configuration and budget band. Price
              on request — we share current options personally. Or call{" "}
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
          <LeadForm defaultProject="Krisumi Waterside Residences" />
        </div>
      </section>

      <section className="bg-mist/80">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Questions buyers ask before they visit
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {waterside.faqs.map((faq) => (
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
              Ready for a Waterside Residences site visit?
            </h2>
            <p className="mt-3 text-base text-white/80">
              Spandaman will confirm inventory, share price on request, and
              schedule a walkthrough that fits your day — including a
              side-by-side look at{" "}
              <Link
                href="/projects/krisumi/forest-reserve"
                className="underline underline-offset-2 hover:text-white"
              >
                Forest Reserve
              </Link>
              ,{" "}
              <Link
                href="/projects/krisumi/forest-reserve-ii"
                className="underline underline-offset-2 hover:text-white"
              >
                Forest Reserve II
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
