const express = require ('express');
const bcrypt = require ('bcrypt');
const db = require('../db');
const router = express.Router();
router.use(express.json());
const jwt = require('jsonwebtoken');

router.post('/signup', async(req, res)=>{
    const {username, password}= req.body;
    try{
        const hashedPassword = await bcrypt.hash(password, 10);
        await db.query('INSERT INTO users(username, password) VALUES (?,?)', [username, hashedPassword]);
        res.status(201).json({message:'User created successfully.'});
    } catch(err){
        console.error(err);
        res.status(400).json({error:'Username might already exist.'});
    }
});

router.post('/login', async (req,res)=>{
    const {username, password} = req.body;
    try{
        const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
        if(rows.length === 0) return res.status(400).json({error:'User not found.'});
        const user = rows[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(401).json({message: 'Invalid credentials'});

        const token = jwt.sign({id: user.id, username: user.username}, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });
        
        return res.status(200).json({message:'Login successful', token: token});
        token
    } catch (err){
        res.status(500).json({error: 'Internal error'});
    }
});

module.exports = router;
