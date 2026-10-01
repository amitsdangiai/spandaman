import { writeFile, mkdir, appendFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  project?: string;
};

export async function POST(request: Request) {
  let body: LeadPayload;

  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = String(body.name || "").trim();
  const phone = String(body.phone || "").trim();
  const email = String(body.email || "").trim();
  const message = String(body.message || "").trim();
  const project = String(body.project || "Krisumi, Sector 36A").trim();

  if (!name || name.length < 2) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }

  if (!phone || phone.replace(/\D/g, "").length < 10) {
    return NextResponse.json(
      { error: "Please enter a valid 10-digit phone number." },
      { status: 400 },
    );
  }

  const lead = {
    id: crypto.randomUUID(),
    name,
    phone,
    email: email || null,
    message: message || null,
    project,
    createdAt: new Date().toISOString(),
  };

  const dir = path.join(process.cwd(), "data", "leads");
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, `${lead.id}.json`), JSON.stringify(lead, null, 2));
  await appendFile(
    path.join(dir, "leads.ndjson"),
    `${JSON.stringify(lead)}\n`,
  );

  console.log("[lead]", lead);

  return NextResponse.json({ ok: true, id: lead.id });
}
