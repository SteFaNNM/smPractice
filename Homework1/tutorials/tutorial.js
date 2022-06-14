// tutorial #4

console.log("hi ninjas");

setTimeout(function(){
    console.log('3 seconds have passed')
}3000);

var time = 0;

var timer = setInterval(() => {
    time += 2;
    console.log(time + 'seconds have passed');
    if(time > 5){
        clearInterval(timer);  //ako vremeto e pogolemo od 5sec zapira intervalot
    }
},2000);

console.log(__dirname);  // pokazuva pateka vo koj folder se naogjame
console.log(__filename);  //pokazuva pateka vo koj file sme

//tutorial #5

//normal function statement
function sayHi(){
    console.log('hi');
}

sayHi();

//function expression

var sayBye = function(){
    console.log('bye');
}

sayBye();


function callFunction(fun){
    fun{};
}

callFunction(sayBye);


//tutorial #6 and #7


var stuff = require('./stuff');

console.log(stuff.counter(['shaun', 'crystal', 'ryu']));

console.log(stuff.adder(5,6));

console.log(stuff.adder(stuff.pi,5));

