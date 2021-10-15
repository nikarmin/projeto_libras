const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.status(200).send({
        mensagem: 'beleza'
    });
})

routes.set('/', (req, res) => {
    return res.json();
})

routes.patch('/', (req, res) => {
    return res.json();
})

routes.delete('/', (req, res) => {
    return res.json();
})

module.exports = routes;