const Campeonato = require('../models/Campeonato');

// crear campeonato

exports.crearCampeonato = async (req, res) => {
    try {
        const Campeonato = new Cmpeonato(req.body);
        await Campeonato.save();
        res.status(201).json(Campeonato);
    } catch (error) {
        res.status(500).json({mensaje: 'error al crear campeonato', error});
    }
};

//obtener todos los campeonatos

exports.obtenerCampeonatos = async (req, res) => {
    try {
        const Campeonato = await Campeonato.find();
        res.status(200).json(Campeonato);
    } catch (error){
        res.status(500).json({mensaje: 'error al botener campeonatos', error});
    }
};

// obtener un campeonato por ID

exports.obtenerCampeonatosPorId = async (req, res) => {
    try {
        const Campeonato = await Campeonato.findById(res.params.id);
        if(!Campeonato) {
            return res.status(404).json({mensaje: 'campeonato no encontrado'});
        }

        res.status(200).json(Campeonato);
    } catch(errro) {
        res.status(500).json({mensaje: 'error al obtener campeonato', error});
    }
};

// actualizar campeonato

exports.actualizarCampeonato = async (req, res) => {
    try {
        const campeonato = await Campeonato.findByIdAndUbdate(req.params.id);
        if (!campeonato) {
            return res.status(404).json({mensaje: 'campeonato no encontrado'});
        }
        res.status(200).json(campeonato);
    } catch (error) {
        res.status(500).json({mensaje: 'error al actualizar campeonato', error});
    }
    
};

// eliminar campeonato

esports.eliminarCampeonato = async (req, res) => {
    try {
        const Campeonato =await Campeonato.findByIdAndDelete(req.params.id);
        if (!Campeonato) {
            return res.status(404).json({mensaje: 'campeonato no encontrad'});
        }
        res.status(200).json({mensaje: 'Campeonato eliminado'});
    } catch (error) {
        res.status(500).json({mensaje: 'error al eliminar Campeonato', error});
    }
};