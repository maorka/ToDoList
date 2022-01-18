require('./db')
const
    taskModel = require('../DL/models/TaskModel'),//import taskmodel that include all collection/schema in that module
     uniqId = require('uniqid');//uniqID generete new ID

function create(someData) //someData=newTask
{
    someData.Id = uniqId();//add id to the DATA
    //validation
    return taskModel.create(someData);
}


function read() {
return taskModel.find({})//can also without {}

}
function update(id,newData) {
return taskModel.findByIdAndUpdate(id,newData, { new: true});//callback function that returns the data

}

function del(id) {
return taskModel.findByIdAndDelete(id); 
}
function delAll() {
return taskModel.deleteMany({}); 
}




module.exports = {
    read,
    update,
    create,
    delAll,
    delete: del
};