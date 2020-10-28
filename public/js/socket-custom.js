var socket = io();
// se ejecuta cuando se conecta al servidor
// on escuchar mensajes
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// se ejecuta cuando pierde conexion con el servidor
socket.on('disconnect', function() {
    console.log('perdimos conexion con el servidor');
});

// emit es para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Jaime',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta servidor: ', resp);
});

// escuchar informacion de servidor
socket.on('enviarMensaje', (mensaje) => {
    console.log('Servidor ', mensaje);
});