const routes = require('express').Router();
const EmailController = require('./Controllers/EmailController')


routes.post('/email', EmailController.send);

module.exports = routes;