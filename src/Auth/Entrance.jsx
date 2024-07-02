import React from 'react'
import { Link } from 'react-router-dom'

const Entrance = () => {
  return (
    <div className=" flex flex-col gap-4 justify-center items-center h-screen bg-[#29333D] ">
      <div className=' flex flex-col items-center '>
        <h2 className=" text-white ">Добропожаловать в наш сайт.</h2>
        <h2 className=" text-white ">Войдите или зарегистрируйтесь перед использованием.</h2>
      </div>
      <Link className=" bg-[#00A1E7] text-white w-[70px] h-[34px] flex items-center justify-center rounded-md text-[12px] " to={'/login'}>Вход</Link>
      <Link className="  bg-[#00A1E7] text-white px-4 py-2 rounded-md text-[12px] " to={'/register'}>Регистрация</Link>

    </div>
  )
}

export default Entrance