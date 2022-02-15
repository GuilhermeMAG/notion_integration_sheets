const nodemailer = require('nodemailer');
const SMTP_CONFIG = require("./config/smtp");
import fetch from "node-fetch";

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

//Produtos
const getProdutosFromBack = async() => {
    loading = true
    const res = await fetch('http://localhost:5000/produtos')
    const data = await res.json()
    loading = false
    return data
};

const sendEmailAlert = async() => {
    const produtos = await getProdutosFromBack()
    if (produtos.estoqueAtual <= produtos.estoqueMin) {
        async function run() {
            const mailSend = await transporter.sendMail({
                text: "Status: Crítico ",
                subject: 'Estoque em nível crítico',
                from: ' Guilherme Casagrande <magtech330@gmail.com>',
                to: ['magtech330@gmail.com'],
                html: ` <
                html >
                <
                body >
                <
                strong > Aviso < /strong></br >
                <
                /body> < /
                html >
                `
            });
            console.log(mailSend);
        };
        run();
    }
    if (produtos.estoqueAtual - produtos.estoqueMin >= 25) {
        async function run() {
            const mailSend = await transporter.sendMail({
                text: "Status: Estado de alerta!",
                subject: 'Estoque em nível de alerta',
                from: ' Guilherme Casagrande <magtech330@gmail.com>',
                to: ['magtech330@gmail.com'],
                html: ` <
            html >
            <
            body >
            <
            strong > Aviso < /strong></br >
            <
            /body> < /
            html >
            `
            });
            console.log(mailSend);
        };
        run();
    } else {
        async function run() {
            const mailSend = await transporter.sendMail({
                text: 'Estoque em nivel normal',
                subject: 'Estoque normal',
                from: ' Guilherme Casagrande <magtech330@gmail.com>',
                to: ['magtech330@gmail.com'],
                html: ` <
                    html >
                    <
                    body >
                    <
                    strong > Aviso < /strong></br >
                    <
                    /body> < /
                    html >
                    `
            });
            console.log(mailSend);
        };
        run();
    }
    console.log("Email send")
};
sendEmailAlert()
    // produtos.forEach(sendEmailAlert())

// async function run() {
//     const mailSend = await transporter.sendMail(sendEmailAlert.data);

//     console.log(mailSend);
// };

// run();