import Ciudad from "../models/CatCiudades.js";

export const getCiudades = async(req, res) => {
    try {
        const ciudades = await Ciudad.findAll({
            attributes: ['id', 'nombre']
        });
        res.json(ciudades);
    } catch (error) {
        res.json({
            "error" : error
        });
    }
}

export const getCiudadesById = async(req, res) => {
    try {
        const ciudades = await Ciudad.findAll({
            where: {
                id: req.params.id // /:id
            }
        });
        res.json(ciudades);
    } catch (error) {
        res.json({
            "error" : error
        });
    }
}

export const getCiudadesByEstados = async(req, res) => {
    try {
        const ciudades = await Ciudad.findAll({
            attributes: ['id', 'nombre'],
            where: {
                fk_estado: req.params.estado
            }
        });
        res.json(ciudades);

    } catch (error) {
        res.json({
            "error" : error
        });
    }
}

export const createCiudades = async(req, res) => {
    try {
        const ciudades = await Ciudad.create(req.body);
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

export const createManyCiudades = async(req, res) => {
    try {
        const ciudades = req.body;

        ciudades.map( async(pais)=> {
            await Ciudad.create(pais);
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