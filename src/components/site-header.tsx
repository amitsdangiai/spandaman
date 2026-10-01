"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { LinkButton } from "@/components/link-button";
import { cn } from "@/lib/utils";
import { site, telUrl, whatsappUrl } from "@/lib/site";

const krisumiLinks = [
  { href: "/projects/krisumi", label: "Krisumi overview" },
  {
    href: "/projects/krisumi/waterfall-residences",
    label: "Waterfall Residences",
  },
  {
    href: "/projects/krisumi/waterfall-suites",
    label: "Waterfall Suites",
  },
  {
    href: "/projects/krisumi/waterfall-suites-ii",
    label: "Waterfall Suites II",
  },
  {
    href: "/projects/krisumi/waterside-residences",
    label: "Waterside Residences",
  },
  {
    href: "/projects/krisumi/forest-reserve",
    label: "Forest Reserve",
  },
  {
    href: "/projects/krisumi/forest-reserve-ii",
    label: "Forest Reserve II",
  },
];

export function SiteHeader() {
  const pathname = usePathname();
  const overHero = pathname === "/" || pathname.startsWith("/projects/");
  const [krisumiOpen, setKrisumiOpen] = useState(false);
  const menuId = useId();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setKrisumiOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!krisumiOpen) return;

    function onPointerDown(event: PointerEvent) {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setKrisumiOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setKrisumiOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [krisumiOpen]);

  const linkTone = overHero
    ? "text-white/90 hover:text-white"
    : "text-ink/80 hover:text-ink";

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
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setKrisumiOpen(true)}
            onMouseLeave={() => setKrisumiOpen(false)}
          >
            <button
              type="button"
              className={cn(
                "inline-flex items-center gap-1.5 transition-colors",
                linkTone,
              )}
              aria-expanded={krisumiOpen}
              aria-controls={menuId}
              onClick={() => setKrisumiOpen((open) => !open)}
              onFocus={() => setKrisumiOpen(true)}
            >
              Krisumi
              <svg
                aria-hidden
                viewBox="0 0 20 20"
                className={cn(
                  "h-3.5 w-3.5 transition-transform",
                  krisumiOpen && "rotate-180",
                )}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 7.5 10 12.5 15 7.5"
                />
              </svg>
            </button>
            <div
              id={menuId}
              role="menu"
              className={cn(
                "absolute left-0 top-full z-50 min-w-[14rem] pt-2 transition-opacity",
                krisumiOpen
                  ? "pointer-events-auto opacity-100"
                  : "pointer-events-none opacity-0",
              )}
            >
              <div className="rounded-xl border border-border/70 bg-white py-2 shadow-[0_16px_40px_rgba(20,32,28,0.14)]">
                {krisumiLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    className="block px-4 py-2.5 text-sm text-ink/85 transition-colors hover:bg-mist hover:text-ink"
                    onClick={() => setKrisumiOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/#enquire" className={cn("transition-colors", linkTone)}>
            Enquire
          </Link>
          <Link href="/contact" className={cn("transition-colors", linkTone)}>
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <details className="relative md:hidden">
            <summary
              className={cn(
                "list-none cursor-pointer rounded-lg px-2.5 py-1.5 text-sm font-medium transition-colors [&::-webkit-details-marker]:hidden",
                overHero
                  ? "bg-white/15 text-white hover:bg-white/25"
                  : "bg-secondary text-ink hover:bg-secondary/80",
              )}
            >
              Menu
            </summary>
            <div className="absolute right-0 top-full z-50 mt-2 w-56 rounded-xl border border-border/70 bg-white py-2 shadow-[0_16px_40px_rgba(20,32,28,0.14)]">
              <p className="px-4 pb-1 pt-1 text-[11px] font-semibold tracking-[0.12em] text-sage uppercase">
                Krisumi
              </p>
              {krisumiLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2.5 text-sm text-ink/85 hover:bg-mist hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
              <div className="my-2 border-t border-border/70" />
              <Link
                href="/#enquire"
                className="block px-4 py-2.5 text-sm text-ink/85 hover:bg-mist hover:text-ink"
              >
                Enquire
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2.5 text-sm text-ink/85 hover:bg-mist hover:text-ink"
              >
                Contact
              </Link>
            </div>
          </details>
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
