

require('colors');

let http = require('http');
let express = require('express');

var app = express();
app.use(express.static('./public'));

var server = http.createServer(app);
server.listen(3000);

console.log('Servidor rodando'.rainbow);
