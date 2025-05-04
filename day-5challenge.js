const http = require('http');
const os = require('os');

const server = http.createServer((req,res)=>{
    console.log(`Request received:${req.method} ${req.url}`);

    if (req.url =='/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end("<h1> Welcome to HOME PAGE</h1>");
    }
    else if (req.url=='/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end("<h1> Contact Us at: :<br> Patan, Laltipur <br>+977999999999 <br> example@gmail.com</h1>");
    }
    else if (req.url=='/time'){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        const currentTime = new Date().toLocaleString();
        res.end(`<h1> Current Time: ${currentTime}</h1>`);
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end("<h1> 404 Not Found!!</h1>");
    }
});

const port = 3000;
server.listen(port, 'localhost', () => {
    console.log(`Server is running at: http://localhost:${port}`);
});