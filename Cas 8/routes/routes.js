var express = require('express');
var router = express.Router();
const indexController = require('../controllers/controllers');


router.get('/', indexController.index )
      .get('/new', indexController.new)
      .get('/car/:id/view', indexController.viewCarInfo)
      .get('/car/:id/edit', indexController.editCarInfo)
      .post('/', indexController.postNewCar)
      .put('/car/:id', indexController.putEditedCar)
      .delete('/car/:id', indexController.deleteCar)
     




 module.exports = router;