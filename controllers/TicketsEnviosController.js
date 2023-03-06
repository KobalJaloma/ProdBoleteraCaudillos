import TicketEnvio from "../models/TicketsEnviosModel.js";

export const getTicketsEnvios = async(req, res) => {
    try {
        const envios = await TicketEnvio.findAll({
            where: {
                fk_evento: req.params.id
            }
        });

        res.json(envios);
    } catch (error) {
        res.json({
            "error" : error
        });
    }
};

export const createTicketEnvio = async(req, res) => {
    try {
        const payload = {
            fk_evento: req.body.fk_evento,
            nombre: req.body.nombre,
            telefono: req.body.telefono,
            correo: req.body.correo,
            tickets: req.body.tickets,
        }

        const envio = await TicketEnvio.create(payload);

        res.json({
            "message" : 'Se Crearon Correctamente',
            "estatus" : "OK"
        });
    } catch (error) {
        res.json({
            "message" : 'Hubo un problema en la actualizacion del usuario',
            "estatus" : "FAIL"
        });
    }
}