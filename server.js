const express = require('express')
// const {send} = require('express/lib/response')
const app = express ()
const { userList }=require('./userList')
app.use(express.static(__dirname+'/public'))


app.get('/users',(req,res)=>{
    res.json(userList)
})
// middleware

const getDate = (req, res, next) => {
    console.log("Time:", new Date())
    if ((new Date().getDay() > 0 && new Date().getDay() < 6) && (new Date().getHours() >= 9 && (new Date().getHours() + 1) <= 17)) {

app.get('/',(req,res)=>{
   res.sendFile(__dirname+'/public/home.html')
})
app.get('/contact',(req,res)=>{
   res.sendFile(__dirname+'/public/contact.html')
})
app.get('/our-services',(req,res)=>{
   res.sendFile(__dirname+'/public/our-services.html')
})
// app.use('/views',require('./public/routes/view'))
    }
    }
    app.use(getDate)
app.listen(5000,(err)=>{
    if(err) throw err
    else console.log('server is running on port 5000')
}) 