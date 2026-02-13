import nodemailer from "nodemailer";

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, EMAIL_TO } = process.env;

export function canSendEmail() {
  return Boolean(SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS && EMAIL_TO);
}

export async function sendLeadEmail(payload: {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  message?: string;
  source?: string;
  createdAt?: string;
}) {
  if (!canSendEmail()) return;

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `Diagnostic <${SMTP_USER}>`,
    to: EMAIL_TO,
    subject: "Nouvelle demande de diagnostic",
    html: `
      <p><strong>Nom:</strong> ${payload.name || ""}</p>
      <p><strong>Entreprise:</strong> ${payload.company || ""}</p>
      <p><strong>Email:</strong> ${payload.email || ""}</p>
      <p><strong>Téléphone:</strong> ${payload.phone || ""}</p>
      <p><strong>Objectif:</strong> ${payload.message || ""}</p>
      <p><strong>Source:</strong> ${payload.source || ""}</p>
      <p><strong>Date:</strong> ${payload.createdAt || new Date().toISOString()}</p>
    `,
  });
}
