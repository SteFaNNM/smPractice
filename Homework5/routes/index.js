var express = require('express');
var router = express.Router();
const indexController = require('../controllers/index');


router.get('/', indexController.index)
      //.get('/hehe', indexController.hehe)
      .get('/create', indexController.create)
      .get('/user/:id/view', indexController.viewUser)
      .get('/user/:id/edit', indexController.editUser)
      .post('/', indexController.postCreate)
      .put('/user/:id', indexController.putEditUser)
      .post('/user/:id/delete', indexController.deleteUser)



module.exports = router;