import { useState } from "react";
import { Link , Navigate, useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom"
function EditEvent(props) {
   
    const navigate = useNavigate()
    const { ee} = useParams();
  

    
    const [id,setId]=useState() ;
    const [desc,setDesc]=useState() ;
    const [date,setDate]=useState() ;
    const [stime,setStime]=useState() ;
    const [etime,setEtime]=useState() ;
    
    const updateE = async () => {
        console.log()
        
        const req = {

            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },

            body: JSON.stringify({ desc: desc, date: date, sTime: stime, eTime: etime })

        }
        const data = await fetch(`http://localhost:4000/events/${ee}`, req)
        navigate("../calendar", {replace:false})
    }
    return (<div>
        <input placeholder={`id`} onBlur={(e) => setId(e.target.value) }></input>
        <input placeholder={`desc`} onBlur={(e) => setDesc(e.target.value)}></input>
        <input placeholder={`date`} onBlur={(e) => setDate(e.target.value)  }></input>
        <input placeholder="gk" onBlur={(e) => setStime(e.target.value)}></input>
        <input placeholder="enter end time" onBlur={(e) => setEtime(e.target.value)}></input>
        <button onClick={() => updateE()} >עדכן ארוע</button>
        {/* <button onClick={() => cancle()}>ביטול</button> */}
        {/* type={"date"} */}
    </div>
    )
}
export default EditEvent;