const express = require('express');
const app = express();

const rotaProdutos = require('./routes test/produtos');
const rotaPedidos = require('./routes test/pedidos');

app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

module.exports = app;