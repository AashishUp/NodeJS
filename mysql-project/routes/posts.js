const express = require('express');
const router = express.Router();
const db = require('../db21');

router.get('/', async (req, res)=>{
    try{
            const[rows] = await db.query(`
           SELECT posts.id, posts.title, posts.content, users.name AS author
           FROM posts
           JOIN users ON posts.user_id = users.id`);
            res.json(rows);
        } 
    catch (err)
    {
        res.status(500).json({error: err.message});
    }
});

module.exports = router;