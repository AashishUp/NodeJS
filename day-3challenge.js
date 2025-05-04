const os = require('os');
const fs = require('fs');
const path = require('path');

const sysInfo = `
Date: ${new Date().toLocaleString()}
Platform: ${os.platform()}
Architecture: ${os.arch()}
Uptime: ${os.uptime()} seconds
CPU Cores: ${os.cpus().length}
Free Memory: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB
`;

const logFolder = path.join(__dirname,'logs');
const logFile =path.join(logFolder, 'syslog.txt');
 if(!fs.existsSync(logFolder)){
    fs.mkdirSync(logFolder);
 }

 fs.writeFile(logFile, sysInfo, (err)=>{
    if(err) throw err;
    console.log('System information logged!');
});
fs.readFile(logFile, 'utf-8', (err,data)=>{
    if(err) throw err;
    console.log('Log file content:', data);
    });

