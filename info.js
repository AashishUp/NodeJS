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