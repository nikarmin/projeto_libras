//INICIANDO SERVER

const express = require('express');
const routes = require('./routes');

const app = express();
const path = require('path');
const sendMail = require('./email');
const { route } = require('./routes');

const PORT = 8080;

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

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/about.html'));
});

app.listen(PORT, () => console.log('Server está começando na porta, ', 8080));
