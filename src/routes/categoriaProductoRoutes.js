import express from 'express';
import { getAllCategoriaProducto }  from '../controllers/categoriaProductoController.js';

const categoriaProductoRouter = express.Router();

categoriaProductoRouter.get('/categoriaProductoAll', getAllCategoriaProducto);


export default categoriaProductoRouter;