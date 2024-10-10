const mongoose = require('mongoese');
const Schema = mongoose.Schema;

// esquema de campeonato 
const campeonatoSchema = new Schema({
    codigoCmpeonato: {
        type: string,
        required: true,
        unique: true,
    },

    fechaInicio: {
        type: date,
        requires: true,
    },

    nuemroDias:{
        type: Number,
        required: true,
    },

    costeInscripcion: {
        type: Number,
        required: true,
        trim: true,
    },

    maxJugadores: {
        type: Number,
        required: true,
    },

    ciudad: {
        type: Schema.types.objectId,
        ref: 'ciudad',
        required: true,
    },

    juegos: [{
        type: Schema.types.objectId,
        ref: 'juego',
        required: true,
    }],

    jugadores: [{
        type: Schema.types.objectId,
        ref: 'jugador',
        required: true,
    }],

    responsables: {
        type: Schema.types.objectId,
        ref: 'jugador',
        required: true,
        validate: {
            validate: function(v) {
                // validacion para asegurar que el responsable es jugador profecional
                return mongoose.model('jugador').findById(v).then(jugador => {
                    if (jugador.tipoJugador !== 'profecional') {
                        return false;
                    }
                    return true;
                });
            },

            message: props => 'el jugador seleccionado no es profecional, solo los jugadores profecionales pueden ser responsables del campeonato'
        }
    }
},{
    timestamps: true
});

// crear el molodelo de campeonato
const campeonato = monggose.model('campeonato', campeonatoSchema);

Module.exports = campeonato;