//its an object in js ==========================================
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

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const exArr1 = ["nuts", "screw", "fiber","rage"] ;
const exArr2 = [1,2,3,4,5];

//exArr1.push(exArr2); // it not joins the sec arr it push it as var in it

//console.log(exArr1);
//console.log(exArr1[4][2]);

const allVar = exArr1.concat(exArr2); //it combines two arr
console.log(allVar);

const newAllVar = [...exArr1, ...exArr2] ; //#spread arr -- it also combines but can contain more than 1 arr


const arr5 = [1,2,3,[12,32,43],45,6,[91,92,[93,94],87]] ;
const arrFlt5 = arr5.flat(Infinity); //# flat arr -- concatenate all sub-arr elements 

//console.log(arrFlt5);


console.log(Array.isArray("ask")); // is arry or not 
console.log(Array.from("Ashwin")); // converts in array
console.log(Array.from({name : "ask"})) ;// in this object is given nd it results empty coz we dont specified which val have to return like key , name or something




