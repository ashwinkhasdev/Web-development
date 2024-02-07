//functions 
//exfun() -- with () it execute / without () it refrences

function sayName(){
    console.log("a");
    console.log("s");
    console.log("h");
    console.log("w");
    console.log("i");
    console.log("n");

}
sayName() ;

/*function addTwoNum(num1,num2){

    console.log(num1+num2) ; //we can not return to var dirctly
}
*/
//addTwoNum(3,4);

function addTwoVal(val1,val2){
    return val1+val2 // after return u can not write any thing it will be un reachable 
}

const result = addTwoVal(10,10)

console.log(result);


function loginUser(userName){ // if u give username a val userName = "ash" then it dont call the if  

    if(!userName){
        console.log("enter username");
        return 
    }

    return `${userName} is logged in `
}

console.log(loginUser("ashuK")); //when u dont pass any val that gives undefined 
//val of username can be overwrite by here then the assing val in parameter will not return

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// rest operator "..."

function calculateCartVal(...val) //used in future projects whre cart is used when u dont know how much val will have to take 
{
    return val 
}

console.log(calculateCartVal(23,43,33,12));


//passing obj in function 
const anyUser = {
    userName1 : "ashu",
    age : 21
}

function handleObject(anyObj){
    console.log(`username is ${anyObj.userName1} and age is ${anyObj.age}`)
}

//handleObject(anyUser);

// another way to pass
handleObject({
    userName:"ashuK",
    age : 22 
})

// passsing array in function 

const arrFun = [1,2,3,4,5,6];

function returnFunVal(fArr1){

    return fArr1[1]
}

console.log(returnFunVal(arrFun)) ;
//console.log(returnFunVal(1,2,3,34,5,5,6,6)) # also can assign directly here

