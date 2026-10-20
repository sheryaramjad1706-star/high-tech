
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const {
      firstName,
      lastName,
      email,
      subject,
      comments,
    } = await request.json();

    // Validate required fields
    if (
      [firstName, lastName, email, subject, comments].some(
        (value) =>
          typeof value !== "string" || !value.trim()
      )
    ) {
      return Response.json(
        { error: "Please complete all fields." },
        { status: 400 }
      );
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      email.length > 254 ||
      subject.length > 200 ||
      comments.length > 5000 ||
      firstName.length > 100 ||
      lastName.length > 100
    ) {
      return Response.json(
        { error: "Please check your form details." },
        { status: 400 }
      );
    }

    // Gmail SMTP connection
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Send message
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Website Contact: ${subject.replace(/[\r\n]/g, " ")}`,
      text: `
New Contact Form Submission

First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}
Subject: ${subject}

Message:
${comments}
      `,
    });

    return Response.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      { error: "Unable to send message." },
      { status: 500 }
    );
  }
}
