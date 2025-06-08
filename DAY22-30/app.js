const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
app.use(express.json());
require('dotenv').config();
const authenticateToken = require('./middleware/authMiddleware');
// const authorizeRole = require('./middleware/authMiddleware');

app.get('/', (req,res)=>{
    res.send('Home page');
});

app.use('/auth', authRoutes);

app.get('/dashboard', authenticateToken, (req, res)=>{
    res.json({message: `Welcome. ${req.user.username}`});
});

// app.get('/admin-only', authenticateToken, authorizeRole('admin'), (req, res) => {
//   res.json({ message: 'Welcome, admin!' });
// });

const port = 3000;
app.listen(port, ()=>{
    console.log(`server at http://localhost:${port}`);
});