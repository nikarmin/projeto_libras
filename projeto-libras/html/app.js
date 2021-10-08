//teste des. p web II

const express = require('express');
const app = express();

/*  Teste Desenvolvimento p/ internet
const rotaProdutos = require('./produtos');
app.use('/produtos', rotaProdutos);

const rotaPedidos = require('./pedidos');
app.use('/pedidos', rotaPedidos);
*/
const rotaRegistro = require('./routes/registro');
app.use('/registro', rotaRegistro);

module.exports = app;

/*
const express = require('express');
const app = express();

app.use('/static', express.static('public'));
module.exports = app;


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