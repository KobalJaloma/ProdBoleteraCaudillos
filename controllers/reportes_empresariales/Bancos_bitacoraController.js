import  Bancos_bitacora  from "../../models/reportes_empresariales/Bancos_bitacoraModel.js";


export const getBancosBitacora = async(req, res) => {
    try {
        const query = req.query.atributos;
        const atributos = query.split(',');
        
        const bitacora = Bancos_bitacora.findAll({

        });
    } catch (error) {
        
    }
}