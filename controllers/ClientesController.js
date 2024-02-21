import Clientes from '../models/ClientesModel.js';

export const getCliente = async(req, res) => {
    const querys = req.query.atributos;
    var atributos;

    try {
        if(!!querys) 
            atributos = querys.split(',');
        const clientes = await Clientes.findAll({
            attributes: !!atributos ? atributos : []
        });

        res.json(clientes);
    } catch (error) {
        
    }
}

export const getClienteId = async(req, res) => {
    const querys = req.query.atributos;
    const id = req.params.id;
    console.log(id);
    var atributos;

    try {
        if(!!querys) 
            atributos = querys.split(',');

        const cliente = await Clientes.findAll({
            attributes: !!atributos ? atributos : [],
            where: {
                id: id 
            }
        });
        console.log(cliente);
        res.json(cliente);
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
