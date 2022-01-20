import axios from 'axios'

function ListItem(props) {


    function updateTasks(e) //function that catch new state of the checkbox(after click)
    {
        let newDone =e.target.checked 
        let newObj = {
            "isDone": newDone
        }
        axios.put(`/api/task/${props.id}`, newObj)        //requests from localhost:5001 server
            .then(() => {
                props.refreshView()
            })
        console.log('Update', props)
        //const [usertext, setOutput] = useState('')   //''=>string initial value,0 number initial value

        
    }





    //debugger
    function deleteTasks() {
        axios.delete(`/api/task/${props.id}`)        //requests from localhost:5001 server
            .then(() => {
                props.refreshView()
            })
    }

    console.log('props,Listitem:', props)//print the missions objects
    //debugger
    return (
        <li className={props.done ? 'done' : 'oppositeDone'}>
            {/* <label>maor</label> */}
            <label>{props.Title}</label>  {/*title=text*/}
            <span>
                <input type="checkbox" onChange={updateTasks} type="checkbox" defaultChecked={props.done}/>
                {props.done ? <button onClick={deleteTasks} className='X'>x</button>:null  }
            </span>

        </li>
    )
}

export default ListItem

