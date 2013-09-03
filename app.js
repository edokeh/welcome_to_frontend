var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));
app.post('/ball', function (req, res) {
    io.sockets.emit('drop', { time : Date.now() });
    res.send('ok');
});

var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
server.listen(80);

module.exports = app;