import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Login from "../Auth/Login"
import Register from "../Auth/Register"
import Entrance from "../Auth/Entrance"


const PublicRoutest = () => {
  return (<div className="   ">
    <Routes>
      <Route path="/" element={<Entrance/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/*" element={<Entrance/>}/>
    </Routes>
  </div>
  )
}

export default PublicRoutest