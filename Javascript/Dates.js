//In futyre acc to mdn it can bve use as object like we use math obj anywhere in worksheet

//its a typeOf = object 

let date = new Date();

console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toJSON());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());

//crete own date
let myCreatedDate = new Date(2023 , 0 ,14 ) // mon strs from 0 in js 

//let myCreatedDate = new Date(2023,0,23 ,5 ,3 ) with time 
//let myCreatedDate = new Date("01-12-2023" ) to write in local area syntax

console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now(); // give milisec from the jan 1st to now  

console.log(myTimeStamp);
console.log(myCreatedDate.getTime()) ; 
console.log(Math.floor(Date.now() / 1000)) ; // gives time in sec 

//to get specific day/date/ month 

let newDate = new Date() ;

console.log(newDate);
console.log(newDate.getMonth()) ;
console.log(newDate.getDay()) ;

// costomise the date 

newDate.toLocaleString('Default', {
    weekday : "long" ,
    // timeZone : "+5 GT"
})  



