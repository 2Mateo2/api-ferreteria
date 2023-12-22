import { conexion } from "../database/db.js"; 
import jwt from 'jsonwebtoken';
import { KEY } from "../config.js"; 

const login = (req, res) => {
    return new Promise((resolve, reject) => {
        const { usuario, passwor } = req.body;
        conexion.query('SELECT usuario, passwor, id_rol FROM empleado WHERE usuario = ? AND passwor = ?',
          [usuario, passwor],
          (error, filas) => {
            if (error) {
                reject(error);
            } else {
              if (filas.length > 0) {
                const empleado = filas[0];
                const rol = empleado.id_rol;
    
                if (rol <= 3) {
                    const payload = {
                        check:true
                    };
                    const token = jwt.sign(payload, KEY, {
                        expiresIn:'1h'
                    });
                    resolve({
                        message:'¡Autenticacion Exitosa!',
                        token: token
                    });

                } else {
                    res.status(401).json({ message: 'Su rol en la ferreteria, no tiene acceso como administrador' });
                }
                
              } else {
                res.status(401).json({ message: 'Credenciales inválidas' });
              }
            }
          }
        );
    });
};

export {
    login
};