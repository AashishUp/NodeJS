const express = require('express');
const app = express();

app.use(express.json());
app.use((req, res, next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
});

function logger(req,res, next){
    console.log(req.originalUrl);
    next();

}

function Auth(req,res, next){
    if (req.query.admin === 'true') {
        req.admin = true;
        next();
    }
    else{
        res.send('Unauthorized');
    }
}

app.get('/', Auth, (req, res, next) => {
    res.send('Home Page');
    console.log(`User is admin: ${req.admin}`);
    console.log('Home Page');
    next();
    //If we dont call next() here, the request will not proceed to the next middleware or route handler.
    // The app.use(logger) middleware will not be executed.
    // If we call next() here, the request will proceed to the next middleware or route handler.
});

app.use(logger);

app.get('/about', (req, res) => {
    res.send('About Page');
}); 

app.get('/contact', (req, res) => {
    res.send('Contact Page');
});

app.get('/error', (req, res)=>{
    throw new Error('This is an error');
});

app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500).json({error: 'Something went wrong!'});
});

app.listen(3000, 'localhost', () => {   
    console.log('Server is running on http://localhost:3000');
});