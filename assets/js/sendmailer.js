const nodemailer = require("nodemaile");

const createTrans = () => {
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "f8887cf9f5e327",
      pass: "e6bdbd6c7f8c27",
    },
  });

  return transport;
};

const sendMail = async () => {
  const transporter = createTrans();
  const info = await transporter.sendMail({
    form: '"Bienvenido te acabas de registrar en nuestro site!!!" <foo@example.com>',
    to: "info@mail.com",
    subject: "Bienvenido te acabas de registrar en nuestro site!!!",
    html: "Texto en formato html",
  });
  console.log("Message sent: %S", info.messageId);
  return;
};

exports.sendMailR = () => sendMail();
