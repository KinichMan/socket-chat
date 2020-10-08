var socket = io();

var params = new URLSearchParams(window.location.search);
if (!params.has('nombre') || !params.has('sala')) {
    window.location = 'index.html';
    throw new Error('El nombre y sala son necesarios');
}

var usuario = {
    nombre: params.get('nombre'),
    sala: params.get('sala')
}

socket.on('connect', function() {
    console.log('Conectado al servidor');
    socket.emit('entrarChat', usuario, function(resp) {
        //QUEREMOS LOS USUARIOS CONECTADOS
        console.log(resp);
    })
});

// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});


// Enviar información
/*
socket.emit('crearMensaje', {
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});
*/

// Escuchar información
socket.on('crearMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);

});

//ESCUCHAR CAMBIOS DE USUARIOS
//CUANDO UN USUARIO ENTRA O SALE DEL CHAT
socket.on('listaPersona', function(personas) {
    console.log('Servidor:', personas);

});

//MENSAJES PRIVADOS (ESCUCHAMOS...)
socket.on('mensajePrivado', function(mensaje) {
    console.log('Mensaje privado ', mensaje);
});