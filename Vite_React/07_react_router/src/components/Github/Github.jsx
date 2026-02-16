import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"



export default function Githhub(){
    const userData = useLoaderData()

    // const [userData, setUserData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/prateek-gith')
    //     .then((data)=>data.json())
    //     .then((data)=> setUserData(data))
    // },[])



    return(
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            User Data
                            <span className="hidden sm:block text-4xl">Name : {userData['name']}</span>
                            <span className="hidden sm:block text-2xl">User Name : {userData['login']}</span>
                            <span className="hidden sm:block text-2xl">User Id :{userData['id']}</span>
                        </h2>

                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src={userData['avatar_url']} alt="image1" />
                </div>
            </aside>
        </div>
        
    )
}