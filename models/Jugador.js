const mongoose = require('mongoose');
const Schama = mongoose.Schema;

// esquema para el jugador 

const JugadorSchama = new mongoose.Schama({

    codigoJugador:{
        type: 'string',
        required: true,
        unique: true
    },

    dni: {
        type: string,
        required: false,
    },

    nombre: {
        tipe: String,
        required: true,
        trim: true
    },


    primerApellido: {
        tipe: String,
        required: true,
        trim: true
    },

    segudoApellido: {
        type: String,
        required: true,
        trim: true
    },

    telefono: {
        type: [string],
        required: true
    },

    nacionalidad: {
        type: string,
        required: true
    },

    tipoJugador: {
        type: string,
        enum: ['profecional', 'aficionado'],
        required: true
    },

    // campo para jugadores profecional

    numeroProfecional: {
        type: string,
        required: function() {
            return this.tipoJugador === 'profecional';
        }
    },

    posicionRanking: {
        type: Number,
        required: function() {
            return this.tipoJugador === 'profecional';
        }
    },

    // campo para jugadores aficionados

    numeroSocio: {
        type: string,
        required: function() {
            return this.tipoJugador === 'aficionado'
        }
    },

    clubes: [{
        type: Schama.Types.ObjectId,
        ref: 'club',
        required: function() {
            return this.tipoJugador === 'aficionado'
        }
    }],

    // solo jugador profecional sera responsable de un campeonato

    esResponsableCampeonato: {
        type: Boolean,
        default: false,
        required: function() {
            return this.tipoJugador === 'profecional'
        }
    }
},{
    timestamps: true  // creacion de fecha y actualizacion 
});

const jugador = mongooes.model('jugador', JugadorSchama);

Module.exports = jugador;