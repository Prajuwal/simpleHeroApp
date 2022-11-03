import {React,useState} from 'react';
import './App.css';



function App() {
  const [name,setName]=useState('');
  const [age,setAge]=useState(0);
  const [height,setHeight]=useState(0);
  const [superPower,setSuperPower]=useState('');
  const [Display,setDisplay] = useState(false)
  return (
    <div className="App">
      <h1>Build a Hero</h1>
      <div>

      <label>Name: </label>
     <input type="text" style={{margin:10}} onChange={(event)=>{
      setName(event.target.value)
     }}/>
     <label>Age: </label>
     <input type="number" style={{margin:10}} onChange={(event)=>{
      setAge(event.target.value)
     }}/>
     <label>Height: </label>
     <input type="number" style={{margin:10}} onChange={(event)=>{
      setHeight(event.target.value)
     }}/>
     <label>SuperPower: </label>
     <input type="text" style={{margin:10}} onChange={(event)=>{
      setSuperPower(event.target.value)
     }}/>
     </div>
     <button onClick={()=>{
      setDisplay(true)
     }}> Display Characters </button>
     <div>
      <h1>Hero Info</h1>
      {Display && 
        <ol>
          <ul>Name : {name}</ul>
          <ul>Age : {age}</ul>
          <ul>Height : {height}</ul>
          <ul>SuperPower : {superPower}</ul>
        </ol>
      
}
      
       
        </div>
    </div>
    
  )
}

export default App;
