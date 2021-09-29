const http = require('http');
const app = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Olá mundo!\n');
});

app.listen(3000, '127.0.0.1');
console.log('funcionando');

//node server.js