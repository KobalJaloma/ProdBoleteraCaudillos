import Estado from "../models/CatEstados.js";

export const getEstados = async(req, res) => {
    try {
        const estados = await Estado.findAll({
            attributes: ['id', 'nombre']
        });
        res.json(estados);
    } catch (error) {
        res.json({
            "error" : error
        });
    }
}

export const getEstadosById = async(req, res) => {
    try {
        const estados = await Estado.findAll({
            where: {
                id: req.params.id // /:id
            }
        });
        res.json(estados);
    } catch (error) {
        res.json({
            "error" : error
        });
    }
}
export const getEstadosByPais = async(req, res) => {
    try {
        const estados = await Estado.findAll({
            attributes: ['id', 'nombre'],
            where: {
                fk_pais: req.params.pais
            }
        });
        res.json(estados);

    } catch (error) {
        res.json({
            "error" : error
        });
    }
}

export const createEstados = async(req, res) => {
    try {
        const estados = await Estado.create(req.body);
        res.json({
            "message" : 'Registro Creado Correctamente!',
            "estatus" : "OK"
        });
    } catch (error) {
        res.json({
            "message" : 'Hubo un problema en la creacion de usuario',
            "estatus" : "FAIL"
        });
    }
}

export const createManyEstados = async(req, res) => {
    try {
        const estados = req.body;

        estados.map( async(pais)=> {
            await Estado.create(pais);
        });

        res.json({
            "message" : 'Registro Creado Correctamente!',
            "estatus" : "OK"
        });
    } catch (error) {
        res.json({
            "message" : 'Hubo un problema en la creacion de usuario',
            "estatus" : "FAIL"
        });
    }
}
