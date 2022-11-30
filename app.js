//importa dependencia de la biblioteca express
import express, { json } from 'express'

//importa dependencia de la biblioteca morgan
import morgan from 'morgan'

import 'dotenv/config'

import database from './database'

import PlaylistRoutes from './routes/Playlist.routes'

//crea la aplicacion 
const app = express()

//define un puerto en que va a escuchar pedidos
const port = process.env.PORT


//lee el body en formato json
app.use(json())

//imprime las acciones hacia cada endopoint en la terminal
app.use(morgan('dev'))

//endpoints
app.use(PlaylistRoutes)

app.listen(port, () => {
    console.log(`Escuchando pedidos en PORT: ${port}`)
})


