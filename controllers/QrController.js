import { crearQr } from '../helpers/crearQr.js';


export const GenerarQR = async(req, res) => {
    const { qr } = req.body;
    const response = await crearQr(qr);
    //VALIDAR SI EL QR ESTA GENERADO
    if(response.estatus == 'FAIL') {
        res.json({
            estatus: 'FAIL'
        });
        return;
    }
    res.json({
        estatus: 'OK',
        qr: response
    });
}

