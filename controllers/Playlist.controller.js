import playlist from "../models/Playlist.model.js"

export const LeerPlaylists = async (req,res) => {
    try{
        let playlist = await playlists.find()
        res.send(playlist)
        }
    catch(error)
    {
        res.status(500).send(error)
    }
}

export const LeerPorNombre = async (req,res) => {
    try
    {
        let name = req.params.nombre
        let playlist = await playlist.findOne({nombre: name})
        res.send(playlist)
    }
    catch(error)
    {
        res.status(500).send(error)
    }
}

export const CrearPlaylists = async (req, res) => {
    try
    {
        const playlist = req.body
        await playlist.create(playlist)
        res.send(playlist)
    }
    catch(error)
    {
        res.status(500).send(error)
    }
}

export const ActualizarPlaylists = async (req,res) => {
    try
    {
        let name = req.params.nombre
        let playlist = req.body
        await playlist.findByIdAndUpdate({nombre : name}, playlist)
        let cancion = await playlist.findOne({nombre : name})
        res.send(cancion)
    }
    catch(error)
    {
        res.status(500).send(error)
    }
}

export const BorrarPlaylists = async (req,res) => {
    try
    {
        let name = req.params.nombre
        await playlist.findOneAndDelete({nombre : name})
        res.status(204).send()
    }
    catch(error)
    {
        res.status(500).send(error)
    }
}

//Seccion 2

export const LeerCanciones = async (req,res) => {
    try
    {
        let name = req.params.nombre
        let playlist = playlist.findOne({nombre : name})
        res.send(playlist.canciones)
    }   
    catch(error)
    {
        res.status(500).send(error)
    }
}

export const LeerPorTitulo = async (req,res) => {
    try
    {
        let name = req.params.nombre
        let tituloc = req.params.titulo
        let playlist = await playlist.findOne({nombre : name})
        let cancion = playlist.canciones.find(x => x.titulo == tituloc)
        res.send(cancion)
    }
    catch(error)
    {
        res.status(500).send(error)
    }
}

export const CrearCancion = async (req,res) => {
    try
    {
        let name = req.params.nombre
        let cancion = req.body
        let playlist = await playlist.findOne({nombre : name})
        playlist.canciones.push(cancion)
        await playlist.findByIdAndUpdate({nombre : name}, cancion)
        res.status(201).send()
    }
    catch(error)
    {
        res.status(500).send(error)
    }
} 

export const ActualizarCancion = async (req,res) => {
    try
    {
        let name = req.params.nombre
        let tituloc = req.params.titulo
        let cancionn = req.body
        let playlist = await playlist.findOne({nombre : name})
        let cambiar = playlist.canciones.find(x => x.titulo == tituloc)
        cambiar.artista = cancionn.artista
        cambiar.album = cancionn.album
        cambiar.anio = cancionn.anio
        await playlist.findByIdAndUpdate({nombre : name}, playlist)
        res.status(201).send() 
    }
    catch(error)
    {
        res.status(500).send(error)
    }
}

export const BorrarCancion = async (req,res) => {
    try
    {
        let name = req.params.nombre
        let tituloc = req.params.titulo
        let playlist = await playlist.findOne({nombre : name})
        let cancion  = playlist.canciones.find(x => x.titulo == tituloc)
        let posicion = playlist.canciones.indexOf(cancion)
        playlist.canciones.splice(posicion, 1)
        await playlist.findByIdAndDelete({nombre : name }, playlist)
        res.status(204).send()
    }
    catch(error)
    {
        res.status(500).send(error)
    }
}

