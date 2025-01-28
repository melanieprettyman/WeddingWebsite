// Import the Nodemailer library
const nodemailer = require('nodemailer');

// Create a transporter object using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use Gmail service
  auth: {
    user: 'melanie.prettyman98@gmail.com', // Your Gmail address
    pass: 'qedv eavw iisl ldym', // Your Gmail app password (not your regular password)
  },
});

// Configure the mail options object
const mailOptions = {
  from: 'melanie.prettyman98@gmail.com', // Sender email address
  to: 'melanieprettywoman@gmail.com', // Recipient email address
  subject: 'Sending Email using Node.js and Gmail',
  text: 'That was easy!', // Email body in plain text
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
