import { useState } from "react";
import { Link , Navigate, useParams} from "react-router-dom";
import { useLocation } from "react-router-dom";

import { useNavigate } from "react-router-dom"
function AddNewEvent(props) {
    const [idEdit,setId]=useState() ;
    const [descEdit,setDesc]=useState() ;
    const [dateEdit,setDate]=useState() ;
    const [stimeEdit,setStime]=useState() ;
    const [etimeEdit,setEtime]=useState() ;
    const navigate = useNavigate()
    const {type} = useParams();
    const location = useLocation();

    let id;
    let desc;
    let date;
    if (props.date)
        date=props.date
    
    let stime;
    let etime;
    let uId = props.userId;
    const cancle = () => {
        navigate("../calendar", { replace: false })
    }
    const addEvent = async () => {
        const req = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                id1: id, desc2: desc, date3: new Date(date),
                startTime: stime, endTime: etime, userId: uId
            })
        }
        const d = await fetch(`http://localhost:4000/events`, req);
        navigate("../calendar", { replace: false })
    }
    const updateE = async () => {
        console.log()
        const req = {

            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },

        
            body: JSON.stringify({ desc: descEdit, date: dateEdit, sTime: stimeEdit, eTime: etimeEdit })

        }
      const t = location.state.eventId;
      console.log(t);
 
        const data = await fetch(`http://localhost:4000/events/${t}`, req)
        navigate("../calendar", {replace:false})
    }

if(type=="general")
{
    console.log("111111111111111")
    return (
        <div>

            <input placeholder="enter id" onBlur={(e) => id = e.target.value}></input>
            <input placeholder="enter decription" onBlur={(e) => desc = e.target.value}></input>
            <input placeholder="enter date" onBlur={(e) => date = e.target.value}></input>
            <input placeholder="enter start time" onBlur={(e) => stime = e.target.value}></input>
            <input placeholder="enter end time" onBlur={(e) => etime = e.target.value}></input>
            <button onClick={() => addEvent()} >הוסף ארוע</button>
            <button onClick={() => cancle()}>ביטול</button>
        

        </div>
    )
}

if(type=="edit")
{
    console.log("222222222")
    console.log(type)
    return(
    <div>
    
    <input className="ee" placeholder={location.state.desc} onBlur={(e) => setDesc(e.target.value)}></input>
    <input className="ee" placeholder={location.state.date} onBlur={(e) => setDate(e.target.value)  }></input>
    <input className="ee" placeholder={location.state.startTime} onBlur={(e) => setStime(e.target.value)}></input>
    <input className="ee" placeholder={location.state.endTime} onBlur={(e) => setEtime(e.target.value)}></input>
    <button onClick={() => updateE()} >עדכן ארוע</button>
  
</div> 
)
}
else{
    date=type;
    console.log("333333333")
    console.log()
    return(
        <div>

        <input placeholder="enter id" onBlur={(e) => id = e.target.value}></input>
        <input placeholder="enter decription" onBlur={(e) => desc = e.target.value}></input>
        <input placeholder="enter start time" onBlur={(e) => stime = e.target.value}></input>
        <input placeholder="enter end time" onBlur={(e) => etime = e.target.value}></input>
        <button onClick={() => addEvent()} >הוסף ארוע</button>
        <button onClick={() => cancle()}>ביטול</button>
    

    </div> 
    )
}
}
export default AddNewEvent;