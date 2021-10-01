/*const http = require('http');
const app = require('../app');
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);*/

/*const http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
}).listen(8080);*/

//app.listen(3000, '127.0.0.1');

//adicionando endereço http com /moduloUm.html (exemplo)

var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req,res){
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function(err, data){
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);

console.log('funcionando');

//Enviar email

require('dotenv').config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
  }
});

let mailOptions = {
  from: 'portalibras@gmail.com',
  to: 'nikafworks@gmail.com',
  subject: 'Portal Libras - FeedBack',
  text: 'merda'
}

transporter.sendMail(mailOptions, function(err, info) {
  if(err){
    console.log("DEU RUIM"+err);
  }
  else{
    console.log("DEU CERTO");
  }
})

//node server.js