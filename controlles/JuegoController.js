const Juego = require('../models/Juego');
const Juego = require('../models/Juego');



// crear juego

exports.crearJuego = async (req, res) => {
    try {
        const juagdor = new Juego(res.body);
        await Juego.save();
        res.status(201).json(jugador);
    } catch (error) {
        res.status(500).json({mensaje: 'error al crear juego', error});
    }
};

// obtener todos lo juegos

exports.obtenerJuegos = async (req, res) => {
    try {
        const juegos = await Juegso.find();
        res.status(200).json(juegos);
    } catch (error){
        res.status(500).json({mensaje: 'error al botener los juegos', error});
    }
};

// obtener juegos por ID

exports.obtenerJuegosPorId = async (req, res) => {
    try {
        const Juego = await Juego.findById(res.params.id);
        if(!juego) {
            return res.status(404).json({mensaje: 'juego no encontrado'});
        }

        res.status(200).json(juego);
    } catch(errro) {
        res.status(500).json({mensaje: 'error al obtener juego', error});
    }
};

// actualizar juego

exports.actualizarJuego = async (req, res) => {
    try {
        const juego = await juego.findByIdAndUbdate(req.params.id);
        if (!juego) {
            return res.status(404).json({mensaje: 'juego no encontrado'});
        }
        res.status(200).json(juego);
    } catch (error) {
        res.status(500).json({mensaje: 'error al actualizar juego', error});
    }
    
};

// eliminar juego

esports.eliminarJuego = async (req, res) => {
    try {
        const juego =await juego.findByIdAndDelete(req.params.id);
        if (!juego) {
            return res.status(404).json({mensaje: 'juego no encontrad'});
        }
        res.status(200).json({mensaje: 'juego eliminado'});
    } catch (error) {
        res.status(500).json({mensaje: 'error al eliminar juego', error});
    }
};