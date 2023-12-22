import { conexion } from "../database/db.js"; 

const getAll = () => {
    return new Promise((resolve, reject) => {
        conexion.query('SELECT  id_factura, CONCAT(c.nombre," ",c.apellido) as "NombreCliente", p.nombre as "producto", m.metodo, f.cantidad, fecha, total from factura f INNER JOIN cliente c ON f.id_cliente = c.id_cliente INNER JOIN producto p ON f.id_producto = p.id_producto INNER JOIN medio_pago m ON f.id_pago = m.id_pago;', (error, filas)=>{
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
            id_cliente:req.body.id_cliente, 
            id_producto:req.body.id_producto, 
            id_pago:req.body.id_pago, 
            cantidad:req.body.cantidad, 
            fecha:req.body.fecha
        };

        let sql = 'INSERT INTO factura SET ?';
        conexion.query(sql, data, function(error, result) {
            if (error) {
                reject(error);
            } else {
                resolve('factura agregado con exito');
            }
        });
    });
};

const update = (req) => {
    return new Promise((resolve, reject) => {
        let id_factura = req.params.id_factura;
        let id_cliente = req.body.id_cliente;
        let id_producto = req.body.id_producto;
        let id_pago = req.body.id_pago;
        let cantidad = req.body.cantidad;
        let fecha = req.body.fecha;

        let sql = 'UPDATE factura SET id_cliente = ?, id_producto = ?, id_pago = ?, cantidad = ?, fecha = ? WHERE id_factura = ?;';
        conexion.query(sql, [id_cliente, id_producto, id_pago, cantidad, fecha, id_factura], function(error, results){
            if (error) {
                reject(error);
            } else {
                resolve('factura fue atualizado');
            }
        });
    });
}; 

const deletee = (req) => {
    return new Promise((resolve, reject) => {
        let id_factura = req.params.id_factura;
        let estado = req.body.estado;
        
        let sql = 'UPDATE factura SET estado = ? WHERE id_factura = ?';
        conexion.query(sql, [estado, id_factura], function(error, results){
            if (error){
                reject(error);
            } else {
                resolve('El factura fue eliminado');
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