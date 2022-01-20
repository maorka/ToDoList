import ListItem from "./ListItem";


export default function List(props) {

    let list = props.list
    console.log(`props,List`, list)
    return (
        <ul>

            {list.map(t =>//      t=mission object
                <ListItem
                    key={t._id}
                    // {...t},disassembled the t object
                    id={t._id}
                    Title={t.title}
                    done={t.isDone}
                    refreshView={props.refreshView}
                />
            )}

            {/* <ListItem done={props.done}/> */}
            {/* <ListItem done={props.done} /> */}
            {/* {props.done ? "":<ListItem/>} */}
        </ul>
    )
}

//export default List