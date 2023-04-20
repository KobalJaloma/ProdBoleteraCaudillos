import Cuenta_bancos from "../../models/reportes_empresariales/Cuenta_bancosModel.js";


export const getCuentaBancos = async(req, res) => {
    try {
        const atributosQuery = req.query.atributos;
        if(!atributosQuery) {
            res.json({
                estatus: 'ERROR',
                message: 'No fueron encontrados los atributos enla peticion',
                req: '?atributos=string,string,string',
                send: `?atributos=${atributos}`,
                example: '?atributos=id,nombre'
            });
            return;
        }
        const atributos = atributosQuery.split(',');
        const cuentas = await Cuenta_bancos.findAll({
            attributes: atributos
        });
        
        res.json(cuentas);

    } catch (error) {
        res.json({
            estatus: 'ERROR',
            message: 'Hubo un error al hacer la peticion',
        });
    }
    

}