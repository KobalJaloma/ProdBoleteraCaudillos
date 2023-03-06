import QRCode from 'qrcode';
const test = 'mamase mamase mamacusa';

export const crearQr = async(informacion = test)=> {
    
    const codigo  = await QRCode.toString(informacion, {type: 'svg'}, function(err, code) {
        const codigo = code;
        if(err) {
            return {error: "Error", estatus : 'FAIL'}
        };
        const paylaod = {
            qr: code, 
            estatus: 'OK'
        }
        return paylaod;
    });
    
    return codigo;
}

