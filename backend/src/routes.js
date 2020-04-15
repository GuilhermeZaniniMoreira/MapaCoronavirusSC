const { Router } = require('express');
const CityController = require('./controllers/CityController');
const routes = Router();

routes.get('/cities', CityController.index);

module.exports = routes;