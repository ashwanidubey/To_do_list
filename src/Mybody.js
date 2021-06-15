import Singleinfo from "./Singleinfo"
function Mybody({mydata,count,setCount})
{//console.log(mydata)
    return <>
             
             {mydata.map((md)=>{
               let m=JSON.parse(md)
               console.log("jai ho",md,"vijay")
               if(m)
               {
                 var  task=m.task
                 var time=m.time
               }
                //console.log(m)
               return <>
                  <Singleinfo task={task} time={time} KEY={md} count={count} setCount={setCount}/>
                  </>
               })}
             
           </>
}


export default Mybody