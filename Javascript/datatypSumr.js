// primitive
// 7 typ : String,Number,boolean,null,undefined,Symbol,BigInt

//Refrence ( Non primitive)
//Array , Objects , Funtions

 const id = Symbol('123') 
 const antId = Symbol('123') //it gives a unique val even the inp is same 
 
 console.log(id === anotherId); //output -> false 


const bigNumber = 25487231568823745234567512n ; // put n  for bigInt 

const array = ["A","B","C"]; // array 

//object 
let myObj = {

    name : "hitesh" ,
    age: 22 , 
}

//Function
const myFunction = function(){
    console.log("hii" ) ;
}
