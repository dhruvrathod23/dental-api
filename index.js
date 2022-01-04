const express = require("express")
const app = express()
const importData  = require("./data.json")
const port = 2000;

app.listen(port,()=>{
    console.log("running on port",port)
})


app.get('/',(req,res)=>{
    res.send("hello bhai")
})

app.get("/dental",(req,res)=>{
    res.send(importData)
})

