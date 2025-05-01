function add (a, b) {
    return a+b;
}

function subtract (a,b){
    return a-b;
}

module.exports = {add, subtract};
// This code exports two functions, add and subtract, which perform addition and subtraction respectively
// you can use these functions in other files by importing them using require('./mathUtils.js')
// You can also do module.exports = { add, subtract }; to export both functions at once.
// This way, you can import them using destructuring syntax in the importing file
// const { add, subtract } = require('./mathUtils.js');