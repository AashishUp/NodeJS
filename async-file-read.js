const fs = require('fs');

console.log("Start reading file...");
fs.readFile('test.txt', 'utf-8', (err, data) => {
    if(err) throw err;
    console.log("Read data.");
    console.log(data);
});

console.log("End of script.");
// This code demonstrates the asynchronous nature of Node.js.
// The `fs.readFile` function is non-blocking, meaning the script continues executing while the file is being read.