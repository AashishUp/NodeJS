const express = require ('express');
const app = express();

app.use(express.json());

app.use((req, res, next)=>{
    const time = new Date().toLocaleTimeString();
    console.log(`${time}`);
    console.log(`${req.method} ${req.url}`);
    next();
});

let tasks=[
    {id:1, title:"Learn Node", completed:false},
    {id:2, title:"Build Rest API", completed:false}
];

app.get('/', (req,res)=>{
    res.send('Home Page');
});

app.get('/tasks',(req, res)=>{
    res.json(tasks);
});

app.get('/tasks/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    const task = tasks.find(t=>t.id === id);
    task ? res.json(task):res.status(404).json({message:"Task not found."});
});

app.post('/tasks', (req, res)=>{
    const {title}= req.body;
    const newTask = {
        id: tasks.length+1,
        title,
        completed:false
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.put('/tasks/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    const task = tasks.find(t=>t.id===id);

    if(!task) return res.status(404).json({message:"Tasks Not Found"});

    task.title = req.body.title || task.title;
    task.completed= req.body.completed || task.completed;
    res.json(task);
});

app.delete("/tasks/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const index = tasks.findIndex(t=>t.id==id);
    if (index=== -1) return res.status(404).json({message:"Task not found!!"});

    const deletedTask = tasks.splice(index, 1);
    res.json({message:"Task deleted", task:deletedTask[0]});
});

const port = 3001;

app.listen(port, ()=>{
    console.log(`Task Manager API running at port: http://localhost:${port}`);
});
