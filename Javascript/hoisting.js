// ex - of hoisting 


addone(5) // here it gives 6 when print it 
function addone(num){
    return num+1
}

addone(5)// nd here it throw an error coz we stored it in a var 
const addtwo = function(num){
    return num+2
}