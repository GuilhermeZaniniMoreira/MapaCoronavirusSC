const axios = require('axios')
const City = require('../models/City.js')

module.exports = {
    async index(request, response) {
        const cities = await City.find()
        return response.json(cities)
    }
}