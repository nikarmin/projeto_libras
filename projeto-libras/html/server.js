// API

const express = require('express');
const router = express.Router();
const app = express();
const path = require('path');
const sendMail = require('../html/email');
const { route } = require('./routes');
const bodyParser = require('body-parser');
const PORT = 3000;
const db = require('../html/db');
const { routes } = require('./app');

//DATA PARSING

app.use('/', router);
app.use(express.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

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

//app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/home.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname + '/about.html'));
});

app.get('/moduloUm', (req, res) => {
  res.sendFile(path.join(__dirname + '/moduloUm.html'));
});

app.get('/moduloDois', (req, res) => {
  res.sendFile(path.join(__dirname + '/moduloDois.html'));
});

app.get('/moduloTres', (req, res) => {
  res.sendFile(path.join(__dirname + '/moduloTres.html'));
});

app.get('/moduloQuatro', (req, res) => {
  res.sendFile(path.join(__dirname + '/moduloQuatro.html'));
});

app.get('/moduloCinco', (req, res) => {
  res.sendFile(path.join(__dirname + '/moduloCinco.html'));
});

app.get('/materialInsta', (req, res) => {
  res.sendFile(path.join(__dirname + '/materialInsta.html'));
});

app.get('/materialYtb', (req, res) => {
  res.sendFile(path.join(__dirname + '/materialYtb.html'));
});

app.get('/materialSites', (req, res) => {
  res.sendFile(path.join(__dirname + '/materialSites.html'));
});

app.get('/cadastro', (req, res) => {
  res.sendFile(path.join(__dirname + '/cadastro.html'));
});

const Users = db.Mongoose.model('esquemaConta', db.UserSchema, 'users')

router.get('/usuarios', async (req, res) => {
  await Users.find({}).lean().exec(function (e, listaRegistros) {
  res.json(listaRegistros);
  res.end();
  });
});

app.set('view engine', 'ejs');

router.get('/usuarioscadastrados', async (req, res) => {
const listaUsuarios = await Users.find({}).lean().exec();
res.render('formusers', {listaUsuarios})
});

// arrumar dando erro
router.post('/incluirusuario', async(requisicao,resposta) => {
  let username = requisicao.body.username 
  let email = requisicao.body.email
  let password = requisicao.body.password
  let state = requisicao.body.state
  let usuario = new Users({username, email, password, state})
  try{
  await usuario.save()
  resposta.redirect('/usuarioscadastrados')
  }
  catch(err){
  next(err)
}});

/* GET Incluir novo usuário. */
router.get('/incluirusuario', (req, res) => {
  res.render('cadastro', { title: 'Cadastro Usuário'})
});

// fazer carregar css

app.use('/css', express.static('public'))
app.use('/modulo.css', express.static(__dirname + '/css'));

app.listen(PORT, () => console.log('Server está começando na porta, ', 3000));
 