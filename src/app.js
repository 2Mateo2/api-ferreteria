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
    conexion.query('SELECT * FROM cliente', (error, filas)=>{
        if(error){
            throw error
        }else{
            res.send(filas)
        }
    })
})

//Ver tabla empleado
app.get('/api/empleado', (req, res)=>{
    conexion.query('SELECT e.usuario, e.passwor, e.nombre, e.apellido, r.rol FROM empleado e INNER JOIN rol r ON e.id_rol = r.id_rol;', (error, filas)=>{
        if(error){
            throw error
        }else{
            res.send(filas)
        }
    })
})

//Ver tabla producto
app.get('/api/producto', (req, res)=>{
    conexion.query('SELECT p.nombre, c.categoria, p.precio, p.tamaño FROM producto p INNER JOIN categoria c ON p.id_categoria = c.id_categoria;', (error, filas)=>{
        if(error){
            throw error
        }else{
            res.send(filas)
        }
    })
})

//Ver tabla factura
 
app.get('/api/factura', (req, res)=>{
    conexion.query('SELECT  CONCAT(c.nombre," ",c.apellido) as "NombreCliente", p.nombre as "producto", m.metodo, cantidad from factura f INNER JOIN cliente c ON f.id_cliente = c.id_cliente INNER JOIN producto p ON f.id_producto = p.id_producto INNER JOIN medio_pago m ON f.id_pago = m.id_pago;', (error, filas)=>{
        if(error){
            throw error
        }else{
            res.send(filas)
        }
    })
})

app.listen(PORT)
console.log('server on port', PORT)

