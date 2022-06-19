import express from 'express';

var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets')//function(req, res, next){
    //console.log(req.url);
    //next();
);

app.get('/', function(req, res){
   res.sendFile(__dirname + '/index.html');
});
app.get('/contact', function(req, res){
   res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:name', function(req, res){
    var data ={age: 29, job: 'ninja', hobbie: ['eating', 'fighting', 'fishing']};
    res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);
