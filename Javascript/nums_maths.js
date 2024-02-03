const score = 400 
console.log(score);

const bal = new Number (100)
console.log(bal) ;

console.log(bal.toString().length) ;
console.log(bal.toFixed(2)); 

const age = 231.4567
console.log(age.toPrecision(3)) ;

const Inval = 100000 ;
console.log(Inval.toLocaleString('en-IN'))

//+++++++++++++++++++++++++++++ math ++++++++++++++++++++++++++++++
//its also used as a object in js like wise num it is default same as num

console.log(Math) ;
console.log(Math.abs(-4));
console.log(Math.round(93232.4)) ;
console.log(Math.ceil(4.2));
console.log(Math.floor(4.6));
console.log(Math.min(4,3,2,5,4,7,9));
console.log(Math.max(2,6,8,7,67,4,4,33,9786));

console.log(Math.random()); // gives val btw 0-1
console.log((Math.random()*10)+1 ); //gives val >= 1 

//for  random val btw desired ranged random value 

const min =  10 ;
const max = 20 ;

console.log(Math.floor(Math.random() * (max - min + 1) + min ) ) ;





