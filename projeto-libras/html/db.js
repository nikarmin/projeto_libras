
const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/web-app')

const conn = mongoose.connection

// Tabela = Collection

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    state: String
},{collection: 'users'}
)

const ObjectId = require('mongodb').ObjectId
module.exports = {Mongoose: mongoose, UserSchema:userSchema}