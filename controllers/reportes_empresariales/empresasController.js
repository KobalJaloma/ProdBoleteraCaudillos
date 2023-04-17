import Empresa from "../../models/reportes_empresariales/EmpresasModel.js";


export const getEmpresas = async(req, res) => {
    try {
        const atributos = req.query.atributos;
        if(!atributos) {
            res.json({
                estatus: 'ERROR',
                message: 'No se encuentran los atributos en la url'
            })
            return;
        }
        const empresas = Empresa.findAll({
            attributes: atributos
        });
        
    } catch (error) {
        res.json({
            estatus: 'ERROR',
            message: 'Ocurrio un error al consultar tus datos'
        })
    }
}