import { mkdir, appendFile, writeFile } from "fs/promises";
import path from "path";
import { sendLeadEmail, type LeadMail } from "@/lib/send-lead-email";

type LeadPayload = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  project?: string;
};

const leadsDir = path.join(process.cwd(), "data", "leads");

async function saveLead(lead: LeadMail & { id: string }) {
  try {
    await mkdir(leadsDir, { recursive: true });
    const file = path.join(leadsDir, `${lead.id}.json`);
    await writeFile(file, JSON.stringify(lead, null, 2), "utf8");
    await appendFile(
      path.join(leadsDir, "leads.ndjson"),
      `${JSON.stringify(lead)}\n`,
      "utf8",
    );
  } catch (error) {
    console.error("Lead file save failed", error);
  }
}

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: "The enquiry could not be read. Please try again." },
      { status: 400 },
    );
  }

  const name = body.name?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const project = body.project?.trim() || "Krisumi, Sector 36A";

  if (name.length < 2) {
    return Response.json({ error: "Please enter your name." }, { status: 400 });
  }

  const digits = phone.replace(/\D/g, "");
  if (digits.length < 10) {
    return Response.json(
      { error: "Please enter a valid phone number." },
      { status: 400 },
    );
  }

  const lead = {
    id: crypto.randomUUID(),
    name,
    phone,
    email,
    message,
    project,
    receivedAt: new Date().toISOString(),
  };

  try {
    const mail = await sendLeadEmail(lead);
    await saveLead(lead);
    if ("pendingActivation" in mail && mail.pendingActivation) {
      console.warn(
        "Enquiry saved. Open the FormSubmit activation email in spandamanrealtors@gmail.com once so later enquiries are delivered.",
      );
    }
    return Response.json({ ok: true, id: lead.id });
  } catch (error) {
    console.error("Lead email failed", error);
    await saveLead(lead);
    return Response.json(
      {
        error:
          "We could not send your enquiry just now. Please call or WhatsApp us and we will take it from there.",
      },
      { status: 502 },
    );
  }
}
