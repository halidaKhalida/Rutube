import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const {setIsAuth} = useContext(AuthContext)

  const postData = async (data)=>{
    try {
      const response = await axios.post("https://c8187043a50fa281.mokky.dev/auth",data)
      console.log(response.data);
      if(response.status === 201){
        setIsAuth(true)
        localStorage.setItem('token',response.data.token);
        localStorage.getItem('user-info',JSON.stringify(response.data.data));
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleData = (e) =>{
    e.preventDefault()

    const data = {
      email:e.target.email.value,
      password:e.target.password.value,
    }
    postData(data)
  }



  return (
    <div className=" flex justify-center h-screen items-center  ">
      <div>
        <h2>Login</h2>
        <form onSubmit={handleData} className="flex flex-col p-5 shadow-lg rounded-md gap-2  ">
          <input
            className=" border-2  border-gray-500 "
            type="email"
            placeholder="email"
            name="email"
          />
          <input
            className=" border-2  border-gray-500 "
            type="password"
            placeholder="password"
            name="password"
          />
          <button className="  bg-green-500 text-white   ">login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
