const express = require('express');
// usar socket
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');
const { constants } = require('buffer');

const app = express();

const publicPath = path.resolve(__dirname, '../public');
let server = http.createServer(app);
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//IO = conecion directa o comunicaion del backend
module.exports.io = socketIO(server);
require('./sockets/socket');


server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${ port }`);
});