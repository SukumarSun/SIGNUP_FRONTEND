import { useState } from "react"
import {toast} from "react-toastify"
import {useNavigate,Link} from "react-router-dom"
import axios from "axios"
import { VITE_BACKEND_URL } from "../App";


const HomePage=()=>{

    const [isLoading,setIsLoading]=useState(false)
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()

    const createUser=async (e)=>{
        e.preventDefault()
        if(username==="" || email==="" || password===""){
            toast.error("enter all the details")
            return
        }
        try{
            setIsLoading(true)            
            const response=await axios.post(`${VITE_BACKEND_URL}/signup`,{username,email,password})
            console.log(response)
            if(response.data==="Success")
            {
                toast.success('user details stored successfully')
                setIsLoading(false)
                navigate("/login")
            }
          
        }
        catch(err){           
            toast.error(err.response.data.message)
            setIsLoading(false)
            // console.log(err.response.data.message)
        }
    }

    return(
        <div className="max-w-lg p-2 bg-gray-500 mx-auto mt-9 shadow-lg">
            <div className="bg-gray-300 "> 
                <div>
                    <h2 className="w-full text-lg font-bold bg-gray-800 p-2 text-center text-white">Please Sign Up here</h2>
                </div>
                <form onSubmit={createUser}>
                    <div>
                        <label>Username</label>
                        <input value={username} onChange={(e)=>setUsername(e.target.value)} className="block px-2 w-full rounded-sm border border-red-300 placeholder-gray-600 focus:outline-none focus:border-blue-200" type="text" placeholder="enter Username"/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} className="block px-2 w-full rounded-sm border border-red-300 placeholder-gray-600 focus:outline-none focus:border-blue-200" type="text" placeholder="enter Email"/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input value={password} onChange={(e)=>setPassword(e.target.value)} className="block px-2 w-full rounded-sm border border-red-300 placeholder-gray-600 focus:outline-none focus:border-blue-200" type="password" placeholder="enter Password"/>
                    </div>
                    <button className="w-full mb-2 p-2 bg-green-700 text-white text-md font-bold hover:cursor-pointer hover:text-black hover:bg-green-500" type="submit">Submit</button>
                
                </form>
            <Link to="/login" className="w-full p-2 bg-yellow-500 mt-2 text-center text-white text-md font-bold hover:cursor-pointer hover:text-black hover:bg-yellow-300" type="submit">Login</Link>

        </div>
        </div>
        
        
    )
}

export default HomePage