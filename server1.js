const http = require('http');
const fs = require('fs');
const path = require('path');

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.json': 'application/json',
  '.pdf': 'application/pdf' // Added PDF MIME type
};

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // Default to index.html for root URL
  let filePath = req.url === '/' ? '/index.html' : req.url;

  // Build absolute path
  filePath = path.join(__dirname, 'public', filePath);

  // Determine content type
  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  // Check if file exists
  fs.access(filePath, fs.constants.R_OK, (err) => {
    if (err) {
      // Serve the custom 404 page
      const custom404Path = path.join(__dirname, 'public', '404.html');
      fs.readFile(custom404Path, 'utf-8', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/html' });
          return res.end('<h1>500 Internal Server Error</h1>');
        }
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(data);
      });
      return;
    }

    // Stream file
    res.writeHead(200, { 'Content-Type': contentType });
    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Static server running at http://localhost:${PORT}`);
});
