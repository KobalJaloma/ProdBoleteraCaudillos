import { Empresa } from "../models/EmpresasModel.js";

export const getEmpresas = async(req, res) => {
    const querys = req.query.atributos; // array in string
    var atributos = [];
    
    try {
        if(querys != '' || querys != null) {
            atributos = querys.split(',');
        }
        const empresas = await Empresa.findAll({
            attributes: atributos,
        });
        res.json(empresas);
    } catch (error) {
        res.json(error);
    }
}

export const createEmpresa = async(req, res) => {
    try {
        const empresa = await Empresa.create(req.body);
        res.json({
            estatus: 'OK',
            message: 'Su creacion fue exitosa',
            data: req.body
        });
    } catch (error) {
        res.json({
            estatus: 'FAIL',
            message: 'Hubo un error en la creacion de la empresa'
        });
    }
}