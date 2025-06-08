const express = require('express');
const multer = require('multer');
const path = require('path');
const db = require('./db24');
const app = express();
app.use(express.json());
app.use('/uploads', express.static('uploads'));

const storage = multer.diskStorage({
    destination: (req, file, cb)=> cb(null, 'uploads'),
    filename: (req, file, cb)=>{
        const uniqueName = Date.now() + '-'+ Math.round(Math.random()*1E9)+ path.extname(file.originalname);
        cb(null, uniqueName);
    }
});

const upload = multer({storage});

app.get('/', (req,res)=>{
    res.send('Home - Upload picture at /upload-profile');
});

app.post('/upload-profile', upload.single('profileImage'), async(req, res)=>{
    const {name} = req.body;
    const filePath = req.file ?`/uploads/${req.file.filename}`:null;

    if (!name || !filePath){
        return res.status(400).json({message: "Name and file are required"});
    }

    try {
        const [result] = await db.query('INSERT INTO users (name, profile_image) VALUES (?,?)', [name, filePath]);
        res.status(201).json({
            message: 'User created and image uploaded.',
            id: result.insertId,
            name,
            profile_image: filePath
        });
    } catch (err){
        console.error(err);
        res.status(500).json({ error: 'Database error'});
    }
});

const port = 3000;
app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
});