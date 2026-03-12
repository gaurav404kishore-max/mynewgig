const nodemailer = require('nodemailer');

// Create a transporter object using SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com', // replace with your SMTP server
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'your_email@example.com', // replace with your email
    pass: 'your_email_password', // replace with your email password
  },
});

// Function to send email reminders
async function sendEmailReminder(to, matchDetails) {
  const message = {
    from: 'your_email@example.com',
    to: to,
    subject: 'Cricket Match Reminder',
    text: `Don't forget about the upcoming match: ${matchDetails}`,
  };

  try {
    await transporter.sendMail(message);
    console.log('Email sent successfully.');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

module.exports = { sendEmailReminder };