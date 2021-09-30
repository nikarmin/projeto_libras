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
/*
var nodemailer = require('nodemailer');
const { getMaxListeners } = require('process');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'portalibras@gmail.com',
        pass: 'portallibras0123'
    }
});

var mailOptions = {
    from: 'portalibras@gmail.com',
    to: 'cc21689@g.unicamp.br',
    subject: 'Portal Libras - Teste',
    text: 'Testando email :)'
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }
    else{
        console.log('Email tarara: '+info.response);
    }
});*/

//node server.js