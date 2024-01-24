// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const apiKEY = process.env.VITE_REACT_APP_SENDGRID_API_KEY;
console.log(apiKEY, "env");
sgMail.setApiKey(apiKEY);
app.post("/send-email", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const mailOptions = {
      from: email,
      to: "toderica.solutions@gmail.com", // Replace with your email
      subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await sgMail.send(mailOptions);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
