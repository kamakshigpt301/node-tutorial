// CommonJS, every file in node is module (by default)
// Modules - Encapsulated Code (only share minimum)

/* const secret = 'SUPER SECRET'
const john = 'john'
const peter = 'peter' 

const sayHi = (name) =>{
    console.log(`Hello there ${name}`);
} */


const names = require('./4-names');
const sayHi = require('./5-utils');
console.log(names);

const data = require('./6-alternative-flavor')
require('./7-mind-granede')
//console.log(data)



/* sayHi('Susan')
sayHi(names.john)
sayHi(names.peter) */ 
