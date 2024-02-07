//Object.create --> typ of decleration of object by constructor --> singleton


//Object literals

const mySym = Symbol("key1");
const JsUser = {
    name : "Ashwin" , // name taked as string
    [mySym] : "mySymKey",
    age : 21 ,
    loc : "Bhopal",
    lastLog : ["mon","tue"],
    "email" : "ashwin@gmail.com"
}

console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);

// Object.freeze(JsUser) ; //freezing it nochnge will happens then 


//function in object 
// we are adding a fun in Jsuser object by manking an var
 JsUser.Greeting = function(){
    console.log("function is worlking");
}

JsUser.GreetingTwo = function(){
    console.log(`hello ${this.name}`); // here refrencing same object's name var 
}
console.log(JsUser.Greeting()); //it gives value 
console.log(JsUser.GreetingTwo()) ;
console.log(JsUser.Greeting); // it gives reference of the function 
 
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const UserId = new Object() ; othr way to declare obj but it is singlton 
const UserId = {}

UserId.id = "123abc"
UserId.name = "ask"
UserId.isLogged = false ;

console.log(UserId);

//nested object

const regUser = {
    email : "ask@gmail.com",
    userFullName : { 
       user1 : {
        firstName : "ashwin",
        lastName : "khasdev"
       }
    }
}

console.log(regUser.userFullName.user1.firstName);

//concatenate two object 

const obj1 = {1: "A" ,2:"B"} ;
const obj2 = {3:"C" , 4 : "D"} ;

const obj3 = Object.assign( {},obj1,obj2) ; // first is var is the target and the rest is the source so for that we have puted an empty {} to store all in it 

console.log(obj3) ;

//const obj3 = Object.assign( {},obj1,obj2) 
//console.log( obj3 === obj1 ) ; true coz obje3 = obj1 all the sourse elements are copied in obj1

//another way the spread way 

const objNew = {...obj1 , ...obj2} //mostly used
console.log(objNew);
 

// in web u get all te val in rteurn will be in array formate 

const arrObj = [
     {
        id : "123abc",
        name : "ask"
     } , 
     {
        id : "123abc",
        name : "ask"
     } 

]

console.log(arrObj);
console.log(arrObj[1]) ;

console.log(Object.keys(UserId)) ; //returns #key in arr form  // user id obj is decl at the top side 
console.log(Object.values(UserId));//returns #val in arr form // # the arr format return val --usefull while looping arr of obj

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// de - structuring of object
// used when u wnts a more clean use of obj var 

const course = {

    courseName : "js playlist",
    courseInst : "hitesh"
    
}

//usally we use this to prin a var --> course.courseName 
const {courseInst} = course ; // can give it desired name to by --> {courseInst : inst}
 console.log(courseInst);
