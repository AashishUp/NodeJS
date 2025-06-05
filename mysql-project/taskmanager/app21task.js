const express = require ('express');
const app = express();
const taskRoutes = require('./routes/tasks21task');
app.use(express.json());

app.use('/tasks', taskRoutes);

const port = 3000;
app.listen(port, ()=>{
   console.log(`server at http://localhost:${port}`); 
});