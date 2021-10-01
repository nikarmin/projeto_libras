//teste des. p web II
/*
const express = require('express');
const app = express();

const rotaProdutos = require('./routes/produtos');
app.use('/produtos', rotaProdutos);

const rotaPedidos = require('./routes/pedidos');
app.use('/pedidos', rotaPedidos);

module.exports = app;*/

/*
const rotaProdutos = require('./routes test/produtos');
const rotaPedidos = require('./routes test/pedidos');

app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

module.exports = app; */

const express = require('express');
const app = express();

app.use('/static', express.static('public'));
module.exports = app;

/*
const express = require('express');
const app = express();
const port = 3000;

const user = "portalibras@gmail.com";
const pass = "portallibras0123";

app.get('/', (req, res) => res.send('oi'));
app.get('/send', (req, res) =>{
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        auth()
    })
})
app.listen(port,() => console.log(`Porta ${port}`));*/