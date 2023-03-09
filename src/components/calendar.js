import { useEffect, useState } from "react";
import Day from "./day";
import { useNavigate } from "react-router-dom"
import moment from "moment";

function Calendar(props) {

    const navigate = useNavigate()
    const today = moment();
    const s = today.startOf('week');
    
    const [sunday, setSunday] = useState(new Date(s));
    
    console.log(props.userId)
    const namesOfDays=["monday","tuesday","wednesday","thuresday","friday","shabbos"]
 

    const setWeek = () => { 
        const tmp = sunday;
        setSunday(new Date(tmp.setDate(tmp.getDate()-5)));
        //setTmp2(new Date());
        
    }

    const setWeek2 = () => { 
        const tmp = sunday;
        setSunday(new Date(tmp.setDate(tmp.getDate()-19)));
        //setTmp2( new Date());
    }

    const thisWeek = () => {
        const a = new Date(today.startOf('week'));
       
        setSunday(new Date(a.setDate(a.getDate()-6)));
       // setTmp2(new Date());
    }

    const addEvent = async () => {
        navigate("../newEvent/general", { replace: false })
    }
    //const t = sunday;
    const userIdTmp=1;
    return (
        <div>
           <h1>________________________________________________________calendar_______________________________________________________________________________</h1>
            <button  onClick={() => setWeek()}>next week</button>
            <button onClick={() => setWeek2()}>prev week</button>
            <button onClick={() => thisWeek()}>this week</button>
            <button onClick={() => addEvent()}>add event</button>
            
            
            <div>
                <Day className="day" day={"sunday"} date={new Date(sunday.setDate(sunday.getDate()))} userId={props.userId} setSun2={setSunday} sun={sunday}   ></Day></div>
            <div>  
                {namesOfDays.map((item,index)=><Day className="day" key={index.toString()} day={item} date={new Date(sunday.setDate(sunday.getDate()+1))} userId={props.userId} sun={sunday} setSun2={setSunday}></Day>)  }
            </div>
            <br></br>

      

        </div>
    )
}
export default Calendar;