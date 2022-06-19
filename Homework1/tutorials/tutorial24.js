import express from 'express';

var app = express();

app.get('/', function(req, res){
   res.send('this is the home page');
});
app.get('/contact', function(req, res){
   res.send('this is the contact page');
});

app.get('/profile/:id', function(req, res){
    res.send('You requestet to see a profile with the ID of ' + req.params.id);
});

app.listen(3000);
