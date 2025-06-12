const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors({
  origin: "*", 
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is live ✅");
});


app.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.TO_EMAIL,
      subject: `Portfolio Message: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Email failed to send." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
