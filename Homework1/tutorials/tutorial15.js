import http from 'http'; //var http = require('http');

var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + './readme14.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + './writeme14.txt');



myReadStream.on('data', function(chunk){
    console.log('new chunk recieved');
    myWriteStream.write(chunk);
});
