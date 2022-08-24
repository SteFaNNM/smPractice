var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());



const router = require('./routes/routes')
const mongoose = require('mongoose');



app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb://127.0.0.1:27017/cas-8');

app.use('/', router);


app.listen(3005);