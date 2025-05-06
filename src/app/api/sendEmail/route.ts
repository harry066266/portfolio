import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { email, message } = body;

    await resend.emails.send({
      from: "Harry <contact@theharry.codes>",
      to: "haoyuanhe97@gmail.com",
      subject: "Contact Form Submission",
      text: `Email: ${email}\n\nMessage: ${message}`,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
};
