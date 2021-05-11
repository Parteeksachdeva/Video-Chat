const express = require("express")

const app=express()
app.use(express.static('public'))
const server= require("http").Server(app)
const io=require("socket.io")(server)
const {v4 : uuidv4} =require('uuid')

app.set('view engine','ejs')


app.get("/",(req,res)=>{
    res.redirect(`/${uuidv4()}`)
})

app.get("/:room",(req,res)=>{
    res.render("room",{roomId : req.params.room})
})

server.listen(5000,()=>{
    console.log("App is running on 5000")
})