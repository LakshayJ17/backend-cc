require('dotenv').config()
const express = require("express")

const app = express()
const PORT = 4000

app.get('/' , (req,res) =>{
    res.send("Everything OK")
})

app.get('/twitter', (req, res) =>{
    res.send("elon musk")
})

app.get('/login', (req, res) => {
    res.send(`<h1>Showing HTML Element</h1>`)
})

app.listen(process.env.PORT, () =>{
    console.log(`Sever started on port http://localhost:${PORT}`);
})

