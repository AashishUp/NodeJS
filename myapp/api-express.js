const express = require("express");
const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies

app.use((req,res,next)=>{
    console.log(`${req.method}  ${req.url}`);
    next(); // Pass control to the next middleware or route
});
let users=[
    {id:1, name:'John'},
    {id:2, name:'Jane'}
];

app.get('/', (req,res)=>{
    res.send('Home Page');
});

app.get('/users', (req,res)=>{
    res.json(users);
});

app.post('/users', (req,res)=>{
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.get('/users/:id', (req,res)=>{
    const id = parseInt(req.params.id, 10);
    const user =users.find(u=> u.id===id);
    if(!user){
     return res.status(404).json({ message: 'User not found'});   
    } 
    res.json(user);
});

app.delete('/users/:id', (req,res)=>{
    const id = parseInt(req.params.id, 10);
    const index = users.findIndex(u => u.id === id);
    if (index==-1) {
        return res.status(404).json({ message: 'User not found' });
    }
    const deletedUser = users.splice(index, 1);
    res.json({message: 'User deleted:',deletedUser});
});

app.put('/users/:id',(req,res)=>{
    const id= parseInt(req.params.id, 6);
    const user = users.find(u=>u.id===id);
    if(!user){
        return res.status(404).json({message:'User not found'});
    }
    user.name =req.body.name || user.name;
    res.json({message:'User updated:', user}); 
});

const port=3000;
app.listen(port, 'localhost',()=>{
    console.log(`Server is running on http://localhost:${port}`);
});
