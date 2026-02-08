const nodemailer = require("nodemailer");

// Create a transporter using Ethereal test credentials.
// For production, replace with your actual SMTP server details.
const transporter = nodemailer.createTransport({
  port: 587,
  service: "gmail", 
  secure: false, // Use true for port 465, false for port 587
  auth: {
    user: "mtolba2004@gmail.com",
    pass: "ktzp qvnb ftid dlsi",
  },
});

// (async () => {
//   const info = await transporter.sendMail({
//     from: '"Maddison Foo Koch" <mtolba2004@gmail.com>',
//     to: "6281c003e8@webxio.pro",
//     subject: "Hello ✔",
//     text: "Hello world?", // Plain-text version of the message
//     html: "<b>Hello world?</b>", // HTML version of the message
//   });

//   console.log("Message sent:", info.messageId);
// })();