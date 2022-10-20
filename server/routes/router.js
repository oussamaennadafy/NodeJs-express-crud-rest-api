const express = require('express');
const route = express.Router()

const controller = require('../controller/controller');

// API
route.post('/api/trips', controller.create);
route.get('/api/trips', controller.find);
route.put('/api/trips/:id', controller.update);
route.delete('/api/trips/:id', controller.delete);


module.exports = route