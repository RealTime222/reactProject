import { useState } from "react";
import { useNavigate } from "react-router-dom"
import moment from "moment";
function Entrance(props) {
    const navigate = useNavigate()
    const [name, setName] = useState();
    const [password, setPassword] = useState();
   const a = moment();
    const login = async () => {
        console.log(name)
        console.log(password)

        const tmp = `http://localhost:4000/users/sighnin/${name}/${password}`
        console.log(tmp);
        //`http://localhost:4000/users/signin/${name}/${password}`
        const response = await fetch(tmp);
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        console.log(a)
        console.log(jsonResponse.id)
        
      
        // props.id = jsonResponse.id;
        // console.log(props.id)
        if (!jsonResponse) {
            navigate("../newUser", { replace: false })
        }
        else {
            // const a = jsonResponse.id;
            // const today=new Date();
            // console.log(today);
            // const tmp =`http://localhost:4000/events/?userId=${a}&sDate=${today}&eDate=07/05/2023`
            // console.log(tmp);
            
            // const resEvent = await fetch(tmp);
            // const jsonResponseEvent = await resEvent.json();
            // console.log(jsonResponseEvent)
            //props.setId(jsonResponse.id)
            props.setId(jsonResponse.id);
            navigate("../Calendar", { replace: false})
        }

    }

    return (
        <div>
            <input className="name" placeholder="enter name" onBlur={(e) => setName(e.target.value)}></input>
            <input className="password" placeholder="enter password" onBlur={(e) => setPassword(e.target.value)}></input>
            <button className="login" onClick={() => login()}>לכניסה</button>
            
            {/* <div>{name}</div>
           <div>{password}</div> */}
        </div>
    )

}
export default Entrance;