import { useContext, useState } from "react"
import UserContext from "../contextAPI/UserContext"


export default function Profile(){

    const [userName, setUserName] = useState(null)
    const [userPassword, setUserPassword] = useState(null)
    const {setData} = useContext(UserContext)

    function saveData(e){
        e.preventDefault()
        setData({userName, userPassword})
    }


    return(
        <div>
            <input type="text" 
            name="" 
            id="" 
            placeholder="Name"
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
            
            />

            <input type="text" 
            name="" 
            id=""  
            placeholder="Password"
            value={userPassword}
            onChange={(e)=>setUserPassword(e.target.value)}

            
            />

            <button onClick={saveData}>Submit</button>
        </div>
    )
}