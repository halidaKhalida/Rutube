import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";

const Register = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const {setIsAuth,isAuth} = useContext(AuthContext)

  const postData = async (data) => {
    try {
      const response = await axios.post("https://c8187043a50fa281.mokky.dev/register",
      data
      );
      if(response.status === 201) {
        localStorage.setItem('user-info',JSON.stringify(response.data.data));
        localStorage.setItem('token',response.data.token)
        setIsAuth(true)
      }
      console.log(response.data.token);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const handleData = (e) => {
    e.preventDefault();
    let fullName = e.target.fullName.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    let retypePassword = e.target.retypePassword.value;
    if (password !== retypePassword) {
      setErrorMsg("Пароль не подходит");
      return;
    }
    setErrorMsg("");
    const data = {
      fullName:fullName,
      email:email,
      password:password,
    }
    postData(data)
  };

  return (
    <div className=" flex justify-center  h-screen items-center bg-[#14191F]  ">
      <div className=" w-[404px] h-[484px] bg-[#29333D] flex flex-col items-center justify-center rounded-[16px] ">
        <h2 className=" text-white text-[24px] font-medium items-center mt-[56px] ">Регистрация</h2>
        <form
          onSubmit={handleData}
          className="flex flex-col w-full h-full p-5 rounded-md gap-2 items-center mt-[16px]  "
        >
          <input
            className=" w-[322px] h-[38px] border-[1px] border-[#3D4A58] rounded-[6px] px-[11px] placeholder:text-[14px] text-white text-[13px] bg-[#1C232B] "
            type="text"
            placeholder="Имя"
            name="fullName"
          />
          <input
            className=" w-[322px] h-[38px] border-[1px] border-[#3D4A58] rounded-[6px] px-[11px] placeholder:text-[14px] text-white text-[13px] bg-[#1C232B] "
            type="email"
            placeholder="Введите свою почту"
            name="email"
          />
          <input
            className=" w-[322px] h-[38px] border-[1px] border-[#3D4A58] rounded-[6px] px-[11px] placeholder:text-[14px] text-white text-[13px] bg-[#1C232B] "
            type="password"
            placeholder="Пароль"
            name="password"
          />
          <input
            className=" w-[322px] h-[38px] border-[1px] border-[#3D4A58] rounded-[6px] px-[11px] placeholder:text-[14px] text-white text-[13px] bg-[#1C232B] "
            type="password"
            placeholder="Повторите пароль"
            name="retypePassword"
          />
          <p className=" text-red-500  ">{errorMsg}</p>
          <div className=" w-[322px] ">
          <p className=" text-[#889BAF] text-[10px] mt-[16px] w-[280px] ">Регистрируясь на RUTUBE, вы соглашаетесь с <a className=" underline  " href="https://rutube.ru/info/agreement/">пользовательским соглашением</a> и <a className=" underline   " href="https://rutube.ru/info/privacy/">политикой конфиденциальности</a></p>
          </div>
          {
            isAuth?<Link to={"/"}>
          <button className="  bg-[#29333D] text-[#00A1E7] text-[15px] mt-[32px]   ">Войти</button>
            </Link>:
          <button className="  bg-[#29333D] text-[#00A1E7] text-[15px] mt-[32px]   ">Войти</button>
            
          }
          
        </form>
      </div>
    </div>
  );
};

export default Register;
