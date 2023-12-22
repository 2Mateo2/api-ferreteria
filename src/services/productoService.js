import { conexion } from "../database/db.js"; 

const getAll = () => {
    return new Promise((resolve, reject) => {
        conexion.query('SELECT p.id_producto, p.nombre, c.categoria, p.precio, p.tamaño, p.cantidad FROM producto p INNER JOIN categoria c ON p.id_categoria = c.id_categoria WHERE p.estado = 1 ORDER BY p.id_producto ASC;', (error, filas)=>{
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
            nombre:req.body.nombre, 
            id_categoria:req.body.id_categoria, 
            precio:req.body.precio, 
            tamaño:req.body.tamaño, 
            cantidad:req.body.cantidad
        };
        let sql = 'INSERT INTO producto SET ?';
        conexion.query(sql, data, function(error, result) {
            if (error) {
                reject(error);
            } else {
                resolve('producto agregado con exito');
            }
        });
    });
};

const update = (req) => {
    return new Promise((resolve, reject) => {
        let id_producto = req.params.id_producto;
        let nombre = req.body.nombre;
        let id_categoria = req.body.id_categoria;
        let precio = req.body.precio;
        let tamaño = req.body.tamaño;
        let cantidad = req.body.cantidad;

        let sql = "UPDATE producto SET nombre = ?, id_categoria = ?, precio = ?, tamaño = ?, cantidad = ? WHERE id_producto = ?"
        conexion.query(sql, [nombre, id_categoria, precio, tamaño, cantidad, id_producto], function(error, results){
            if (error) {
                reject(error);
            } else {
                resolve('El producto fue atualizado');
            }
        });
    });
}; 

const deletee = (req) => {
    return new Promise((resolve, reject) => {
        let id_producto = req.params.id_producto;
        let estado = req.body.estado;
        
        let sql = 'UPDATE producto SET estado = ? WHERE id_producto = ?';
        conexion.query(sql, [estado, id_producto], function(error, results){
            if (error){
                reject(error);
            } else {
                resolve('El producto fue eliminado')
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