const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res)=>{
    res.send("Hello World");
})


app.post('/', (req, res)=>{
    res.send("Got a post request");
})


app.put("/user",(req, res)=>{
    res.send('Got put request at /user');
})

app.delete('/user', (req, res)=>{
    res.send('Got a delete request at /user');
})

app.listen(port, ()=>{
    console.log(`App is run at ${port}`);
})