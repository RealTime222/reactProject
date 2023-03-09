import moment from "moment";
import Event from "./event";
import { useEffect, useState } from "react";
import { ContextMenuTrigger, ContextMenu, MenuItem } from "react-contextmenu";
import { useNavigate } from "react-router-dom";
import { red } from "@mui/material/colors";

function Day(props) {
    const today = moment();
    const s = today.startOf('week');

    const navigate = useNavigate();

    const [allDayEnevts, setAllDayEnevts] = useState([]);
    


    let events11 = [];
    
 
    const getEvents = async () => {
        const d = props.date.getDate();
        const d2 = props.date.getMonth() + 1;
        const d3 = props.date.getFullYear();
        const d4 = `${d2}/${d}/${d3}`
        
        const x = props.userId
        console.log(x)

        const tmp = `http://localhost:4000/events/?userId=${x}&atDate=${d4}`
        const resEvent2 = await fetch(tmp);
        console.log(resEvent2)
        const aa = await resEvent2.json();
        console.log(aa)
        events11 = [];
        aa.forEach(element => {
            events11.push(element);

        });
        setAllDayEnevts(events11);

    }

    useEffect(() => {

        getEvents();

    }, [props.sun]);

    const addEvent = () => {
        const d = props.date.getDate();
        const d2 = props.date.getMonth() + 1;
        const d3 = props.date.getFullYear();
        const d5 = `${d2}-${d}-${d3}`
        console.log("********************88")
        console.log(d5)
        navigate(`../newEvent/${d5}`, { state: { date: props.date } }, { replace: false })
    }

    const goToToday = () => {

        const a = new Date(s);

        const x = new Date(a.setDate(a.getDate() - 6));
        props.setSun2(x)
        //props.setTmp2(new Date())
    }

// const tt = {
//     backgroundColor:red
// }
    return (
        <div style={{backgroundColor:"darkgrey",
        borderColor: "black",
        borderStyle: "double",
        float: "left",
        width:"13%",
        height:"550px",
        left:"5px"
      
        }}>
             

            < ContextMenuTrigger id={`contextmenuEvent${props.date.getDate()}`
            } >
                <div className="event">
                    <h2>{props.day} </h2></div></ContextMenuTrigger >
            {console.log(props.eventId, "evrejrhefuidi")}
            < ContextMenu id={`contextmenuEvent${props.date.getDate()}`}>
                <MenuItem >
                    <span onClick={goToToday}> go to today</span>
                </MenuItem>
                <MenuItem >
                    <span onClick={addEvent}> add event</span>
                </MenuItem>
            </ContextMenu >

            <h3>{props.date.getDate().toString()}/{props.date.getMonth()+1} /{props.date.getFullYear().toString()}  </h3>
            {/* <button onClick={addEvent}>add</button>
            <button onClick={goToToday}>today</button> */}
            <div> {allDayEnevts.map((item, index) =>
                <Event key={index.toString()} theEvent={item} eventId={item.id} allDayEnevts={allDayEnevts} setAllDayEnevts={setAllDayEnevts}></Event>)}</div>

        </div>
    )

}

export default Day;