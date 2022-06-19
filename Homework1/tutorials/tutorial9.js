import fs from 'fs'; //var fs = require('fs');

var readMe = fs.readFileSync('readme9.txt', 'utf8', (err, data) => {
    fs.writeFile('writeMe.txt', data);    
    //console.log(data);
    } );  
//synchronous method meaning that if we have any code underneath here its going to go out and fully read thisfile before it moves on to any other code
                    //blocking code
console.log('test');
//console.log(readMe);

fs.writeFilesSync('writeMe.txt', readMe);
//synchronous writing files and the contents in the new variable are the same as var readMe


