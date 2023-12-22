
import { getAll, create, update, deletee } from "../services/facturaService.js";

const getAllFactura = async (req, res) => {
    try {
        const allFactura = await getAll();
        res.send(allFactura);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al obtener los Facturas");
    }
};

const createFactura = async (req, res) => {
    try {
        const createFacturas = await create(req);
        res.send(createFacturas);

    } catch (error) {
        console.error(error);
        res.status(500).send("Error al crear el Factura");
    }
};

const updateFactura = async (req, res) => {
    try {
        const updateFacturas = await update(req);
        res.send(updateFacturas);

    } catch (error) {
        console.error(error);
        res.status(500).send("Error al actualizar el Factura");
    }
};

const deleteFactura = async (req, res) => {
    try {
        const updateFacturas = await deletee(req);
        res.send(updateFacturas);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al eliminar el Factura");
    }
};

export {
    getAllFactura,
    createFactura,
    updateFactura,
    deleteFactura
};