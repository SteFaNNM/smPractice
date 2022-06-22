const express = require('express');
const app = express();


//koga koristime staticki fajlovi kako html:
app.use(express.static('public'));
//da prepoznavva formi:
app.use(express.urlencoded({extended: true}));

//koga koristime json:
app.use(express.json());

//koga koristime dinamicki fajlovi EJS:
app.set('view engine', 'ejs');
//app.use(logger);

app.get('./', (req, res)=>{
    console.log("Here")
   // res.sendStatus(500).send("hi") //error na serverot
    //res.send('Hi')
    //koga sakame da koristime json file:
   // res.status(500).json({message:"Error"})
    
    //koga sakame da mu ponudime na korisnikot da dowloadira file
    //res.download('server.js');

    res.render("index",{ text: "World"}); 
});

const userRouter = require("./routes/users");
//const postRouter = require("./routes/posts");

app.use('/users', userRouter );
//app.use('/posts', postRouter );



//aktivacija na serverot:
app.listen(3000);
