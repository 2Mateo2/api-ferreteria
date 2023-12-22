import {createConnection} from 'mysql2'

import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_USER,
  DB_PORT
} from '../config.js'

export const conexion = createConnection({
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME
})

conexion.connect(function(error){
    if(error){
        throw error
    }else{
        console.log("¡Conexion exitosa a la base de datos!")
    }
})