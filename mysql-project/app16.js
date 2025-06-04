const express = require('express');
const app = express();
const User = require('./models/User');

app.use(express.json());

app.post('/users', (req,res)=>{
    const {name, email}=req.body;
    User.create(name, email, (err, result)=>{
        if (err) return res.status(500).json({error: 'DB error'});
        res.status(201).json({message: 'User created', id:result.insertId});
    });
});

app.get('/users', (req,res)=>{
    User.findAll((err, results)=>{
        if (err) return res.status(500).json({error: 'DB error'});
        res.json(results);
    });
});

app.get('/users/:id', (req,res)=>{
    const id = req.params.id;
    User.findById(id, (err,results)=>{
        if (err) return res.status(500).json({error: 'DB error'});
        if (results.length === 0) return res.status(404).json({message: 'User not found'});
        res.json(results[0]);
    });
});

app.listen(3000,()=>{
    console.log('Server running at: http://localhost:3000');
});