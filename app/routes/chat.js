module.exports = function(application, req, res){
    const {check, validationResult} = require('express-validator');
    
    application.post('/chat', [
        check('apelido','Apelido é obrigatório').not().isEmpty(),
        check('apelido','O apelido deve conter entre 10 e 20 caracteres').isLength({min: 3, max: 20})
      ],function(req, res){
            application.app.controllers.chat.iniciaChat(application, req, res, validationResult)
    });

    application.get('/chat',[
        check('apelido','Apelido é obrigatório').not().isEmpty(),
        check('apelido','O apelido deve conter entre 10 e 20 caracteres').isLength({min: 3, max: 20})
      ] ,function(req, res){
          application.app.controllers.chat.iniciaChat(application, req, res, validationResult)
    });
}

