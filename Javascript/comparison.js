//console.log(2>1)
//console.log (2 >= 1 )
//console.log(2<1)
//console.log(1 == 2)
//console.log(2 != 1)

console.log(null > 0);  //dont use this type of compari
console.log(null == 0);
console.log(null >= 0);
//the reason is that an equality check == and comparisons > < >= <= work diffrently 
//comparison convert null to a number treating it as 0
//thats why null >= 0 is true and null > 0  is false

