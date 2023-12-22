
import { getAll, create, update, deletee } from "../services/clienteService.js";

const getAllCliente = async (req, res) => {
    try {
        const allCliente = await getAll();
        res.send(allCliente);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al obtener los clientes");
    }
};

const createCliente = async (req, res) => {
    try {
        const createClientes = await create(req);
        res.send(createClientes);

    } catch (error) {
        console.error(error);
        res.status(500).send("Error al crear el cliente");
    }
};

const updateCliente = async (req, res) => {
    try {
        const updateClientes = await update(req);
        res.send(updateClientes);

    } catch (error) {
        console.error(error);
        res.status(500).send("Error al actualizar el cliente");
    }
};

const deleteCliente = async (req, res) => {
    try {
        const updateClientes = await deletee(req);
        res.send(updateClientes);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al eliminar el cliente");
    }
};

export {
    getAllCliente,
    createCliente,
    updateCliente,
    deleteCliente
};