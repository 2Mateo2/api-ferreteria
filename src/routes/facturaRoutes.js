import express from 'express';
import { getAllFactura, createFactura, updateFactura, deleteFactura }  from '../controllers/facturaController.js';

const facturaRouter = express.Router();

facturaRouter.get('/facturaAll', getAllFactura);

facturaRouter.post('/facturaCreate', createFactura);

facturaRouter.put('/facturaUpdate/:id_factura', updateFactura);

facturaRouter.put('/facturaDelete/:id_factura', deleteFactura);

export default facturaRouter;