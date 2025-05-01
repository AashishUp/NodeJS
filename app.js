const greet = require('./greet');
const math = require('./mathUtils');
const calc = require('./calculator');
const converter = require('./converter');

console.log("Greet:",greet("Sita"));

console.log("Addition from same directory:",math.add(2,3));
console.log("Subtraction from same directory:",math.subtract(5,2));

console.log("Addition from other directory:",calc.add(6,3));
console.log("Subtraction from other directory:", calc.subtract(8,2));

console.log ("Temperature converter:",converter.CeltoFahr(37));
console.log ("Kilometer to mile converter:", converter.kmtomiles(10));