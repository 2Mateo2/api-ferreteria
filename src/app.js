import express from 'express'
import cors from 'cors'
import { json } from 'express'
import { conexion } from './db.js' 
import { PORT  } from './config.js'

const app = express()
app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.send('Software Ferreteria')
})

//Ver tabla cliente 
app.get('/api/cliente', (req, res)=>{
    conexion.query('SELECT id_cliente, nombre, apellido, telefono, cedula FROM cliente WHERE estado = 1', (error, filas)=>{
        if(error){
            throw error
        }else{
            res.send(filas)
        }
    })
})

//CREAR UN CLIENTE
app.post('/api/cliente', (req,res)=>{
  let data = {nombre:req.body.nombre, apellido:req.body.apellido, telefono:req.body.telefono, cedula:req.body.cedula}
  let sql = "INSERT INTO cliente SET ?"
  conexion.query(sql, data, function(err, result){
          if(err){
             throw err
          }else{                         
           res.send("Se agrego correctamente")                         
      }
  })
})

//EDITAR CLIENTE
app.put('/api/cliente/:id_cliente', (req, res)=>{
  let id_cliente = req.params.id_cliente
  let nombre = req.body.nombre
  let apellido = req.body.apellido
  let telefono = req.body.telefono
  let cedula = req.body.cedula

  let sql = "UPDATE cliente SET nombre = ?, apellido = ?, telefono = ?, cedula = ? WHERE id_cliente = ?"
  conexion.query(sql, [nombre, apellido, telefono, cedula, id_cliente], function(error, results){
      if(error){
          throw error
      }else{              
          res.send("Actualizacion hecha")
      }
  })
})

//ELIMINAR CLIENTE
app.put('/api/clienteDelete/:id_cliente', (req, res)=>{
  let id_cliente = req.params.id_cliente
  let estado = req.body.estado
  
  let sql = "UPDATE cliente SET estado = ? WHERE id_cliente = ?"
  conexion.query(sql, [estado, id_cliente], function(error, results){
      if(error){
          throw error
      }else{              
          res.send("Actualizacion hecha")
      }
  })
})

//Ver tabla empleado
app.get('/api/empleado', (req, res)=>{
    conexion.query('SELECT e.id_empleado, e.usuario, e.passwor, e.nombre, e.apellido, r.rol, e.estado FROM empleado e INNER JOIN rol r ON e.id_rol = r.id_rol WHERE e.estado = 1;', (error, filas)=>{
        if(error){
            throw error
        }else{
            res.send(filas)
        }
    })
})

//Ver tabla empleado, ver al rol que pertenece
app.get('/api/empleadoRol', (req, res)=>{
    conexion.query('SELECT id_rol, rol FROM rol', (error, filas)=>{
        if(error){
            throw error
        }else{
            res.send(filas)
        }
    })
})

//CREAR UN EMPLEADO
app.post('/api/empleado', (req,res)=>{
  let data = {usuario:req.body.usuario,passwor:req.body.passwor,nombre:req.body.nombre, apellido:req.body.apellido, id_rol:req.body.id_rol}
  let sql = "INSERT INTO empleado SET ?"
  conexion.query(sql, data, function(err, result){
          if(err){
             throw err
          }else{                         
           res.send("Se agrego correctamente")                         
      }
  })
})

//EDITAR EMPLEADO
app.put('/api/empleado/:id_empleado', (req, res)=>{
  let id_empleado = req.params.id_empleado
  let usuario = req.body.usuario
  let passwor = req.body.passwor
  let nombre = req.body.nombre
  let apellido = req.body.apellido
  let id_rol = req.body.id_rol
  
  let sql = "UPDATE empleado SET usuario = ?, passwor = ?, nombre = ?, apellido = ?, id_rol = ? WHERE id_empleado = ?"
  conexion.query(sql, [usuario, passwor, nombre, apellido, id_rol, id_empleado], function(error, results){
      if(error){
          throw error
      }else{              
          res.send("Actualizacion hecha")
      }
  })
})

//ELIMINAR EMPLEADO
app.put('/api/empleadoDelete/:id_empleado', (req, res)=>{
  let id_empleado = req.params.id_empleado
  let estado = req.body.estado
  
  let sql = "UPDATE empleado SET estado = ? WHERE id_empleado = ?"
  conexion.query(sql, [estado, id_empleado], function(error, results){
      if(error){
          throw error
      }else{              
          res.send("Actualizacion hecha")
      }
  })
})

//Ver tabla producto
app.get('/api/producto', (req, res)=>{
    conexion.query('SELECT p.id_producto, p.nombre, c.categoria, p.precio, p.tamaño, p.cantidad FROM producto p INNER JOIN categoria c ON p.id_categoria = c.id_categoria WHERE p.estado = 1;', (error, filas)=>{
        if(error){
            throw error
        }else{
            res.send(filas)
        }
    })
})

//Ver tabla producto, ver a la categoria que pertenece
app.get('/api/verCategoria', (req, res)=>{
    conexion.query('SELECT id_categoria, categoria FROM categoria', (error, filas)=>{
        if(error){
            throw error
        }else{
            res.send(filas)
        }
    })
})

//CREAR UN PRODUCTO
app.post('/api/producto', (req,res)=>{
  let data = {nombre:req.body.nombre, id_categoria:req.body.id_categoria, precio:req.body.precio, tamaño:req.body.tamaño, tamaño:req.body.tamaño, cantidad:req.body.cantidad}
  let sql = "INSERT INTO producto SET ?"
  conexion.query(sql, data, function(err, result){
          if(err){
             throw err
          }else{                         
           res.send("Se agrego correctamente")                         
      }
  })
})

//EDITAR PRODUCTO
app.put('/api/producto/:id_producto', (req, res)=>{
  let id_producto = req.params.id_producto
  let nombre = req.body.nombre
  let id_categoria = req.body.id_categoria
  let precio = req.body.precio
  let tamaño = req.body.tamaño
  let cantidad = req.body.cantidad
  
  let sql = "UPDATE producto SET nombre = ?, id_categoria = ?, precio = ?, tamaño = ?, cantidad = ? WHERE id_producto = ?"
  conexion.query(sql, [nombre, id_categoria, precio, tamaño, cantidad, id_producto], function(error, results){
      if(error){
          throw error
      }else{              
          res.send("Actualizacion hecha")
      }
  })
})

//ELIMINAR PRODUCTO
app.put('/api/productoDelete/:id_producto', (req, res)=>{
  let id_producto = req.params.id_producto
  let estado = req.body.estado
  
  let sql = "UPDATE producto SET estado = ? WHERE id_producto = ?"
  conexion.query(sql, [estado, id_producto], function(error, results){
      if(error){
          throw error
      }else{              
          res.send("Actualizacion hecha")
      }
  })
})

//Ver tabla factura
app.get('/api/factura', (req, res)=>{
    conexion.query('SELECT  id_factura, CONCAT(c.nombre," ",c.apellido) as "NombreCliente", p.nombre as "producto", m.metodo, f.cantidad, fecha, total from factura f INNER JOIN cliente c ON f.id_cliente = c.id_cliente INNER JOIN producto p ON f.id_producto = p.id_producto INNER JOIN medio_pago m ON f.id_pago = m.id_pago;', (error, filas)=>{
        if(error){
            throw error
        }else{
            res.send(filas)
        }
    })
})

//Ver tabla factura el nombre del cliente
app.get('/api/facturaCliente', (req, res)=>{
  conexion.query('SELECT id_cliente, CONCAT(nombre," ",apellido) as "nombre_cliente" from cliente;', (error, filas)=>{
      if(error){
          throw error
      }else{
          res.send(filas)
      }
  })
})

//Ver tabla factura, el nombre del producto
app.get('/api/facturaProducto', (req, res)=>{
  conexion.query('SELECT id_producto, nombre from producto;', (error, filas)=>{
      if(error){
          throw error
      }else{
          res.send(filas)
      }
  })
})

//Ver tabla factura, el tipo de pago
app.get('/api/facturaMetodo', (req, res)=>{
  conexion.query('SELECT id_pago, metodo from medio_pago;', (error, filas)=>{
      if(error){
          throw error
      }else{
          res.send(filas)
      }
  })
})

//CREAR UNA FACTURA
app.post('/api/factura', (req,res)=>{
  let data = {id_cliente:req.body.id_cliente, id_producto:req.body.id_producto, id_pago:req.body.id_pago, cantidad:req.body.cantidad, fecha:req.body.fecha}
  let sql = "INSERT INTO factura SET ?"
  conexion.query(sql, data, function(err, result){
          if(err){
             throw err
          }else{                         
           res.send("Se agrego correctamente")                         
      }
  })
})



//EDITAR FACTURA
app.put('/api/factura/:id_factura', (req, res)=>{
  let id_factura = req.params.id_factura
  let id_cliente = req.body.id_cliente
  let id_producto = req.body.id_producto
  let id_pago = req.body.id_pago
  let cantidad = req.body.cantidad
  let fecha = req.body.fecha
  
  let sql = "UPDATE factura SET id_cliente = ?, id_producto = ?, id_pago = ?, cantidad = ?, fecha = ? WHERE id_factura = ?"
  conexion.query(sql, [id_cliente, id_producto, id_pago, cantidad, fecha, id_factura], function(error, results){
      if(error){
          throw error
      }else{              
          res.send("Actualizacion hecha")
      }
  })
})

/*Inicio de sesion
app.post('/api/login', (req, res) => {
    // Obtener el nombre de usuario y contraseña del cuerpo de la solicitud
    const { usuario, passwor } = req.body;
  
    // Realizar la consulta para validar el inicio de sesión
    conexion.query('SELECT * FROM empleado WHERE usuario = ? AND passwor = ?', [usuario, passwor], (error, filas) => {
      if (error) {
        throw error;
      } else {
        // Verificar si se encontró un empleado con las credenciales proporcionadas
        if (filas.length > 0) {
          // Credenciales válidas, inicio de sesión exitoso
          res.json({ message: 'Inicio de sesión exitoso' });
        } else {
          // Credenciales inválidas, inicio de sesión fallido
          res.status(401).json({ message: 'Credenciales inválidas' });
        }
      }
    });
  });
*/  

//Inicio de sesion
app.post('/api/login', (req, res) => {
    const { usuario, passwor } = req.body;
    // Realizar la consulta para validar el inicio de sesión
    conexion.query(
      'SELECT usuario, passwor, id_rol FROM empleado WHERE usuario = ? AND passwor = ?',
      [usuario, passwor],
      (error, filas) => {
        if (error) {
          throw error;
        } else {
          if (filas.length > 0) {
            const empleado = filas[0];
            res.json({
              message: 'Inicio de sesión exitoso',
              rol: empleado.id_rol // Pasar id del rol en la respuesta
            });
          } else {
            res.status(401).json({ message: 'Credenciales inválidas' });
          }
        }
      }
    );
});


  
  


app.listen(PORT)
console.log('server on port', PORT)

