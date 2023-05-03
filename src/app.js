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

app.listen(PORT)
console.log('server on port', PORT)

