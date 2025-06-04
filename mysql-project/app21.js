const express = require('express');
const app = express();
app.use(express.json());

const postRoutes = require('./routes/posts');
app.use('/posts', postRoutes);

app.listen(3000, ()=>{
    console.log(`server at http://localhost:3000`)
});