const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '2852cdebcc1c42196ff40fb226e08395-443ec20e-9cf2a8bd',        
        domain: 'sandboxb47dff82e9db4610ba51c064d849ff11.mailgun.org'
    }
};

    const transporter = nodemailer.createTransport(mailGun(auth));

    const sendMail = (email, text, cb) => {
        const mailOptions = {
            from: email, // TODO replace this with your own email
            to: 'portalibras@gmail.com', // TODO: the receiver email has to be authorized for the free tier
            subject: 'Portal Libras - FeedBack',
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