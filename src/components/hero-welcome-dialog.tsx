"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { LinkButton } from "@/components/link-button";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { site, telUrl, whatsappUrl } from "@/lib/site";

const EXPLORE_LINKS = [
  ["Waterfall Residences", "/projects/krisumi/waterfall-residences"],
  ["Waterfall Suites", "/projects/krisumi/waterfall-suites"],
  ["Waterfall Suites II", "/projects/krisumi/waterfall-suites-ii"],
  ["Waterside Residences", "/projects/krisumi/waterside-residences"],
  ["Forest Reserve", "/projects/krisumi/forest-reserve"],
  ["Forest Reserve II", "/projects/krisumi/forest-reserve-ii"],
] as const;

/**
 * Welcome dialog for the homepage hero.
 * Opens on each mount of `/` (visit, refresh, or client nav back to home).
 * Closing dismisses until the next time the home page mounts — hero then
 * shows only VR/video with no marketing overlay.
 */
export function HeroWelcomeDialog() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        showCloseButton
        overlayClassName="bg-black/45 supports-backdrop-filter:backdrop-blur-[2px]"
        className="max-h-[min(92svh,40rem)] w-[calc(100%-1.5rem)] max-w-lg overflow-y-auto border border-gold/25 bg-[color-mix(in_srgb,var(--mist)_94%,white)] p-5 text-ink shadow-[0_20px_60px_rgba(15,22,28,0.4)] sm:max-w-xl sm:p-6"
      >
        <DialogHeader className="items-center text-center">
          <Image
            src="/brand/spandaman-logo.png"
            alt="Spandaman Realtors"
            width={88}
            height={96}
            className="mx-auto h-16 w-auto object-contain drop-shadow-sm sm:h-[4.5rem]"
            priority
          />
          <DialogTitle className="font-display text-brand-gold mt-3 text-4xl tracking-tight sm:text-5xl">
            {site.name}
          </DialogTitle>
          <p className="text-brand-gold-soft mt-3 text-balance text-lg font-medium leading-snug sm:text-xl">
            Enquire on Krisumi — Sector 36A, Gurugram
          </p>
          <DialogDescription className="text-brand-gold-soft mx-auto mt-3 max-w-md text-sm leading-relaxed sm:text-base">
            Broker-led site visits, current inventory, and price on request —
            clear next steps without brochure fog.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          <Button
            nativeButton={false}
            size="lg"
            className="h-11 bg-ink px-6 text-mist hover:bg-ink/90"
            render={
              <a
                href="#enquire"
                onClick={() => setOpen(false)}
              />
            }
          >
            Enquire now
          </Button>
          <LinkButton
            href={whatsappUrl()}
            external
            size="lg"
            variant="outline"
            className="h-11 border-gold/50 bg-transparent px-5 text-ink hover:bg-gold/10"
          >
            WhatsApp
          </LinkButton>
          <LinkButton
            href={telUrl()}
            size="lg"
            variant="ghost"
            className="h-11 px-3 text-ink hover:bg-gold/10"
          >
            Call {site.phoneDisplay}
          </LinkButton>
        </div>

        <nav
          aria-label="Explore Krisumi projects"
          className="mt-4 flex flex-wrap items-center justify-center gap-2 border-t border-border/70 pt-4"
        >
          <span className="w-full text-center text-[0.7rem] font-semibold tracking-[0.16em] text-gold-deep uppercase sm:mr-1 sm:w-auto">
            Explore projects
          </span>
          {EXPLORE_LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-sm border border-gold/35 bg-white/55 px-2.5 py-1 text-[0.7rem] font-medium tracking-wide text-ink/90 transition-colors hover:border-gold/70 hover:bg-gold/10 hover:text-ink"
            >
              {label}
            </a>
          ))}
        </nav>

        <DialogFooter
          className="-mx-0 -mb-0 mt-1 justify-center border-0 bg-transparent p-0 sm:justify-center"
          showCloseButton={false}
        >
          <DialogClose
            render={
              <Button
                variant="outline"
                className="h-9 border-border/80 text-ink/80 hover:bg-muted"
              />
            }
          >
            Close
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
