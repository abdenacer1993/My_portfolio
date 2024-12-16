const nodemailer = require("nodemailer");

const sendEmail = async ({ name, email, phone, subject, message }) => {
  const my_email = process.env.MY_EMAIL;
  const my_email_password = process.env.MY_EMAIL_PASSWORD;

  if (!my_email || !my_email_password) {
    throw new Error("Missing email credentials in environment variables");
  }

  // Configure transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // Use your preferred email service
    auth: {
      user: my_email,
      pass: my_email_password, // Use app password or actual password securely
    },
  });

  // Email options
  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: my_email, // Your email address to receive the messages
    subject: subject || "No Subject",
    html: `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              color: #333;
              line-height: 1.6;
              background-color: #f4f4f4;
              padding: 20px;
            }
            .container {
              background-color: #fff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            }
            h2 {
              color: #007bff;
            }
            p {
              margin: 10px 0;
              font-size: 16px;
            }
            .info {
              font-weight: bold;
            }
            .footer {
              margin-top: 20px;
              font-size: 14px;
              color: #777;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>New Message from ${name}</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "N/A"}</p>
            <p><strong>Message:</strong><br>${message}</p>
          </div>
          <div class="footer">
            <p>This message was sent via your contact form.</p>
          </div>
        </body>
      </html>
    `,
  };

  // Send email
  return transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
