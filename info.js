const os = require('os');

console.log("Current file:",__filename);
console.log("Current directory:",__dirname);
console.log("Platform: ", os.platform());
console.log("CPU Cores:", os.cpus().length);
console.log("Home directory:", os.homedir());
console.log("Node version:", process.version);
console.log("User info:", os.userInfo());
console.log("System uptime:", os.uptime(), "seconds");
console.log("System uptime:", os.uptime()/3600, "hours");

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
