import { getAll, create, update, deletee } from "../services/empleadoService.js";

const getAllEmpleado = async (req, res) => {
    try {
        const allEmpleado = await getAll();
        res.send(allEmpleado);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al obtener los Empleados");
    }
};

const createEmpleado = async (req, res) => {
    try {
        const createEmpleados = await create(req);
        res.send(createEmpleados);

    } catch (error) {
        console.error(error);
        res.status(500).send("Error al crear el Empleado");
    }
};

const updateEmpleado = async (req, res) => {
    try {
        const updateEmpleados = await update(req);
        res.send(updateEmpleados);

    } catch (error) {
        console.error(error);
        res.status(500).send("Error al actualizar el Empleado");
    }
};

const deleteEmpleado = async (req, res) => {
    try {
        const updateEmpleados = await deletee(req);
        res.send(updateEmpleados);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al eliminar el Empleado");
    }
};

export {
    getAllEmpleado,
    createEmpleado,
    updateEmpleado,
    deleteEmpleado
};