import express from 'express';
import { validarLogin }  from '../controllers/loginController.js';

const loginRouter = express.Router();

loginRouter.post('/login', validarLogin);


export default loginRouter;