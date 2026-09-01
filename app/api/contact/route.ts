import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  interest?: string;
  message?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Ugyldig forespørgsel." }, { status: 400 });
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

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Angiv en gyldig e-mailadresse." }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FORM_FROM;
  const recipient = process.env.CONTACT_FORM_RECIPIENT ?? "info@lykkeliga.dk";

  if (!resendApiKey || !fromEmail) {
    return NextResponse.json(
      {
        error:
          "Kontaktformularen er endnu ikke konfigureret. Skriv direkte til info@lykkeliga.dk, eller konfigurer RESEND_API_KEY og CONTACT_FORM_FROM.",
      },
      { status: 503 },
    );
  }

  const subject = `Ny henvendelse fra ${company} (${interest})`;
  const text = [
    `Navn: ${name}`,
    `Virksomhed: ${company}`,
    `E-mail: ${email}`,
    `Telefon: ${phone || "Ikke angivet"}`,
    `Interesse: ${interest}`,
    "",
    "Besked:",
    message,
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [recipient],
      reply_to: email,
      subject,
      text,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Kunne ikke sende henvendelsen lige nu. Prøv igen eller skriv til info@lykkeliga.dk." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    message: "Tak for din henvendelse. Vi vender tilbage hurtigst muligt.",
  });
}
