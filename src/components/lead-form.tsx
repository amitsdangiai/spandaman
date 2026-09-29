"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type LeadFormProps = {
  defaultProject?: string;
  compact?: boolean;
};

export function LeadForm({
  defaultProject = "Krsumi, Sector 36A",
  compact = false,
}: LeadFormProps) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setPending(true);

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email") || "",
          message: data.get("message") || "",
          project: data.get("project") || defaultProject,
        }),
      });

      if (!res.ok) {
        const payload = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(payload?.error || "Could not submit enquiry.");
      }

      router.push("/thank-you");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setPending(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className={
        compact
          ? "space-y-4"
          : "space-y-5 rounded-2xl border border-border/80 bg-white p-6 shadow-[0_20px_60px_rgba(20,32,28,0.08)] sm:p-8"
      }
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className="h-11 bg-mist/60"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+91"
            className="h-11 bg-mist/60"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">Email (optional)</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@email.com"
            className="h-11 bg-mist/60"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="project">Project interest</Label>
          <Input
            id="project"
            name="project"
            defaultValue={defaultProject}
            className="h-11 bg-mist/60"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message (optional)</Label>
        <Textarea
          id="message"
          name="message"
          rows={compact ? 3 : 4}
          placeholder="Budget range, preferred BHK, or preferred site-visit time"
          className="bg-mist/60"
        />
      </div>

      {error ? (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={pending}
        className="h-11 w-full bg-brand text-brand-foreground hover:bg-brand/90 sm:w-auto sm:px-8"
      >
        {pending ? "Sending…" : "Request a callback"}
      </Button>
      <p className="text-xs leading-relaxed text-muted-foreground">
        Spandaman will call or WhatsApp you with current Krsumi availability.
        No spam — just a broker follow-up.
      </p>
    </form>
  );
}
