import { conexion } from "../database/db.js"; 

const getAll = () => {
    return new Promise((resolve, reject) => {
        conexion.query('SELECT id_pago, metodo from medio_pago;', (error, filas)=>{
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