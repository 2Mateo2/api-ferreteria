import express from 'express';
import { getAllMedioPago }  from '../controllers/medioPagoController.js';

const medioPagoRouter = express.Router();

medioPagoRouter.get('/medioPagoAll', getAllMedioPago);

export default medioPagoRouter;