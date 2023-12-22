
import { getAll } from "../services/rolService.js";

const getAllRol = async (req, res) => {
    try {
        const allRol = await getAll();
        res.send(allRol);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al obtener los rols");
    }
};

export {
    getAllRol
};