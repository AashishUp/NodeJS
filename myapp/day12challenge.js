const express = require('express');
const app = express();

app.use(express.json());

let products=[
    {name: "Samsung", id: 2002},
    {name: "LG", id : 3003}
];
app.get('/', (req, res)=>{
    res.send('Home Page.')
})

app.get('/search', (req, res)=>{
    const {name, id}= req.query;
    res.json({message:`You searched for ${name}`});
});

app.get('/products', (req,res)=>{
    res.json(products);
});

app.get('/products/:id', (req,res)=>{
    const id = req.params.id;
    res.json({productId:`${id}`});
});

app.post('/feedback', (req,res)=>{
    const{name, message}= req.body;
    console.log("received.")
    res.send({ status: "Received"});
});

app.listen(3000, ()=>{
    console.log(`Server at: http://localhost:3000`);
})