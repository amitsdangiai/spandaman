"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkButton } from "@/components/link-button";
import { cn } from "@/lib/utils";
import { site, telUrl, whatsappUrl } from "@/lib/site";

const nav = [
  { href: "/projects/krsumi", label: "Krsumi" },
  { href: "/#enquire", label: "Enquire" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const overHero = pathname === "/" || pathname.startsWith("/projects/");

  return (
    <header
      className={cn(
        "z-40",
        overHero
          ? "absolute inset-x-0 top-0"
          : "sticky top-0 border-b border-border/70 bg-mist/95 backdrop-blur",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5">
        <Link
          href="/"
          className={cn(
            "flex items-center gap-2.5 sm:gap-3",
            overHero ? "drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]" : "",
          )}
        >
          <Image
            src="/brand/spandaman-logo.png"
            alt="Spandaman Realtors"
            width={48}
            height={36}
            priority
            className={cn(
              "h-9 w-auto sm:h-11",
              overHero && "brightness-110 contrast-105",
            )}
          />
          <span
            className={cn(
              "font-display text-xl tracking-tight sm:text-2xl",
              overHero ? "text-white drop-shadow-sm" : "text-ink",
            )}
          >
            {site.name}
          </span>
        </Link>
        <nav
          aria-label="Primary"
          className={cn(
            "hidden items-center gap-7 text-sm font-medium md:flex",
            overHero ? "text-white/90" : "text-ink/80",
          )}
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors",
                overHero ? "hover:text-white" : "hover:text-ink",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LinkButton
            href={telUrl()}
            size="sm"
            variant="secondary"
            className={cn(
              "hidden sm:inline-flex",
              overHero
                ? "border-0 bg-white/95 text-ink hover:bg-white"
                : "bg-secondary text-ink hover:bg-secondary/80",
            )}
          >
            Call
          </LinkButton>
          <LinkButton
            href={whatsappUrl()}
            external
            size="sm"
            className="bg-sage text-white hover:bg-sage/90"
          >
            WhatsApp
          </LinkButton>
        </div>
      </div>
    </header>
  );
}
