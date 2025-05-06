const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}`);
    console.log(`Request URL: ${req.url}`);
    next(); // Pass control to the next middleware or route
});

app.get('/', (req,res)=>{
    res.send('Home Page');
});

app.get('/about', (req, res)=>{
    res.send('About Page');
});

app.get('/contact', (req, res)=>{
    res.send('Contact Page');
});

app.get('/time', (req, res)=>{
    const time = new Date().toLocaleTimeString();
    res.send(`Current time is: ${time}`);
});

const port = 3000;
app.listen(port, 'localhost', () => {
    console.log(`Server is running on http://localhost:${port}`);
});