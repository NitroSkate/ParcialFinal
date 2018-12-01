const mongoose = require('mongoose');

let colegio = new mongoose.Schema({
    Nombre: String,
    Linea: String,
    Mensualidad: Number
});
module.exports = mongoose.model('colegio', colegio);