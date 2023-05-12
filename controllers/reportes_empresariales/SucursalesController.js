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

export const getSucursalesByIdEmpresa = async(req, res) => {
    try {
        const querys = req.query.atributos;
        const atributos = querys.split(',');
        const empresa = req.query.empresa;
        
        if(!atributos) {
            res.json({
                estatus: 'ERROR',
                message: 'No se encuentran los atributos en la url',
                req: '?atributos=string,string,string',
                send: `${querys}`,
                example: '?empresa=id,nombre',
            })
            return;
        }
        if(!empresa) {
            res.json({
                estatus: 'ERROR',
                message: 'No se encuentran el id de la empresa',
                req: '?empresa=[0-?]',
                example: '?empresa=10',
                send: `${empresa}`
            })
            return;
        }
        const sucursales = await Sucursal.findAll({
            attributes: atributos,
            where: {
                fk_empresa: empresa
            }
        });

        res.json(sucursales);
        
    } catch (error) {
        res.json({
            estatus: 'ERROR',
            message: 'Ocurrio un error al consultar tus datos'
        })
    }
}