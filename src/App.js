import logo from './logo.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Mybody from './Mybody';

var d=[]
  for(let x in localStorage)
  {
   
    if(x!=null && x!=undefined && x.length && localStorage.getItem(x) && localStorage.getItem(x).charAt(0)=='{')
        {let v=localStorage.getItem(x)
        // console.log(v)
         d.push(v)}
      
    
  } 
  //console.log(d)
function App() {
  const[count,setCount]=useState(0)
  const[mydata,setMydata]=useState(d) 
  useEffect(()=>{
  d=[]
  for(let x in localStorage)
  { 
    if(x!=null && x!=undefined && x.length && localStorage.getItem(x) && localStorage.getItem(x).charAt(0)=='{')
        {let v=localStorage.getItem(x)
        // console.log(v)
         d.push(v)}
  } 
  setMydata(d)
  },[count])
  return (
    <div className="App">   
        <Header count={count} setCount={setCount}  />
        <Mybody count={count} setCount={setCount} mydata={mydata}/>
    </div>
  );
}

export default App;
