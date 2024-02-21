import { 
    Empresa,
    Ciudad, 
    Clientes, 
    Estado,
    Evento, 
    Pais, 
    Permiso,
    Recinto,
    Ticket,
    TicketEnvio, 
    TicketsReutilizables,
    Usuario
} from '../models/index.js';

export const syncMigrations = async() => {
    try {
        await Empresa.sync({alter: true});
        await Ciudad.sync({alter: true});
        await Clientes.sync({alter: true});
        await Estado.sync({alter: true});
        await Evento.sync({alter: true});
        await Pais.sync({alter: true});
        await Permiso.sync({alter: true});
        await Recinto.sync({alter: true});
        await Ticket.sync({alter: true});
        await TicketEnvio.sync({alter: true});
        await TicketsReutilizables.sync({alter: true});
        await Usuario.sync({alter: true});
    } catch (error) {
        console.log("Error en las migraciones: " + error);
    }
}