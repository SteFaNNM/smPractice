//kreirame const express, pa potoa nova const router koja e funkcija od express.Router()
const express = require("express");
const router = express.Router()

router.use(logger);  // 


router.get('/',(req, res)=>{
    res.send("User List");
});

router.get('/new', (req, res) =>{
    res.render("users/new");
});
//kreiranje na nov user
router.post('/', (req, res)=>{
    const isValid = true;
    if(isValid){
        users.push({ firstName: req.body.firstName});
        res.redirect( `/users/${users.length - 1}`)
          } else {
            console.log("Error");
            res.render("users/new" , {firstName: req.body.firstName})
          }
   console.log(req.body.firstName)
});

router.get('/:id', (req, res)=>{
   // req.params.id
    res.send(`Get User With ID ${req.params.id}`);

});

//vtor nacin na kreiranje router:

router.route('/:id')

.get((req, res)=>{
   console.log(req.user);
    res.send(`Get User With ID ${req.params.id}`)})
.put((req, res)=>{
        
    res.send(`Update User With ID ${req.params.id}`)})
.delete((req, res)=>{
            
     res.send(`Delete User With ID ${req.params.id}`)});

const users = [{name: "Kyle"}, {name: "Sally"}];
router.param('id', (req, res, next, id)=>{
    req.user = users[id];
    console.log(id);
    next()
});


function logger(req, res, next){
    console.log(req.originalUrl);
    next()
};
         

module.exports = router