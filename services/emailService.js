const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, htmlContent) => {
	let transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
	});

	let mailOptions = {
		from: process.env.EMAIL_USER,
		to,
		subject,
		html: htmlContent,
	};

	try {
		await transporter.sendMail(mailOptions);
		console.log("Email sent");
	} catch (error) {
		console.error("Error sending email:", error);
	}
};

module.exports = sendEmail;