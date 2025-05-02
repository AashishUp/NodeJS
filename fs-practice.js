const fs= require ('fs');
//Async
fs.writeFile('test.txt', 'Hello world!', (err)=>{
    if (err) throw err;
    console.log('File created!');
});

// Sync
fs.writeFileSync('test-sync.txt', 'This is written synchronously!');

//Async
fs.readFile('test.txt', 'utf-8', (err, data)=>{
    if (err) throw err;
    console.log(data);
});

//sync
const data = fs.readFileSync('test-sync.txt', 'utf-8');
console.log('Sync data:', data);

fs.appendFile('test.txt', '\nThis is appended text!', (err)=>{
    if(err) throw err;
    console.log('Text appended');
});

fs.readFile('test.txt', 'utf-8', (err, data)=>{
    if (err) throw err;
    console.log('File content:', data);
});

const path = require('path');
const filePath = path.join(__dirname, 'files', 'test.txt');
console.log(filePath);


const filePath1 = path.join(__dirname, 'files', 'test-sync.txt');
console.log(filePath1);
