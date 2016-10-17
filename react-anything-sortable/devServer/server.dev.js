var express = new require('express')
var app = express()
var port = 5145
var proxy = require('express-http-proxy');
var path = require('path');

//
app.all('/fake', function (req, res, next) {
    setTimeout(function () {
        if(req.callback){
            res.jsonp({ user: 'tobi' })
        }else{
            res.json({ user: 'tobi' })
        }
    },1000)

});
app.use('/test', express.static(path.join(__dirname, '../test')));
app.use('/tmp', express.static(path.join(__dirname,  '../tmp')));
app.use('/dist', express.static(path.join(__dirname,   '../dist')));
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
});
app.use('/', proxy('localhost'));



app.listen(port, function(error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
    }
});
