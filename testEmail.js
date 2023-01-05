require('dotenv').config();
const nodemailer = require('nodemailer');

(async function () {
	let transporter = nodemailer.createTransport({
		host: 'localhost',
		port: process.env.PORT || 25,
		secure: false,
	});

	let info = await transporter.sendMail({
		from: 'test@test.com', // sender address
		to: 'test@test.com', // list of receivers
		subject: 'Hello ✔', // Subject line
		html: '<b>Hello world 👋</b>', // html body
	});
	console.log('Message sent: %s', info.messageId);
})();
