import express from 'express'
import playlist from '../models/Playlist.model'

const router = express.Router()

import {LeerPlaylists, LeerPorNombre, CrearPlaylists, 
    ActualizarPlaylists, BorrarPlaylists, LeerCanciones,
    LeerPorTitulo, CrearCancion, ActualizarCancion, 
    BorrarCancion} from '../controllers/Playlist.controller.js'

/*var playlist = [
    {
        "nombre": "Reggeton",
        "descripcion": "remix",
        "canciones": [
            {
                "titulo": "Traductor",
                "artista": "Tiago PZK, Myke Towers",
                "album": "NuevaEra",
                "año": 2022
            },
            {
                "titulo": "Me Porto Bonito",
                "artista": "Bad Bunny",
                "album": "Un Verano sin ti",
                "año": 2022
            }
        ]

    }]
*/

//endpoints
router.get('/playlists', LeerPlaylists)

router.get('/playlists/:nombre', LeerPorNombre)

router.post('/playlists', CrearPlaylists)

router.put('/playlists/:nombre', ActualizarPlaylists)

router.delete('/playlists/:nombre',BorrarPlaylists)
    
    
// endpoints P2
router.get('/playlists/:nombre/canciones', LeerCanciones)

router.get('/playlists/:nombre/canciones/:titulo', LeerPorTitulo)

router.post('/playlists/:nombre/canciones', CrearCancion)

router.put('/playlists/:nombre/canciones/:titulo', ActualizarCancion)

router.delete('/playlists/:nombre/canciones/:titulo', BorrarCancion)

export default router