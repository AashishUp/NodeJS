const http = require('http');
const os = require('os');
 const users =[
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jane Doe'},
    {id: 3, name: 'Jim Doe'},
 ];

 const server = http.createServer((req,res)=>{
    console.log(`${req.method} ${req.url}`)
 
    if (req.url=='/api/users' && req.method=='GET'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(users));
    }
    else if(req.url=='/api/about' && req.method =='GET'){
        res.writeHead(200,{'Content-type': 'application/json'});
        res.end(JSON.stringify({info: 'This is a basic Node.js API.'}));
    }else if(req.url=='/api/time'&& req.method=='GET'){
        const currentTime= new Date().toLocaleString();
        res.writeHead(200,{'Content-type':'application/json'});
        res.end(JSON.stringify({time: currentTime}));
    }
    else if(req.url == '/api/system' && req.method == 'GET'){
        const sysInfo ={
            platform: os.platform(),
            cpu: os.cpus().length
        };
        res.writeHead(200,{'Content-type':'application/json'});
        res.end(JSON.stringify(sysInfo));
    }else{
        res.writeHead(404,{'Content-type':'application/json'});
        res.end(JSON.stringify({message:'Route not found!'}));
    }

});

server.listen(3000,'localhost',()=>{
    console.log('API Server is running on http://localhost:3000');
});