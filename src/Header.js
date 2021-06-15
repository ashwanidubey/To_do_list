import React,{useState} from 'react'
import Myform from './Myform'
import './Header.css'
function Header({count,setCount})
{
    const[Form,setForm]=useState(false)
    return  <>
               <div id="myheader">
             <div id="title">
                  <h1>✅    To Do List</h1>
             </div>
           <div id="mybutton" >
                <button id="mybutton1" onClick={()=>{setForm(true)}}>&#65291;ADD&#xFF0B;</button>
             </div>  
          </div>
          
          {Form && <Myform setForm={setForm} count={count} setCount={setCount} />}
            </>
           
}

export default Header;