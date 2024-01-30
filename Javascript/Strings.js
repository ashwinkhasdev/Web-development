const name = "hitesh"
const repocnt = 50

// console.log (name + repocnt + "old way to add string") ;

console.log(`hii i m  ${name} and have ${repocnt} repos `)

//other way to print declare string
//although both uses as object 

const str = new String("ashwin");

console.log(str[0]); // accesing the 0 indx val 
console.log(str.__proto__); // accesing the proto type of str

console.log(str.length);
console.log(str.toUpperCase()); //using prototype function for further operation 

console.log(str.charAt(2));
console.log(str.indexOf('h'));

const subStr = str.substring(0,4) ;// neg val not accepted in sub str

const sliceStr = str.substring.slice(_-5,1) ; // neg value stsrts frm reverse
 
