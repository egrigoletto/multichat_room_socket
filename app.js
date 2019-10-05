// importa as configurações do servidor
var app = require('./config/server');

// parametriza a porta de escuta, vai ser 80 nesse caso
app.listen(80, function() {
    console.info('Servidor Online')
})
