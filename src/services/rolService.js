import { conexion } from "../database/db.js"; 

const getAll = () => {
    return new Promise((resolve, reject) => {
        conexion.query('SELECT id_rol, rol FROM rol', (error, filas)=>{
            if (error) {
                reject(error);
            } else {
                resolve(filas);
            }
        });
    });
};

export {
    getAll
};