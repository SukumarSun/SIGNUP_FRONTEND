import { useState } from "react"
import {toast} from "react-toastify"
import {useNavigate,Link} from "react-router-dom"
import axios from "axios"
import { VITE_BACKEND_URL } from "../App";

const LoginPage=()=>{

    const [isLoading,setIsLoading]=useState(false)
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()

    const enterUser=async (e)=>{
        e.preventDefault()
        if(username==="" || password===""){
            toast.error("enter all the details")
            return
        }
        try{
            setIsLoading(true)            
            const response=await axios.post(`${VITE_BACKEND_URL}/login`,{username,password})
            console.log(response)
            if(response.data==="Success")
            {
                toast.success('user logged in successfully')
                setIsLoading(false)
                navigate("/accessdata")
            }
          
        }
        catch(err){           
            toast.error(err.response.data.message)
            setIsLoading(false)
            console.log(err)
        }
    }


    return(
        <div className="h-full w-1/4  p-2 bg-gray-500 mx-auto mt-9 shadow-lg">
        <div className="bg-gray-300 "> 
            <div>
                <h2 className="w-full text-lg font-bold bg-gray-800 p-2 text-center text-white">Please Login here</h2>
            </div>
            <form onSubmit={enterUser}>
                <div>
                    <label>Username</label>
                    <input value={username} onChange={(e)=>setUsername(e.target.value)} className="block px-2 w-full rounded-sm border border-red-300 placeholder-gray-600 focus:outline-none focus:border-blue-200" type="text" placeholder="enter Username"/>
                </div>
               
                <div>
                    <label>Password</label>
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} className="block px-2 w-full rounded-sm border border-red-300 placeholder-gray-600 focus:outline-none focus:border-blue-200" type="password" placeholder="enter Password"/>
                </div>
                <button className="w-full mb-2 p-2 bg-green-700 text-white text-md font-bold hover:cursor-pointer hover:text-black hover:bg-green-500" type="submit">Login</button>
            
            </form>
        <Link to="/" className="w-full p-2 bg-yellow-500 mt-2 text-center text-white text-md font-bold hover:cursor-pointer hover:text-black hover:bg-yellow-300" type="submit">Sign Up</Link>

     </div>
    </div>
    )
}

export default LoginPage