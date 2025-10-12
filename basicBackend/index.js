
//require('dotenv').config();
const express = require('express')
//import express from "express"
const app = express()
const port=4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about',(req,res)=>{
    res.send("this is about page")
})

app.get('/login',(req,res)=>{
    res.send("<h1>this is login page</h1>");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//app.listen(process.env.PORT, () => {
//  console.log(`Example app listening on port ${port}`)
//})