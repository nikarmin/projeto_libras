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
const methodOverride = require('method-override');  //comments
const session = require('express-session');
const { UserSchema } = require('../html/db');
const bcrypt = require('bcryptjs');

//DATA PARSING

app.use(session({secret: 'shdauipogbdsklhdasoi'}));

app.use(methodOverride('_method'));

// fazer carregar css só q n funciona
//app.use('/css', express.static('css'));
app.use(express.static(__dirname));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.urlencoded({
  extended: false
}));

app.use('/', router);
app.use(express.json());

const Users = db.Mongoose.model('esquemaUsers', db.UserSchema,'users');
const Comments = db.Mongoose.model('esquemaComments', db.CommentsSchema, 'comments');
const Login = db.Mongoose.model('esquemaLogin', db.LoginSchema, 'login');

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

// GETTERS

app.get('/home.html', (req, res) => {
  res.sendFile(path.join(__dirname + '/home.html'));

  if(req.session.login){
    res.render('sucess');
  }
  else{
    res.render('cadastro');
  }
});

app.get('/about.html', (req, res) => {
  res.sendFile(path.join(__dirname + '/about.html'));
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
});

app.get('/sucess.html', (req, res) => {
  res.sendFile(path.join(__dirname + '/sucess.html'));
});

router.get('/usuarios', async (req, res) => {
  await Users.find({}).lean().exec(function (e, listaRegistros) {
  res.json(listaRegistros);
  res.end();
  });
});

//POSTTERS

//TENTANDO O LOGIN AQUI FML e não dá certo ve se pode
router.post('/home.html', async(requisicao,resposta) => {
  let email = requisicao.body.email
  let password = requisicao.body.password
  const auth = await Users.findOne({email});
  try{
    //if(auth && bcrypt.compareSync(password, auth.hash))
  if(Users.find({email: {email}, password: {password}})){
    requisicao.session.login = email;
    resposta.redirect('/sucess.html');
    console.log(Users.find({email: {email}, password: {password}}));
  }
  //resposta.redirect('/sucess.html')
  else{
    console.log("deus pq?")
  }
}
  catch(err){
  next(err)
}});

router.post('/about.html', async(requisicao,resposta) => {
  let email = requisicao.body.email
  let password = requisicao.body.password
  let usuario = new Login({email, password})
  try{
  await usuario.save()
  resposta.redirect('/home.html')
  //console.log(email)
  }
  catch(err){
  next(err)
}});

router.post('/moduloUm.html', async(requisicao,resposta) => {
  let email = requisicao.body.email
  let password = requisicao.body.password
  let usuario = new Login({email, password})
  try{
  await usuario.save()
  resposta.redirect('/home.html')
  //console.log(email)
  }
  catch(err){
  next(err)
}});

router.post('/moduloDois.html', async(requisicao,resposta) => {
  let email = requisicao.body.email
  let password = requisicao.body.password
  let usuario = new Login({email, password})
  try{
  await usuario.save()
  resposta.redirect('/home.html')
  //console.log(email)
  }
  catch(err){
  next(err)
}});

router.post('/moduloTres.html', async(requisicao,resposta) => {
  let email = requisicao.body.email
  let password = requisicao.body.password
  let usuario = new Login({email, password})
  try{
  await usuario.save()
  resposta.redirect('/home.html')
  //console.log(email)
  }
  catch(err){
  next(err)
}});

router.post('/moduloQuatro.html', async(requisicao,resposta) => {
  let email = requisicao.body.email
  let password = requisicao.body.password
  let usuario = new Login({email, password})
  try{
  await usuario.save()
  resposta.redirect('/home.html')
  //console.log(email)
  }
  catch(err){
  next(err)
}});

router.post('/moduloCinco.html', async(requisicao,resposta) => {
  let email = requisicao.body.email
  let password = requisicao.body.password
  let usuario = new Login({email, password})
  try{
  await usuario.save()
  resposta.redirect('/home.html')
  //console.log(email)
  }
  catch(err){
  next(err)
}});

router.post('/materialInsta.html', async(requisicao,resposta) => {
  let email = requisicao.body.email
  let password = requisicao.body.password
  let usuario = new Login({email, password})
  try{
  await usuario.save()
  resposta.redirect('/home.html')
  //console.log(email)
  }
  catch(err){
  next(err)
}});

router.post('/materialYtb.html', async(requisicao,resposta) => {
  let email = requisicao.body.email
  let password = requisicao.body.password
  let usuario = new Login({email, password})
  try{
  await usuario.save()
  resposta.redirect('/home.html')
  //console.log(email)
  }
  catch(err){
  next(err)
}});

router.post('/materialSites.html', async(requisicao,resposta) => {
  let email = requisicao.body.email
  let password = requisicao.body.password
  let usuario = new Login({email, password})
  try{
  await usuario.save()
  resposta.redirect('/home.html')
  //console.log(email)
  }
  catch(err){
  next(err)
}});

app.set('view engine', 'ejs');

router.get('/usuarioscadastrados', async (req, res) => {
const listaUsuarios = await Users.find({}).lean().exec();
res.render('formusers', {listaUsuarios})
});

router.get('/excluirusuario/:id',async(requisicao,resposta) => {
  let id = requisicao.params.id
  Users.findByIdAndRemove(id, () => {
  resposta.redirect('/usuarioscadastrados')
})});

// Cadastrar um usuário
router.post('/incluirusuario', async(requisicao,resposta) => {
  let username = requisicao.body.username
  let email = requisicao.body.email
  let password = requisicao.body.password
  let state = requisicao.body.state
  let usuario = new Users({username, email, password, state})
  try{
  await usuario.save()
  resposta.redirect('/home.html')
  }
  catch(err){
  next(err)
}});

/* GET Incluir novo usuário. */
router.get('/incluirusuario', (req, res) => {
  res.render('formincluir', { title: 'Cadastro de Usuário'})
});

// comments será q um dia isso vai dar certo?
/*
app.set('about', path.join(__dirname, 'public'));

app.get('/about', (req, res) => {
  Comments.find({}, (err, result) => {
    if(err){
      console.log(err);
      throw err;
    }
    res.render('about', {commentList: result});
  })
  console.log('home');
});

app.post('/newComment', (req, res)=>{
  console.log(req.body);
  Comments.create(req.body, (err, comments)=>{
      if (err){
          console.log(err);
          throw err;
      }
      console.log(comments);
  })
  res.redirect('/');
  console.log('Comment added');
})
*/
app.listen(PORT, () => console.log('Server está começando na porta,',3000));
 