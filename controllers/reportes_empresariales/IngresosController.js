import Ingreso from "../../models/reportes_empresariales/IngresosModel.js";


export const getIngresos = async(req, res) => {
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
        const ingresos = Ingreso.findAll({
            attributes: atributos
        });

        res.json(ingresos);
        
    } catch (error) {
        res.json({
            estatus: 'ERROR',
            message: 'Ocurrio un error al consultar tus datos'
        })
    }
}