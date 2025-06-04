const express = require('express');
const app =  express();
const User = require('./models/user17');

app.use(express.json());

app.use((req,res,next)=>{
    console.log(`${req.method}  ${req.path}`);
    next();
});

app.get('/', (req,res)=>{
    res.send('Home page');
});

app.get('/users', async (req, res)=>{
    try{
        const users = await User.findAll();
        res.json(users);
        }
    catch (err){
            res.status(500).json({error: 'Server error'});
        }
});

app.get('/users/:id', async(req,res)=>{
    const user = await User.findById(req.params.id);
    user ? res.json(user) : res.status(404).json({message: 'User not found'});
});

app.post('/users', async(req,res)=>{
    const {name, email}= req.body;
    try{
        const newUser = await User.create(name, email);
        res.status(201),json(newUser);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
});

app.put('/users/:id', async (req,res)=>{
    const {name, email} = req.body;
    try{
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).json({message:'User not found'});
        const updated = await User.update(req.params.id, name, email);
        res.json(updated);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
});

app.delete('/users/:id', async (req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).json({message: 'User not found'});
        await User.delete(req.params.id);
        res.json({message: 'User deleted', user});
    }
    catch (err){
        res.status(500).json({error: err.message});
    }
});

const port = 3000;
app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
});