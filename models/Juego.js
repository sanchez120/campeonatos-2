const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Esquema de Juego
const juegoSchema = new Schema({
    codigoJuego: {
        type: String,
        required: true,
        unique: true, // Código único de cuatro caracteres para identificar el juego
        minlength: 4,
        maxlength: 4
    },
    nombre: {
        type: String,
        required: true // Nombre del juego
    },
    tipoJuego: {
        type: String,
        required: true,
        enum: ['juego de mesa', 'juego de rol', 'juego de cartas'] // Clasificación del juego
    },
    maxJugadores: {
        type: Number,
        required: true, // Máximo número de jugadores por partida
        min: 1
    },
    minJugadores: {
        type: Number,
        required: true, // Mínimo número de jugadores por partida
        min: 1
    },
    edadMinima: {
        type: Number,
        required: true, // Edad mínima necesaria para poder jugar
        min: 0
    },
    // Campos específicos según el tipo de juego
    dimensionesMesa: {
        type: String,
        required: function() {
            return this.tipoJuego === 'juego de mesa'; // Dimensiones mínimas de la mesa, solo para juegos de mesa
        }
    },
    paginasInstrucciones: {
        type: Number,
        required: function() {
            return this.tipoJuego === 'juego de rol'; // Número de páginas de instrucciones, solo para juegos de rol
        },
        min: 1
    },
    anoPublicacion: {
        type: Number,
        required: function() {
            return this.tipoJuego === 'juego de cartas'; // Año de publicación de las cartas, solo para juegos de cartas
        },
        min: 0
    }
}, {
    timestamps: true // Agrega las fechas de creación y modificación automáticamente
});

// Crear el modelo de Juego
const Juego = mongoose.model('Juego', juegoSchema);

module.exports = Juego;