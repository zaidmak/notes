const express = require('express')
const app = express()
const bodyParser = require('body-parser') // body parser will parse the post request and we can accesswhatever data coming from front endin request.body
const mongoose = require('mongoose')
require('./Note') // kind of like importing the Note.js file

app.use(bodyParser.json()) // always create rotes below this 
const Notes = mongoose.model('Note')  // creating a variabble to take a model from the schemaa created in the Note.js section


const mongouri = 'mongodb+srv://cnq:qifVwC2AC91B49zm@cluster0.4m8em.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' //link for the database


mongoose.connect(mongouri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


mongoose.connection.on('connected',()=>{
    console.log('conneted to mongo')
}) //if the password is correct it'll return this connnected thing

mongoose.connection.on("error",(err)=>{
    console.log('error',err)
}) // if the password is wrong it'll return an error

app.get('/',(req,res)=>{
    Notes.find({}).then(data => {
        res.send(data)
    }).catch(err => {
        console.log(err)
    })
    
}) // it'll send a request and get a response

app.post('/send-data',(req,res) => {
    const getNote = new Notes({
        note: req.body.note
    })
    console.log(req.body)
    getNote.save(res)
    .then(data=>{
       
        res.send(data)
    } ).catch(err => {
        console.log(err)
    })


    
})  //here we have created a route from http://localhost:3000/send>body>raw  in theere we just hardcoded the note to be given as mentioned in the NoteSchema and then we'll get the result
// it automatically add a unique id 

app.listen(3000,()=>{
    console.log('server running')
}) // this basically shows us the port where the server is running and you can add a call back function too for console log or other functions