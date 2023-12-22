import express from 'express';
import { getAllRol }  from '../controllers/rolController.js';

const rolRouter = express.Router();

rolRouter.get('/rolAll', getAllRol);


export default rolRouter;