const nodemailer = require('nodemailer');
const SMTP_CONFIG = require("./config/smtp");

const transporter = nodemailer.createTransport({
    host: SMTP_CONFIG.host,
    port: SMTP_CONFIG.port,
    secure: false,
    auth: {
        user: SMTP_CONFIG.user,
        pass: SMTP_CONFIG.pass,
    },
    tls: {
        rejectUnauthorized: false,
    },
});

async function run() {
    const mailSend = await transporter.sendMail({
        text: 'Texto do E-mail',
        subject: 'Assunto do E-mail',
        from: ' Guilherme Casagrande <magtech330@gmail.com>',
        to: ['magtech330@gmail.com'],
        html: `
        <html>
        <body>
        <strong>Aviso</strong></br>
        </body>
        </html>
        `
    });

    console.log(mailSend);
}

run();