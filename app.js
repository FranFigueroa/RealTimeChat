const express  = require ('express');
const http = require('http');
const socketIo = require ('socket.io');

const app = express();
const server = http.createServer();
const io = socketIo(server);

//configuracion ruta archivos estaticos 
app.use(express.static(__dirname + '/public'));

//maneja las conexiones socket.io
io.on('connection', (socketz) => {
    console.log('Usuario conectado');
});

//maneja los mensajes del chat
socketIo.on('chat message', (msg) =>{
    io.emit('chat message',msg) //emite el mensaje a todos los clientes
});

//maneja las desconexiones de usuarios
socketIo.on('disconect', () =>{
    console.log('Usuario desconectado');
});

//inica el servidor en el puerto 3000

server.listen(3000, () =>{
    console.log('Servidor escuchando en http://localhost:3000');
});


