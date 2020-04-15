const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
    nome: String,
    latitude: Number,
    longitude: Number,
    casos: Number
});

module.exports = mongoose.model('City', CitySchema);