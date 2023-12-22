import { conexion } from "../database/db.js"; 

const getAll = () => {
    return new Promise((resolve, reject) => {
        conexion.query('SELECT id_cliente, nombre, apellido, telefono, cedula FROM cliente WHERE estado = 1', (error, filas) => {
            if (error) {
                reject(error);
            } else {
                resolve(filas);
            }
        });
    });
};

const create = (req) => {
    return new Promise((resolve, reject) => {
        let data = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            telefono: req.body.telefono,
            cedula: req.body.cedula
        };
        let sql = 'INSERT INTO cliente SET ?';
        conexion.query(sql, data, function(error, result) {
            if (error) {
                reject(error);
            } else {
                resolve('Cliente agregado con exito');
            }
        });
    });
};

const update = (req) => {
    return new Promise((resolve, reject) => {
        let id_cliente = req.params.id_cliente
        let nombre = req.body.nombre
        let apellido = req.body.apellido
        let telefono = req.body.telefono
        let cedula = req.body.cedula
        let sql = "UPDATE cliente SET nombre = ?, apellido = ?, telefono = ?, cedula = ? WHERE id_cliente = ?"
        conexion.query(sql, [nombre, apellido, telefono, cedula, id_cliente], function(error, results){
            if (error) {
                reject(error);
            } else {
                resolve('El cliente fue atualizado');
            }
        });
    });
}; 

const deletee = (req) => {
    return new Promise((resolve, reject) => {
        let id_cliente = req.params.id_cliente;
        let estado = req.body.estado;
        
        let sql = 'UPDATE cliente SET estado = ? WHERE id_cliente = ?';
        conexion.query(sql, [estado, id_cliente], function(error, results){
            if (error){
                reject(error);
            } else {
                resolve('El cliente fue eliminado')
            }
        });
    });
};  

export {
    getAll,
    create,
    update,
    deletee
};