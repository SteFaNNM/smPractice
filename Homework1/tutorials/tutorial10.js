import fs from 'fs'; //var fs = require('fs');

//fs.unlink('writeMe.txt') // deleting file

//fs.mkdirSync('stuff1'); //creating directories

//fs.rmdirSync('stuff1');  //deleting directories

fs.mkdir('stuff1', function(){
    fs.readFile('readMe.txt', 'utf8', function(err, data){
        fs.writeFile('.stuff1/writeMe.txt', data)
    })
});


fs.unlink('./stuff1/writeMe.txt', function(){
    fs.rmdir('stuff1');
});

