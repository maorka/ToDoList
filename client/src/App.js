import logo from './logo.svg';
import './App.css';
import Title from './Components/Title';
import ToDo from './Components/ToDO';
import Clock from './Components/Clock';
import {useState,useEffect} from "react"//hook

function App() {
  // let [show,setShow]= useState()
  return (
    <div className="App">
      <Title title="To-Do List"/>
      <ToDo/>
      {/* {show? <Clock/>: ''}
      <button onClick={()=>setShow(!show)}>click</button> */}
    </div>
  );
}

export default App;
