const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json())

app.get("/", (req,res) =>{
    console.log(req.query)
    const path_file = path.join(__dirname,"index.html")
    res.sendFile(path_file)
})

app.post("/add", (req,res) =>{
    const { a: primero , b: segundo } = req.body;
    // const a = req.body.a; 
    // const b = req.body.b; 
    res.json({
        result: parseFloat(primero) + parseFloat(segundo)
    });
})

app.listen(5000, () =>{console.log("Server in 5000")});