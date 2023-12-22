import express from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import loginRouter from './routes/loginRoutes.js';
import clienteRouter  from './routes/clienteRoutes.js';
import empleadoRouter from './routes/empleadoRoutes.js'; 
import productoRouter from './routes/productoRoutes.js';
import facturaRouter from './routes/facturaRoutes.js';
import rolRouter from './routes/rolRoutes.js';
import categoriaProductoRouter from './routes/categoriaProductoRoutes.js';
import medioPagoRouter from './routes/medioPagoRoutes.js';
import { PORT, KEY } from './config.js'; 

const verificacion = express.Router();
verificacion.use((req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if(!token){
        res.status(401).send({
            error: 'Es necesario un token de autenticacion'
        });
        return
    }
    if(token.startsWith('Bearer ')){
        token = token.slice(7, token.length);
    }
    if(token){
        jwt.verify(token, app.get('key'), (error, decoded)=> {
            if(error){
                return res.json({
                    message:'El token no es valido'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    }
});

const app = express();
app.set('key', KEY);
app.use(express.urlencoded({ extended:false }));
app.use(express.json());
app.use(cors());

app.use(loginRouter);

app.use('/clientes',verificacion, clienteRouter); 
app.use('/empleados',verificacion, empleadoRouter); 
app.use('/empleado/rol',verificacion, rolRouter); 
app.use('/productos',verificacion, productoRouter); 
app.use('/producto/categoria', categoriaProductoRouter); 
app.use('/facturas',verificacion, facturaRouter); 
app.use('/factura/medioPago', medioPagoRouter); 

app.listen(PORT);
console.log('server on port', PORT);