import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getContactInterestLabel, isContactInterest } from "@/src/lib/contact-interest";
import {
  isValidContactEmail,
  isWithinContactFieldLimit,
} from "@/src/lib/contact-validation";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  interest?: string;
  message?: string;
  website?: string;
};

const SUBMISSION_TIMEZONE = "Europe/Copenhagen";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatSubmissionTimestamp(date: Date): string {
  return new Intl.DateTimeFormat("da-DK", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: SUBMISSION_TIMEZONE,
  }).format(date);
}

function getContactEnvironment() {
  const resendApiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;
  const contactFromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey || !contactEmail || !contactFromEmail) {
    return null;
  }

  return {
    resendApiKey,
    contactEmail,
    contactFromEmail,
  };
}

function buildPlainTextEmail({
  name,
  company,
  email,
  phone,
  interestLabel,
  message,
  submittedAt,
}: {
  name: string;
  company: string;
  email: string;
  phone: string;
  interestLabel: string;
  message: string;
  submittedAt: string;
}) {
  return [
    "Ny henvendelse via kontaktformularen",
    "",
    `Indsendt: ${submittedAt}`,
    "",
    `Navn: ${name}`,
    `Virksomhed: ${company}`,
    `E-mail: ${email}`,
    `Telefonnummer: ${phone || "Ikke angivet"}`,
    `Interesse: ${interestLabel}`,
    "",
    "Besked:",
    message,
  ].join("\n");
}

function buildHtmlEmail({
  name,
  company,
  email,
  phone,
  interestLabel,
  message,
  submittedAt,
}: {
  name: string;
  company: string;
  email: string;
  phone: string;
  interestLabel: string;
  message: string;
  submittedAt: string;
}) {
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  return `<!DOCTYPE html>
<html lang="da">
  <body style="margin:0;padding:24px;background:#f4f7fa;color:#102033;font-family:Arial,sans-serif;line-height:1.5;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #d9e2ec;border-radius:8px;">
      <tr>
        <td style="padding:24px;">
          <p style="margin:0 0 8px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#008f84;">Kontaktformular</p>
          <h1 style="margin:0 0 16px;font-size:24px;line-height:1.3;color:#102033;">Ny henvendelse</h1>
          <p style="margin:0 0 24px;color:#52606d;">Indsendt: ${escapeHtml(submittedAt)}</p>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
            <tr><td style="padding:8px 0;border-bottom:1px solid #e4ebf3;width:160px;font-weight:700;vertical-align:top;">Navn</td><td style="padding:8px 0;border-bottom:1px solid #e4ebf3;">${escapeHtml(name)}</td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #e4ebf3;font-weight:700;vertical-align:top;">Virksomhed</td><td style="padding:8px 0;border-bottom:1px solid #e4ebf3;">${escapeHtml(company)}</td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #e4ebf3;font-weight:700;vertical-align:top;">E-mail</td><td style="padding:8px 0;border-bottom:1px solid #e4ebf3;">${escapeHtml(email)}</td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #e4ebf3;font-weight:700;vertical-align:top;">Telefonnummer</td><td style="padding:8px 0;border-bottom:1px solid #e4ebf3;">${escapeHtml(phone || "Ikke angivet")}</td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #e4ebf3;font-weight:700;vertical-align:top;">Interesse</td><td style="padding:8px 0;border-bottom:1px solid #e4ebf3;">${escapeHtml(interestLabel)}</td></tr>
          </table>
          <h2 style="margin:24px 0 8px;font-size:16px;color:#102033;">Besked</h2>
          <p style="margin:0;white-space:normal;">${safeMessage}</p>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Ugyldig forespørgsel." }, { status: 400 });
  }

  const website = payload.website?.trim() ?? "";
  if (website) {
    return NextResponse.json({
      message: "Tak for din henvendelse. Vi vender tilbage hurtigst muligt.",
    });
  }

  const name = payload.name?.trim() ?? "";
  const company = payload.company?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const phone = payload.phone?.trim() ?? "";
  const interest = payload.interest?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (!name || !company || !email || !interest || !message) {
    return NextResponse.json({ error: "Udfyld venligst alle obligatoriske felter." }, { status: 400 });
  }

  if (
    !isWithinContactFieldLimit("name", name) ||
    !isWithinContactFieldLimit("company", company) ||
    !isWithinContactFieldLimit("email", email) ||
    !isWithinContactFieldLimit("phone", phone) ||
    !isWithinContactFieldLimit("message", message)
  ) {
    return NextResponse.json({ error: "En eller flere felter er for lange." }, { status: 400 });
  }

  if (!isValidContactEmail(email)) {
    return NextResponse.json({ error: "Angiv en gyldig e-mailadresse." }, { status: 400 });
  }

  if (!isContactInterest(interest)) {
    return NextResponse.json({ error: "Vælg en gyldig interesse." }, { status: 400 });
  }

  const interestLabel = getContactInterestLabel(interest)!;
  const environment = getContactEnvironment();

  if (!environment) {
    console.error("Contact form is missing required environment configuration.");
    return NextResponse.json(
      {
        error:
          "Kontaktformularen er midlertidigt utilgængelig. Prøv igen senere, eller kontakt os direkte på e-mail.",
      },
      { status: 503 },
    );
  }

  const submittedAt = formatSubmissionTimestamp(new Date());
  const subject = `Ny henvendelse om ${interestLabel} fra ${company}`;
  const text = buildPlainTextEmail({
    name,
    company,
    email,
    phone,
    interestLabel,
    message,
    submittedAt,
  });
  const html = buildHtmlEmail({
    name,
    company,
    email,
    phone,
    interestLabel,
    message,
    submittedAt,
  });

  const resend = new Resend(environment.resendApiKey);

  const { error } = await resend.emails.send({
    from: environment.contactFromEmail,
    to: environment.contactEmail,
    replyTo: email,
    subject,
    text,
    html,
  });

  if (error) {
    console.error("Resend rejected contact form submission.");
    return NextResponse.json(
      {
        error: "Din besked kunne ikke sendes. Prøv igen, eller kontakt os direkte på e-mail.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    message: "Tak for din henvendelse. Vi vender tilbage hurtigst muligt.",
  });
}
