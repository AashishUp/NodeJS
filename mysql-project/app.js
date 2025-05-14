const db = require('./db');
const express = require('express');
const app = express();

app.use(express.json());

// db.query('INSERT into users (name,email) VALUES(?,?)' ,['Alice', 'alice@example.com'], (err,results)=>{
//     if(err) throw err;
//     console.log('User added!', results);
// });

// db.query('INSERT into users (name,email) VALUES(?,?)' ,['John', 'john@example.com'], (err,results)=>{
//     if(err) throw err;
//     console.log('User added!', results);
// });

// db.query('SELECT * FROM users', (err, results)=>{
//     if (err) throw err;
//     console.log('Users:', results);
// });

app.post('/users', (req, res)=>{
    const {name, email}= req.body;
    if(!name||!email){
        return res.status(400).json({message:"Name and email required"});
    }

    const query = 'INSERT INTO users (name,email) VALUES (?,?)';
    db.query(query, [name,email], (err, result)=>{
        res.status(201).json({message:"User added: ", userId: result.insertId});        
    });
});

app.get('/users', (req,res)=>{
    db.query('SELECT * FROM users', (err, results)=>{
        if (err) throw err;
        res.json(results);
    });
});

const port= 3000;
app.listen(port, ()=>{
    console.log(`Server is running at port: http://localhost:${port}`);
});