import List from "./List"
import TaskForm from "./TaskForm"
//import Create from "./Create"
import axios from 'axios'
import { useEffect, useState } from "react"

function ToDO() {
    ////////get request/////////////////////
    let [tasksList, setTasksList] = useState([])
    
    useEffect(getTasks, [])//read to getTask function,on startup 1 time,run get Tasks one time and not infinte loop
     
    function getTasks() {
        axios.get('/api/task')//requests from localhost:5001 server
            .then(result => {
                setTasksList(result.data)
                console.log(result)
            })
    }


    
    console.log('tasksList(from DB):', tasksList)//print the missions objects
    return (
        <div className="Todo">
            <TaskForm refreshView={getTasks}/>
            {/* <List done={false} /> */}
             <List list={tasksList.filter(t => !t.isDone)} refreshView={getTasks} />  {/*  t=mission object, get only missions that done=false */}
            <hr />    
            <List list={tasksList.filter(t => t.isDone)} refreshView={getTasks}/>
            {/* <List done={true}/> */}
        </div>
    )
}

export default ToDO
