function greet(name) {
    return`"Hello, ${name}!"`; //Use "`" instead of '' or "" to avoid escaping quotes
    // This is a template literal, which allows for string interpolation in JavaScript
    // The function takes a name as an argument and returns a greeting message
}
// Export the greet function as a module
// This allows other files to import and use the function
module.exports = greet;
