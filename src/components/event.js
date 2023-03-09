
import contextmenu from "contextmenu"
import { useNavigate } from "react-router-dom"

import { ContextMenuTrigger, ContextMenu, MenuItem } from "react-contextmenu";

import { Link, useParams } from "react-router-dom";
import { useState } from "react";

function Event(props) {
    const navigate = useNavigate()
  
    const[a,setA]=useState();
    const Edit = () => {
        alert("עריכת ארוע")
      
        navigate(`../newEvent/edit`, { state: { eventId: props.theEvent.id ,desc:props.theEvent.desc,startTime:props.theEvent.startTime,endTime:props.theEvent.endTime,date:props.theEvent.date} }, { replace: false })

    }
    const Delete1 = async () => {
        const a = window.confirm("האם אתה בטוח שברצונך למחוק ארוע?")
        if (a) {
            //alert("!!!!!!!")
            const req = {

                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            }

            const t = `${props.eventId}`

            const data = await fetch(`http://localhost:4000/events/${t}`, req);
            
           let afterDelete=[];
           props.allDayEnevts.forEach(element => {
            if(element.id!=t)
                afterDelete.push(element)
           });
           props.setAllDayEnevts(afterDelete);
        
        }
    }
    return (
        <div>

          
            <ContextMenuTrigger id={`contextmenuEvent${props.eventId}`} ><div className="event">
                <h4>the event: {props.theEvent.desc} </h4></div></ContextMenuTrigger>
            {console.log(props.eventId, "evrejrhefuidi")}
            <ContextMenu  id={`contextmenuEvent${props.eventId}`}>
                <MenuItem >
                    <span onClick={Edit}> Edit</span>
                </MenuItem>
                <MenuItem >
                    <span onClick={Delete1}> Delete</span>
                </MenuItem>
            </ContextMenu>



            <div>start time:{(props.theEvent.startTime - props.theEvent.startTime % 60) / 60}:{props.theEvent.startTime % 60}</div>
            <div>end time:{(props.theEvent.endTime - props.theEvent.endTime % 60) / 60}:{props.theEvent.endTime % 60}</div>
        

        </div>
    )
}
export default Event;