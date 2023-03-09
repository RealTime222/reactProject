import { useState } from "react";
import { useNavigate } from "react-router-dom"
var num=4;
function AddNewUser(props) {
    const navigate = useNavigate()
    const [indexId, setIndexId] = useState(1);

    let name = "";
    let password = "";
    let address = "";
    let phone = "";
    let id=0;

    const addUser = async () => {
        num=indexId+1;
        setIndexId(num);

       
        const req = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                Myname: name, Mypassword: password,
                Myaddress: address, Myphone: phone, Myid:num
            })
        }
        const data = await fetch(`http://localhost:4000/users`, req);
        // setFlagCal(true);
        props.setId(id)
        //id = id + 1;
        navigate("../calendar", { replace: false })
    }


    return (
        <div>

            <input className="newUserDetail" placeholder="enter name" onBlur={(e) => name = e.target.value}></input>
            <input className="newUserDetail" placeholder="enter password" onBlur={(e) => password = e.target.value} ></input>
            <input className="newUserDetail" placeholder="enter address" onBlur={(e) => address = e.target.value}></input>
            <input className="newUserDetail" placeholder="enter phone" onBlur={(e) => phone = e.target.value} ></input>
            <button className="newUserDetail" onClick={() => addUser()} >הוסף משתמש</button>
            <h1>{indexId}</h1>


        </div>
    )
}
export default AddNewUser;