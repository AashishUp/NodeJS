console.log("Hello, World!");
console.log("This is a simple Node.js application.");
let name={
    firstName: "John",
    lastName: "Doe",
    address:{
        city: "Kathmandu",
        country: "Nepal"}
};
console.log(name.address.city);
console.log(__dirname);    // Current directory
console.log(__filename);   // Current file name
console.log(process);      // Node process info
