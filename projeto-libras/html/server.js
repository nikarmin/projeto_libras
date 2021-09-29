//cria um serviço de http
const http = require('http');
//define uma portão padrão
const app = require('./app');
const port = process.env.port || 3000;

//cria um server
const server = http.createServer(app);
server.listen(port);    //localhost:3000
