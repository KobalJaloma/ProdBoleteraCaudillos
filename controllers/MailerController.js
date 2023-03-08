import { transporter } from '../config/mailer.js';

export const sendEmail = async(req, res) => {

    const { email, receptor, remitente, html, informacion, asunto } = req.body;
    
    try {
        const info = await transporter.sendMail({
            from: `${remitente}"" <cortesiascaudillos@gmail.com>`, // sender address
            to: email, // list of receivers
            subject: `Hola ${receptor} ✔`, // Subject line
            text: informacion, // plain text body
            html: html, // html body
        });

        res.json({
            estatus : "OK",
            message: "El correo se envio correctamente"
        });
    } catch (error) {
        res.json({
            estatus : "OK",
            message: `El correo no se pudo enviar: ${error}`
        });
        
    }
}