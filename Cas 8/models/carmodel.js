const mongoose = require('mongoose');

const carSchema = mongoose.Schema(
  {
    car_name: {
      type: String,
      required: true,
    },

    car_type: {
      type: String,
      required: true,
    },

    year: {
        type: Number
    },

    color:{
        type: String,

    },

    in_stock:{
      type:Boolean,
      required:true
    }
   
  },
  { timestamps: true }
);

module.exports = mongoose.model('car', carSchema);