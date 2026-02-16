import { useParams } from "react-router-dom"

export default function User(){

    const {username} = useParams()
    return (
        <>
        <div className="h-100 flex items-center justify-center"> My User is : {username} </div>
        </>
    )
}