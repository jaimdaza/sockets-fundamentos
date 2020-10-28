const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        /*  if (mensaje.usuario) {
              callback({
                  resp: 'Todo salio bien!'
              });
          } else {
              callback({
                  resp: 'Todo salio maaal!'
              });
          }
*/
        //  enviar a todos el msj
        client.broadcast.emit('enviarMensaje', data);
        console.log(data);
    });

    client.emit('enviarMensaje', {
        usuario: 'ADMIN',
        mensaje: 'Bienvenido a esta aplicacion'
    });
});