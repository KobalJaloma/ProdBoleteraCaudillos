import Egreso from "../../models/reportes_empresariales/EgresosModel.js";


export const getEgresos = async(req, res) => {
    try {
        const querys = req.query.atributos;
        const atributos = querys.split(',');
        if(!atributos) {
            res.json({
                estatus: 'ERROR',
                message: 'No se encuentran los atributos en la url'
            })
            return;
        }
        const egresos = Egreso.findAll({
            attributes: atributos
        });

        res.json(egresos);
        
    } catch (error) {
        res.json({
            estatus: 'ERROR',
            message: 'Ocurrio un error al consultar tus datos'
        })
    }
}