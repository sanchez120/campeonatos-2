const Club = require('../models/Club');

// crear Club

exports.crearClub = async (req, res) => {
    try {
        const club = new Club(req.body);
        await club.save();
        res.status(201).json(club);
    } catch (error) {
        res.status(500).json({mensaje: 'error al crear club', error});
    }
};

//obtener todos los club

exports.obtenerCampeonatos = async (req, res) => {
    try {
        const club = await Club.find();
        res.status(200).json(club);
    } catch (error){
        res.status(500).json({mensaje: 'error al botener club', error});
    }
};

// obtener un club por ID

exports.obtenerClubPorId = async (req, res) => {
    try {
        const club = await Club.findById(res.params.id);
        if(!club) {
            return res.status(404).json({mensaje: 'club no encontrado'});
        }

        res.status(200).json(club);
    } catch(errro) {
        res.status(500).json({mensaje: 'error al obtener club', error});
    }
};

// actualizar campeonato

exports.actualizarClub = async (req, res) => {
    try {
        const club = await club.findByIdAndUbdate(req.params.id);
        if (!club) {
            return res.status(404).json({mensaje: 'club no encontrado'});
        }
        res.status(200).json(club);
    } catch (error) {
        res.status(500).json({mensaje: 'error al actualizar club', error});
    }
    
};

// eliminar club

esports.eliminarClub = async (req, res) => {
    try {
        const club =await Club.findByIdAndDelete(req.params.id);
        if (!club) {
            return res.status(404).json({mensaje: 'club no encontrad'});
        }
        res.status(200).json({mensaje: 'club eliminado'});
    } catch (error) {
        res.status(500).json({mensaje: 'error al eliminar club', error});
    }
};