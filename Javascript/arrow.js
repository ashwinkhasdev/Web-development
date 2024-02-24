const user = {
    username : "hitesh",
    price : 98,
    
    welMessage: function(){
        console.log(`${this.username }, welcome `) // here 'this '  will  tal
        console.log(this) //prints current context means all the data 
    }
}   

///*
user.welMessage() // out -> hitesh welcom
user.username = "sam" ;
user.welMessage()  // out -> sam welcom



// if there is no object globly then 

//console.log(this)// gives an empty object  in node environment but if it runs in  browser then it refers to window 



function exThis(){
   // const username = "heet"
    console.log(this);
}

const exTHIS = function(){
    username  = "ram"
    console.log(this.username)  ;
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// arrow function 

const exArrow = () => {
    console.log("this is arrow func");
}

exArrow();


const addTwoNum = (num1,num2)=>{
    return num1+num2 
    
}

// const addTwoNum = (num1,num2) => num1+num2 // no need to use return
// const addTwoNum = (num1,num2) => (num1+num2)

console.log(addTwoNum(1,2)) ;

