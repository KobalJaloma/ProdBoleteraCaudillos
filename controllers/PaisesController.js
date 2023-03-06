import Pais from "../models/CatPaises.js";

export const getPaises = async(req, res) => {
    try {
        const paises = await Pais.findAll({
            attributes: ['id', 'nombre']
        });
        res.json(paises);
    } catch (error) {
        res.json({
            "error" : error
        });
    }
}

export const getPaisesById = async(req, res) => {
    try {
        const paises = await Pais.findAll({
            where: {
                id: req.params.id // /:id
            }
        });
        res.json(paises);
    } catch (error) {
        res.json({
            "error" : error
        });
    }
}

export const createPaises = async(req, res) => {
    try {
        const paises = await Pais.create(req.body);
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

export const createManyPaises = async(req, res) => {
    try {
        const paises = req.body;

        paises.map( async(pais)=> {
            await Pais.create(pais);
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