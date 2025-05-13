const express = require('express');
const app = express();

app.use(express.json());

function logger(req, res, next){
    console.log(req.originalUrl);
    next();
}

app.use(logger);

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/status', (req, res)=>{
    res.status(200).json({status: 'OK'});
});

app.get('/cause-error', (req, res)=>{
    throw new Error('This is an error');
});

app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500).json({error: 'Something went wrong!'});
});

app.listen(3000, 'localhost', () => {
    console.log('Server is running on http://localhost:3000');
});