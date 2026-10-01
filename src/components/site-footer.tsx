import Image from "next/image";
import Link from "next/link";
import { site, telUrl, whatsappUrl } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/brand/spandaman-logo.png"
              alt="Spandaman Realtors"
              width={40}
              height={30}
              className="h-8 w-auto brightness-110 contrast-105 drop-shadow-sm"
            />
            <p className="font-display text-3xl tracking-tight">{site.name}</p>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
            Independent real estate brokerage for Gurugram buyers. Currently
            prioritising enquiries for Krisumi in Sector 36A.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold tracking-wide text-sand uppercase">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <Link href="/projects/krisumi" className="hover:text-white">
                Krisumi overview
              </Link>
            </li>
            <li>
              <Link
                href="/projects/krisumi/waterfall-residences"
                className="hover:text-white"
              >
                Waterfall Residences
              </Link>
            </li>
            <li>
              <Link
                href="/projects/krisumi/waterfall-suites"
                className="hover:text-white"
              >
                Waterfall Suites
              </Link>
            </li>
            <li>
              <Link
                href="/projects/krisumi/waterfall-suites-ii"
                className="hover:text-white"
              >
                Waterfall Suites II
              </Link>
            </li>
            <li>
              <Link
                href="/projects/krisumi/waterside-residences"
                className="hover:text-white"
              >
                Waterside Residences
              </Link>
            </li>
            <li>
              <Link
                href="/projects/krisumi/forest-reserve"
                className="hover:text-white"
              >
                Forest Reserve
              </Link>
            </li>
            <li>
              <Link
                href="/projects/krisumi/forest-reserve-ii"
                className="hover:text-white"
              >
                Forest Reserve II
              </Link>
            </li>
            <li>
              <Link href="/#enquire" className="hover:text-white">
                Lead enquiry form
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact Spandaman
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold tracking-wide text-sand uppercase">
            Talk to us
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a href={telUrl()} className="hover:text-white">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                WhatsApp enquire
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>{site.hours}</li>
            <li>{site.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/50 sm:px-6">
        © {new Date().getFullYear()} Spandaman. Brokerage services in Gurugram.
        Project details shared on enquiry — verify inventory before booking.
      </div>
    </footer>
  );
}
