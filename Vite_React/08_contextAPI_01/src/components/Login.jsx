import { useContext } from "react"
import UserContext from "../contextAPI/UserContext"


export default function Login(){

    const {data} = useContext(UserContext)

    if (!data){
        return (
            <div >
                <h1>UserData Not Provide</h1>
            </div>
        )
    }

    return(
        <div>
            <h1>UserName : {data.userName}</h1>
            <h1>Password : {data.userPassword}</h1>
        </div>
    )
}