import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'cortesiascaudillos@gmail.com', // generated ethereal user
      pass: 'tymywipuueswboif', // generated ethereal password
    },
});

transporter.verify().then( () => {
    console.log('ready for send email');
})