module.exports.iniciaChat = function(application, req, res, validationResult){
    var validation = validationResult(req)
    if (validation.errors[0] && validation.errors[0].msg){
        console.error("Houve um erro ao entrar no chat");
        // res.send("Houve um erro ao entrar no chat </br>"+ validation.errors[0].msg +"");
        res.render('index', {erros: validation.errors})
    } else {
        // pega o objeto io setado como global
        application.get('socketIo').emit('msgRequest', 
            {
                apelido: req.body.apelido,
                mensagem: "Acaba de entrar na sala"
            }
        );
        
        res.render('chat');
    }
    
}