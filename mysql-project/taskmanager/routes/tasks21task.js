const express = require('express');
const router = express.Router();
const db = require('../db21task');
router.use(express.json());

router.get('/', async (req, res)=>{
    const[rows] = await db.query('SELECT * FROM tasks');
    res.json(rows);
});

router.get('/:id', async (req,res)=>{
    const [rows] = await db.query('SELECT * FROM tasks WHERE id = ?', [req.params.id]);
    if(rows.length === 0) return res.status(404).json({message: 'Task not found.'});
    res.json(rows[0]);
});

router.post('/', async(req, res)=>{
    const {title, description} = req.body;
    const [result] = await db.query('INSERT INTO tasks (title, description) VALUES(?,?)', [title, description]);
    res.status(201).json({id: result.insertId, title, description});
});

router.put('/:id', async(req,res)=>{
    const {title, description, completed}= req.body;
    await db.query ('UPDATE tasks SET title=?, description = ?, completed = ? WHERE id = ?', [title, description, completed, req.params.id]);
    res.json({message: 'Task updated'});
});

router.delete('/:id', async (req, res)=>{
    await db.query('DELETE FROM tasks where id=?', [req.params.id]);
    res.json({message: 'Task deleted'});
});

module.exports = router;