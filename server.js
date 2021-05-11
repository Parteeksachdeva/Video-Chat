const express = require("express")

const app=express()

const server= require("http").Server(app)
const io=require("socket.io")(server)

app.set('view engine','ejs')
app.get("/",(req,res)=>{
    res.render("room")
})

server.listen(5000,()=>{
    console.log("App is running on 5000")
})