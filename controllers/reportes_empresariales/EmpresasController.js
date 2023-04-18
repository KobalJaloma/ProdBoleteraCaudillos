import Empresa from "../../models/reportes_empresariales/EmpresasModel.js";


export const getEmpresas = async(req, res) => {
    try {
        const querys = req.query.atributos;
        console.log(querys);
        const atributos = querys.split(',');
        if(!atributos) {
            res.json({
                estatus: 'ERROR',
                message: 'No se encuentran los atributos en la url'
            })
            return;
        }
        const empresas = await Empresa.findAll({
            attributes: atributos
        });

        res.json(empresas);
        
    } catch (error) {
        res.json({
            estatus: 'ERROR',
            message: 'Ocurrio un error al consultar tus datos'
        })
    }
}
