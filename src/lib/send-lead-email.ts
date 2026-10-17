import https from "node:https";
import nodemailer from "nodemailer";

export const leadInbox = "spandamanrealtors@gmail.com";

// FormSubmit ties delivery to the site address it was activated with.
// https://spandaman.in is that activated address. The public site is spandaman.com.
const formOrigin = "https://spandaman.in";
const formUrl = "https://spandaman.in/contact";
const liveSite = "https://spandaman.com/contact";

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
    `Page: ${liveSite}`,
    `Received: ${lead.receivedAt}`,
  ].join("\n");
}

function postFormSubmit(body: string) {
  return new Promise<string>((resolve, reject) => {
    const request = https.request(
      {
        hostname: "formsubmit.co",
        path: `/ajax/${encodeURIComponent(leadInbox)}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Content-Length": Buffer.byteLength(body),
          Origin: formOrigin,
          Referer: formUrl,
        },
      },
      (response) => {
        const chunks: Buffer[] = [];
        response.on("data", (chunk) => chunks.push(chunk));
        response.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
      },
    );
    request.setTimeout(12000, () => {
      request.destroy(new Error("The enquiry email service timed out."));
    });
    request.on("error", reject);
    request.write(body);
    request.end();
  });
}

async function sendViaFormSubmit(lead: LeadMail) {
  const subject = `New enquiry: ${lead.name} — ${lead.project}`;
  const text = await postFormSubmit(
    JSON.stringify({
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
  );

  const data = JSON.parse(text) as {
    success?: boolean | string;
    message?: string;
  };
  const delivered = data.success === true || data.success === "true";
  if (delivered) return { delivered: true as const };

  const message = data.message || "Could not send the enquiry email.";
  if (/activation/i.test(message)) {
    return { delivered: false as const, pendingActivation: true as const };
  }

  throw new Error(message);
}

async function sendViaGmail(lead: LeadMail) {
  const password = process.env.GMAIL_APP_PASSWORD;
  if (!password) throw new Error("Gmail is not configured.");
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
    subject: `New enquiry: ${lead.name} — ${lead.project}`,
    text: enquiryText(lead),
  });
}

export async function sendLeadEmail(lead: LeadMail) {
  try {
    return await sendViaFormSubmit(lead);
  } catch (error) {
    if (!process.env.GMAIL_APP_PASSWORD) throw error;
    await sendViaGmail(lead);
    return { delivered: true as const };
  }
}
