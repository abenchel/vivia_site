import { NextResponse } from "next/server";
import { insertLead } from "@/lib/db";
import { sendLeadEmail } from "@/lib/mailer";

const allowedOrigin = process.env.CORS_ORIGIN || "*";

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": allowedOrigin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function POST(request: Request) {
  try {

    const data = await request.json();
    console.log("[lead] incoming", data);
    const payload = {
      name: data.name,
      company: data.company,
      email: data.email,
      phone: data.phone,
      message: data.message,
      source: data.source || "diagnostic",
      createdAt: data.submittedAt || new Date().toISOString(),
    };

    insertLead(payload);
    await sendLeadEmail(payload);

    console.log("[lead] stored and emailed", { email: payload.email, source: payload.source });
    return NextResponse.json(
      { ok: true },
      {
        headers: {
          "Access-Control-Allow-Origin": allowedOrigin,
        },
      }
    );
  } catch (error) {
    console.error("[lead] error", error);
    return NextResponse.json(
      { ok: false },
      {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": allowedOrigin,
        },
      }
    );
  }
}
