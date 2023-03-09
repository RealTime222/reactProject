import { useState , useEffect} from "react";
//import { ReactDOM } from "react";
function AllTours(props){
    const tours = [
        {
            id: "a",
            tourName: "Jerusalem",
            isToured: false
        },
        {
            id: "b",
            tourName: "Haifa",
            isToured: false
        },
        {
            id: "c",
            tourName: "Bnei brak",
            isToured: false
        }
    ];
    
    const[allPlaces,setAllPlaces] = useState(tours);
    const[curentPlace,setCurentPlace] = useState(" ");
    const printPlaces=(e)=>{
        let ans = <h1>"failed"</h1>;
        if(e.isToured == true)
        {
            ans=<li className="toured" key={e.id}>{e.tourName}</li>
        }
        else
        {
            ans=<li className="notToured" key={e.id}>{e.tourName}</li>
        }
        
        return ans;
    }
    const updatePlaces=()=>{
        let tmp = allPlaces;
        tmp.forEach((item)=>{
            
            if(item.tourName==curentPlace)
            {
                item.isToured=true;
            }
        })
        setAllPlaces(tmp);
        setCurentPlace();
        //ReactDOM.render(tmp,document.getElementById('root'));
    }
  
    
    return (
    <div>
        <h1>המקומות בהם ביקרנו (או נבקר...) </h1>
        <h1>{curentPlace}</h1>
        <div>{allPlaces.map(printPlaces)}</div>
        <br></br>
        <input onChange={(e)=>{setCurentPlace(e.target.value)}} className="theInput" placeholder="שם מקום"/>
        <br></br>
        <button onClick={()=>{updatePlaces()}} >לחץ לאישור</button>
    </div>
        )
}
export default AllTours;