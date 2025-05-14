const express = require('express');
const app = express();

app.use(express.json());



let users=[
    {id: 1, name:'John', age: 30},
    {id: 2, name:'Jane', age: 25},
];

app.get('/', (req,res)=>{
    res.send('Home Page');
});

app.get('/users', (req,res)=>{  
    res.json(users);
});

app.get('/search', (req,res)=>{
    const {name, age} = req.query;
    res.json({message: `Searching for ${name}, age ${age}`});
});

app.get('/users/:id',(req,res)=>{
    const id =req.paramss.id
    res.json({message: `Searching for user ${id}`});
});

app.post('/register', (req, res)=>{
    // const id = users.length + 1;
    const {name, age}= req.body;
    console.log("Received");
    res.json({message:`User  with name ${name} and age ${age}`});
});

app.use((req,res, next)=>{
    console.log(`${req.method} ${req.url}`);
});

const port = 3001;
console.log(`Server is running on port: ${port}`);
app.listen(port, ()=>{  
    console.log(`Server is running on port: http://localhost:${port}`);
});