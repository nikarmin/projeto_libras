
const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/web-app')

const conn = mongoose.connection

// Tabela = Collection

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    state: String
},{collection: 'users'}
);

// aba de comentários
const commentsSchema = new mongoose.Schema({
    message:{
        type: String,
        required: true
    },
    state: String
},{collection: 'comments'})

const ObjectId = require('mongodb').ObjectId
module.exports = {Mongoose: mongoose, UserSchema:userSchema, CommentsSchema:commentsSchema}