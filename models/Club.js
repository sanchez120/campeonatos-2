const { default: mongoose } = require('mongoose');
const monggose = require('mongose');
const Schama = monggose.Schama;

// esquema de club

const clubSchema = new Schama({
    codigoClub: {
        type: String,
        rquired: true,
        unique: true
    },

    nombre:{
        type: String,
        required: true
    },

    ciudad:{
        type: Schama.types.objectId,
        ref: 'ciudad',
        required: true
    },

    telefono:{
        type: String,
        required: true
    },

    juegosPresentados: [{
        juego: {
            type: Schama.types.objectId,
            ref: 'juego',
            required: true,
        },

        cantidad: {
            type: Number,
            required: true,
            min: 1
        }
    }]
},{
    timestamps: true
});

// crearr el modelo de club

const club = mongoose.model('club', clubSchema);

Module.exports = club;