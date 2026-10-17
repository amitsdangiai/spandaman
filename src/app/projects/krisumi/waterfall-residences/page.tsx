import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { LeadForm } from "@/components/lead-form";
import { LinkButton } from "@/components/link-button";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";
import { projects, site, telUrl, whatsappUrl } from "@/lib/site";

const waterfall = projects.waterfallResidences;

const whatsappMessage =
  "Hi Spandaman, I want to enquire about Krisumi Waterfall Residences in Sector 36A, Gurugram.";

export const metadata = pageMetadata({
  title: "Krisumi Waterfall Residences",
  description:
    "Krisumi Waterfall Residences in Sector 36A, Gurugram. Spandaman books site visits for 2 LDK, 3 LDK, and penthouse homes, with price shared on request.",
  path: "/projects/krisumi/waterfall-residences",
  keywords: [
    "Krisumi Waterfall Residences",
    "Waterfall Residences Gurugram",
    "Krisumi 2 LDK",
    "Krisumi Sector 36A",
  ],
});

export default function WaterfallResidencesPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(waterfall.faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Krisumi", path: "/projects/krisumi" },
          {
            name: "Waterfall Residences",
            path: "/projects/krisumi/waterfall-residences",
          },
        ])}
      />
      <section className="relative min-h-[100svh] overflow-hidden text-white">
        <Image
          src={waterfall.gallery[0].src}
          alt={waterfall.gallery[0].alt}
          fill
          priority
          sizes="100vw"
          className="object-cover ken-burns"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,22,28,0.62)_0%,rgba(15,22,28,0.28)_40%,rgba(15,22,28,0.82)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(15,22,28,0.45)_100%)]" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20">
          <p className="text-sm font-semibold tracking-[0.16em] text-sand uppercase animate-fade">
            {waterfall.shortLocation}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-tight sm:text-5xl md:text-6xl animate-rise">
            {waterfall.name}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg animate-rise-delay">
            {waterfall.headline}. {waterfall.support}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton
              href="#waterfall-enquire"
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
              {waterfall.location}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wider text-sage uppercase">
              Pricing
            </p>
            <p className="mt-2 font-display text-2xl text-ink">
              {waterfall.priceLabel}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wider text-sage uppercase">
              Typologies
            </p>
            <p className="mt-2 font-display text-xl leading-snug text-ink sm:text-2xl">
              {waterfall.typologies.join(" · ")}
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.14em] text-sage uppercase">
            Project highlights
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Why Waterfall Residences is on shortlists in Sector 36A
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Buyers looking along Dwarka Expressway want more than a corridor
            story — they want a finished address, usable club amenities, and
            layouts that hold up in daily Gurugram life. Spandaman helps you
            verify that on the ground.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {waterfall.highlights.map((item) => (
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
              Waterfall Residences sits in Sector 36A at a confluence of
              Gurugram’s wider arterials — practical reach toward Delhi, NH-8 /
              Dwarka Expressway corridors, and other Gurugram sectors without
              relying only on clogged internal lanes. Spandaman will map your
              commute and visit route when you enquire.
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
              Neighbourhood context reviewed on a Spandaman site visit
            </li>
          </ul>
        </div>
      </section>

      <section className="border-y border-border/70 bg-white/70">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
              What is inside the Waterfall Residences clubhouse?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              The Sudare clubhouse is 3,344.48 square metres (36,000 sq ft),
              with a gym, restaurant, bar lounge, spa, salon, theatre, and
              tennis court.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["clubhouse-dropoff.png", "Drop-off", "Arrival court in front of the clubhouse"],
              ["clubhouse-lobby.png", "Lobby", "Clubhouse lobby"],
              ["restaurant.png", "Restaurant", "Clubhouse restaurant"],
              ["bar-lounge.png", "Bar lounge", "Clubhouse bar lounge"],
              ["theatre.png", "Theatre", "Clubhouse theatre"],
              ["spa.png", "Spa and salon", "Spa and salon"],
              ["gym.png", "Gymnasium", "Clubhouse gym"],
              ["tennis-court.png", "Tennis court", "Tennis court"],
            ].map(([file, title, alt]) => (
              <figure key={file}>
                <Image
                  src={`/projects/waterfall-residences/${file}`}
                  alt={`Krisumi Waterfall Residences ${alt}`}
                  width={1080}
                  height={540}
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
            Which unit plans does Waterfall Residences offer?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Krisumi publishes five plans: 3 LDK + S (A1), 3 LDK (B5), 2 LDK
            (C3), penthouse (A1), and penthouse with pool (A2).
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            ["plan-3ldk-s-a1.png", "3 LDK + S (A1)", 1346, 1169],
            ["plan-3ldk-b5.png", "3 LDK (B5)", 1274, 1235],
            ["plan-2ldk-c3.png", "2 LDK (C3)", 1190, 1322],
            ["plan-penthouse-a1.png", "Penthouse (A1)", 1644, 957],
            ["plan-penthouse-pool-a2.png", "Penthouse + pool (A2)", 1637, 961],
          ].map(([file, title, width, height]) => (
            <figure
              key={file}
              className="rounded-xl border border-border/80 bg-white p-3"
            >
              <Image
                src={`/projects/waterfall-residences/${file}`}
                alt={`Krisumi Waterfall Residences floor plan, ${title}`}
                width={Number(width)}
                height={Number(height)}
                className="h-auto w-full"
              />
              <figcaption className="mt-3 text-sm font-medium text-ink">
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
              How are the landscapes planned?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              The landscape uses water, stone, and garden rooms rather than
              ornamental planting, with the pool, terrace garden, and
              children&apos;s play set into that sequence.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["alfresco-pool.png", "Alfresco dining with pool"],
              ["pool-area.png", "Pool area"],
              ["landscape-pool.png", "Landscape near the pool"],
              ["terrace-garden.png", "Terrace garden"],
              ["kids-playroom.png", "Kids playroom and playground"],
              ["tower-ab-dropoff.jpg", "Tower A and B drop-off"],
            ].map(([file, title]) => (
              <figure key={file}>
                <Image
                  src={`/projects/waterfall-residences/${file}`}
                  alt={`Krisumi Waterfall Residences ${title}`}
                  width={1080}
                  height={540}
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
            Which Japanese ideas shape the design?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Waterfall Residences is organised around eight Japanese ideas, from
            the waterfall landscape to the security sequence at the gate.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            ["concept-kekkai.png", "Kekkai", "Transition between outside and inside, using water and bridges."],
            ["concept-tsuboniwa.png", "Tsuboniwa", "A small garden, kept spare so the planting stays the focus."],
            ["concept-stroll.png", "Kaiyuusei", "A stroll garden made from natural materials, without ornament."],
            ["concept-anzen.png", "Anzen", "Layered security, access control, and high-speed shuttle lifts."],
            ["concept-taihi.jpg", "Taihi", "Contrast in colour and material, used to mark a change of space."],
          ].map(([file, title, body]) => (
            <figure key={file} className="overflow-hidden rounded-xl border border-border/80 bg-white">
              <Image
                src={`/projects/waterfall-residences/${file}`}
                alt={`Krisumi Waterfall Residences concept, ${title}`}
                width={1070}
                height={378}
                className="h-40 w-full object-cover"
              />
              <figcaption className="p-4">
                <h3 className="font-display text-xl text-ink">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
        <ul className="mt-8 grid gap-3 text-sm text-ink sm:grid-cols-3">
          <li className="border-l-2 border-sage pl-4">
            Taki — the waterfall, used on the façade and in the landscape.
          </li>
          <li className="border-l-2 border-sage pl-4">
            Hikari and Kage — light and shadow across walls and openings.
          </li>
          <li className="border-l-2 border-sage pl-4">
            Engawa — the link that joins the rooms to the garden outside.
          </li>
        </ul>
      </section>

      <section className="border-y border-border/70 bg-white/70">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
              What do the towers and sample apartment look like?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Towers A, B, and C are on site in Sector 36A, and Krisumi shows a
              furnished sample with a living-dining room, kitchen, and master
              bedroom.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["facade-towers.jpg", "Towers A, B and C", 1200, 800],
              ["facade-june-2024.webp", "Façade during construction", 1024, 768],
              ["tower-c-lobby.jpg", "Tower C lobby", 1667, 937],
              ["tower-ab-lobby.jpg", "Tower A and B lobby", 1667, 937],
              ["living-dining.jpg", "Living and dining", 1000, 800],
              ["kitchen.jpg", "Kitchen", 1000, 800],
              ["master-bedroom.jpg", "Master bedroom", 1000, 800],
              ["site-photo-1.jpg", "Refreshment counter", 2048, 1362],
            ].map(([file, title, width, height]) => (
              <figure key={file}>
                <Image
                  src={`/projects/waterfall-residences/${file}`}
                  alt={`Krisumi Waterfall Residences ${title}`}
                  width={Number(width)}
                  height={Number(height)}
                  className="h-52 w-full rounded-xl object-cover"
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
            What price list does Krisumi publish?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Krisumi’s list gives all-inclusive price bands by configuration.
            Stamp duty and registration sit outside those bands, and Spandaman
            checks the current figure before you visit.
          </p>
        </div>
        <div className="mt-8 space-y-8">
          {[
            ["price-list.png", "Homes excluding fully furnished apartments", 1121, 373],
            ["price-2ldk.png", "2 LDK with a personal workspace", 1121, 175],
            ["price-furnished.png", "Fully furnished apartments", 1121, 366],
            ["price-penthouse.png", "Penthouses", 1121, 175],
            ["payment-plan.png", "Possession-linked payment plan, 75:25", 2224, 780],
          ].map(([file, title, width, height]) => (
            <figure key={file}>
              <h3 className="font-display text-xl text-ink">{title}</h3>
              <Image
                src={`/projects/waterfall-residences/${file}`}
                alt={`Krisumi Waterfall Residences ${title}`}
                width={Number(width)}
                height={Number(height)}
                className="mt-3 h-auto w-full rounded-xl border border-border/80 bg-white"
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Compare other Krisumi homes
            </h2>
            <p className="mt-3 text-muted-foreground">
              Waterfall Residences is the larger 2 and 3 LDK home at Sector
              36A. The suites and forest projects sit on the same visit.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium">
            <Link
              href="/projects/krisumi"
              className="text-brand underline-offset-2 hover:underline"
            >
              ← Krisumi overview
            </Link>
            <Link
              href="/projects/krisumi/waterfall-suites"
              className="text-brand underline-offset-2 hover:underline"
            >
              Waterfall Suites →
            </Link>
            <Link
              href="/projects/krisumi/waterfall-suites-ii"
              className="text-brand underline-offset-2 hover:underline"
            >
              Waterfall Suites II →
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
        id="waterfall-enquire"
        className="border-t border-border/70 bg-white/75"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-[0.14em] text-sage uppercase">
              Lead enquiry
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink">
              Request Waterfall Residences details
            </h2>
            <p className="mt-3 text-muted-foreground">
              Tell Spandaman your preferred configuration. The published
              bands are on this page — we confirm which home and price are
              open now. Or call{" "}
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
          <LeadForm defaultProject="Krisumi Waterfall Residences" />
        </div>
      </section>

      <section className="bg-mist/80">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Questions buyers ask before they visit
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {waterfall.faqs.map((faq) => (
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
              Ready for a Waterfall Residences site visit?
            </h2>
            <p className="mt-3 text-base text-white/80">
              Spandaman will confirm inventory, share price on request, and
              schedule a walkthrough that fits your day — including a look at{" "}
              <Link
                href="/projects/krisumi/waterfall-suites"
                className="underline underline-offset-2 hover:text-white"
              >
                Waterfall Suites
              </Link>
              ,{" "}
              <Link
                href="/projects/krisumi/waterfall-suites-ii"
                className="underline underline-offset-2 hover:text-white"
              >
                Waterfall Suites II
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
