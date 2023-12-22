import { conexion } from "../database/db.js"; 

const getAll = () => {
    return new Promise((resolve, reject) => {
        conexion.query('SELECT e.id_empleado, e.usuario, e.passwor, e.nombre, e.apellido, r.rol, e.estado FROM empleado e INNER JOIN rol r ON e.id_rol = r.id_rol WHERE e.estado = 1;', (error, filas) => {
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
            usuario:req.body.usuario,
            passwor:req.body.passwor,
            nombre:req.body.nombre, 
            apellido:req.body.apellido, 
            id_rol:req.body.id_rol
        };
        let sql = 'INSERT INTO empleado SET ?';
        conexion.query(sql, data, function(error, result) {
            if (error) {
                reject(error);
            } else {
                resolve('Empleado agregado con exito');
            }
        });
    });
};

const update = (req) => {
    return new Promise((resolve, reject) => {
        let id_empleado = req.params.id_empleado;
        let usuario = req.body.usuario;
        let passwor = req.body.passwor;
        let nombre = req.body.nombre;
        let apellido = req.body.apellido;
        let id_rol = req.body.id_rol;

        let sql = "UPDATE empleado SET usuario = ?, passwor = ?, nombre = ?, apellido = ?, id_rol = ? WHERE id_empleado = ?";
        conexion.query(sql, [usuario, passwor, nombre, apellido, id_rol, id_empleado], function(error, results){
            if (error) {
                reject(error);
            } else {
                resolve('El empleado fue atualizado');
            }
        });
    });
}; 

const deletee = (req) => {
    return new Promise((resolve, reject) => {
        let id_empleado = req.params.id_empleado;
        let estado = req.body.estado;
        
        let sql = 'UPDATE empleado SET estado = ? WHERE id_empleado = ?';
        conexion.query(sql, [estado, id_empleado], function(error, results){
            if (error){
                reject(error);
            } else {
                resolve('El empleado fue eliminado')
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