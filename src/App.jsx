import {Routes,Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import DataPage from "./pages/DataPage"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// export const VITE_BACKEND= import.meta.env.VITE_BACKEND
export const VITE_BACKEND_URL= import.meta.env.VITE_BACKEND_URL

const App=()=>{
  return(
    <div>
         <div className="container mx-auto p-2 h-full">
          <Routes>
            <Route index element={<HomePage/>}></Route>
            <Route path="/login" element={<LoginPage/>}></Route>
            <Route path="/accessdata" element={<DataPage/>}></Route>

          </Routes>
        </div>    
    <ToastContainer/>
    </div>
   
  )
}

export default App