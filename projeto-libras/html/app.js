//teste des. p web II
const express = require('express');
const app = express();

app.use('/static', express.static('public'));
module.exports = app;