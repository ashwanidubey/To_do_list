import { useState } from "react"
import './Header.css';
function Singleinfo({task,time,KEY,count,setCount})
{console.log(KEY)
   const[edit,setEdit]=useState(false)
   return <>
             {edit?<div id="edited_card">
                <div id="edited_card_container">
                      
                      <textarea id="editedTask" defaultValue={task}  rows="5" cols="55"></textarea>
                      
                </div>
                <div id="edited_card_button">
                <input type="date"  id="editedDate" defaultValue={time}></input>
                <div id="edited_card_button2">
                <button className="ecb" onClick={()=>{setEdit(false)
                                   let et=document.getElementById("editedTask").value
                                   let ed=document.getElementById("editedDate").value 
                                   if(et && ed)
                                   {
                                    localStorage.removeItem(KEY)
                                    let obj=JSON.stringify({'task':et,'time':ed})
                                    console.log("myobject",obj)
                                    
                                    localStorage.setItem(obj,obj)
                                    setCount(count+1)
                                   }
                                 }}>save</button>
             <button className="ecb" onClick={()=>{setEdit(false)}}>cancel</button>
                </div>
                
                </div>
             
             </div>:
             <div id="mycard">
             <div id="mycard_content">
             <h1>{task}</h1>
             <h3>{time}</h3>
                </div>   
            <div id="mycard_buttons">
            <button className="mycard_button" onClick={()=>{setEdit(true)}} 
                     >Edit</button>
             <button className="mycard_button" onClick={()=>{ 
                localStorage.removeItem(KEY)
                setCount(count+1)
                }}>Delete</button>
            </div>
             
             </div>}
          </>
}
export default Singleinfo;