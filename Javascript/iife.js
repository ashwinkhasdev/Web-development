// Immediately Invoked function expresssion (IIFE)
// it needed when immedeat execution of a func be done 
// used to reduce the pollution in the global scope 

(function exIIFE(){ // can say named iife also 
    console.log("invoke func runs");
})(); // semicolon to let know the previous program where to stop and to exe nxt 

// when two iife is there dont forget to use semicolon in the previos one

((name)=> { // can say unnamed iife also 
    console.log(`invoke runnig ${name}`)
})("ashwin");