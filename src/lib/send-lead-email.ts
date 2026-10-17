import nodemailer from "nodemailer";
import { site } from "@/lib/site";

export const leadInbox = "spandamanrealtors@gmail.com";

export type LeadMail = {
  name: string;
  phone: string;
  email: string;
  project: string;
  message: string;
  receivedAt: string;
};

function enquiryText(lead: LeadMail) {
  return [
    "A new enquiry was submitted on the Spandaman website.",
    "",
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    `Email: ${lead.email || "Not provided"}`,
    `Project: ${lead.project}`,
    `Message: ${lead.message || "Not provided"}`,
    `Received: ${lead.receivedAt}`,
  ].join("\n");
}

const formUrl = `${site.url}/contact`;

export async function sendLeadEmail(lead: LeadMail) {
  const subject = `New enquiry: ${lead.name} — ${lead.project}`;
  const password = process.env.GMAIL_APP_PASSWORD;

  if (password) {
    const user = process.env.GMAIL_USER || leadInbox;
    const transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user, pass: password },
    });
    await transport.sendMail({
      from: `Spandaman website <${user}>`,
      to: leadInbox,
      replyTo: lead.email || undefined,
      subject,
      text: enquiryText(lead),
    });
    return { delivered: true as const };
  }

  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(leadInbox)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: site.url,
        Referer: formUrl,
      },
      body: JSON.stringify({
        name: lead.name,
        phone: lead.phone,
        email: lead.email || leadInbox,
        project: lead.project,
        message: enquiryText(lead),
        _url: formUrl,
        _replyto: lead.email || leadInbox,
        _subject: subject,
        _template: "table",
        _captcha: "false",
      }),
    },
  );

  const data = (await response.json().catch(() => null)) as {
    success?: boolean | string;
    message?: string;
  } | null;
  const delivered = data?.success === true || data?.success === "true";
  if (delivered) return { delivered: true as const };

  const message = data?.message || "Could not send the enquiry email.";
  if (/activation/i.test(message)) {
    return { delivered: false as const, pendingActivation: true as const };
  }

  throw new Error(message);
}
