const Task =require('./DL/TaskController')
//const Task =require('./DAL')//call to DAL(Data) folder-more correct



module.exports = (app) =>       //export app to main server
{

    app.get('/task',async (req, res) => {
        try {
            let result = await Task.read()//task.read =taskModel.findAllData
            res.status(202);   //202=accepted 
            res.send(result)  ;        //return to the client
            console.log("Get request sent successful")
        }
        catch (error) {
            res.send({ code: 400, message: error.message || error }) //400=bad request
    }
})

app.post('/task',async (req, res) => {
    //let type = req.params.id
    const body = req.body
    try {
        let result =await Task.create(body)
        res.status(201);
        res.send(result)          //return to the client
        console.log("Post request sent successful")
    }
    catch (error) {
        res.send({ code: 400, message: error.message || error }) //400=bad request//catch any error
    }
    
})

app.put('/task/:id',async (req, res) => {
    const {id} = req.params
    try {
        let result = await Task.update(id,req.body)
        res.send(result)          //return to the client
        console.log("PUT request sent successful")
    }
    catch (error) {
        res.send({ code: 400,message: error.message || error}) //400=bad request
    }
    
}) 

app.delete('/task/:id',async (req, res) => {
    const {id} = req.params
    try {
        let result=await Task.delete(id)      //delete mission by some ID
        res.status(202);
        res.send(result)          //return to the client
        console.log("Delete request sent successful")
        }
        catch (error) {
            res.send({ code: 400, message: error.message || error }) //400=bad request
        }
    
    })

app.delete('/deleteall',async (req, res) => {
    //const {id} = req.params
    try {
        let result=await Task.delAll()      //delete mission by some ID
        res.status(202);
        res.send(result)          //return to the client
        console.log("Delete all request sent successful")
        }
        catch (error) {
            res.send({ code: 400, message: error.message || error }) //400=bad request
        }
    
    })



}