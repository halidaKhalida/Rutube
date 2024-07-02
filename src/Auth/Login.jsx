import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const { setIsAuth } = useContext(AuthContext)

  const postData = async (data) => {
    try {
      const response = await axios.post("https://c8187043a50fa281.mokky.dev/auth", data)
      console.log(response.data);
      if (response.status === 201) {
        setIsAuth(true)
        localStorage.setItem('token', response.data.token);
        localStorage.getItem('user-info', JSON.stringify(response.data.data));
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleData = (e) => {
    e.preventDefault()

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    }
    postData(data)
  }



  return (
    <div className=" flex justify-center h-screen items-center bg-[#14191F] ">
      <div className=" w-[404px] h-[370px] bg-[#29333D] flex flex-col items-center justify-center rounded-[16px] ">
        <h2 className=" text-white text-[24px] font-medium items-center mt-[56px] ">Вход</h2>
        <form onSubmit={handleData} className="flex flex-col w-fill h-full p-5rounded-md gap-2 mt-[32px] ">
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
          <button className=" w-[322px] h-[42px] bg-[#00A1E7] text-white text-[15px] mt-[32px] rounded-[6px]   ">Продолжить</button>
          <div className=" w-[322px] flex items-center justify-center mt-[32px] ">
            <p className=" text-[#889BAF] text-[10px] "><a className=" text-[#00A1E7]  " href="https://yandex.ru/legal/smartcaptcha_notice/">Yandex SmartCaptcha</a> - Обработка данных</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
