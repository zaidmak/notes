const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
    note: String

}) // creating a schema you can add multiple elements

mongoose.model("Note", NoteSchema) //Name of the model and the seccond parameter is the name of schema we mentioned above

//nodemon automatically refreshes our server after saving the file