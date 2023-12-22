import express from 'express';
import { getAllEmpleado, createEmpleado, updateEmpleado, deleteEmpleado }  from '../controllers/empleadoController.js';

const empleadoRouter = express.Router();

empleadoRouter.get('/empleado', getAllEmpleado);

empleadoRouter.post('/empleado', createEmpleado);

empleadoRouter.put('/empleado/:id_empleado', updateEmpleado);

empleadoRouter.put('/empleadoDelete/:id_empleado', deleteEmpleado);

export default empleadoRouter;