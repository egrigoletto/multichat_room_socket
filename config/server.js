//  importar módulo do express
var express = require('express');

// importa módulo do consign
var consign = require('consign');

// importa módulo do body-parser
var bodyParser = require('body-parser');

// importa joi
var Joi = require('joi');

// inicializa express e body-parser
var app = express();

// configurar as variáveis de view engine para as views
app.set('view engine', 'ejs');
app.set('views','./app/views');

//  configura assets com variável estática
app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({
    extended:true
}));


consign()
.include('app/routes')
.then('app/models')
.then('app/controllers')
.into(app);

module.exports = app;