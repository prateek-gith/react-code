import React, {useState} from "react"
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin, logout } from "../store/authSlice"
import {Button, Input, Logo} from "./index"
import { useDispatch } from "react-redux"
import authService from "../appwrite/auth"
import {useForm} from 'react-hook-form'

export default function Login(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error , setError] = useState(null)

    const login = async(data)=>{
        setError("")
        try {
            const sesstion = await authService.login({...data})
            if(sesstion){
                const userData = await authService.getCurrentUser()
                // console.log(userData)
                if(userData){
                    // console.log(userData)
                    dispatch(authLogin(userData))
                    navigate('/')
                }
            }
        }catch(error){
            setError(error.message)
        }
    }

    return(
        <div className="flex items-center justify-center w-full">
            <div className="">
                <div>
                    <span>
                        <Logo />
                    </span>
                </div>
                <h2>Sign In To Your Account</h2>
                <p>Do not have a account?
                    <Link to={'/signup'}>
                    SignUp
                    </Link>
                </p>
                {error && <p className="text-red-600">{error}</p>}

                <form onSubmit={handleSubmit(login)}>
                    <div>
                        <Input 
                        label = "Email: "
                        placeholder = "Enter Email"
                        type = "email"
                        {...register("email", {
                            required : true,
                            validate : {
                                matchPatern : (value) =>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                            }
                        })}
                        />

                        <Input 
                        label = "Password: "
                        placeholder = "Password"
                        type = "password"
                        {...register("password", {
                            required : true,
                        })
                        }
                        />

                        <Button type="submit" >Sigh In</Button>
                    </div>

                </form>
            </div>

        </div>
    )
}