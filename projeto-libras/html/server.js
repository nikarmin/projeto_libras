// API

const express = require('express');
const router = express.Router();
const app = express();
const path = require('path');
const sendMail = require('../html/email');
const { route } = require('./routes');
const bodyParser = require('body-parser');
const PORT = 3000;
const db = require('../html/db')

//DATA PARSING

app.use(express.urlencoded({
  extended: false
}));
app.use(express.static(__dirname + '/public'));

app.post('/email', (req, res) => {
  //enviar email
  const { email, text } = req.body;
  console.log('Data: ', req.body);

  sendMail(email, text, function(err, data) {
      if(err){
        res.status(500).json({message: 'Erro interno'});
      } else{
        res.json({message: 'Email enviado'});
      }
  });
});

app.use('/', router);
app.use(express.json());

/*
app.get('/about.html', (req, res) => {
  res.sendFile(path.join(__dirname + '/about.html'));
});

app.get('/home.html', (req, res) => {
  res.sendFile(path.join(__dirname + '/home.html'));
});

app.get('/moduloUm.html', (req, res) => {
  res.sendFile(path.join(__dirname + '/moduloUm.html'));
});

app.get('/moduloDois.html', (req, res) => {
  res.sendFile(path.join(__dirname + '/moduloDois.html'));
});

app.get('/moduloTres.html', (req, res) => {
  res.sendFile(path.join(__dirname + '/moduloTres.html'));
});

app.get('/moduloQuatro.html', (req, res) => {
  res.sendFile(path.join(__dirname + '/moduloQuatro.html'));
});

app.get('/moduloCinco.html', (req, res) => {
  res.sendFile(path.join(__dirname + '/moduloCinco.html'));
});

app.get('/materialInsta.html', (req, res) => {
  res.sendFile(path.join(__dirname + '/materialInsta.html'));
});

app.get('/materialYtb.html', (req, res) => {
  res.sendFile(path.join(__dirname + '/materialYtb.html'));
});

app.get('/materialSites.html', (req, res) => {
  res.sendFile(path.join(__dirname + '/materialSites.html'));
});

app.get('/cadastro.html', (req, res) => {
  res.sendFile(path.join(__dirname + '/cadastro.html'));
});*/

const Conta = db.Mongoose.model('esquemaConta', db.PortalLibras, 'users')

router.get('/cadastro', async (req, res) => {
  await Conta.find({}).lean().exec(function(e, listaRegistros){
    res.json(listaRegistros);
    res.end();
  });
});

// fazer carregar css

app.use('/css', express.static('public'))
app.use('/modulo.css', express.static(__dirname + '/css'));

app.listen(PORT, () => console.log('Server está começando na porta, ', 3000));
 