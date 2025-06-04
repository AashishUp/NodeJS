require('dotenv').config();
const express = require('express');
const User = require('./models/user17');
const app = express();
app.use(express.json());

app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`)
    next();
});
app.get('/',(req,res)=>{
    res.send('Mysql with env vars');
});

const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
});