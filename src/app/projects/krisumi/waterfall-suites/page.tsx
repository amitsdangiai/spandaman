import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { LeadForm } from "@/components/lead-form";
import { LinkButton } from "@/components/link-button";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";
import { projects, site, telUrl, whatsappUrl } from "@/lib/site";

const suites = projects.waterfallSuites;

const whatsappMessage =
  "Hi Spandaman, I want to enquire about Krisumi Waterfall Suites in Sector 36A, Gurugram.";

export const metadata = pageMetadata({
  title: "Krisumi Waterfall Suites",
  description:
    "Krisumi Waterfall Suites in Sector 36A, Gurugram. 1 LDK suites from ₹2.30 crore. Spandaman arranges site visits and confirms current availability.",
  path: "/projects/krisumi/waterfall-suites",
  keywords: [
    "Krisumi Waterfall Suites",
    "Waterfall Suites Gurugram",
    "Krisumi 1 LDK",
    "Krisumi Sector 36A",
  ],
});

export default function WaterfallSuitesPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(suites.faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Krisumi", path: "/projects/krisumi" },
          {
            name: "Waterfall Suites",
            path: "/projects/krisumi/waterfall-suites",
          },
        ])}
      />
      <section className="relative min-h-[100svh] overflow-hidden text-white">
        <Image
          src={suites.gallery[0].src}
          alt={suites.gallery[0].alt}
          fill
          priority
          sizes="100vw"
          className="object-cover ken-burns"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,22,28,0.62)_0%,rgba(15,22,28,0.28)_40%,rgba(15,22,28,0.82)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(15,22,28,0.45)_100%)]" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20">
          <p className="text-sm font-semibold tracking-[0.16em] text-sand uppercase animate-fade">
            {suites.shortLocation}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl tracking-tight sm:text-5xl md:text-6xl animate-rise">
            {suites.name}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg animate-rise-delay">
            {suites.headline}. {suites.support}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton
              href="#suites-enquire"
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
              {suites.location}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wider text-sage uppercase">
              Pricing
            </p>
            <p className="mt-2 font-display text-2xl text-ink">
              {suites.priceLabel}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-wider text-sage uppercase">
              Typologies
            </p>
            <p className="mt-2 font-display text-xl leading-snug text-ink sm:text-2xl">
              {suites.typologies.join(" · ")}
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.14em] text-sage uppercase">
            Project highlights
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Why Waterfall Suites is on shortlists in Sector 36A
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Buyers who want Dwarka Expressway reach without a large-family
            footprint are asking for compact luxury that still feels finished —
            Japanese-inspired façades, usable club amenities, and layouts that
            work for primary living or a Gurugram pied-à-terre. Spandaman helps
            you verify that on the ground.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {suites.highlights.map((item) => (
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
              Waterfall Suites sits in Sector 36A at a confluence of Gurugram’s
              wider arterials — practical reach toward Delhi, NH-8 / Dwarka
              Expressway corridors, and other Gurugram sectors without relying
              only on clogged internal lanes. Spandaman will map your commute
              and visit route when you enquire.
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
              How is the Waterfall Suites tower designed?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Krisumi’s Shiraito concept maps a waterfall onto the tower: a
              white crown, a vertical facade of water threads, and a black
              reflective podium.
            </p>
          </div>
          <figure className="mt-8">
            <Image
              src="/projects/waterfall-suites/building.png"
              alt="Diagram of the Waterfall Suites facade, from white crown to black podium"
              width={977}
              height={518}
              className="h-auto w-full rounded-xl border border-border/80 bg-white"
            />
          </figure>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {[
              ["origami.png", "Origami stream", "Folded water-stream motif on the facade", 297, 220],
              ["silk-yarn.png", "Silk thread", "Vertical threads standing in for falling water", 287, 219],
              ["clear-handrail.png", "Clear rail", "Transparent balcony rail so the facade stays clean", 290, 216],
            ].map(([file, title, alt, width, height]) => (
              <figure key={file as string}>
                <Image
                  src={`/projects/waterfall-suites/${file}`}
                  alt={alt as string}
                  width={width as number}
                  height={height as number}
                  className="h-40 w-full rounded-xl border border-border/80 bg-white object-contain"
                />
                <figcaption className="mt-2 text-sm font-medium text-ink">
                  {title as string}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <figure>
              <Image
                src="/projects/waterfall-suites/crown.jpg"
                alt="White glowing crown at the top of Waterfall Suites"
                width={543}
                height={396}
                className="h-64 w-full rounded-xl object-cover"
              />
              <figcaption className="mt-2 text-sm font-medium text-ink">
                White glowing crown
              </figcaption>
            </figure>
            <figure>
              <Image
                src="/projects/waterfall-suites/podium.jpg"
                alt="Black reflective podium at the base of Waterfall Suites"
                width={845}
                height={380}
                className="h-64 w-full rounded-xl object-cover"
              />
              <figcaption className="mt-2 text-sm font-medium text-ink">
                Black reflective podium
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
            What do the Waterfall Suites landscapes look like?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            The published landscapes are a tower drop-off, a main garden with
            a waterfall, a podium rooftop, and a penthouse terrace.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            ["drop-off.jpg", "Tower drop-off", "Arrival court under the Waterfall Suites tower", 2048, 1152],
            ["main-garden.jpg", "Main garden", "Main garden with waterfall", 1000, 563],
            ["waterfall.jpg", "Waterfall", "Waterfall in the main garden", 2048, 1152],
            ["terrace-garden.png", "Terrace garden", "Penthouse rooftop terrace garden", 1080, 540],
          ].map(([file, title, alt, width, height]) => (
            <figure key={file as string}>
              <Image
                src={`/projects/waterfall-suites/${file}`}
                alt={alt as string}
                width={width as number}
                height={height as number}
                className="h-64 w-full rounded-xl object-cover sm:h-72"
              />
              <figcaption className="mt-2 text-sm font-medium text-ink">
                {title as string}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="border-y border-border/70 bg-white/70">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
              What amenities are inside Waterfall Suites?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Krisumi shows an entrance lobby, restaurant, meeting rooms, lift
              lobby, corridor, and a gym with spa.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["entrance-lobby.jpg", "Entrance lobby", 2560, 1524],
              ["restaurant.jpg", "Restaurant", 2048, 1280],
              ["meeting-room.jpg", "Meeting room", 800, 597],
              ["lift-lobby.jpg", "Lift lobby", 1000, 750],
              ["corridor.jpg", "Corridor", 2048, 1364],
              ["gym.jpg", "Gym and spa", 2048, 1276],
            ].map(([file, title, width, height]) => (
              <figure key={file as string}>
                <Image
                  src={`/projects/waterfall-suites/${file}`}
                  alt={`Krisumi Waterfall Suites ${title}`}
                  width={width as number}
                  height={height as number}
                  className="h-48 w-full rounded-xl object-cover"
                />
                <figcaption className="mt-2 text-sm font-medium text-ink">
                  {title as string}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Which unit plans does Waterfall Suites offer?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Three published plans: 1 LDK + 1T Type 1 (464 sq ft carpet), 1 LDK
            + 1T Type 2 (494 sq ft carpet), and 1 LDK + 2T (592 sq ft carpet).
          </p>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {[
            ["plan-1ldk-1t.jpg", "1 LDK + 1T, Type 1"],
            ["plan-1ldk-1t-type2.jpg", "1 LDK + 1T, Type 2"],
            ["plan-1ldk-2t.jpg", "1 LDK + 2T"],
          ].map(([file, title]) => (
            <figure key={file}>
              <figcaption className="text-sm font-medium text-ink">
                {title}
              </figcaption>
              <Image
                src={`/projects/waterfall-suites/${file}`}
                alt={`Krisumi Waterfall Suites floor plan, ${title}`}
                width={843}
                height={596}
                className="mt-3 h-auto w-full rounded-xl border border-border/80 bg-white"
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="border-y border-border/70 bg-white/70">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
              What is the published price and payment plan?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Krisumi’s list shows all-inclusive prices of ₹2.30 crore, ₹2.44
              crore, and ₹2.95 crore. Stamp duty and registration are extra,
              and Spandaman confirms the suite that is actually open.
            </p>
          </div>
          <div className="mt-8 space-y-6">
            {[
              ["price-list.png", "All-inclusive price list", 1217, 510],
              ["payment-plan.png", "Down-payment plan: 10% booking, 80% within 60 days, 10% on possession", 1872, 630],
              ["flexi-plan.png", "Flexi payment plan", 3074, 1420],
            ].map(([file, title, width, height]) => (
              <figure key={file as string}>
                <figcaption className="text-sm font-medium text-ink">
                  {title as string}
                </figcaption>
                <Image
                  src={`/projects/waterfall-suites/${file}`}
                  alt={`Krisumi Waterfall Suites ${title}`}
                  width={width as number}
                  height={height as number}
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
            What does the Waterfall Suites site look like now?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            These aerial photographs are from Krisumi’s September 2026 site
            update for Waterfall Suites.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <figure>
            <Image
              src="/projects/waterfall-suites/site-drone-1.jpg"
              alt="September 2026 aerial of the Waterfall Suites construction deck"
              width={2048}
              height={1550}
              className="h-72 w-full rounded-xl object-cover sm:h-80"
            />
          </figure>
          <figure>
            <Image
              src="/projects/waterfall-suites/site-drone-2.jpg"
              alt="September 2026 aerial of the Waterfall Suites towers under construction"
              width={2560}
              height={1920}
              className="h-72 w-full rounded-xl object-cover sm:h-80"
            />
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Compare other Krisumi homes
            </h2>
            <p className="mt-3 text-muted-foreground">
              Waterfall Suites is the 1 LDK home at Sector 36A. Residences,
              Suites II, and Forest Reserve sit on the same visit.
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
              href="/projects/krisumi/waterfall-residences"
              className="text-brand underline-offset-2 hover:underline"
            >
              Waterfall Residences →
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
        id="suites-enquire"
        className="border-t border-border/70 bg-white/75"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-[0.14em] text-sage uppercase">
              Lead enquiry
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink">
              Request Waterfall Suites details
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
          <LeadForm defaultProject="Krisumi Waterfall Suites" />
        </div>
      </section>

      <section className="bg-mist/80">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Questions buyers ask before they visit
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {suites.faqs.map((faq) => (
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
              Ready for a Waterfall Suites site visit?
            </h2>
            <p className="mt-3 text-base text-white/80">
              Spandaman will confirm which published suites are open and
              schedule a walkthrough that fits your day — including a side-by-side
              look at{" "}
              <Link
                href="/projects/krisumi/waterfall-suites-ii"
                className="underline underline-offset-2 hover:text-white"
              >
                Waterfall Suites II
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
