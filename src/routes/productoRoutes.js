import express from 'express';
import { getAllProducto, createProducto, updateProducto, deleteProducto }  from '../controllers/productoController.js';

const productoRouter = express.Router();

productoRouter.get('/productoAll', getAllProducto);

productoRouter.post('/productoCreate', createProducto);

productoRouter.put('/productoUpdate/:id_producto', updateProducto);

productoRouter.put('/productoDelete/:id_producto', deleteProducto);

export default productoRouter;