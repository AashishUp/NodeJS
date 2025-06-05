const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
app.use(express.json());

app.get('/', (req,res)=>{
    res.send('Home page');
});

app.use('/auth', authRoutes);

const port = 3000;
app.listen(port, ()=>{
    console.log(`server at http://localhost:${port}`);
});