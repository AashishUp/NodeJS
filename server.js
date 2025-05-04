const http =require('http');

const server = http.createServer((req, res)=>{
  console.log(`Request received:${req.url}`);

  if (req.url=='/'){
    res.writeHead(200,{'Content-type':'text/html'});
    res.end('<h1>Welcome to the Home Page</h1>');
  } else if(req.url=='/about'){
    res.writeHead(200,{'Content-type':'text/html'});
    res.end('<h1>About Us</h1>');
  }else{
    res.writeHead(404,{'Content-type' :'text/html'});
    res.end('<h1> 404 Not Found!!</h1>');
  }
});

const Port = 3000;
const host = 'localhost';
server.listen(Port, host, ()=>{
  console.log(`Server is running at: http://${host}:${Port}`);
});
