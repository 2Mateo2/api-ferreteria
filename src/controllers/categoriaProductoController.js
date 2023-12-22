
import { getAll } from "../services/categoriaProductoService.js";

const getAllCategoriaProducto = async (req, res) => {
    try {
        const allCategoriaProducto = await getAll();
        res.send(allCategoriaProducto);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al obtener los categoriaProductos");
    }
};

export {
    getAllCategoriaProducto
};