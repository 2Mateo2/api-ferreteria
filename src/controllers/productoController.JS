
import { getAll, create, update, deletee } from "../services/productoService.js";

const getAllProducto = async (req, res) => {
    try {
        const allProducto = await getAll();
        res.send(allProducto);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al obtener los Productos");
    }
};

const createProducto = async (req, res) => {
    try {
        const createProductos = await create(req);
        res.send(createProductos);

    } catch (error) {
        console.error(error);
        res.status(500).send("Error al crear el Producto");
    }
};

const updateProducto = async (req, res) => {
    try {
        const updateProductos = await update(req);
        res.send(updateProductos);

    } catch (error) {
        console.error(error);
        res.status(500).send("Error al actualizar el Producto");
    }
};

const deleteProducto = async (req, res) => {
    try {
        const updateProductos = await deletee(req);
        res.send(updateProductos);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al eliminar el Producto");
    }
};

export {
    getAllProducto,
    createProducto,
    updateProducto,
    deleteProducto
};