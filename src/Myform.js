
import './Header.css'
function Myform({setForm,count , setCount})
{ 
   
    return <div id="myform">
             
            
            <textarea id="mytask" placeholder="YOUR TASK" rows="5" cols="60"></textarea>
          <div id="date_button_combo">
          <input id="mytime" type="date" className="button"></input>
          
          <button className="button" id="buttonclick" onClick={()=>{
              let task=document.getElementById("mytask").value
              let time=document.getElementById("mytime").value
              if(task && time)
              {
                var v={"task":task,"time":time}
                var s=JSON.stringify(v)
                localStorage.setItem(s,s)
                setCount(count+1)
                setForm(false)
              }
             
              }}>click</button>
          </div>  
          

           
           </div>
}
export default Myform