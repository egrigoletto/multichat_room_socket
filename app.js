// importa as configurações do servidor
var app = require('./config/server');

// parametriza a porta de escuta, vai ser 80 nesse caso
//colocar a porta como variável vai permitir que o socket.io use a mesma porta para fazer a escuta de suas requisisções
//com isso posso manter as requisições do socket e do app em si na mesma porta, mas eu posso manter portas diferentes para as duas nesse caso

var server = app.listen(80, function() {
    console.info('Servidor Online')
})

//escuta no socket
var io = require('socket.io').listen(server);

//app.set é uma função do nodejs que seta globalmente no app(application) uma variável
app.set('socketIo', io);

//cria a concexão no websocket 
//evento de conexão, verifica quando do lado do cliente é feita uma tentativa de conexão
io.on('connection', function(socket){
    console.log('Um usuário se conectou ao chat');
    console.log('id: ' + socket.id)

    socket.on('disconnect', function(){
        console.log('Um usuário se desconectou do chat');
    console.log('id: ' + socket.id)
    })
});