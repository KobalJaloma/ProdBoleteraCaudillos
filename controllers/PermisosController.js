import Permiso from '../models/PermisosModel.js';

export const getPermisos = async(req, res) => {
    try {
        const permisos = await Permiso.findAll({
            attributes: ['id', 'descripcion']
        });
        res.json(permisos);
    } catch (error) {
        res.json({
            "error" : error
        });
    }
}