// tutorial #6

//prv nacin na kreiranje modul
var counter = function(arr){
    return 'There are' + arr.length + ' elements in this array';

};

var adder = function(a,b){
    return `The sum of the 2 numbers is ${a+b}`;
};

var pi = 3.142;

module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi; 


//vtor nacin za kreiranje modul

// module.exports.counter = function(arr){
//     return 'There are' + arr.length + ' elements in this array';

// };

// module.exports.adder = function(a,b){
//     return `The sum of the 2 numbers is ${a+b}`;
// };

// module.exports.pi = 3.142;

//tret nacin za kreiranje modul

// var counter = function(arr){
//     return 'There are' + arr.length + ' elements in this array';

// };

// var adder = function(a,b){
//     return `The sum of the 2 numbers is ${a+b}`;
// };

// var pi = 3.142;

// module.exports = {
//     counter: counter,
//     adder: adder,
//     pi: pi
// };


