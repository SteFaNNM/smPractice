// const cars = [{id: 1, carName: 'Mercedes', carType: 'S500', year: 2015}]
const Car = require('../models/carmodel');
const cars = [];


module.exports = {
    index: async ( req, res) => {

        const cars = await Car.find();

        res.render( 'index', { title: 'Cars',  cars: cars});
    },


    viewCarInfo: async ( req, res) => {
        const car = await Car.findById(req.params.id);

        res.render('car-info', {car: car});
    },


    editCarInfo: async ( req, res) => {
        const car = await Car.findById(req.params.id);

        res.render('edit-car', { car: car});
    },

    new: ( req, res) => {
        res.render('new');
    },

    postNewCar: async ( req, res) => {
        // const car = req.body;
        // car.id =car.length +1;

        // car.push(car);
        await Car.create(req.body);
        res.redirect('/');
    },

    putEditedCar: async(req, res) => {
        //  carIndex = Car.findIndex((car => car.id == req.params.id));
        //  Car[carIndex] = req.body;

         
         
        const car = await Car.findByIdAndUpdate(req.params.id, req.body);
        // const post = await Post.findById(req.params.id);
  
        // res.send({
        //     error: false,
        //     message: `Post with id #${post._id} has been updated`,
        //     post: post,
        
        res.send({
            success: true
        });

        
  
    }, 

    deleteCar: async(req, res) => { 
        
        //  const car = Car.findIndex((car => car.id == req.params.id));
         
        const car = await Car.findByIdAndDelete(req.params.id);
        
         res.send({
            success: true
         });
   
    
    
  
    res.send({
      error: false,
      message: `Post with id #${req.params.id} has been deleted`,
    });
    }
}
