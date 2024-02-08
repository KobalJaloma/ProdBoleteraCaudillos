import Clientes from '../models/ClientesModel.js';

export const getCliente = async(req, res) => {
    const querys = req.query.atributos;
    var atributos;

    try {
        if(!!querys) 
            atributos = querys.split(',');
        const clientes = await Clientes.findAll({

        });
    } catch (error) {
        
    }
}


export const createClientes = async(req, res) => {
    try {
        await Clientes.create(req.body);

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
