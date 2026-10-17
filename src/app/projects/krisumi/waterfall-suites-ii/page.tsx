import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { LeadForm } from "@/components/lead-form";
import { LinkButton } from "@/components/link-button";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";
import { projects, site, telUrl, whatsappUrl } from "@/lib/site";

const suitesII = projects.waterfallSuitesII;

const whatsappMessage =
  "Hi Spandaman, I want to enquire about Krisumi Waterfall Suites II in Sector 36A, Gurugram.";

export const metadata = pageMetadata({
  title: "Krisumi Waterfall Suites II",
  description:
    "Krisumi Waterfall Suites II in Sector 36A, Gurugram. 1 LDK suites from ₹2.53 crore. Spandaman arranges site visits and confirms current availability.",
  path: "/projects/krisumi/waterfall-suites-ii",
  keywords: [
    "Krisumi Waterfall Suites II",
    "Waterfall Suites II Gurugram",
    "Krisumi 1 LDK",
    "Krisumi Sector 36A",
  ],
});

export default function WaterfallSuitesIIPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(suitesII.faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Krisumi", path: "/projects/krisumi" },
          {
            name: "Waterfall Suites II",
            path: "/projects/krisumi/waterfall-suites-ii",
          },
        ])}
      />
      <section className="relative min-h-[100svh] overflow-hidden text-white">
        <Image
          src={suitesII.gallery[0].src}
          alt={suitesII.gallery[0].alt}
          fill
          priority
          sizes="100vw"
          className="object-cover ken-burns"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,22,28,0.62)_0%,rgba(15,22,28,0.28)_40%,rgba(15,22,28,0.82)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(15,22,28,0.45)_100%)]" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20">
          <p className="text-sm font-semibold tracking-[0.16em] text-sand uppercase animate-fade">
            {suitesII.shortLocation}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-tight sm:text-5xl md:text-6xl animate-rise">
            {suitesII.name}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg animate-rise-delay">
            {suitesII.headline}. {suitesII.support}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton
              href="#suites-ii-enquire"
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
              {suitesII.location}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wider text-sage uppercase">
              Pricing
            </p>
            <p className="mt-2 font-display text-2xl text-ink">
              {suitesII.priceLabel}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wider text-sage uppercase">
              Typologies
            </p>
            <p className="mt-2 font-display text-xl leading-snug text-ink sm:text-2xl">
              {suitesII.typologies.join(" · ")}
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.14em] text-sage uppercase">
            Project highlights
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Why Waterfall Suites II is on shortlists in Sector 36A
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Buyers who liked the Krisumi suite idea but want the next chapter —
            wellness-led amenities, green-belt framing, and compact luxury on
            Dwarka Expressway — are asking for Suites II specifically. Spandaman
            helps you verify inventory and compare it with Suites and Residences
            on the ground.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {suitesII.highlights.map((item) => (
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
              Waterfall Suites II sits in Sector 36A on Dwarka Expressway, with
              public materials emphasising reach toward Delhi and other Gurugram
              sectors via NPR / CPR corridors and NH-48 access. Spandaman will
              map your commute and visit route when you enquire.
            </p>
          </div>
          <ul className="mt-8 grid gap-4 text-sm text-ink sm:grid-cols-3 sm:text-base">
            <li className="border-l-2 border-sage pl-4">
              Dwarka Expressway–linked connectivity from Sector 36A
            </li>
            <li className="border-l-2 border-sage pl-4">
              Framing toward NPR / CPR arterials and NH-48 reach
            </li>
            <li className="border-l-2 border-sage pl-4">
              Green-zone neighbourhood context reviewed on a Spandaman site visit
            </li>
          </ul>
        </div>
      </section>

      <section className="border-y border-border/70 bg-white/70">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Where does Waterfall Suites II sit in Sector 36A?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Krisumi places it on the two widest roads in the sector, NPR and
              CPR, about three minutes from NH-48, beside a 220-acre green
              zone and a 50-metre green belt.
            </p>
          </div>
          <figure className="mt-8">
            <Image
              src="/projects/waterfall-suites-ii/location-map.webp"
              alt="Map of Krisumi Waterfall Suites II in Sector 36A, Gurugram"
              width={2000}
              height={1300}
              className="h-auto w-full rounded-xl border border-border/80 bg-white"
            />
          </figure>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {[
              ["entry.webp", "Entry gate", "Waterfall Suites II entry and fluted facade"],
              ["aerial.webp", "Aerial", "Aerial of the Waterfall Suites II cluster"],
              ["building.webp", "Building", "Waterfall Suites II tower facade"],
            ].map(([file, title, alt]) => (
              <figure key={file}>
                <Image
                  src={`/projects/waterfall-suites-ii/${file}`}
                  alt={alt}
                  width={1240}
                  height={800}
                  className="h-48 w-full rounded-xl object-cover"
                />
                <figcaption className="mt-2 text-sm font-medium text-ink">
                  {title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
            What do the Waterfall Suites II interiors look like?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Krisumi publishes a living room, dining room, gym, bar, reception,
            and lift lobby for the Suites II interiors.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["living.webp", "Living room"],
            ["dining.webp", "Dining room"],
            ["gym.webp", "Gym"],
            ["bar.webp", "Bar"],
            ["reception.webp", "Reception"],
            ["lobby.webp", "Lift lobby"],
          ].map(([file, title]) => (
            <figure key={file}>
              <Image
                src={`/projects/waterfall-suites-ii/${file}`}
                alt={`Krisumi Waterfall Suites II ${title}`}
                width={1240}
                height={800}
                className="h-48 w-full rounded-xl object-cover"
              />
              <figcaption className="mt-2 text-sm font-medium text-ink">
                {title}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="border-y border-border/70 bg-white/70">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Which unit plans does Waterfall Suites II offer?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Five published plans: 1 LDK + 1T, two 1 LDK + 2T types, and a
              two-level penthouse.
            </p>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {[
              ["plan-1ldk-1t.webp", "1 LDK + 1T"],
              ["plan-1ldk-2t-type1.webp", "1 LDK + 2T, Type 1"],
              ["plan-1ldk-2t-type2.webp", "1 LDK + 2T, Type 2"],
              ["plan-ph-lower.webp", "Penthouse, lower level"],
              ["plan-ph-upper.webp", "Penthouse, upper level"],
            ].map(([file, title]) => (
              <figure key={file}>
                <figcaption className="text-sm font-medium text-ink">
                  {title}
                </figcaption>
                <Image
                  src={`/projects/waterfall-suites-ii/${file}`}
                  alt={`Krisumi Waterfall Suites II floor plan, ${title}`}
                  width={1360}
                  height={970}
                  className="mt-3 h-auto w-full rounded-xl border border-border/80 bg-white"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
            What is the published starting price?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Krisumi’s page lists three starting prices. Spandaman confirms
            which of these suites are open, and stamp duty and registration
            sit on top of the figure.
          </p>
        </div>
        <div className="mt-8 overflow-x-auto rounded-xl border border-border/80 bg-white">
          <table className="w-full min-w-[28rem] text-left text-sm">
            <caption className="sr-only">
              Krisumi Waterfall Suites II published starting prices
            </caption>
            <thead className="bg-ink text-white">
              <tr>
                <th scope="col" className="px-4 py-3 font-medium">
                  Unit type
                </th>
                <th scope="col" className="px-4 py-3 font-medium">
                  Starting price
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1 LDK T1", "₹2.53 crore"],
                ["1 LDK T2, Type 2", "₹2.73 crore"],
                ["1 LDK T2, Type 1", "₹3.16 crore"],
              ].map(([type, price]) => (
                <tr key={type} className="border-t border-border/70">
                  <th scope="row" className="px-4 py-3 font-medium text-ink">
                    {type}
                  </th>
                  <td className="px-4 py-3 text-ink">{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-y border-border/70 bg-white/70">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
              What does the Waterfall Suites II site look like now?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              These aerial photographs are from Krisumi’s September 2026 site
              update for Waterfall Suites II.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <figure>
              <Image
                src="/projects/waterfall-suites-ii/site-1.jpg"
                alt="September 2026 aerial of the Waterfall Suites II site"
                width={4032}
                height={3024}
                className="h-72 w-full rounded-xl object-cover sm:h-80"
              />
            </figure>
            <figure>
              <Image
                src="/projects/waterfall-suites-ii/site-2.jpg"
                alt="September 2026 aerial of Waterfall Suites II tower construction"
                width={4032}
                height={3024}
                className="h-72 w-full rounded-xl object-cover sm:h-80"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Compare other Krisumi homes
            </h2>
            <p className="mt-3 text-muted-foreground">
              Waterfall Suites II is the later 1 LDK phase at Sector 36A.
              Suites, Residences, and Forest Reserve sit on the same visit.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium">
            <Link
              href="/projects/krisumi/waterfall-suites"
              className="text-brand underline-offset-2 hover:underline"
            >
              ← Waterfall Suites
            </Link>
            <Link
              href="/projects/krisumi/waterfall-residences"
              className="text-brand underline-offset-2 hover:underline"
            >
              Waterfall Residences →
            </Link>
            <Link
              href="/projects/krisumi/waterside-residences"
              className="text-brand underline-offset-2 hover:underline"
            >
              Waterside Residences →
            </Link>
            <Link
              href="/projects/krisumi/forest-reserve"
              className="text-brand underline-offset-2 hover:underline"
            >
              Forest Reserve →
            </Link>
          </div>
        </div>
      </section>

      <section
        id="suites-ii-enquire"
        className="border-t border-border/70 bg-white/75"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-[0.14em] text-sage uppercase">
              Lead enquiry
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink">
              Request Waterfall Suites II details
            </h2>
            <p className="mt-3 text-muted-foreground">
              Tell Spandaman your preferred configuration. The published bands
              are on this page — we confirm the suite that is open. Or call{" "}
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
          <LeadForm defaultProject="Krisumi Waterfall Suites II" />
        </div>
      </section>

      <section className="bg-mist/80">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Questions buyers ask before they visit
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {suitesII.faqs.map((faq) => (
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
              Ready for a Waterfall Suites II site visit?
            </h2>
            <p className="mt-3 text-base text-white/80">
              Spandaman will confirm which published suites are open and
              schedule a walkthrough that fits your day — including a
              side-by-side look at{" "}
              <Link
                href="/projects/krisumi/waterfall-suites"
                className="underline underline-offset-2 hover:text-white"
              >
                Waterfall Suites
              </Link>
              ,{" "}
              <Link
                href="/projects/krisumi/waterfall-residences"
                className="underline underline-offset-2 hover:text-white"
              >
                Waterfall Residences
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
                href="/projects/krisumi/forest-reserve"
                className="underline underline-offset-2 hover:text-white"
              >
                Forest Reserve
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
