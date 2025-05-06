"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function sendEmail(formData: FormData) {
  const email = formData.get("email");
  const message = formData.get("message");

  await resend.emails.send({
    from: "Harry <contact@theharry.codes>",
    to: "haoyuanhe97@gmail.com",
    subject: "Contact Form Submission",
    text: `Email: ${email}\n\nMessage: ${message}`,
  });
}
