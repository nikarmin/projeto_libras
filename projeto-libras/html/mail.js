const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config();

    const auth = {
        auth: {
            api_key: '38a94f61dc9ac6c4c0ede2910f0ad0e7-443ec20e-540335ef',        //key-2392604015e285e62f7e53a03bd21b42
            domain: 'sandboxecdc7d70c61748d5a99c2bce2f8b83b2.mailgun.org'   //sandboxb47dff82e9db4610ba51c064d849ff11.mailgun.org
        }
    };

    const transporter = nodemailer.createTransport(mailGun(auth));

    const sendMail = (email, text, cb) => {
        const mailOptions = {
            from: 'portalibras@gmail.com', // TODO replace this with your own email
            to: email, // TODO: the receiver email has to be authorized for the free tier
            subject: 'Recuperação de Senha',
            text
        };

        transporter.sendMail(mailOptions, function (err, data) {
            if (err) {
                cb(err, null);
            }else{
                cb(err, data);
            }
        });

    }

module.exports = sendMail;