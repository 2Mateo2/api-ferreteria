
import { getAll } from "../services/medioPagoService.js";

const getAllMedioPago = async (req, res) => {
    try {
        const allMedioPago = await getAll();
        res.send(allMedioPago);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al obtener los MedioPagos");
    }
};

export {
    getAllMedioPago
};