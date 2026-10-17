import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { LeadForm } from "@/components/lead-form";
import { LinkButton } from "@/components/link-button";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";
import { projects, site, telUrl, whatsappUrl } from "@/lib/site";

const waterside = projects.watersideResidences;

const whatsappMessage =
  "Hi Spandaman, I want to enquire about Krisumi Waterside Residences in Sector 36A, Gurugram.";

export const metadata = pageMetadata({
  title: "Krisumi Waterside Residences",
  description:
    "Krisumi Waterside Residences in Sector 36A, Gurugram. 2 and 3 LDK homes from ₹4.35 crore. Spandaman arranges site visits and confirms availability.",
  path: "/projects/krisumi/waterside-residences",
  keywords: [
    "Krisumi Waterside Residences",
    "Waterside Residences Gurugram",
    "Krisumi 3 LDK",
    "Krisumi Sector 36A",
  ],
});

export default function WatersideResidencesPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(waterside.faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Krisumi", path: "/projects/krisumi" },
          {
            name: "Waterside Residences",
            path: "/projects/krisumi/waterside-residences",
          },
        ])}
      />
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

      <section className="border-y border-border/70 bg-white/70">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Where does Waterside Residences sit in Sector 36A?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Krisumi places it on Gurugram’s NPR and CPR, about three minutes
              from NH-48, beside a 220-acre green zone and a 50-metre green
              belt.
            </p>
          </div>
          <figure className="mt-8">
            <Image
              src="/projects/waterside-residences/location-map.webp"
              alt="Map of Krisumi Waterside Residences in Sector 36A, Gurugram"
              width={2000}
              height={1300}
              className="h-auto w-full rounded-xl border border-border/80 bg-white"
            />
          </figure>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["concept-entrance.webp", "Entrance"],
              ["concept-dropoff.webp", "Drop-off"],
              ["concept-gate.webp", "Entry gate"],
              ["concept-gate-2.webp", "Gate approach"],
            ].map(([file, title]) => (
              <figure key={file}>
                <Image
                  src={`/projects/waterside-residences/${file}`}
                  alt={`Krisumi Waterside Residences ${title}`}
                  width={1240}
                  height={800}
                  className="h-40 w-full rounded-xl object-cover"
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
            What do the Waterside pools and interiors look like?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Krisumi publishes a main pool, a kids pool, a lake, and interiors
            for the lounge, elevator lobby, dining room, bedrooms, and
            bathroom.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["main-pool.webp", "Main pool"],
            ["kids-pool.webp", "Kids pool"],
            ["lake.webp", "Lake"],
            ["lounge.webp", "Lounge"],
            ["lobby.webp", "Elevator lobby"],
            ["dining.webp", "Dining"],
            ["master-bedroom.webp", "Master bedroom"],
            ["kids-bedroom.webp", "Kids bedroom"],
            ["bathroom.webp", "Bathroom"],
          ].map(([file, title]) => (
            <figure key={file}>
              <Image
                src={`/projects/waterside-residences/${file}`}
                alt={`Krisumi Waterside Residences ${title}`}
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
              Which unit plans does Waterside Residences offer?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Krisumi publishes 2 LDK, 2 LDK + study, 3 LDK, 3 LDK + servant,
              and penthouse plans for Tower 1 and for Towers 2 and 3.
            </p>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {[
              ["plan-2ldk.webp", "Tower 1, 2 LDK"],
              ["plan-3ldk-s.webp", "Tower 1, 3 LDK + servant"],
              ["plan-2ldk-a.webp", "Towers 2 and 3, 2 LDK A"],
              ["plan-2ldk-study.webp", "Towers 2 and 3, 2 LDK + study"],
              ["plan-3ldk.webp", "Towers 2 and 3, 3 LDK"],
              ["plan-ph-a-lower.webp", "Penthouse A, lower level"],
              ["plan-ph-a-upper.webp", "Penthouse A, upper level"],
            ].map(([file, title]) => (
              <figure key={file}>
                <figcaption className="text-sm font-medium text-ink">
                  {title}
                </figcaption>
                <Image
                  src={`/projects/waterside-residences/${file}`}
                  alt={`Krisumi Waterside Residences floor plan, ${title}`}
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
            Krisumi’s page lists these starting prices. Spandaman confirms
            which homes are open, and stamp duty and registration sit on top
            of the figure.
          </p>
        </div>
        <div className="mt-8 overflow-x-auto rounded-xl border border-border/80 bg-white">
          <table className="w-full min-w-[28rem] text-left text-sm">
            <caption className="sr-only">
              Krisumi Waterside Residences published starting prices
            </caption>
            <thead className="bg-ink text-white">
              <tr>
                <th scope="col" className="px-4 py-3 font-medium">
                  Typology
                </th>
                <th scope="col" className="px-4 py-3 font-medium">
                  Starting price
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["2 LDK", "₹4.35 crore"],
                ["2 LDK + S", "₹4.82 crore and ₹4.91 crore"],
                ["3 LDK", "₹5.65 crore"],
                ["3 LDK + S", "₹6.75 crore"],
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
              What does the Waterside Residences site look like now?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              These photographs are from Krisumi’s construction updates for
              Waterside Residences, including the September 2026 tower aerials.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <figure>
              <Image
                src="/projects/waterside-residences/site-tower-32.jpg"
                alt="September 2026 aerial of Waterside Residences Tower 3.2"
                width={4032}
                height={3024}
                className="h-72 w-full rounded-xl object-cover sm:h-80"
              />
            </figure>
            <figure>
              <Image
                src="/projects/waterside-residences/site-tower-33.jpg"
                alt="September 2026 aerial of Waterside Residences Tower 3.3"
                width={4032}
                height={3024}
                className="h-72 w-full rounded-xl object-cover sm:h-80"
              />
            </figure>
            <figure className="sm:col-span-2">
              <Image
                src="/projects/waterside-residences/site-august.jpg"
                alt="Earlier aerial of a Waterside Residences floor under construction"
                width={1360}
                height={970}
                className="h-72 w-full rounded-xl object-cover sm:h-96"
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
              Waterside Residences is the 2 and 3 LDK line at Sector 36A.
              Forest Reserve and the Waterfall projects sit on the same visit.
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
              Tell Spandaman your preferred configuration. The published bands
              are on this page — we confirm the home that is open. Or call{" "}
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
              Spandaman will confirm which published homes are open and
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
