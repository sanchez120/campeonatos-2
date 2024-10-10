const { json } = require('express/lib/response');
const Jugador = require('../models/Jugador');
 
// crear jugador

exports.crearJugador = async (req, res) => {
    try {
        const juagdor = new Jugador(res.body);
        await Jugador.save();
        res.status(201).json(jugador);
    } catch (error) {
        res.status(500).json({mensaje: 'error al crear jugador', error});
    }
};

// obtener todos jugadores

exports.obtenerJugadores = async (req, res) => {
    try {
        const jugadores = await jugadores.find();
        res.status(200).json(jugadores);
    } catch (error){
        res.status(500).json({mensaje: 'error al botener los jugadores', error});
    }
};

// obtener jugador por ID

exports.obtenerJugadorPorId = async (req, res) => {
    try {
        const Jugador = await Jugador.findById(res.params.id);
        if(!jugador) {
            return res.status(404).json({mensaje: 'jugador no encontrado'});
        }

        res.status(200).json(juagdor);
    } catch(errro) {
        res.status(500).json({mensaje: 'error al obtener jugador', error});
    }
};

// actualizar jugador

exports.actualizarJugador = async (req, res) => {
    try {
        const jugador = await jugador.findByIdAndUbdate(req.params.id);
        if (!jugador) {
            return res.status(404).json({mensaje: 'jugador no encontrado'});
        }
        res.status(200).json(jugador);
    } catch (error) {
        res.status(500).json({mensaje: 'error al actualizar jugador', error});
    }
    
};

// eliminar jugador

esports.eliminarJugador = async (req, res) => {
    try {
        const jugador =await jugador.findByIdAndDelete(req.params.id);
        if (!jugador) {
            return res.status(404).json({mensaje: 'jugador no encontrad'});
        }
        res.status(200).json({mensaje: 'jugador eliminado'});
    } catch (error) {
        res.status(500).json({mensaje: 'error al eliminar jugador', error});
    }
};