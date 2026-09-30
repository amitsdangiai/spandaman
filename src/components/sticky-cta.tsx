import { LinkButton } from "@/components/link-button";
import { telUrl, whatsappUrl } from "@/lib/site";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border/80 bg-white/95 p-3 shadow-[0_-8px_30px_rgba(20,32,28,0.12)] backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-lg gap-2">
        <LinkButton
          href={telUrl()}
          className="flex-1 bg-brand text-brand-foreground hover:bg-brand/90"
        >
          Call
        </LinkButton>
        <LinkButton
          href={whatsappUrl()}
          external
          className="flex-1 bg-sage text-white hover:bg-sage/90"
        >
          WhatsApp
        </LinkButton>
      </div>
    </div>
  );
}
