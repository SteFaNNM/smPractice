import http from 'http'; //var http = require('http');

var server = http.createServer(function(req, res){
    console.log('reques was made:' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey ninjas');
});

server.listen(3000, "127.0.0.1");
console.log('yo dawgs, now listening to port 3000');
