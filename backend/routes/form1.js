
const express = require("express");
const { Resend } = require("resend");
const validator = require("validator");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    let { name, email, subject, message } = req.body || {};

    // Validate field types
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      (subject != null && typeof subject !== "string")
    ) {
      return res.status(400).json({
        success: false,
        error: "Invalid form data.",
      });
    }

    name = name.trim();
    email = email.trim().toLowerCase();
    subject = subject?.trim() || "No Subject";
    message = message.trim();

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Name, email and message are required.",
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        error: "Invalid email address.",
      });
    }

    // Kept from your original code
    if (!email.endsWith("@gmail.com")) {
      return res.status(400).json({
        success: false,
        error: "Only Gmail accounts are allowed.",
      });
    }

    if (
      name.length > 150 ||
      subject.length > 200 ||
      message.length > 10000
    ) {
      return res.status(400).json({
        success: false,
        error: "Form fields exceed the allowed length.",
      });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY");

      return res.status(500).json({
        success: false,
        error: "Email service not configured.",
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const safeName = validator.escape(name);
    const safeEmail = validator.escape(email);
    const safeSubject = validator.escape(subject);
    const safeMessage = validator
      .escape(message)
      .replace(/\r?\n/g, "<br />");

    const htmlContent = `
      <div style="
        font-family:Arial,sans-serif;
        max-width:650px;
        margin:auto;
        padding:24px;
        line-height:1.7;
        color:#222;
      ">
        <h2 style="color:#092120;">
          New Website Contact Message
        </h2>

        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>

        <h3>Message:</h3>

        <div style="
          background:#f6f7fb;
          padding:18px;
          border-radius:8px;
          overflow-wrap:anywhere;
        ">
          ${safeMessage}
        </div>

        <p style="font-size:12px;color:#777;">
          Submitted from Hi-Tech Engineering Solution contact form.
        </p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
     from: "HighTech Engineering <contact@hightechengineeringsolution.com>",
  to: ["mannas7045@gmail.com"],
      replyTo: email,
      subject: `New Website Message: ${subject}`,
      html: htmlContent,
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(502).json({
        success: false,
        error: "Email could not be sent. Please try again.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully!",
      emailId: data?.id,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return res.status(500).json({
      success: false,
      error: "Internal server error.",
    });
  }
});

module.exports = router;
