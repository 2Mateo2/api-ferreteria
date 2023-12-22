import express from 'express';
import { getAllCliente, createCliente, updateCliente, deleteCliente }  from '../controllers/clienteController.js';

const clienteRouter = express.Router();

clienteRouter.get('/clienteAll', getAllCliente);

clienteRouter.post('/clienteCreate', createCliente);

clienteRouter.put('/clienteUpdate/:id_cliente', updateCliente);

clienteRouter.put('/clienteDelete/:id_cliente', deleteCliente);

export default clienteRouter;