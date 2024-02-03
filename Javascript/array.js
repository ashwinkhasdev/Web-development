//its an object in js 
//#can contain diff datatype's var
//#resizable

const arr1 = [1,2,3,4,5,true,"ask"] ;

//other way to declare

const arr2 = new Array(1,2,3,4,5) ;

// Array methods 

arr2.push(121);
arr2.pop();

arr2.unshift(98) ; // add val nat first of the array by shifting the arry 
arr2.shift(); // remove shifted first val 

console.log(arr2.includes(2)); //finds val in array
console.log(arr2.indexOf(3)); // shows indx of val 

const strArr = arr2.join() ; // converts to string by joining 
console.log(typeof(strArr));

console.log(arr2) ; 


// slice or splice

const newArr1 = [1,2,3,4,5,6,7];

const slcArr1 = newArr1.slice(1,4);
console.log(newArr1);
console.log(slcArr1);

const splArr = newArr1.splice(1,4);
console.log(newArr1);
console.log(splArr);