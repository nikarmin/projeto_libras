// ARRUMAR

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/web-app');

const conn = mongoose.connection;

// Tabela = Collection

const PortalLibras = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    state: String
},{collection: 'user'}
)

const ObjectId = require('mongodb').ObjectId
module.exports = {Mongoose: mongoose, PortalLibras:PortalLibras}