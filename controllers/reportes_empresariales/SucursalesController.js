import Sucursal from "../../models/reportes_empresariales/SucursalesModels.js";


export const getSucursales = async(req, res) => {
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
        const sucursales = await Sucursal.findAll({
            attributes: atributos
        });

        res.json(sucursales);
        
    } catch (error) {
        res.json({
            estatus: 'ERROR',
            message: 'Ocurrio un error al consultar tus datos'
        })
    }
}