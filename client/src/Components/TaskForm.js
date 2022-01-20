//import Create from "./Create"
import axios from 'axios'

function TaskForm(props) {


    function createTasks(e) {
        e.preventDefault()//prevent refresh and add date to query every click
        //debugger
        let newObj = e.target,
            values = getAllValues(newObj)
        // let newTask = {
        //     "title": values
        // }
        //debugger
        axios.post(`/api/task`, values)        //requests from localhost:5001 server
            .then(() => {
                props.refreshView()
                newObj.reset()
            })
        console.log('Update', props)

    }

    ////function to get the values from the document and return object
    function getAllValues(form) {
        return Object.values(form)
            .reduce((acc, curr) => {
                let { value, name } = curr
                return name ? { ...acc, [name]: value } : acc
            }, {})
    }


    return (
        <div >
            <form className="Form" onSubmit={createTasks}>
                <input name="title" type="text" className="Text" placeholder="Add a task here" />
                <input type="submit" className="Plus" value="+" />
            </form>

        </div>
    )
}

export default TaskForm
