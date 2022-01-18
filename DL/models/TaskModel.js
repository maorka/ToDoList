const mongoose = require('mongoose')
const { Schema } = mongoose;//let Schema  = mongoose.Schema;

//create constant pattern for the client document 
const TaskSchema = new Schema({
    Id: {
        type:String,
        unique:true
        //default:uniqid
    },           
    title: //title=text to to fill the mission description 
    {
        type: String,
        required: true ,     //must fill the field title-cant send blank text/title
        trim:true,      //cut spaces by mistake and return just letters
        minlength:2     //minimum characters 2 letters for title
    },
    isDone: {
        type: Boolean,
        default: false
    },
    // status: {               //status of missions
    //     type: String,
    //     enum: ['start', 'in progress', 'done'],//enumerator variable for status
    //     default: 'start'
    // },
    createDate: {           
        type: Date,
        default: Date.now()

    }
    //subs:[string]->for sub-mission
});

const taskModel=mongoose.model('task',TaskSchema);//mongoose function that create model/collection and get schame input as a second input
module.exports=taskModel;//export the collection/model out to others files 


//comment:if we want another schema->create another file in the same folder->create new Schema