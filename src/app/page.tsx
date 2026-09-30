import Image from "next/image";
import { LeadForm } from "@/components/lead-form";
import { LinkButton } from "@/components/link-button";
import { projects, site, telUrl, whatsappUrl } from "@/lib/site";

const krsumi = projects.krsumi;

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden text-white">
        <Image
          src={krsumi.gallery[0].src}
          alt={krsumi.gallery[0].alt}
          fill
          priority
          sizes="100vw"
          className="object-cover ken-burns"
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,26,22,0.78)_0%,rgba(15,26,22,0.45)_48%,rgba(15,26,22,0.62)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,transparent_0%,rgba(15,26,22,0.35)_70%)]" />

        <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-24 pt-28 sm:px-6 sm:pb-28">
          <div className="max-w-2xl animate-rise">
            <p className="font-display text-4xl tracking-tight text-white sm:text-5xl md:text-6xl">
              {site.name}
            </p>
            <h1 className="mt-5 max-w-xl text-balance text-2xl font-medium leading-snug text-white/95 sm:text-3xl md:text-[2.1rem]">
              Enquire on Krsumi — Sector 36A, Gurugram
            </h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
              Broker-led site visits, current inventory, and price on request —
              without the brochure fog.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-rise-delay">
              <LinkButton
                href="#enquire"
                size="lg"
                className="h-12 bg-white px-6 text-ink hover:bg-white/90"
              >
                Enquire now
              </LinkButton>
              <LinkButton
                href={whatsappUrl()}
                external
                size="lg"
                variant="outline"
                className="h-12 border-white/50 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white"
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
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.14em] text-sage uppercase">
            Featured project
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Why buyers are asking about Krsumi
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Krsumi is a residential opportunity in Sector 36A that Spandaman is
            actively marketing to end-users and investors who want a clear
            Gurugram address — not a vague “upcoming corridor” pitch.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {krsumi.highlights.map((item) => (
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
            {krsumi.priceLabel} · {krsumi.typologies.join(" · ")}
          </p>
          <LinkButton
            href="/projects/krsumi"
            variant="outline"
            className="border-brand/30 text-brand"
          >
            View Krsumi details
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
            Share your name and phone. Default interest is Krsumi — change it if
            you want comparable options in Gurugram.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl">
            <Image
              src={krsumi.gallery[1].src}
              alt={krsumi.gallery[1].alt}
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
            {krsumi.faqs.map((faq) => (
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
              Ready for a Krsumi site visit?
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
                href="/projects/krsumi"
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
