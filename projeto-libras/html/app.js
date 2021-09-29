const express = require('express');
const app = express();

//request, response, chamar outro método
app.use((req, res, next) => {
    res.status(200).send({
        mensagem: 'deus te abençoe'
    });
});

module.exports = app;