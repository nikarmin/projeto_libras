//teste des. p web II

const express = require('express');
const app = express();

app.use('/static', express.static('public'));
module.exports = app;

/*
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('oi'));
app.listen(port,() => console.log(`Porta ${port}`));*/