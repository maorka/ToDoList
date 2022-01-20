
//////////////create/generate clock///////////////////////



import {useState,useEffect} from "react"//hook

export default function Clock() {
    let interval
    // let time = new Date().toLocaleTimeString()
    let [time,setTime]=useState(new Date())
    useEffect(startClock,[])//(function,condition),[]=1 time,[parameters(props/string)]

    function startClock(){
        interval= setInterval(()=>{
            setTime(new Date())
         } ,1000)

         return ()=> clearInterval(interval)
    }

    

    return ( <div> {time.toLocaleTimeString()}</div>)
}

//export default Clock
