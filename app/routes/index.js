module.exports = function(application){
    application.get('/', function(req, res){
        application.app.controllers.index.abreIndex(application, req, res)
        
    });
}
