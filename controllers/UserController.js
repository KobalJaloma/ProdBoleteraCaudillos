import Usuario from "../models/UserModel.js"; 
import {encriptarPassword, evaluarEncriptacion} from "../helpers/passwordEncript.js"


export const getUsuarios = async(req, res)=> {
    try {
        const usuarios = await Usuario.findAll({
            attributes: ['id', "nombre", "nombreUsuario", "fk_permiso"],
            where: {
                estatus: 1
            }
        });
        res.json(usuarios);

    } catch (error) {
        console.log(error.message);
    }
};

export const getUsuariosById = async(req, res) => {
    try {
        const usuariosId = await Usuario.findAll({
            where: {
                id: req.params.id // /:id
            }
        });
        res.json(usuariosId);
    } catch (error) {
        console.log(error.message);
    }
};

export const updatePermisosUsuario = async(req, res) => {
    try {
        const { permiso, idUsuario } = req.body;

        const usuario = await Usuario.update(
            {
                fk_permiso: req.body.permiso
            },
            {
                where: {
                    id: idUsuario
                }
            }
        );

        res.json({
            "message" : 'Se Modifico Correctamente',
            "estatus" : "OK"
        });
        
    } catch (error) {
        res.json({
            "message" : 'Hubo un problema en la actualizacion del usuario',
            "estatus" : "FAIL"
        });
    }
}

export const createUsuario = async(req, res) => {
    try {
        const prev = req.body;
        prev.password = encriptarPassword(prev.password);
        const usuario = await Usuario.create(prev);
        res.json({
            "message" : 'Registro Creado Correctamente!',
            "estatus" : "OK"
        });
    } catch (error) {
        res.json({
            "message" : 'Hubo un problema en la creacion de usuario',
            "estatus" : "FAIL"
        });
        console.log(error);
    }
}

export const autenticarUsuario = async(req, res) => {
    try {
        const failLoggedTypes = {
            usuario: '[fail] usuario',
            password: '[fail] password'
        }
        const usuario = req.body;
        const usuarios = await Usuario.findAll();

        const user = usuarios.find(({nombreUsuario}) => nombreUsuario === usuario.nombreUsuario);
         
        //si el usuario no se encuentra
        if(user == null) {
            res.json({
                "estate" : failLoggedTypes.usuario,
            });
        }

        const validate = evaluarEncriptacion(usuario.password, user.password);

        if(validate) {
            res.json({
                "estate" : 'OK',
            });
        }
        else {
            res.json({
                "estate" : failLoggedTypes.password,
            });
        }

    } catch (error) {
        
    }
}