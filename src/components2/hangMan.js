import { useEffect, useState } from "react";
import GameStatus from "./GameStatus ";
const abc = ["A", "B", "C", "D", "E", "F", "G",
        "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X", "Y", "Z"];

let tmp2="";

function HangMan(props){
const wordArr=props.word.split('');
const [gusses,setGusses]=useState([""]);
const[d,setD]=useState(false);

const [ezer,setEzer]=useState("a");
let mask=""

useEffect(()=>{
wordArr.forEach(element => {
    let tmp=false;
    for(let i=0;i<gusses.length;i++)
       {
       // console.log(gusses[i])
        if(gusses[i]==element)
        {
            mask+=element;
            mask+=" ";
            tmp=true;
            break;
        }
          
       
           
       
       }
       if(!tmp)
       mask+="_ ";
        
});
//alert(mask);
tmp2=mask;
setEzer(tmp2);
})
useEffect(()=>{
    setInterval(()=>{
        setD(true);
    },props.duration*1000)
    return clearInterval
},[])
let count=0;
useEffect(()=>{
count++;
if(count>7)
{
    d=true;
}
})

const addLetter=(letter)=>{
    let a;
   a = [...gusses]
    wordArr.forEach(element => {
       if(element==letter)
       a.push(element);
        setGusses(a); 
    });

    
}
if(d)
{
    return<GameStatus mask={tmp2}/>
}
else{
    return(<div>
        <h1>{props.word}</h1>
        <h2>{tmp2}</h2>
        <div>{abc.map((item,index)=><button  onClick={(e)=>addLetter(e.target.innerText)} className="abcs" key = {item.toString()}  >{item}</button>)} </div>
        
        </div> )
}


}
export default HangMan;