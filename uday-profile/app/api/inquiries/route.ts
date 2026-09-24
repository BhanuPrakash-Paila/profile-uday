import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { connectToDatabase } from "@/lib/mongodb";
import { Inquiry } from "@/lib/models";

const inquirySchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(10).max(4000),
  website: z.string().max(0).optional(),
});

export async function POST(request: Request) {
  try {
    const payload = inquirySchema.parse(await request.json());
    await connectToDatabase();
    const inquiry = await Inquiry.create(payload);

    if (process.env.SMTP_HOST && process.env.CONTACT_EMAIL) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT ?? 587),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
        to: process.env.CONTACT_EMAIL,
        replyTo: payload.email,
        subject: `New portfolio inquiry from ${payload.name}`,
        text: `${payload.name} (${payload.email})\n\n${payload.message}`,
      });
    }

    return NextResponse.json({ id: inquiry._id.toString() }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Please check the form fields." },
        { status: 400 },
      );
    }

    console.error("Failed to create inquiry", error);
    return NextResponse.json({ error: "Unable to send your message." }, { status: 500 });
  }
}
