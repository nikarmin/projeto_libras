// API

var http = require('http');
var url = require('url');
var fs = require('fs');
const app = require('./app');
const server = http.createServer(app);
server.listen(3000);

/*

//INICIANDO SERVER

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);*/
/*
const express = require('express');
const router = express.Router();

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
*/